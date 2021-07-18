import { BaseEntity, Column, Entity, getConnection, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';

@Entity('users')
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({unique: true})
    username!: string;

    @Column({select: false})
    password?: string;

    static async login(username: string, password: string): Promise<User|undefined> {
        const user = await getConnection()
            .getRepository(User)
            .createQueryBuilder()
            .addSelect('User.password')
            .where('username = :username', {username})
            .getOne();
        
        if(!user) return;

        const pass = await bcrypt.compare(password, user.password!);
        
        if(pass) {
            user.password = undefined;
            return user;
        } else {
            return;
        }
    }

}
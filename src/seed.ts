require('dotenv').config();
import boot from "./boot";
import User from "./models/User";
import bcrypt from 'bcrypt';


// This file must be run via cli
boot().then(async () => {
  const salt = await bcrypt.genSalt();
  const password = 'p4ssw0rd';
  const hashed = await bcrypt.hash(password, salt);
  const user = User.create({username: 'GioPan', name: 'Gioele', password: hashed});

  await user.save();
  console.log(`The user ${user.username} (${user.name}) has been created with the password "${password}"\nYOU HAVE TO CHANGE IT ON THE WEB APP NOW!`);

  process.exit(0);
});
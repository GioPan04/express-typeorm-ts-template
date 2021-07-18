import { Router, json } from 'express';

const router = Router();

router.use(json());

router.get('/', (req, res) => {
    res.json({msg: 'Hello World!'});
});

export default router;
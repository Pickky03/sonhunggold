import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController';
import { verifyToken } from '../middleware/veryfiToken';
import { authorize } from '../middleware/authorize';
const router = express.Router();

router.post('/', verifyToken, authorize('admin'), createUser);
router.get('/', verifyToken, authorize('admin'), getAllUsers);

export default router;

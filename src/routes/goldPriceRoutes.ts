import express from 'express';
import { getGoldPrice, createGoldPrice, updateGoldPrice } from '../controllers/goldPriceController';
import { verifyToken } from '../middleware/veryfiToken';
import { authorize } from '../middleware/authorize';
const router = express.Router();

router.get('/', verifyToken, authorize( 'user', 'admin'), getGoldPrice);
router.post('/', verifyToken, authorize('admin'), createGoldPrice);
router.patch('/:id', verifyToken, authorize('admin'), updateGoldPrice);

export default router;
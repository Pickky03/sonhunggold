import express from 'express';
import { getGoldPrice, createGoldPrice, updateGoldPrice } from '../controllers/goldPriceController';
import { verifyToken } from '../middleware/veryfiToken';
import { authorize } from '../middleware/authorize';
const router = express.Router();

router.get('/', verifyToken, authorize('user'), getGoldPrice);
router.post('/', verifyToken, authorize('admin'), createGoldPrice);
router.patch('/:id', verifyToken, authorize('user'), updateGoldPrice);

export default router;
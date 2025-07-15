import type { Request, Response } from 'express';
import GoldPrice from '../models/goldPrice';


export const getGoldPrice = async (req: Request, res: Response) => {
  try {
    const goldPrice = await GoldPrice.find();
    res.json(goldPrice);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
export const createGoldPrice = async (req: Request, res: Response) => {
  try {
    const { goldtype, buyprice, sellprice } = req.body;
    const goldPrice = await GoldPrice.create({ goldtype, buyprice, sellprice });
    res.status(201).json(goldPrice);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateGoldPrice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { goldtype, buyprice, sellprice } = req.body;
    const goldPrice = await GoldPrice.findByIdAndUpdate(id, { goldtype, buyprice, sellprice }, { new: true });
    res.json(goldPrice);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
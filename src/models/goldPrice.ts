import mongoose, { Document, Schema } from 'mongoose';

export interface IGoldPrice extends Document {
  goldtype: string;
  buyprice: number;
  sellprice: number;
  updatedAt: Date;
}

const goldPriceSchema = new Schema<IGoldPrice>({
  goldtype: { type: String, required: true },
  buyprice: { type: Number, required: true },
  sellprice: { type: Number, required: true },
}, {
  timestamps:  { createdAt: false, updatedAt: true } ,
});

export default mongoose.model<IGoldPrice>('GoldPrice', goldPriceSchema);
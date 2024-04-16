import { TypeOfOrder, TypeOfPayment } from '../libs/types/src/index';

export class OrderDto {
  public type!: TypeOfOrder;
  public trainerId!: number;
  public trainingId!: number;
  public price!: number;
  public quantity!: number;
  public sumPrice!: number;
  public typeOfPayment!: TypeOfPayment;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Basket from "./basket.entity";

@Entity()
export default class BasketItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Basket, (basket) => basket.basketItems, {
    onDelete: "CASCADE",
  })
  basket: Basket;
}

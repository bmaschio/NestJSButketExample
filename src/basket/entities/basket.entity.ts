import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import User from "src/user/entities/user.entity";
import BasketItem from "./basket_item.entity";

@Entity()
export default class Basket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, (user) => user.basket, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => BasketItem, (basketItem) => basketItem.basket, {
    lazy: true,
    onUpdate: "CASCADE",
  })
  basketItems: BasketItem[];

  @Column()
  total: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}

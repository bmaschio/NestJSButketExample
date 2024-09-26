import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import BasketItem from './basket_item.entity';

@Entity()
export default class Basket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: number;

  @Column()
  @OneToMany(() => BasketItem, (item) => item.id)
  items: BasketItem[];
}

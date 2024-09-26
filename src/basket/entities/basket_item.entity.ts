import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class BasketItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}

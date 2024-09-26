import Basket from "src/basket/entities/basket.entity";
import Catalogue from "src/catalogue/entities/catalogue.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Catalogue)
  @JoinColumn()
  catalogue: Catalogue;

  @OneToOne(() => Basket)
  @JoinColumn()
  basket: Basket;
}

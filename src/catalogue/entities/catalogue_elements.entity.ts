import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Catalogue from "./catalogue.entity";

@Entity()
export default class CatalogueElement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  image: string;

  @ManyToOne(() => Catalogue, (catalogue) => catalogue.elements, {
    onDelete: "CASCADE",
  })
  catalogue: Catalogue;
}

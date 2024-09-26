import User from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import CatalogueElement from "./catalogue_elements.entity";

@Entity()
export default class Catalogue {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(
    () => CatalogueElement,
    (catalogueElement) => catalogueElement.catalogue
  )
  elements: CatalogueElement[];
}

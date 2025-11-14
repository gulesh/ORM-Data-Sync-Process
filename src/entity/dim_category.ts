import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {bridge_film_category} from "./bridge_film_category";

@Entity("dim_category")
export class dim_category {
    @Column()
    category_id: number;
    @PrimaryGeneratedColumn()
    category_key:number;
    @Column()
    name: string;
    @Column()
    last_update: Date;

    @OneToMany(() => bridge_film_category, bridge_film_category => bridge_film_category.dim_category)
    bridge_film_category: bridge_film_category[];
}
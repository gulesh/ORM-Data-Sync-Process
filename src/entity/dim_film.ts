import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {bridge_film_actor} from "./bridge_film_actor";
import {bridge_film_category} from "./bridge_film_category";

@Entity("dim_film")
export class dim_film {
    @Column()
    film_id: number;
    @PrimaryGeneratedColumn()
    film_key:number;
    @Column()
    title: string;
    @Column()
    rating: string;
    @Column()
    length: number;
    @Column()
    language: string;
    @Column()
    release_year: number;
    @Column()
    last_update: Date;

    @OneToMany(() => bridge_film_actor, bridge_film_actor => bridge_film_actor.dim_film)
    bridge_film_actor: bridge_film_actor[];

    @OneToMany(() => bridge_film_category, bridge_film_category => bridge_film_category.dim_film)
    bridge_film_category: bridge_film_category[];

}
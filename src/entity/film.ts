import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { film_actor } from "./film_actor";

@Entity("film")
export class film {
    @PrimaryColumn({ type: "smallint", unsigned: true })
    film_id: number;

    @Column({ type: "varchar", length: 128, nullable: false })
    title: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "year", nullable: true })
    release_year: number;

    @Column({ type: "tinyint", unsigned: true, nullable: false })
    language_id: number;

    @Column({ type: "tinyint", unsigned: true, nullable: true })
    original_language_id: number;

    @Column({ type: "tinyint", unsigned: true, nullable: false, default: 3 })
    rental_duration: number;

    @Column({ type: "decimal", precision: 4, scale: 2, nullable: false, default: 4.99 })
    rental_rate: number;

    @Column({ type: "smallint", unsigned: true, nullable: true })
    length: number;

    @Column({ type: "decimal", precision: 5, scale: 2, nullable: false, default: 19.99 })
    replacement_cost: number;

    @Column({
        type: "enum",
        enum: ["G", "PG", "PG-13", "R", "NC-17"],
        default: "G",
        nullable: true,
    })
    rating: string;

    @Column({
        type: "set",
        enum: ["Trailers", "Commentaries", "Deleted Scenes", "Behind the Scenes"],
        nullable: true,
    })
    special_features: string[];

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update: Date;

    @OneToMany(() => film_actor, (film_actor) => film_actor.film)
    film_actor: film_actor[];
}

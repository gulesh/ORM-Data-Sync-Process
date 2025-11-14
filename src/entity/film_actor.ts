import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {actor} from "./actor";
import {film} from "./film";

@Entity("film_actor")
export class film_actor {
    @PrimaryColumn({type: 'smallint', nullable:false, unsigned: true})
    actor_id: number;
    @PrimaryColumn({type: 'smallint', nullable:false, unsigned: true})
    film_id: number;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update: Date;

    @ManyToOne(() => actor, actor => actor.film_actor)
    @JoinColumn({ name: "actor_id" })
    actor: actor;

    @ManyToOne(() => film, film => film.film_actor)
    @JoinColumn({ name: "film_id" })
    film: film;
}

//do I need to create a surrogate key as well using *_key field for the two tables
import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {film_actor} from "./film_actor";

@Entity("actor")
export class actor {
    @PrimaryColumn({ type: 'smallint', unsigned: true})
    actor_id: number;
    @Column({ type: 'varchar', length: 45, nullable: false})
    first_name: string;
    @Column({ type: 'varchar', length: 45,  nullable: false})
    last_name: string;
    @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
    last_update: Date;

    @OneToMany(() => film_actor, film_actor => film_actor.actor)
    film_actor: film_actor[];

}
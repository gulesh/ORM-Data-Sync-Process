import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("film_category")
export class film_category {
    @PrimaryColumn({type: 'tinyint', unsigned: true})
    category_id: number;
    @PrimaryColumn({type:'smallint', unsigned: true})
    film_id: number;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update: Date;
}

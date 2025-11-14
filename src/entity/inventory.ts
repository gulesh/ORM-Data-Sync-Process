import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("inventory")
export class inventory{
    @PrimaryColumn({type: 'mediumint', unsigned: true, nullable: false})
    inventory_id: number;
    @Column({type: 'smallint', unsigned: true, nullable: false})
    film_id: number;
    @Column({type:'tinyint', unsigned: true, nullable: false})
    store_id: number;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update: Date;
}

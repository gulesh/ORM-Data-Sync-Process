import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("store")
export class store {
    @PrimaryColumn({type: 'tinyint', unsigned: true, nullable: false})
    store_id: number;
    @Column({type: 'tinyint', unsigned: true, nullable: false})
    manager_staff_id : number;
    @Column({type: 'smallint', unsigned: true, nullable: false})
    address_id : number;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update : Date;

}
import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("rental")
export class rental{
    @PrimaryColumn({type: "int", nullable: false})
    rental_id: number;
    @Column({type: 'smallint', nullable: false, unsigned: true})
    customer_id: number;
    @Column({type: 'tinyint', nullable: false, unsigned: true})
    staff_id: number;
    @Column({type: 'mediumint', nullable: false, unsigned: true})
    inventory_id: number;
    @Column({ type: "datetime" })
    rental_date: Date;
    @Column({ type: "datetime" })
    return_date: Date;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update: Date;
}

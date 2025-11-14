import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("payment")
export class payment{
    @PrimaryColumn({type:'smallint', nullable:false, unsigned:true})
    payment_id: number;
    @Column({type:'smallint', nullable:false, unsigned:true})
    customer_id: number;
    @Column({type:'tinyint', nullable:false, unsigned:true})
    staff_id: number;
    @Column({type:'int', nullable:true, unsigned:true})
    rental_id: number;
    @Column({type:'decimal', nullable:false})
    amount: number;
    @Column({ type: "datetime" })
    payment_date: Date;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
        nullable:true,
    })
    last_update: Date;
}

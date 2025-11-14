import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("fact_payment")
export class fact_payment {
    @Column()
    payment_id: number;
    @PrimaryGeneratedColumn()
    fact_payment_key:number;
    @Column()
    date_key_paid: number;
    @Column()
    store_key: number;
    @Column()
    customer_key: number;
    @Column()
    staff_id: number;
    @Column()
    amount: number;
}
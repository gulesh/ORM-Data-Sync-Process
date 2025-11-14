import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("fact_rental")
export class fact_rental {
    @Column()
    rental_id: number;
    @PrimaryGeneratedColumn()
    fact_rental_key:number;
    @Column()
    date_key_return: number;
    @Column()
    date_key_rented: number;
    @Column()
    film_key: number;
    @Column()
    store_key: number;
    @Column()
    customer_key: number;
    @Column()
    staff_id: number;
    @Column()
    rental_duration_days: number;
}
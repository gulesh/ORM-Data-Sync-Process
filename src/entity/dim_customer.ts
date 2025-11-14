import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("dim_customer")
export class dim_customer {
    @Column()
    customer_id: number;
    @PrimaryGeneratedColumn()
    customer_key:number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    active: boolean;
    @Column()
    city: string;
    @Column()
    country: string;
    @Column()
    last_update: Date;
}
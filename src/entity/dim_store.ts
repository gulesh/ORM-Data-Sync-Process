import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("dim_store")
export class dim_store {
    @Column()
    store_id: number;
    @PrimaryGeneratedColumn()
    store_key:number;
    @Column()
    city: string;
    @Column()
    country: string;
    @Column()
    last_update: Date;
}
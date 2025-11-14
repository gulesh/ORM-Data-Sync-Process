import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("dim_date")
export class dim_date {
    @PrimaryColumn()
    date_key:number;
    @Column()
    date: Date;
    @Column()
    year: number;
    @Column()
    quarter: number;
    @Column()
    month: number;
    @Column()
    day_of_month: number;
    @Column()
    day_of_week: number;
    @Column()
    is_weekend: number;
}
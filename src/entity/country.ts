import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("country")
export class country {
    @PrimaryColumn({ type: 'smallint', unsigned: true, nullable: false})
    country_id: number;
    @Column({type: "varchar", length: 50,  nullable: false})
    country: string;
    @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
    last_update: Date;
}
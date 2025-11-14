import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("city")
export class city {
    @PrimaryColumn({ type: 'smallint', unsigned: true, nullable: false})
    city_id: number;
    @Column({ type: 'varchar', length: 50, nullable: false})
    city: string;
    @Column({ type: 'smallint', unsigned: true, nullable: false})
    country_id: number;
    @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
    last_update: Date;
}
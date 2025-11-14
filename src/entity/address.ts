import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("address")
export class address {
    @PrimaryColumn({ type: 'smallint', unsigned: true})
    address_id: number;
    @Column({ type: 'varchar', length: 50, nullable: false})
    address: string;
    @Column({ type: 'varchar', length: 20, nullable: true})
    address2: string;
    @Column({ type: 'varchar', length: 20, nullable: false})
    district: string;
    @Column({ type: 'smallint', unsigned: true})
    city_id: number;
    @Column({ type: 'varchar', length: 10, nullable: true})
    postal_code: string;
    @Column({ type: 'varchar', length: 20, nullable: false})
    phone: string;
    @Column({ type: "varchar", length: 50, nullable: false })
    location: string;
    @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
    last_update: Date;

}
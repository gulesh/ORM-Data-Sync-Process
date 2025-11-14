import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity("customer")
export class customer {
     @PrimaryColumn({ type: 'smallint', unsigned: true})
     customer_id: number;
     @Column({ type: 'tinyint', unsigned: true})
     store_id: number;
     @Column({ type: 'varchar', length: 45, nullable: true})
     first_name: string;
     @Column({ type: 'varchar', length: 45, nullable: true})
     last_name: string;
     @Column({ type: 'varchar', length: 50, nullable: true})
     email: string;
     @Column({ type: 'smallint', unsigned: true})
     address_id : number;
     @Column({ type: 'tinyint', unsigned: true, default: 1})
     active : boolean = true;
     @Column({ type: 'datetime', nullable: true })
     create_date : Date;
     @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
     last_update : Date;

}
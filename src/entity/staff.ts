import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("staff")
export class staff{
    @PrimaryColumn({type: 'tinyint', unsigned: true})
    staff_id: number;
    @Column({type: "varchar", nullable: false, length: 45})
    first_name: string;
    @Column({type: "varchar", nullable: false, length: 45})
    last_name: string;
    @Column({type: "smallint", nullable: false, unsigned: true})
    address_id : number;
    @Column({type: "varchar", nullable: true, length: 50})
    email: string;
    @Column({ type: "blob", nullable: true })
    picture: Buffer;
    @Column({type: "tinyint", nullable: false, unsigned: true})
    store_id: number;
    @Column({type: "tinyint", nullable: false, unsigned: true, default: 1})
    active : boolean = true;
    @Column({type: "varchar", nullable: false, length: 16})
    username: string;
    @Column({type: "varchar", nullable: true, length: 40})
    password: string;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update : Date;
}

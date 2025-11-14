import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("category")
export class category {
    @PrimaryColumn({ type : "tinyint", nullable: false, unsigned: true })
    category_id: number;
    @Column({ type: "varchar", length: 25, nullable: false})
    name: string;
    @Column({ type: "timestamp" , default: () => "CURRENT_TIMESTAMP", onUpdate: 'CURRENT_TIMESTAMP'})
    last_update: Date;
}
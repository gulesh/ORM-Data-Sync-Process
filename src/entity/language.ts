import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity("language")
export class language {
    @PrimaryColumn({type:'tinyint', unsigned: true, nullable:false})
    language_id: number;
    @Column({type: 'char', nullable:false, length:20})
    name : string;
    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    })
    last_update : Date;
}
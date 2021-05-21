import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("line")
export class Line {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Estimated_WorkTime: string;

    @Column('varchar', { length: 100, nullable: true })
    Sequence: string;

    @Column('int', { nullable: true })
    Factory_Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Item_Id: string;
}

export class LineDto {
    constructor(
        public id: number,
        public name: string,
        public estimatedWorkTime: string,
        public sequence: string,
        public factory_Id: number,
        public itemId: string) {
    }

    static from(line: Line): LineDto {
        return new LineDto(
            line.Id,
            line.Name,
            line.Estimated_WorkTime,
            line.Sequence,
            line.Factory_Id,
            line.Item_Id);
    }
}

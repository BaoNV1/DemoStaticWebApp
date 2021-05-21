import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("default_linedetails")
export class DefaultLineDetails {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column('int', { nullable: true })
    Lines_Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Left1_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Left2_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Left3_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Left4_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Left5_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Left1_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Left2_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Left3_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Left4_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Left5_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterLine1_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterLine2_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage1_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage2_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage3_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage4_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage1_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage2_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage3_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    CenterImage4_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Right1_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Right2_Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Right1_Option: string;

    @Column('varchar', { length: 100, nullable: true })
    Right2_Option: string;

    @Column('int', { nullable: true })
    LineItems_Id: number;

    @Column('int', { nullable: true })
    Factory_Id: number;
}

export class DefaultLineDetailDto {
    constructor(
        public id: number,
        public linesId: number,
        public left1Name: string,
        public left2Name: string,
        public left3Name: string,
        public left4Name: string,
        public left5Name: string,
        public left1Option: string,
        public left2Option: string,
        public left3Option: string,
        public left4Option: string,
        public left5Option: string,
        public centerLine1Option: string,
        public centerLine2Option: string,
        public centerImage1Name: string,
        public centerImage2Name: string,
        public centerImage3Name: string,
        public centerImage4Name: string,
        public centerImage1Option: string,
        public centerImage2Option: string,
        public centerImage3Option: string,
        public centerImage4Option: string,
        public right1Name: string,
        public right2Name: string,
        public right1Option: string,
        public right2Option: string,
        public lineItemsId: number,
        public factoryId: number) {
    }

    static from(detail: DefaultLineDetails): DefaultLineDetailDto {
        return new DefaultLineDetailDto(
            detail.Id,
            detail.Lines_Id,
            detail.Left1_Name,
            detail.Left2_Name,
            detail.Left3_Name,
            detail.Left4_Name,
            detail.Left5_Name,
            detail.Left1_Option,
            detail.Left2_Option,
            detail.Left3_Option,
            detail.Left4_Option,
            detail.Left5_Option,
            detail.CenterLine1_Option,
            detail.CenterLine2_Option,
            detail.CenterImage1_Name,
            detail.CenterImage2_Name,
            detail.CenterImage3_Name,
            detail.CenterImage4_Name,
            detail.CenterImage1_Option,
            detail.CenterImage2_Option,
            detail.CenterImage3_Option,
            detail.CenterImage4_Option,
            detail.Right1_Name,
            detail.Right2_Name,
            detail.Right1_Option,
            detail.Right2_Option,
            detail.LineItems_Id,
            detail.Factory_Id);
    }
}

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("lineitems")
export class LineItems extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column('varchar', { length: 100, nullable: true })
    Code: string;

    @Column('varchar', { length: 100, nullable: true })
    Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Size: string;

    @Column('varchar', { length: 100, nullable: true })
    Color: string;

    @Column('varchar', { length: 100, nullable: true })
    Jan_Code: string;

    @Column('int', { nullable: true })
    Quantity: number;

    @Column('varchar', { length: 100, nullable: true })
    State: string;

    @Column('varchar', { length: 100, nullable: true })
    Processing: string;

    @Column('varchar', { length: 100, nullable: true })
    Image1_ID: string;

    @Column('varchar', { length: 300, nullable: true })
    Memo: string;

    @Column('varchar', { length: 300, nullable: true })
    ErrorMemo: string;

    @Column('varchar', { length: 300, nullable: true })
    StartTime: string;

    @Column('varchar', { length: 300, nullable: true })
    FinishTime: string;

    @Column('varchar', { length: 300, nullable: true })
    ProcessedBy: string;

    @Column('varchar', { length: 100, nullable: true })
    Image2_ID: string;

    @Column('varchar', { length: 100, nullable: true })
    Image3_ID: string;

    @Column('varchar', { length: 100, nullable: true })
    Image4_ID: string;

    @Column('bool', { nullable: true })
    White_Base: boolean;

    @Column('int', { nullable: true })
    LineItems_Id: number;
}

export class LineItemDto {

    constructor(
        public id: number,
        public code: string,
        public name: string,
        public size: string,
        public color: string,
        public janCode: string,
        public quantity: number,
        public state: string,
        public processing: string,
        public image1: string,
        public memo: string,
        public errorMemo: string,
        public startTime: string,
        public finishTime: string,
        public processedBy: string,
        public image2: string,
        public image3: string,
        public image4: string,
        public whiteBase: boolean,
        public lineItemsId: number) {
    }
    static from(product: LineItems): LineItemDto {
        return new LineItemDto(
            product.Id,
            product.Code,
            product.Name,
            product.Size,
            product.Color,
            product.Jan_Code,
            product.Quantity,
            product.State,
            product.Processing,
            product.Image1_ID,
            product.Memo,
            product.ErrorMemo,
            product.StartTime,
            product.FinishTime,
            product.ProcessedBy,
            product.Image2_ID,
            product.Image3_ID,
            product.Image4_ID,
            product.White_Base,
            product.LineItems_Id);
    }

}
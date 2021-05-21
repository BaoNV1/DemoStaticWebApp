import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("ordersource")
export class OrderSource extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Prefecture: string;

    @Column('varchar', { length: 100, nullable: true })
    Address1: string;

    @Column('varchar', { length: 100, nullable: true })
    Address2: string;

    @Column('varchar', { length: 10, nullable: true })
    ZipCode: string;

    @Column('varchar', { length: 20, nullable: true })
    PhoneNumber: string;

    @Column('int', { nullable: true })
    LineItems_Id: number;
}

export class OrderSourceDto {
    constructor(
        public id: number,
        public name: string,
        public prefecture: string,
        public address1: string,
        public address2: string,
        public zipCode: string,
        public phoneNumber: string,
        public lineItemsId: number) {
    }

    static from(orderSource: OrderSource): OrderSourceDto {
        return new OrderSourceDto(
            orderSource.Id,
            orderSource.Name,
            orderSource.Prefecture,
            orderSource.Address1,
            orderSource.Address2,
            orderSource.ZipCode,
            orderSource.PhoneNumber,
            orderSource.LineItems_Id);
    }
}

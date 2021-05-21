import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("shipment")
export class Shipment extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Prefecture: string;

    @Column('varchar', { length: 10, nullable: true })
    ZipCode: string;

    @Column('varchar', { length: 100, nullable: true })
    Delivery_Method: string;

    @Column('int', { nullable: true })
    LineItems_Id: number;
}

export class ShipmentDto {
    constructor(
        public id: number,
        public prefecture: string,
        public zipCode: string,
        public deliveryMethod: string,
        public lineItemsId: number) {
    }

    static from(shipment: Shipment): ShipmentDto {
        return new ShipmentDto(
            shipment.Id,
            shipment.Prefecture,
            shipment.ZipCode,
            shipment.Delivery_Method,
            shipment.LineItems_Id);
    }
}

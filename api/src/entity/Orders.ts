import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("orders")
export class Orders extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column('datetime', { nullable: false })
    Updated_Date: Date;

    @Column('datetime', { nullable: false })
    Requested_Date: Date;

    @Column('int', { nullable: true })
    Total_Quantity: number;

    @Column('datetime', { nullable: true })
    Expected_Shipment_Date: Date;

    @Column('int', { nullable: true })
    Customer_OrderNo: number;
}

export class OrderDto {
    constructor(
        public id: number,
        public updatedDate: Date,
        public requestedDate: Date,
        public totalQuantity: number,
        public expectedShipmentDate: Date,
        public customerOrderNo: number) {
    }

    static from(order: Orders): OrderDto {
        return new OrderDto(order.Id,
            order.Updated_Date,
            order.Requested_Date,
            order.Total_Quantity,
            order.Expected_Shipment_Date,
            order.Customer_OrderNo);
    }
}

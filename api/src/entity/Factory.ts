import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("factory")
export class Factory extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column('varchar', { length: 100, nullable: true })
    Name: string;

    @Column('varchar', { length: 100, nullable: true })
    Code: string;

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
}

export class FactoryDto {
    constructor(
        public id: number,
        public name: string,
        public code: string,
        public prefecture: string,
        public address1: string,
        public address2: string,
        public zipCode: string,
        public phoneNumber: string) {
    }

    static from(factory: Factory): FactoryDto {
        return new FactoryDto(
            factory.Id,
            factory.Name,
            factory.Code,
            factory.Prefecture,
            factory.Address1,
            factory.Address2,
            factory.ZipCode,
            factory.PhoneNumber);
    }
}

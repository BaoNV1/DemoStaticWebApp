import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class Users {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column('varchar', { length: 100, nullable: true })
    DisplayName: string;

    @Column('varchar', { length: 100, nullable: true })
    BarcodeID: string;

    @Column('varchar', { length: 100, nullable: true })
    Email: string;

    @Column('int', { nullable: true })
    Factory_Id: number;

    @Column('datetime', { nullable: true })
    LastSignInTime: Date;

    @Column('varchar', { length: 100, nullable: true })
    UserRole: string;

    @Column('varchar', { length: 100, nullable: true })
    BarcodeID_Status: string;
}

export class UserDto {
    constructor(
        public id: number,
        public displayName: string,
        public barcodeID: string,
        public email: string,
        public factoryId: number,
        public lastSignInTime: Date,
        public userRole: string,
        public barcodeIDStatus: string) {
    }

    static from(user: Users): UserDto {
        return new UserDto(user.Id,
            user.DisplayName,
            user.BarcodeID,
            user.Email,
            user.Factory_Id,
            user.LastSignInTime,
            user.UserRole,
            user.BarcodeID_Status);
    }
}

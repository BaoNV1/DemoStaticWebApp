import { Users, UserDto } from "../entity/Users";
import { instanceDb } from "../util/db";
class GetUserOutput {
    constructor(public userLogin: UserDto) {
    }
}

const getLogin = async (data: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            resolve(new GetUserOutput(UserDto.from(new Users())));
            const result = await connection.manager.findOne(Users, { where: { BarcodeID: data.barcodeID, Factory_Id: data.factoryId } });
            resolve("findOne ko bi loi!!");
            console.log("User login info: ", result);
            if (result) {
                result.LastSignInTime = new Date();
                const user = await connection.manager.save(result);
                if (user) {
                    resolve(new GetUserOutput(UserDto.from(user)));
                } else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }

        } catch (error) {
            console.log(error)
            resolve(error.toString());
        }
    });
}

export default { getLogin }
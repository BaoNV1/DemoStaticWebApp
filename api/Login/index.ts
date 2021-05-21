import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { UserDto, Users } from "../src/entity/Users";
import UserService from '../src/service/user.service'
import { instanceDb } from "../src/util/db";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let user: any;
    const body = req.body;
    try {
        switch (req.method) {
            case "POST":
                user = await getLogin(body);
                break;
    
            default:
                break;
        }
    
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: user
        };
    } catch (error) {
        console.log(error);
        context.res = {
            status: 500,
            body: error.toString()
        };
    }
};

export default httpTrigger;

class GetUserOutput {
    constructor(public userLogin: UserDto) {
    }
}

const getLogin = async (data: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            const result = await connection.manager.findOne(Users, { where: { BarcodeID: data.barcodeID, Factory_Id: data.factoryId } });
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
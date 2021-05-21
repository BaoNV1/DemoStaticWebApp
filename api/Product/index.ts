import "reflect-metadata";
import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import OrdersService from '../src/service/orders.service';
import LinesService from '../src/service/lines.service';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let result: any;
    const func = req.params.subfunction;
    const body = req.body;
    switch (req.method) {
        case "GET":

            break;

        case "POST":
            switch (func) {
                case "scan":
                    result = await OrdersService.scanProduct(body);
                    context.log("Result Scan1: " + result);
                    break;
                case "updateUserLoginToProduct":
                    // update info user login to line item
                    const product = await OrdersService.updateUserLoginToProduct(body);
                    if (product) {
                        //get data from table Default_LineDetails
                        const lineDetails = await LinesService.getDefaultLineDetails(body);
                        //get data line detail to show
                        result = await LinesService.getViewLineDetail(lineDetails, body);
                    } else {
                        result = product;
                    }
                    break;
                default:
                    break;
            }

            break;

        case "PUT":

            break;

        case "DELETE":

            break;

        default:
            break;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };

};

export default httpTrigger;

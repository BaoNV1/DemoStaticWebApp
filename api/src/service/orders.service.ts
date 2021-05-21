import { instanceDb } from "../util/db";
import { LineItems, LineItemDto } from "../entity/LineItems";

class GetListProductOutput {
    constructor(public products: LineItemDto[]) {
    }
}
class GetProductOutput {
    constructor(public product: LineItemDto) {
    }
}

const scanProduct = async (data: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            console.log("Loading product from the database...");
            // get a post repository to perform operations with post
            const product = await connection.manager.findOne(LineItems, { where: { Code: data.barcode } });
            console.log("Loaded product: ", product);
            if (product) {
                resolve(new GetProductOutput(LineItemDto.from(product || new LineItems())));
            } else {
                resolve(null);
            }
        } catch (error) {
            console.log(error)
        }
    });
}
const updateUserLoginToProduct = async (data: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            const dateTime = new Date();
            const product = await connection.manager.findOne(LineItems, { where: { Id: data.id } });
            console.log(product);
            if (product) {
                product.StartTime = product.StartTime ? product.StartTime : '' + data.processName + ";" + dateTime + ",";
                product.ProcessedBy = product.ProcessedBy ? product.ProcessedBy : '' + data.processName + ";" + data.processBy + ",";
                await connection.manager.save(product);
                console.log("Updated a product with id: " + product.Id);
            }

            resolve(product);
        } catch (error) {
            console.log(error)
        }
    });
}

export default { scanProduct, updateUserLoginToProduct }
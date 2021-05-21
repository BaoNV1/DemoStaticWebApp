import { DefaultLineDetailDto, DefaultLineDetails } from "../entity/DefaultLineDetails";
import { Line } from "../entity/Lines";
import { instanceDb } from "../util/db";

class GetLineDetailOutput {
    constructor(public lineDetail: DefaultLineDetailDto) {
    }
}

const getSQLString = (data: DefaultLineDetails) => {
    let sql = "SELECT ";
    sql = sql + "DF.Id as Id,";
    sql = sql + "DF.Lines_Id as Lines_Id,";
    sql = sql + "DF.Left1_Name as Left1_Name,";
    sql = sql + "DF.Left2_Name as Left2_Name,";
    sql = sql + "DF.Left3_Name as Left3_Name,";
    sql = sql + "DF.Left4_Name as Left4_Name,";
    sql = sql + "DF.Left5_Name as Left5_Name,";
    sql = sql + "CONCAT(" + data.Left1_Option + ") as Left1_Option,";
    sql = sql + "CONCAT(" + data.Left2_Option + ") as Left2_Option,";
    sql = sql + "CONCAT(" + data.Left3_Option + ") as Left3_Option,";
    sql = sql + "CONCAT(" + data.Left4_Option + ") as Left4_Option,";
    sql = sql + "CONCAT(" + data.Left5_Option + ") as Left5_Option,";
    sql = sql + "CONCAT(" + data.CenterLine1_Option + ") as CenterLine1_Option,";
    sql = sql + "CONCAT(" + data.CenterLine2_Option + ") as CenterLine2_Option,";
    sql = sql + "DF.CenterImage1_Name as CenterImage1_Name,";
    sql = sql + "DF.CenterImage2_Name as CenterImage2_Name,";
    sql = sql + "DF.CenterImage3_Name as CenterImage3_Name,";
    sql = sql + "DF.CenterImage4_Name as CenterImage4_Name,";
    sql = sql + "CONCAT(" + data.CenterImage1_Option + ") as CenterImage1_Option,";
    sql = sql + "CONCAT(" + data.CenterImage2_Option + ") as CenterImage2_Option,";
    sql = sql + "CONCAT(" + data.CenterImage3_Option + ") as CenterImage3_Option,";
    sql = sql + "CONCAT(" + data.CenterImage4_Option + ") as CenterImage4_Option,";
    sql = sql + "DF.Right1_Name as Right1_Name,";
    sql = sql + "DF.Right2_Name as Right2_Name,";
    sql = sql + "CONCAT(" + data.Right1_Option + ") as Right1_Option,";
    sql = sql + "CONCAT(" + data.Right2_Option + ") as Right2_Option,";
    sql = sql + "DF.CenterImage1_Name as CenterImage1_Name,";
    sql = sql + "DF.LineItems_Id as LineItems_Id,";
    sql = sql + "DF.Factory_Id as Factory_Id";
    sql = sql + " FROM Default_LineDetails AS DF,";
    sql = sql + " Line, Factory, OrderSource,  Orders, LineItems, Shipment "
    sql = sql + "WHERE ";
    sql = sql + " DF.Id = ? ";
    sql = sql + " AND DF.Lines_Id = Line.Id ";
    sql = sql + " AND Factory.Id = ? ";
    sql = sql + " AND Line.Factory_Id = Factory.Id ";
    sql = sql + " AND LineItems.Id = ? ";
    sql = sql + " AND LineItems.LineItems_Id = Orders.Id ";
    sql = sql + " AND OrderSource.LineItems_Id = Orders.Id ";
    sql = sql + " AND Shipment.LineItems_Id = Orders.Id ";
    sql = sql + "LIMIT 1";

    return sql;
}

const getDefaultLineDetails = async (data: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            const line = await connection.manager.findOne(Line, { where: { Name: data.processName } });
            if (line) {
                const lineDetail = await connection.manager.findOne(DefaultLineDetails, { where: { Lines_Id: line.Id } });
                resolve(lineDetail);
            } else {
                resolve(null);
            }
        } catch (error) {
            console.log(error)
            resolve(null);
        }
    });
}

const getViewLineDetail = async (data: DefaultLineDetails, param: any) => {
    const connection = await instanceDb();
    return new Promise<any>(async resolve => {
        try {
            if (data) {
                const repository = connection.getRepository(DefaultLineDetails);
                const lineDetail = await repository.query(getSQLString(data), [data.Id, param.factoryId, param.id]);
                if (lineDetail) {
                    resolve(new GetLineDetailOutput(DefaultLineDetailDto.from(lineDetail[0] || new DefaultLineDetails())));
                } else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }
        } catch (error) {
            console.log(error)
            resolve(null);
        }
    });
}

export default { getDefaultLineDetails, getViewLineDetail }
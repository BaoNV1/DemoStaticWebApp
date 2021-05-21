/**
 * Enviroments
 */
 export enum Environment{
    Dev = "development",
    user = "user",
    admin = "admin"
}
/**
 * Line worker
 */
 export enum LineWork{
    Processing = "processing",
    Materials = "material check",
    Pretreatment = "pre-processing",
    Print = "printing",
    Dry = "drying",
    QC = "QC",
    Shipment = "Delivery",
    ShipmentComplete = "ShipmentComplete"
}

/**
 * Admin Left navi
 */
 export enum LeftMenu{
    Home,
    Orders ,
    Material ,
    ProcessTop
}

/**
 * Tabs of process setting
 */
export enum ProcessSettingTabs{
    UserInfo,
    WorkingTime,
}
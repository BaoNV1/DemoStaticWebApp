import { DefaultLineDetails } from './DefaultLineDetails';
import { Factory } from './Factory';
import { Line } from './Lines';
import { Orders } from './Orders';
import { OrderSource } from './OrderSource';
import { LineItems } from './LineItems';
import { Shipment } from './Shipment';
import { Users } from './Users';

export const ENTITIES = [
    LineItems,
    Orders,
    Users,
    OrderSource,
    Shipment,
    Factory,
    Line,
    DefaultLineDetails
];

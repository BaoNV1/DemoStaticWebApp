import axios from "axios";
import { Environment } from "./Enum";


const GetAPIEndPoint = (): string => {
    let ApiEndpoint: string = '';
    switch (process.env.REACT_APP_ENV) {
        case Environment.Dev:
            ApiEndpoint = '/api/'
            break;
        case Environment.user:
            ApiEndpoint = '/api/'
            break;
        case Environment.admin:
            ApiEndpoint = '/api/'
            break;
        default:
            ApiEndpoint = '/api/'
            break;
    }
    return ApiEndpoint;
}
const instance = axios.create({
    baseURL: GetAPIEndPoint(),
    headers: {
        "Authorization": ""
    }
});

export default instance;
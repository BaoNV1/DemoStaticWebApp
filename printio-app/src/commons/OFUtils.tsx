import { IProductDetail } from 'models/IProductDetail';
import moment from 'moment';
import { ProgressPlugin } from 'webpack';
import en from '../assets/translation/en.json';
import jp from '../assets/translation/jp.json';
import { LineWork } from './Enum';

export default class OFUtils {
    static getUserLogin = () => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || '') : null;
        return user ? JSON.parse(JSON.stringify(user.userLogin)) : null;
    }

    static translate = (key: string) => {
        let language: any = jp;

        //get brower language code
        var langCode = navigator.language;
        if (langCode === 'jp' || langCode === 'ja' || langCode === 'jpn') {
            language = jp;
        }
        return language[key] || key;
    };

    static getFormatWithMoment = (data: string, format: string) => {
        return moment(data).format(format);
    }

    static changeLineToTitle = (line: LineWork) => {
        switch (line) {
            case LineWork.Materials:
                return OFUtils.translate("process.title.material");

            case LineWork.Pretreatment:
                return OFUtils.translate("process.title.pre");

            case LineWork.Print:
                return OFUtils.translate("process.title.print");

            case LineWork.QC:
                return OFUtils.translate("process.title.qc");

            case LineWork.Shipment:
                return OFUtils.translate("process.title.ship");

            default:
                return "";
        }
    }

    static changeLineToBtnName = (line: LineWork) => {
        switch (line) {
            case LineWork.Pretreatment:
                return OFUtils.translate("process.btn3");

            case LineWork.Print:
                return OFUtils.translate("process.btn4");

            case LineWork.QC:
                return OFUtils.translate("process.btn5");

            case LineWork.Shipment:
                return OFUtils.translate("process.btn6");

            case LineWork.ShipmentComplete:
                return OFUtils.translate("process.btn7");

            default:
                return "";
        }
    }

    static getModeDisplay = () => {
        const noteEnv = process.env.NODE_ENV;
        const reactAppEnv = process.env.REACT_APP_ENV;
        switch (noteEnv) {
            case 'development':
                const type = process.env.TYPE;
                return type;
            case 'production':
                return reactAppEnv;
            default:
                return "user";
        }
    }

    static changeStringToArray = (str: string) => {
        let result: string[][];
        result = [];
        if (str) {
            const items = str.split(",");
            for (let x = 0; x < items.length; x++) {
                result[x] = [];
                const item = items[x].split(";");
                if (item[0]) {
                    result[x] = item;
                }
            }
        }
        return result;
    }

    static getFormatStringMemoProduct = (processName: string, userName: string, memo: string) => {
        const format = processName + ";" + userName + ";" + memo + ",";
        return format;
    }

    static getLabelDisplayFromProcess = (processName: string) => {
        let result = '';
        switch (processName) {
            case 'material check':
                result = OFUtils.translate("materials");
                break;
            case 'pre-processing':
                result = OFUtils.translate("pretreatment");
                break;
            case 'printing':
                result = OFUtils.translate("print");
                break;
            case 'drying':
                result = OFUtils.translate("dry");
                break;
            case 'QC':
                result = OFUtils.translate("qc");
                break;
            case 'Delivery':
                result = OFUtils.translate("shipment");
                break;
            default:
                break;
        }

        return result;
    }

    static getListLineWork = () => {
        let result : any[] = [];
        result.push(LineWork.Materials);
        result.push(LineWork.Pretreatment);
        result.push(LineWork.Print);
        result.push(LineWork.QC);
        result.push(LineWork.Shipment);
        return result;
    }

    static avataText = (name: string) => {
        let result = "";
        if (name) {
            const names = name.split(" " || "・" || "　");
            names.forEach(e => {
                result = result + e.substr(0, 1);
            });
        }

        return result;
    }

    static getProductDetailToShow = (productDetails: IProductDetail) => {
        interface props {
            leftOption1: string[][],
            leftOption2: string[][],
            leftOption3: string[][],
            leftOption4: string[][],
            leftOption5: string[][],
            rightOption1: string[][],
            rightOption2: string[][],
        };
        let result : props = {
            leftOption1: [],
            leftOption2: [],
            leftOption3: [],
            leftOption4: [],
            leftOption5: [],
            rightOption1: [],
            rightOption2: [],
        } ;
        result.leftOption1 = OFUtils.changeStringToArray(productDetails.left1Option);
        result.leftOption2 = OFUtils.changeStringToArray(productDetails.left2Option);
        result.leftOption3 = OFUtils.changeStringToArray(productDetails.left3Option);
        result.leftOption4 = OFUtils.changeStringToArray(productDetails.left4Option);
        result.leftOption5 = OFUtils.changeStringToArray(productDetails.left5Option);
        result.rightOption1 = OFUtils.changeStringToArray(productDetails.right1Option);
        result.rightOption2 = OFUtils.changeStringToArray(productDetails.right2Option);
        
        return result;
    }
}

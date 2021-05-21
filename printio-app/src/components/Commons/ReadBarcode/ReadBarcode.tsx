import { Stack, Image, mergeStyles } from '@fluentui/react';
import { LineWork } from 'commons/Enum';
import { Component } from 'react';
import { connect } from 'react-redux';
import AuthService from "services/auth.service";
import ProductService from 'services/product.service';
import './ReadBarcode.css';

class ReadBarcodeCP extends Component<IReadBarcode,IReadBarcodeState>{
    constructor(props: IReadBarcode){
        super(props);
        this.state  = {
            barcode:""
        }
    }
    componentWillUnmount() {
        if(!this.props.type || (this.props.type != "login" && this.props.type != "scanproduct")){
            return;
        }
        // remove key event
        document.removeEventListener("keyup", (e) => this.KeyUpEvent(e), true);
        document.removeEventListener("keydown", (e) => this.KeyDownEvent(e), true);
    }
    componentDidMount() {
        if(!this.props.type || (this.props.type != "login" && this.props.type != "scanproduct")){
            return;
        }
        // add key event
        document.addEventListener("keyup", (e) => this.KeyUpEvent(e), true);
        document.addEventListener("keydown", (e) => this.KeyDownEvent(e), true);
    }
    KeyUpEvent(e: any) {
        if (e.keyCode != 13) {
            this.setState({barcode: this.state.barcode + e.key});
        }else{
            this.setState({barcode: ""});
        }
    }
    KeyDownEvent(e: any) {
        if (e.keyCode == 13) {
            if(this.props.type == "login" && this.state.barcode !== "" && this.props.factoryId.factoryid !== ""){
                this.props.handleLogin(this.state.barcode, this.props.factoryId.factoryid);
            }
            if(this.props.type == "scanproduct" && this.state.barcode !== ""){
                this.props.handleScanProduct(this.state.barcode, this.props.lineSelected, this.props.isPretreatment);
            }
        }
    }
    render(){
        const srcImage = this.props.type === "login"? 'assets/Images/BarcodeLogin.svg' : 'assets/Images/BarcodeProduct.svg'

        return(
            <Stack horizontal horizontalAlign="center" >
                <Stack horizontal horizontalAlign="center" className="bar-code-main" >
                    <Image src={srcImage} className="bc-image"/>
                </Stack>
            </Stack>
        );
    }
}

/*********************************************** */
//       Define property of components            /
/*********************************************** */
interface IReadBarcode {
    factoryId: any,
    type: any,
    handleLogin: any,
    handleScanProduct: any,
    lineSelected: boolean,
    isPretreatment: boolean,
}
interface IReadBarcodeState {
    barcode: string,
}
const mapStateToProps = (state: any) => {
    return {
        lineSelected : state.lineWorker.lineSelect,
        isPretreatment: state.lineWorker.isPretreatment
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleLogin: (barcode: string, factoryId: any) => {
            console.log("login: " +barcode + ' ' + factoryId);
            AuthService.login(dispatch, barcode, factoryId);
        },
        handleScanProduct: (barcode: string, lineSelected: LineWork, isPretreatment:boolean) => {
            console.log("product: " +barcode + ' ' + lineSelected);
            ProductService.scanProduct(dispatch, barcode, lineSelected, isPretreatment);
        }
    }
};
export const ReadBarcode = connect(mapStateToProps, mapDispatchToProps)(ReadBarcodeCP);
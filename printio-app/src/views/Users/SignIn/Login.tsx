import { Label} from '@fluentui/react';
import OFUtils from 'commons/OFUtils';
import { ReadBarcode } from 'components/Commons/ReadBarcode/ReadBarcode';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import './SignIn.css';

const LoginCP = (props:ILogin) => {
    const factoryId = useParams();
    const type = "login";
    const mode = OFUtils.getModeDisplay();

    if(mode == 'admin'){
        const userLogin = OFUtils.getUserLogin();
        const path = "/" + factoryId + "/dashboard";
        
        if(userLogin){
            console.log(path);
            return <Redirect to={path}/>
        }
    }
    
    return(
        <div className="signin-main">
            <div className="space-top-bottom"></div>
            <div className="title">
                <Label className="title-text">{OFUtils.translate("signin.title")}</Label>
            </div>
            <ReadBarcode factoryId = {factoryId} type={type}/>
            <div className="space-top-bottom"></div>
        </div>
    );
}

/*********************************************** */
//       Define property of components            /
/*********************************************** */

interface ILogin {
    
}
const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
};
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginCP);
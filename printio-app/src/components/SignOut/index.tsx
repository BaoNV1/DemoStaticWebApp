import { Label, PrimaryButton } from '@fluentui/react';
import OFUtils from 'commons/OFUtils';
import { connect } from 'react-redux';
import AuthService from "services/auth.service";
import './Signout.css'

const LogoutCP = (props:ILogoutProps) => {

    const {handleLogout} = props;
    const userLogin = OFUtils.getUserLogin();
    const onLogout = () => {
        handleLogout();
    }
    return (
        <div className="signout">
        <div className="signout-main">
            <Label className="signout-user-no">{userLogin.id}</Label>
            <Label className="signout-user-name">{userLogin.displayName}</Label>
            <Label className="signout-user-email">{userLogin.email}</Label>
            <PrimaryButton className="signout-btn" onClick={() => onLogout()}><span className="signout-btn-txt">{OFUtils.translate("leave.btn1")}</span></PrimaryButton>
        </div>
        </div>
    );
}
interface ILogoutProps {
    handleLogout:any,
}
const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleLogout : () =>{
            AuthService.logout(dispatch);
        }
    }
};
export const Logout = connect(mapStateToProps, mapDispatchToProps)(LogoutCP);
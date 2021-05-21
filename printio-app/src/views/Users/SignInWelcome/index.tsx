import { DefaultButton, Label } from '@fluentui/react';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import './SignInWellcome.css';
import moment from 'moment';
import { SET_WORK_START } from 'commons/Types';
import { OFConstants } from 'commons/Constants';
import OFUtils from 'commons/OFUtils';

class SignInWellcomeCP extends Component<SignInWellcomeProps, SignInWellcomeState>
{
    constructor(props:SignInWellcomeProps){
        super(props);
    }

    onClickBtn = () => {
        this.props.handleStartWork();
    }

    render() {
        const userLogin = OFUtils.getUserLogin();
        const lastTimeLogin = OFUtils.getFormatWithMoment(userLogin.lastSignInTime, OFConstants.LAST_LOGIN_TIME_FORMAT);
        return (
            <div className="signin-welcome-container">
                <div className="signin-welcome-center">
                    <div className="sw-content-label">
                        <Label className="sw-content-label-item">{OFUtils.translate("welcome.title")}</Label>
                    </div>
                    <div className="sw-content-table">
                        <div className="sw-flex-table-above">
                            <div className="sw-container-above">
                                <div className="sw-item-left sw-above-left">
                                    <Label className="sw-label-table sw-label-above-left">{OFUtils.translate("welcome.label1")}</Label>
                                </div>
                                <div className="sw-item-right sw-above-right">
                                    <Label className="sw-label-table sw-label-above-right">{userLogin.id} {userLogin.displayName}</Label>
                                </div>
                            </div>

                        </div>
                        <div className="sw-flex-table-alow">
                            <div className="sw-container-alow">
                                <div className="sw-item-left sw-alow-left">
                                    <Label className="sw-label-table sw-label-alow-left">{OFUtils.translate("welcome.label2")}</Label>
                                </div>
                                <div className="sw-item-right sw-alow-right">
                                    <Label className="sw-label-table sw-item-right sw-label-alow-right">{lastTimeLogin}</Label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="sw-content-button">
                        <DefaultButton className="sw-content-button-1 btn-3d" onClick={this.onClickBtn}>{OFUtils.translate("welcome.btn1")}</DefaultButton>
                    </div>
                </div>
            </div>
        );
    }
}
//#region 
/*********************************************** */
//       Define property of components            /
/*********************************************** */
export interface SignInWellcomeProps {
    handleStartWork : any
}

interface SignInWellcomeState {
    
}
/*********************************************** */
//       Connect component to Redux store         /
/*********************************************** */
const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleStartWork: () => {
            dispatch({
                type: SET_WORK_START,
            });
        }
    };
};
//#endregion

export const SignInWellcome = connect(mapStateToProps, mapDispatchToProps)(SignInWellcomeCP);
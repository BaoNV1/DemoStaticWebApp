import { DefaultButton, Label } from '@fluentui/react';
import OFUtils from 'commons/OFUtils';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineWork } from "commons/Enum";
import { SET_LINE_CHOICE } from "commons/Types";
import './SignInChoice.css';

class SignInChoiceCP extends Component<ISignInChoiceProp> {
    constructor(props: ISignInChoiceProp) {
        super(props);
    }

    onChoiceLineWork(line: any, nextProcess: any, isPretreatment: boolean = false) {
        this.props.handleChoiceLineWork(line, isPretreatment, nextProcess);
    }

    render() {
        return (
            // <div>Choice Line Worker!</div>
            <div className="sign-in-choice-container">
                <div className="sign-in-choice-item-center">
                    <div className="sc-item-top">
                        <Label className="sc-item-top-label">{OFUtils.translate("choice.title")}</Label>
                    </div>
                    <div className="sc-item-bottom">
                        <div className="sc-item-bottom-above">
                            <DefaultButton className="sc-button-style sc-item-bottom-button-above btn-3d" onClick={() => this.onChoiceLineWork(LineWork.Materials, LineWork.Pretreatment, true)}>
                                <div><span className="sc-label-above">{OFUtils.translate("choice.btn1.r1")}</span></div>
                                <div><span className="sc-label-alow">{OFUtils.translate("choice.btn1.r2")}</span></div>
                            </DefaultButton>
                            <DefaultButton className="sc-button-style sc-item-bottom-button-above btn-3d" onClick={() => this.onChoiceLineWork(LineWork.Materials, LineWork.Print)}>
                                <div><span className="sc-label-above">{OFUtils.translate("choice.btn2.r1")}</span></div>
                                <div><span className="sc-label-alow">{OFUtils.translate("choice.btn2.r2")}</span></div>
                            </DefaultButton>
                            <DefaultButton className="sc-button-style sc-item-bottom-button-above btn-3d" onClick={() => this.onChoiceLineWork(LineWork.Pretreatment, LineWork.Print)}>
                                {OFUtils.translate("choice.btn3")}
                            </DefaultButton>
                        </div>
                        <div className="sc-item-bottom-alow">
                            <DefaultButton className="sc-button-style sc-item-bottom-button-alow btn-3d" onClick={() => this.onChoiceLineWork(LineWork.Print, LineWork.QC)}>
                                {OFUtils.translate("choice.btn4")}</DefaultButton>
                            <DefaultButton className="sc-button-style sc-item-bottom-button-alow btn-3d" onClick={() => this.onChoiceLineWork(LineWork.QC, LineWork.Shipment)}>
                                {OFUtils.translate("choice.btn5")}</DefaultButton>
                            <DefaultButton className="sc-button-style sc-item-bottom-button-alow btn-3d" onClick={() => this.onChoiceLineWork(LineWork.Shipment, LineWork.ShipmentComplete)}>
                                {OFUtils.translate("choice.btn6")}</DefaultButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
interface ISignInChoiceProp {
    handleChoiceLineWork: any,
}

const mapStateToProps = (state: any) => {
    return {

    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleChoiceLineWork: (line: LineWork, isPretreatment: boolean, nextProcess: LineWork) => {
            console.log("choice: " + line);
            dispatch({
                type: SET_LINE_CHOICE,
                payload: { lineSelect: line, isPretreatment: isPretreatment, nextProcess: nextProcess }
            })
        }
    }
};
export const SignInChoice = connect(mapStateToProps, mapDispatchToProps)(SignInChoiceCP);
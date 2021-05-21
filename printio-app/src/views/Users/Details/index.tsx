import { DefaultButton, IconButton, Image, Label, mergeStyleSets, Modal } from "@fluentui/react";
import { useId } from "@fluentui/react-hooks";
import { CLEAR_SHOW_DETAIL } from "commons/Types";
import React, { useState } from "react";
import OFUtils from 'commons/OFUtils';
import { connect } from "react-redux";
import './Details.css';
import { IProduct } from "models/IProduct";
import { LineWork } from "commons/Enum";
import { OFConstants } from 'commons/Constants';

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '1139px',
        height: '608px',
        borderRadius: '10px',
        backgroundColor: '#EFEFEF'
    },
    header: {
        width: '100%',
        // flexGrow: 1,
        height: '73px',
        // flexFlow: 'column',
        // flexWrap: 'nowrap',
        // justifyContent: 'flex-start'
    },
    headerInside: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexFlow: 'row nowrap',
    }
});
const iconButtonStyles = {
    root: {
        marginLeft: 'auto',
        marginTop: '31px',
        marginRight: '20px',
        float: 'right',
        color: 'rgb(119,119,119)',
        height: '25px',
        with: '100%'
    },
    rootHovered: {
    },
};

const DetailsCP = (props: IDetailsCPProps) => {
    const { isShowDetails,lineSelect, product, handleCloseDetail } = props;
    if(!product){
        return(<div></div>);
    }
    const titleId = useId('title');
    const finishTimes = OFUtils.changeStringToArray(product.finishTime||'');
    const processedBys = OFUtils.changeStringToArray(product.processedBy||'');
    const listMemo = OFUtils.changeStringToArray(product.memo);
    let historyElements: any[] = [];
    let workDoNot : any[] = [];
    let memoDetailElements: any[] = [];
    const userLogin = OFUtils.getUserLogin();
    const lineWorks = OFUtils.getListLineWork();

    const getElementHistory = (time: any[], person: any[]) => {
        const workDate = OFUtils.getFormatWithMoment(time[1], OFConstants.HISTORY_MANUFAC_TIME_FORMAT);
        return (
            <Label key={time[0]} className="d-title-content">
                <span className="d-title-content-left">{workDate}</span>
                <span className="d-title-content-right">{OFUtils.getLabelDisplayFromProcess(time[0])}：{person?person[1]:''}</span>
            </Label>
        );
    }
    const currentWork = () => {
        const workContent = OFUtils.getLabelDisplayFromProcess(lineSelect) + "：" + userLogin.id + userLogin.displayName;
        return (
            <Label className="d-title-content">
                <Image src='assets/Icon/TriangleIcon.svg' className="d-title-content-left .d-triangle-image" />
                <span className="d-title-content-right d-triangle-title">{workContent}</span>
            </Label>
        );
    }

    const getElementWorkDoNot = (line: any) => {
        return(
            <Label key={line} className="d-title-content">
                <span className="d-title-content-left"></span><span className="d-title-content-right">{OFUtils.getLabelDisplayFromProcess(line)}</span>
            </Label>
        );
    }
    const getElementMemo = (item: any) => {
        return (
            <div key={item[2]} className="d-container-item-box-03">
                <div className="d-item-box-02-above">
                    <div className="d-container-image-above">
                        <div className="d-sharp-circle">
                            <Label className="d-sharp-circle-label">{OFUtils.avataText(item[1])}</Label>
                        </div>
                    </div>
                    <div className="d-container-label-above">
                        <Label className="d-label-box-above">{item[1] || ''}</Label>
                    </div>
                </div>
                <div className="d-item-box-02-alow">
                    <Label className="d-label-box-label">{item[2] || ''}</Label>
                </div>
            </div>
        );
    }

    listMemo.forEach(e => {
        if (e[0]) {
            memoDetailElements.push(getElementMemo(e));
        }
    });

    finishTimes.forEach(e => {
        if (e[0]) {
            const processedBy = processedBys.filter(item=> item[0] == e[0]);
            historyElements.push(getElementHistory(e, processedBy[0]));
        }
    });

    lineWorks.forEach(line => {
        const item = finishTimes.filter(e => e[0] == line);
        console.log(!item[0] + ' and ' + item[0]);
        if(!item[0]){
            
            if(line == LineWork.Pretreatment && product.whiteBase){
                workDoNot.push(getElementWorkDoNot(line));
            }else{
                if(line != lineSelect){
                    workDoNot.push(getElementWorkDoNot(line));
                }
            }
        }
    });
    
    
    const onCloseDetail = () => {
        handleCloseDetail();
    }

    return (
        <div>
            <Modal
                titleAriaId={titleId}
                isOpen={isShowDetails}
                // onDismiss={}
                isBlocking={false}
                isModeless={false}
                containerClassName={contentStyles.container}
                dragOptions={undefined}
                allowTouchBodyScroll = {true}>

                <div className="container-detail-modal">
                    <div className="detail-modal-1"></div>
                    <div className="detail-modal-2">
                        <div className="modal-main-1">
                            <div className={contentStyles.header}>
                                <div className={contentStyles.headerInside}>
                                    <div className="header-detail">
                                        <div className="header-detail-1">
                                            <Label className="detail-label-top detail-label-top-1">{OFUtils.translate("details.title")}</Label>
                                        </div>
                                        <div className="header-detail-2">
                                            <Label className="detail-label-top detail-label-top-2">{OFUtils.translate("details.noProduct")}</Label>
                                        </div>
                                        <div className="header-detail-3">
                                            <Label className="detail-label-top detail-label-top-3">{product.code}</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-main">
                                <div className="detail-2-space"></div>
                                <div className="config-detail-2">
                                    <div className="detail-center-1">
                                        <div className="d-item-column-01-row d-item-column-01-row-01">
                                            <div className="d-container-content-row">
                                                <Label className="d-title-label">{OFUtils.translate("details.leftName1")}</Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left1Option1")}<span className="d-label-row-right">：{product.color}</span></Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left1Option2")}<span className="d-label-row-right">：{product.size}</span></Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left1Option3")}<span className="d-label-row-right">：{product.quantity}</span></Label>
                                            </div>
                                        </div>
                                        <div className="detail-content-space"></div>
                                        <div className="d-item-column-01-row d-item-column-01-row-02">
                                            <div className="d-container-content-row">
                                                <Label className="d-title-label">{OFUtils.translate("details.leftName2")}</Label>
                                                <Label className="d-label-row-right">{product.processing}</Label>
                                            </div>
                                        </div>
                                        <div className="detail-content-space"></div>
                                        <div className="d-item-column-01-row item-column-01-row-03">
                                            <div className="d-container-content-row">
                                                <Label className="d-title-label">{OFUtils.translate("details.leftName3")}</Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left3Option1")}<span className="d-label-row-right">：21/03/25</span></Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left3Option2")}<span className="d-label-row-right">：21/03/23</span></Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left3Option3")}<span className="d-label-row-right">：1/2</span></Label>
                                            </div>
                                        </div>
                                        <div className="detail-content-space"></div>
                                        <div className="d-item-column-01-row d-item-column-01-row-04">
                                            <div className="d-container-content-row">
                                                <Label className="d-title-label">{OFUtils.translate("details.leftName4")}</Label>
                                                <Label className="d-label-row-right">493-0001　愛知県</Label>
                                            </div>
                                        </div><div className="detail-content-space">
                                        </div>
                                        <div className="d-item-column-01-row d-item-column-01-row-05">
                                            <div className="d-container-content-row">
                                                <Label className="d-title-label">{OFUtils.translate("details.leftName5")}</Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left5Option1")}<span className="d-label-row-right">：SUZURI</span></Label>
                                                <Label className="d-label-row-left">{OFUtils.translate("details.left5Option2")}<span className="d-label-row-right">：1337545</span></Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-center-2">
                                        <div className="d-center-label">
                                            <Label className="d-label-1 d-center-label-1">メーカー名</Label>
                                            <Label className="d-label-1 d-center-label-2">{product.name}</Label>
                                        </div>
                                        <div className="d-center-image">
                                            <div className="d-center-image-space"></div>
                                            <div className="d-center-image-grid">
                                                <div className="d-row-image">
                                                    <div className="d-column-image d-column-image-01">
                                                        <div className="d-config-column-title">
                                                            <Label className="d-title-in-image">{OFUtils.translate("details.centerImgName1")}</Label>
                                                        </div>
                                                        <div className="d-config-column-image">
                                                            <div className="d-container-image-ahead">
                                                                {product.image1 && <Image src={product.image1} className="d-ahead-image" />}
                                                            </div>
                                                        </div>
                                                        <div className="d-config-column-label">
                                                            <Label className="d-label-in-image">DL</Label>
                                                        </div>
                                                    </div>
                                                    <div className="d-column-space"></div>
                                                    <div className="d-column-image d-column-image-02">
                                                        <div className="d-config-column-title">
                                                            <Label className="d-title-in-image">{OFUtils.translate("details.centerImgName2")}</Label>
                                                        </div>
                                                        <div className="d-config-column-image">
                                                            <div className="d-container-image-behind">
                                                            {product.image2 && <Image src={product.image2} className="d-ahead-image" />}
                                                            </div>
                                                        </div>
                                                        <div className="d-config-column-label">
                                                            <Label className="d-label-in-image">DL</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-row-space"></div>
                                                <div className="d-row-image">
                                                    <div className="d-column-image d-column-image-03">
                                                        <div className="d-config-column-title">
                                                            <Label className="d-title-in-image">{OFUtils.translate("details.centerImgName3")}</Label>
                                                        </div>
                                                        <div className="d-config-column-image">
                                                            <div className="d-container-image-left">
                                                            {product.image3 && <Image src={product.image3} className="d-ahead-image" />}
                                                            </div>
                                                        </div>
                                                        <div className="d-config-column-label">
                                                            <Label className="d-label-in-image">DL</Label>
                                                        </div>
                                                    </div>
                                                    <div className="d-column-space"></div>
                                                    <div className="d-column-image d-column-image-04">
                                                        <div className="d-config-column-title">
                                                            <Label className="d-title-in-image">{OFUtils.translate("details.centerImgName4")}</Label>
                                                        </div>
                                                        <div className="d-config-column-image">
                                                            <div className="d-container-image-right">
                                                            {product.image4 && <Image src={product.image4} className="d-ahead-image" />}
                                                            </div>
                                                        </div>
                                                        <div className="d-config-column-label">
                                                            <Label className="d-label-in-image">DL</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-center-image-space"></div>
                                        </div>
                                    </div>
                                    <div className="detail-center-3">
                                        <div className="d-item-column-03-row-01">
                                            <div className="detail-history-title">
                                                <Label className="d-title-history">{OFUtils.translate("details.rightName1")}</Label>
                                            </div>
                                            <div className="detail-history-content">
                                                <div className="container-detail-history-content">
                                                    {historyElements}
                                                    {currentWork()}
                                                    {workDoNot}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-item-column-03-row-space"></div>
                                        <div className="d-item-column-03-row-02">
                                            <div className="detail-history-title">
                                                <Label className="d-title-history">{OFUtils.translate("details.rightName2")}</Label>
                                            </div>
                                            <div className="detail-note-content">
                                                <div className="container-detail-note-content">
                                                    {memoDetailElements}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-2-space"></div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-modal-3">
                        <IconButton
                            styles={iconButtonStyles}
                            ariaLabel="Close popup modal"
                            onClick={() => onCloseDetail()}>
                            <Image src="assets/Icon/CloseIcon.svg" className="image-close-icon" />
                        </IconButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

interface IDetailsCPProps {
    isShowDetails: boolean,
    product: IProduct,
    lineSelect: LineWork,
    handleCloseDetail: any,
}

const mapStateToProps = (state: any) => {
    return {
        isShowDetails: state.lineWorker.isShowDetailProduct,
        product: state.lineWorker.product,
        lineSelect: state.lineWorker.lineSelect,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleCloseDetail: () => {
            dispatch({
                type: CLEAR_SHOW_DETAIL,
            })
        }
    }
};
export const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsCP);
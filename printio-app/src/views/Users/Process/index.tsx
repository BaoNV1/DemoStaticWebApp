import { Label, Image, DefaultButton } from '@fluentui/react';
import { LineWork } from 'commons/Enum';
import OFUtils from 'commons/OFUtils';
import { IProduct } from 'models/IProduct';
import { connect } from 'react-redux';
import './Process.css';
import { SET_SHOW_CONFIRM, SET_SHOW_DETAIL } from 'commons/Types';
import ProductService from 'services/product.service';
import { Details } from 'views/Users/Details';
import { IProductDetail } from 'models/IProductDetail';
import { LeftElement } from 'components/Commons/LeftElement';
import { RightElement1 } from 'components/Commons/RightElement1';
import { RightElement2 } from 'components/Commons/RightElement2';

const ProcessCP = (props: IProcessProps) => {
    // get prroperty
    const { lineSelect, isPretreatment, nextProcess, product, productDetail, memoStr, errormemo, handleNextProcess, handleShowDetail, handleHoldProduct } = props;
    const {leftOption1, leftOption2, leftOption3, leftOption4, leftOption5, rightOption1, rightOption2} = OFUtils.getProductDetailToShow(productDetail);

    const onNextProcess = () => {
        handleNextProcess(nextProcess, memoStr);
    }

    const onShowDetail = () => {
        handleShowDetail();
    }

    const onHoldProduct = () => {
        handleHoldProduct(OFUtils.translate('confirm.message'), memoStr);
    }

    return (
        // The Process Screen
        <div className="process-container">
            <div className="container-item-top">
                <div className="item-top">
                    <div className="config-item-top">
                        <div className="top-container top-container-01">
                            <Label className="top-label label-01">
                                {OFUtils.changeLineToTitle(lineSelect)}
                            </Label>
                        </div>
                        <div className="top-container top-container-02">
                            <Label className="top-label label-02">{OFUtils.translate("process.noProduct")}</Label>
                        </div>
                        <div className="top-container top-container-03">
                            <Label className="top-label label-03">
                                {product.code}
                            </Label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-item-center">
                <div className="item-center-process">
                    <div className="config-item-center">
                        <div className="item-column-01">
                            {productDetail.left1Name !== null && <div className="item-column-01-row item-column-01-row-01">
                                <LeftElement name={productDetail.left1Name} options={leftOption1}/>
                            </div>}
                            {productDetail.left1Name !== null && <div className="content-space"></div>}
                            {productDetail.left2Name !== null && <div className="item-column-01-row item-column-01-row-02">
                                <LeftElement name={productDetail.left2Name} options={leftOption2}/>
                            </div>}
                            {productDetail.left2Name !== null && <div className="content-space"></div>}
                            {productDetail.left3Name !== null && <div className="item-column-01-row item-column-01-row-03">
                                <LeftElement name={productDetail.left3Name} options={leftOption3}/>
                            </div>}
                            {productDetail.left3Name !== null && <div className="content-space"></div>}
                            {productDetail.left4Name !== null && <div className="item-column-01-row item-column-01-row-04">
                                <LeftElement name={productDetail.left4Name} options={leftOption4}/>
                            </div>}
                            {productDetail.left4Name !== null && <div className="content-space"></div>}
                            {productDetail.left5Name !== null && <div className="item-column-01-row item-column-01-row-05">
                                <LeftElement name={productDetail.left5Name} options={leftOption5}/>
                            </div>}
                        </div>
                        <div className="item-column-02">
                            <div className="item-column-02-title">
                                {productDetail.centerLine1Option && <div className="item-column-02-title-01">
                                    <Label className="title-label-colunm-02">{productDetail.centerLine1Option}</Label>
                                </div>}
                                {productDetail.centerLine2Option && <div className="item-column-02-title-02">
                                    <Label className="title-label-colunm-02">{productDetail.centerLine2Option}</Label>
                                </div>}
                            </div>
                            <div className="item-column-02-image">
                                <div className="grid-container-image">
                                    <div className="row-image">
                                        <div className="column-image column-image-01">
                                            <div className="config-column-title">
                                                <Label className="title-in-image">{productDetail.centerImage1Name}</Label>
                                            </div>
                                            <div className="config-column-image">
                                                <div className="container-image-ahead">
                                                    {productDetail.centerImage1Option && <Image src={productDetail.centerImage1Option} className="ahead-image" />}
                                                </div>
                                            </div>
                                            <div className="config-column-label">
                                                <Label className="label-in-image">DL</Label>
                                            </div>
                                        </div>
                                        <div className="column-space"></div>
                                        <div className="column-image column-image-02">
                                            <div className="config-column-title">
                                                <Label className="title-in-image">{productDetail.centerImage2Name}</Label>
                                            </div>
                                            <div className="config-column-image">
                                                <div className="container-image-behind">
                                                {productDetail.centerImage2Option && <Image src={productDetail.centerImage2Option} className="ahead-image" />}
                                                </div>
                                            </div>
                                            <div className="config-column-label">
                                                <Label className="label-in-image">DL</Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-space"></div>
                                    <div className="row-image">
                                        <div className="column-image column-image-03">
                                            <div className="config-column-title">
                                                <Label className="title-in-image">{productDetail.centerImage3Name}</Label>
                                            </div>
                                            <div className="config-column-image">
                                                <div className="container-image-left">
                                                {productDetail.centerImage3Option && <Image src={productDetail.centerImage3Option} className="ahead-image" />}
                                                </div>
                                            </div>
                                            <div className="config-column-label">
                                                <Label className="label-in-image">DL</Label>
                                            </div>
                                        </div>
                                        <div className="column-space"></div>
                                        <div className="column-image column-image-04">
                                            <div className="config-column-title">
                                                <Label className="title-in-image">{productDetail.centerImage4Name}</Label>
                                            </div>
                                            <div className="config-column-image">
                                                <div className="container-image-right">
                                                {productDetail.centerImage4Option && <Image src={productDetail.centerImage4Option} className="ahead-image" />}
                                                </div>
                                            </div>
                                            <div className="config-column-label">
                                                <Label className="label-in-image">DL</Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-column-03">
                            <div className="item-column-03-row-01">
                                {/* button 詳細  */}
                                <div className="container-detail-button">
                                    <DefaultButton text={OFUtils.translate("process.btn1")} className="btn-process detail-button btn-3d" onClick={() => onShowDetail()} />
                                </div>
                                <div className="space-between-button"></div>
                                {/* button 保留  */}
                                <div className="container-hold-button">
                                    <DefaultButton text={OFUtils.translate("process.btn2")} className="btn-process hold-button btn-3d" onClick={() => onHoldProduct()} />
                                </div>
                            </div>
                            {/* case right option 1 exist */}
                            {productDetail.right1Name &&
                                <div className="item-error-container">
                                    {productDetail.right1Name !== 'barcode' && <div >
                                        <Label className="item-error-title">{productDetail.right1Name}</Label>
                                    </div>}
                                    <RightElement1 name={productDetail.right1Name} options={rightOption1}/>
                                </div>
                            }
                            {/* case right option 2 exist */}
                            {productDetail.right2Name && 
                                <RightElement2 name={productDetail.right2Name} option={productDetail.right2Option} rightOpt1={productDetail.right1Name}/>
                            }
                            <div className="item-column-03-row-03">
                                <div className="container-next-process">
                                    <DefaultButton text={OFUtils.changeLineToBtnName(nextProcess)} className="next-process-button btn-3d" onClick={() => onNextProcess()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Details/>
        </div>
    )
}

interface IProcessProps {
    lineSelect: LineWork,
    isPretreatment: boolean,
    nextProcess: LineWork,
    product: IProduct,
    productDetail: IProductDetail,
    memoStr: string,
    errormemo: string,
    handleNextProcess: any,
    handleShowDetail: any,
    handleHoldProduct: any,
}

const mapStateToProps = (state: any) => {
    return {
        lineSelect: state.lineWorker.lineSelect,
        isPretreatment: state.lineWorker.isPretreatment,
        nextProcess: state.lineWorker.nextProcess,
        product: state.lineWorker.product,
        productDetail: state.lineWorker.productDetail,
        memoStr: state.lineWorker.memoOfProduct,
        errormemo: state.lineWorker.errorMemoOfProduct,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleNextProcess: (stateProduct: LineWork, memo: string) => {
            ProductService.updateStateOfProduct(dispatch, stateProduct, memo);

        },

        handleShowDetail: () => {
            dispatch({
                type: SET_SHOW_DETAIL,
            });
        },

        handleHoldProduct: (mess: string, memo: string) => {
            // show confirm dialog
            dispatch({
                type: SET_SHOW_CONFIRM,
                payload: { messConfirm: mess, errorMemo: memo },
            });
        },
    }
};
export const Process = connect(mapStateToProps, mapDispatchToProps)(ProcessCP);
import { Label } from '@fluentui/react/lib/Label';
import OFUtils from 'commons/OFUtils';
import { ReadBarcode } from 'components/Commons/ReadBarcode/ReadBarcode';
import { IProduct } from 'models/IProduct';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ScanProduct.css';

const ScanProductCP = (props: IScanProductProps)=> {
    // constructor(props: IScanProductProps){
    //     super(props);
    // }
    const {product} = props;
    const renderProductInfo = () => {
        return(
            <div>
                <Label className="pro-name">{product.name}</Label>
                <Label>
                    <div ><span className="pro-no-title">{OFUtils.translate("scanProduct.noProduct")}</span><span className="pro-no">{product.code}</span></div>
                    {/* <div className="pro-no">{product.code}</div> */}
                    </Label>
                <Label className="note-txt">{OFUtils.translate("scanProduct.note")}</Label>
            </div>
        );
    }
      
    const type = "scanproduct";
    return(
        <div className="scanproduct-main">
            <div className="pro-space-top"></div>
            <div className="scanproduct-title">
                <Label className="scanproduct-title-txt">{OFUtils.translate("scanProduct.title")}</Label>
            </div>
            <ReadBarcode factoryId = "" type={type}/>
            <div className="product-inf">
                {product && 
                    renderProductInfo()
                }
            </div>
            <div className="pro-space-top"></div>
        </div>
    )
}
interface IScanProductProps{
    product: IProduct,
}
const mapStateToProps = (state: any) => {
    return {
        product : state.lineWorker.product
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
};
export const ScanProduct = connect(mapStateToProps, mapDispatchToProps)(ScanProductCP);
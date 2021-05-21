import { Header } from 'components/Header';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Logout } from 'components/SignOut';
import './Layout.css';
import { ConfirmDialog } from 'components/Dialog/Confirm';
import { ErrorDialog } from 'components/Dialog/ErrorDialog';
import { Navigation } from 'components/Navigation';
import OFUtils from 'commons/OFUtils';

const LayoutCP = (props: ILayout) => {
    const { isShowError, children, isShowConfirm, isShowLogout } = props;
    const mode = OFUtils.getModeDisplay();
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="content">
                {children}
                {isShowLogout && <Logout/>}
                {/* {mode != 'user' && <Navigation />} */}
                <ConfirmDialog />
                <ErrorDialog/>
            </div>
            {/* <footer>
                <Footer/>
            </footer> */}
        </div>
    );

}
interface ILayout {
    children?: React.ReactNode,
    isShowError: boolean,
    isShowConfirm: boolean
    isShowLogout: boolean,
}

const mapStateToProps = (state: any) => {
    return {
        isShowError: state.common.isShowError,
        isShowConfirm: state.common.isShowConfirm,
        isShowLogout: state.common.isShowLogout,
    };
};
export const Layout = connect(mapStateToProps)(LayoutCP);
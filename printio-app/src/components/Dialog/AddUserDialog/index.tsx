import React from 'react';
import { mergeStyleSets } from '@fluentui/merge-styles';
import { DefaultButton, IconButton, Image, Label, Modal, TextField } from '@fluentui/react';
import OFUtils from 'commons/OFUtils';
import { connect } from 'react-redux';
import { CLEAR_SHOW_ADD_USER_DIALOG } from 'commons/Types';
import './AddUserDialog.css';
import { useId } from '@fluentui/react-hooks';
import { Barcode } from 'components/Commons/Barcode';

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '971px',
        height: '650px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF'
    },
    header: {
        width: '100%',
        flexGrow: 1,
        flexFlow: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start'
    },
    headerInside: {
        display: 'flex',
        width: '100%'
    }
});
const iconButtonStyles = {
    root: {
        marginLeft: 'auto',
        marginTop: '31px',
        marginRight: '34px',
        float: 'right',
        color: 'rgb(119,119,119)',
        height: '25px',
    },
    rootHovered: {
    },
};
const AddUserDialogCP = (props: IAddUserProps) => {
    const { isShowDialog, lastUserBarcode, handleCloseDialog, handleAddUser } = props;
    const titleId = useId('title');

    const onCancel = () => {
        handleCloseDialog();
    }
    const onAddUser = () => {
        handleAddUser();
    }
    const onChangeUserID = (event: any) => {

    }
    const onChangeUserName = (event: any) => {

    }
    const onChangeMail = (event: any) => {

    }
    const onDownloadBarcode = () => {
        const canvas = document.getElementById(lastUserBarcode) as HTMLCanvasElement;
        const barcodeURL = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(barcodeURL)
        let aEl = document.createElement("a");
        aEl.href = barcodeURL;
        aEl.download = "BarCode"+lastUserBarcode+".png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <div >
            <Modal
                titleAriaId={titleId}
                isOpen={isShowDialog}
                // onDismiss={() => onClose()}
                isBlocking={false}
                isModeless={false}
                containerClassName={contentStyles.container}
                dragOptions={undefined}
                className="popup is-animated">

                <div className={contentStyles.header}>
                    <div className={contentStyles.headerInside}>
                        <IconButton
                            styles={iconButtonStyles}
                            ariaLabel="Close popup modal"
                            onClick={() => onCancel()}>
                            <Image src="assets/Icon/CloseIcon.svg" className="confirm-close-image" />
                        </IconButton>
                    </div>
                </div>
                <div className="flex-c flex-1 add-user-body">
                    <p className="label-common add-user-title">{OFUtils.translate("addUser.title")}</p>
                    <div className="add-user-container">
                        <div className="flex-r flex-1 add-user-form">
                            <table >
                                <tbody>
                                    <tr>
                                        <td className="add-user-form-titile">
                                            <Label className="label-common">{OFUtils.translate("addUser.lbl1")}</Label>
                                        </td>
                                        <td className="add-user-form-input">
                                            <TextField className="add-user-textfield" required onChange={() => onChangeUserID(event)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="add-user-form-titile">
                                            <Label className="label-common">{OFUtils.translate("addUser.lbl2")}</Label>
                                        </td>
                                        <td className="add-user-form-input">
                                            <TextField className="add-user-textfield" onChange={() => onChangeUserName(event)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="add-user-form-titile">
                                            <Label className="label-common">{OFUtils.translate("addUser.lbl3")}</Label>
                                        </td>
                                        <td className="add-user-form-input">
                                            <TextField className="add-user-textfield" onChange={() => onChangeMail(event)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="add-user-form-titile barcode-item">
                                            <Label className="label-common">{OFUtils.translate("addUser.lbl4")}</Label>
                                        </td>
                                        <td className="add-user-form-input">
                                            <div className="flex-r add-user-barcode">
                                                <div className="add-user-barcode-img">
                                                    <Barcode value={lastUserBarcode} />
                                                </div>
                                                <div>
                                                    <IconButton
                                                        ariaLabel="Download barcode"
                                                        onClick={() => onDownloadBarcode()}>
                                                        <Image src="assets/Icon/DownLoad.svg" className="download-barcode-image" />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="add-user-btn-container">
                        <DefaultButton text={OFUtils.translate("addUser.btn1")} className="label-common btn-add-user btn-3d" onClick={() => onAddUser()} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

interface IAddUserProps {
    isShowDialog: boolean,
    lastUserBarcode: string,
    handleCloseDialog: any,
    handleAddUser: any,

}

const mapStateToProps = (state: any) => {
    return {
        isShowDialog: state.admin.isShowAddUserDialog,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleCloseDialog: () => {
            dispatch({
                type: CLEAR_SHOW_ADD_USER_DIALOG
            });
        },
        handleAddUser: (userId: any) => {

        }
    }
};

export const AddUserDialog = connect(mapStateToProps, mapDispatchToProps)(AddUserDialogCP);
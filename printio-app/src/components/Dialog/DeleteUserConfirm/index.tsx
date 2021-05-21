import { DefaultButton, IconButton, Image, Label, mergeStyleSets, Modal } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';
import OFUtils from 'commons/OFUtils';
import { connect } from 'react-redux';
import { CLEAR_SHOW_CONFIRM_DELETE_USER } from 'commons/Types';
import './DeleteUserConfirm.css'

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '695px',
        height: '420px',
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

const DeleteUserConfirmCP = (props: IProps) => {
    const { isShowDialog, userDeleted, handleCloseDialog, handleDeleteUser } = props;
    const titleId = useId('title');

    const onCancel = () => {
        handleCloseDialog();
    }
    const onDeleteUser = () => {
        handleDeleteUser(userDeleted.id);
    }
    return (
        <div >
            {userDeleted && <Modal
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
                <div className="confirm-body">
                    <p className="label-common message-confirm">{OFUtils.translate("confirmDeleteUser.msg")}</p>
                    <div className="confirm-user-info">
                        <div className="flex-r conf-user-info-container">
                            <div className="conf-user-info-title">
                                <Label className="label-common">ユーザー</Label>
                            </div>
                            <div className="conf-user-info">
                                <Label className="label-common">{userDeleted.id}　{userDeleted.name}</Label>
                            </div>
                        </div>
                    </div>
                    <div className="confirm-btn-container">
                        <DefaultButton text={OFUtils.translate("confirmDeleteUser.btn1")} className="label-common btn-delete-user btn-3d" onClick={() => onDeleteUser()} />
                    </div>
                </div>
            </Modal>}
        </div>
    );
}

interface IProps {
    isShowDialog: boolean,
    userDeleted: any,
    handleCloseDialog: any,
    handleDeleteUser: any,
}

const mapStateToProps = (state: any) => {
    return {
        isShowDialog: state.admin.isShowConfirmDeleteUser,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleCloseDialog: () => {
            dispatch({
                type: CLEAR_SHOW_CONFIRM_DELETE_USER
            });
        },
        handleDeleteUser: (userId: any) => {

        }
    }
};

export const DeleteUserConfirm = connect(mapStateToProps, mapDispatchToProps)(DeleteUserConfirmCP);
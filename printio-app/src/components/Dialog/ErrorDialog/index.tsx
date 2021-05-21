/*********************************************** */
//              KLEENTEX - OPEN FACTORY           /
//       WRITTEN BY: Van Bao	2021/04/23        /
/*********************************************** */

/*********************************************** */
//           Import library or component          /
/*********************************************** */
import { DefaultButton, Image, IconButton, Label, Modal, mergeStyleSets } from '@fluentui/react';
import { connect } from 'react-redux';
import './ErrorDialog.css';
import { CLEAR_SHOW_ERROR } from 'commons/Types';
import OFUtils from 'commons/OFUtils';
import { useId } from '@fluentui/react-hooks';

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '768px',
        height: '350px',
        background: '#FFFFFF',
        borderRadius: '10px'
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
    },
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

const ErrorDialogCP = (props: IErrorDialogProps) => {
    const { isShowError, errormessage, handleGoBack } = props;
    const titleId = useId('title');
    const onGoBack = () => {
        handleGoBack();
    }

    return (
        <div>
            <Modal
                titleAriaId={titleId}
                isOpen={isShowError}
                isBlocking={false}
                isModeless={false}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                    <div className={contentStyles.headerInside}>
                        <IconButton
                            styles={iconButtonStyles}
                            ariaLabel="Close popup modal"
                            onClick={() => onGoBack()}>
                            <Image src='assets/Icon/CloseIcon.svg' className="image-close-icon" />
                        </IconButton>
                    </div>
                </div>
                <div className="error-body">
                    <div className="error-title">
                        <Image src='assets/Icon/WarningIcon.svg' className="" />
                        <p className="title-txt">{OFUtils.translate("error.title")}</p>
                    </div>
                    <p className="error-message">{errormessage}</p>
                    <DefaultButton text={OFUtils.translate("scanError.btn1")} className="err-btn btn-3d" onClick={() => onGoBack()} />
                </div>
            </Modal>
        </div>
    )
}

/*********************************************** */
//       Define property of components            /
/*********************************************** */
interface IErrorDialogProps {
    isShowError: boolean,
    errormessage: string,
    handleGoBack: any,
};
const mapStateToProps = (state: any) => {
    return {
        isShowError: state.common.isShowError,
        errormessage: state.common.messageError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleGoBack: () => {
            dispatch({
                type: CLEAR_SHOW_ERROR,
            })
        }
    }
};
export const ErrorDialog = connect(mapStateToProps, mapDispatchToProps)(ErrorDialogCP);

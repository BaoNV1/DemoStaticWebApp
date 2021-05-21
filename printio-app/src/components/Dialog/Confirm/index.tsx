import * as React from 'react';
import { useId, } from '@fluentui/react-hooks';
import {
  mergeStyleSets,
  Modal,
  Image,
} from '@fluentui/react';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { connect } from "react-redux";
import { CLEAR_SHOW_CONFIRM } from 'commons/Types';
import OFUtils from 'commons/OFUtils';
import './ConfirmDialog.css'
import { LineWork } from 'commons/Enum';
import ProductService from 'services/product.service'

const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
    width: '768px',
    height: '350px',
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

const ConfirmDialogCP = (props: IConfirmDialogProps) => {

  const { isShowDialog, message, state, memo, handleCancelPopup, handleHoldProduct } = props;
  const titleId = useId('title');
  const onClose = () => {

  }
  const onCancel = () => {
    handleCancelPopup();
  }
  const onHoldProduct = () => {
    handleHoldProduct(state, memo)
  }
  return (
    <div >
      <Modal
        titleAriaId={titleId}
        isOpen={isShowDialog}
        onDismiss={() => onClose()}
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
          <p className="text-message">{message}</p>
          <div className="btn-container">
            <DefaultButton text={OFUtils.translate("confirm.btn1")} className="btn-confirm confirm-cancel-button btn-3d" onClick={() => onCancel()} />
            <DefaultButton text={OFUtils.translate("confirm.btn2")} className="btn-confirm confirm-hold-button btn-3d" onClick={() => onHoldProduct()} />
          </div>
        </div>
      </Modal>
    </div>
  );

}

interface IConfirmDialogProps {
  isShowDialog: boolean,
  handleCancelPopup: any,
  message: string,
  memo: string,
  state: LineWork,
  handleHoldProduct: any,
}

const mapStateToProps = (state: any) => {
  return {
    isShowDialog: state.common.isShowConfirm,
    message: state.common.messageConfirm,
    state: state.lineWorker.lineSelect,
    memo: state.lineWorker.errorMemoOfProduct,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleCancelPopup: () => {
      dispatch({
        type: CLEAR_SHOW_CONFIRM
      });
    },
    handleHoldProduct: (stateProduct: LineWork, memo: string) => {
      ProductService.holdProduct(dispatch, stateProduct, memo);
    },
  }
};
export const ConfirmDialog = connect(mapStateToProps, mapDispatchToProps)(ConfirmDialogCP);

import instance from "commons/ApiConfig";
import { CLEAR_SCAN_PRODUCT, SET_FLAG_SCAN_PRODUCT, SET_SCAN_PRODUCT, SET_MESSAGE, SET_SHOW_PROCESS, SET_NET_PROCESS, CLEAR_SHOW_CONFIRM, SET_SHOW_ERROR } from "commons/Types";
import { IProduct } from "models/IProduct";
import { LineWork } from "commons/Enum";
import OFUtils from '../commons/OFUtils'

const scanProduct = (dispatch: any, barcode: string, lineSelected: LineWork, isPretreatment: boolean) => {
  return instance.post("product/scan", {
    barcode: barcode
  })
    .then((response) => {
      if (response.data.product) {
        let result = false;
        const product = JSON.parse(JSON.stringify(response.data.product));
        if (product.errorMemo) {
          dispatch({
            type: SET_SHOW_ERROR,
            payload: OFUtils.translate("scanError.productError"),
          });
        } else {
          if (product.state === lineSelected) {
            if (product.state === LineWork.Materials) {
              if (product.whiteBase == isPretreatment) {
                result = true;
              } else {
                // show message error
                dispatch({
                  type: SET_SHOW_ERROR,
                  payload: OFUtils.translate("scanError.InCorrect"),
                });

              }
            } else {
              result = true;
            }
          } else {
            // show message error
            dispatch({
              type: SET_SHOW_ERROR,
              payload: OFUtils.translate("scanError.notmap"),
            });
          }

          if (result) {
            dispatch({
              type: SET_SCAN_PRODUCT,
              payload: product,
            });

            setTimeout(() => {
              const userLogin = OFUtils.getUserLogin();
              updateUserLoginToProduct(dispatch, product.id, userLogin.factoryId, userLogin.displayName, product.state);
            }, 2000);
          }
        }
      } else {
        // case product not exist
        // show message error
        dispatch({
          type: SET_SHOW_ERROR,
          payload: OFUtils.translate("scanError.notExist"),
        });
      }
    },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: CLEAR_SCAN_PRODUCT,
        });

        dispatch({
          type: SET_SHOW_ERROR,
          payload: message,
        });
      }
    );
}

const updateUserLoginToProduct = (dispatch: any, id: any, factoryId: any, proBy: any, proName: any) => {
  return instance.post("product/updateUserLoginToProduct", {
    id: id,
    factoryId: factoryId,
    processBy: proBy,
    processName: proName
  })
    .then((response) => {
      if (response.data.lineDetail) {
        const productDetail = JSON.parse(JSON.stringify(response.data.lineDetail));
        dispatch({
          type: SET_SHOW_PROCESS,
          payload: productDetail,
        });
      } else {
        dispatch({
          type: SET_SHOW_ERROR,
          payload: OFUtils.translate("scanError.startErr"),
        });
      }
    },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: CLEAR_SCAN_PRODUCT,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
      }
    );
}

const updateStateOfProduct = (dispatch: any, stateProduct: LineWork, memo: string) => {
  dispatch({
    type: SET_NET_PROCESS
  });
}

const holdProduct = (dispatch: any, stateProduct: LineWork, errormemo: string) => {
  dispatch({
    type: CLEAR_SHOW_CONFIRM
  });
  dispatch({
    type: SET_NET_PROCESS
  });
}

export default { scanProduct, updateStateOfProduct, holdProduct };

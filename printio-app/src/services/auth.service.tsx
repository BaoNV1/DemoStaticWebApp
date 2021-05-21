import instance from "commons/ApiConfig";
import OFUtils from "commons/OFUtils";
import { LINE_LOGOUT, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SET_MESSAGE, SET_SHOW_ERROR } from "commons/Types";

const login = async (dispatch: any, barcode: string, factoryId: string) => {
    return instance.post("login", {
        barcodeID: barcode,
        factoryId: factoryId,
    })
        .then((response) => {
            console.log(response.data);
            if (response.data.userLogin) {
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data,
                });
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_SHOW_ERROR,
                    payload: OFUtils.translate("loginError.notExist"),
                });
            }

        })
        .catch((error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                    
                console.log(error.response.data);

                dispatch({
                    type: LOGIN_FAIL,
                });

                dispatch({
                    type: SET_SHOW_ERROR,
                    payload: message,
                });
            }
        );
};

const logout = (dispatch: any) => {
    localStorage.removeItem("user");
    dispatch({
        type: LOGOUT,
    });
    dispatch({
        type: LINE_LOGOUT,
    });
};

export default {
    login,
    logout,
};
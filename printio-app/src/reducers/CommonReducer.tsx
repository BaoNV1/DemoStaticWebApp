import { CLEAR_SHOW_CONFIRM, CLEAR_SHOW_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_SHOW_CONFIRM, SET_SHOW_ERROR, SHOW_LOGOUT } from "commons/Types";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || '') : null;
const defaultState = {
    isLoggedIn: user ? true : false,
    userLogin: user,
    isShowError: false,
    isShowConfirm: false,
    isShowLogout: false,
    messageConfirm: '',
    messageError: '',
};

const CommonReducer = function (state = defaultState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                userLogin: payload,
            });

        case LOGIN_FAIL:
            return Object.assign({}, state, {
                isLoggedIn: false,
                userLogin: null,
            });
        case SHOW_LOGOUT:
            return Object.assign({}, state, {
                isShowLogout: payload,
            });
        case LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                userLogin: null,
                isShowLogout: false,
            });
        case SET_SHOW_CONFIRM:
            return Object.assign({}, state, {
                isShowConfirm: true,
                messageConfirm: payload.messConfirm,
            });
        case CLEAR_SHOW_CONFIRM:
            return Object.assign({}, state, {
                isShowConfirm: false,
                messageConfirm: '',
            });

        case SET_SHOW_ERROR:
            return Object.assign({}, state, {
                isShowError: true,
                messageError: payload,
            });
        case CLEAR_SHOW_ERROR:
            return Object.assign({}, state, {
                isShowError: false,
                messageError: '',
            });

        default:
            return state;
    }

}
export default CommonReducer
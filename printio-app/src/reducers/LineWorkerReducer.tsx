import { CLEAR_LINE_CHOICE, CLEAR_SCAN_PRODUCT, CLEAR_WORK_START, SET_SCAN_PRODUCT, SET_LINE_CHOICE, SET_SHOW_PROCESS, SET_WORK_START, LINE_LOGOUT, SET_NET_PROCESS, SET_SHOW_DETAIL, CLEAR_SHOW_DETAIL, SET_SHOW_CONFIRM, CLEAR_SHOW_CONFIRM, SET_SEN_MEMO, SET_ERROR_MEMO } from "commons/Types";

const defaultState = {
    isWorkStart: false,
    lineSelect: null,
    isPretreatment: false,
    isScanProduct: false,
    product: null,
    productDetail: null,
    isShowProcess: false,
    nextProcess: null,
    isShowDetailProduct: false,
    memoOfProduct: null,
    errorMemoOfProduct: null,
};
const LineWorkerReducer = function (state = defaultState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case SET_WORK_START:
            return Object.assign({}, state, {
                isWorkStart: true,
            });

        case CLEAR_WORK_START:
            return Object.assign({}, state, {
                isWorkStart: false,
            });
        case SET_LINE_CHOICE:
            return Object.assign({}, state, {
                lineSelect: payload.lineSelect,
                isPretreatment: payload.isPretreatment,
                nextProcess: payload.nextProcess,
            });
        case CLEAR_LINE_CHOICE:
            return Object.assign({}, state, {
                lineSelect: null,
                isPretreatment: false,
            });
        case SET_SCAN_PRODUCT:
            return Object.assign({}, state, {
                isScanProduct: true,
                product: payload,
            });
        case SET_SHOW_PROCESS:
            return Object.assign({}, state, {
                isShowProcess: true,
                productDetail: payload,
                memoOfProduct: payload.right2Option,
            });
        case CLEAR_SCAN_PRODUCT:
            return Object.assign({}, state, {
                isScanProduct: false,
                product: null
            });
        case LINE_LOGOUT:
            return Object.assign({}, state, {
                isWorkStart: false,
                lineSelect: null,
                isPretreatment: false,
                isScanProduct: false,
                product: null,
                isShowProcess: false,
                productDetail: null,
                nextProcess: null,
                memoOfProduct: null,
                errorMemoOfProduct: null,
            });
        case SET_NET_PROCESS:
            return Object.assign({}, state, {
                lineSelect: null,
                isPretreatment: false,
                isScanProduct: false,
                product: null,
                isShowProcess: false,
                productDetail: null,
                nextProcess: null,
                memoOfProduct: null,
                errorMemoOfProduct: null,
            });
        case SET_SHOW_DETAIL:
            return Object.assign({}, state, {
                isShowDetailProduct: true,
            });
        case CLEAR_SHOW_DETAIL:
            return Object.assign({}, state, {
                isShowDetailProduct: false,
            });
        case SET_SHOW_CONFIRM:
            return Object.assign({}, state, {
                // errorMemoOfProduct: payload.errorMemo,
            });
        case CLEAR_SHOW_CONFIRM:
            return Object.assign({}, state, {
                // errorMemoOfProduct: '',
            });
        case SET_SEN_MEMO:
            return Object.assign({}, state, {
                memoOfProduct: payload,
            });
        case SET_ERROR_MEMO:
            return Object.assign({}, state, {
                errorMemoOfProduct: payload,
            });
        default:
            return state;
    }
}
export default LineWorkerReducer
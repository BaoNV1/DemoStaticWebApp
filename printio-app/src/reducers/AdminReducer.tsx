import { LeftMenu, ProcessSettingTabs } from "commons/Enum";
import { SET_LEFT_MENU_SELECT, SET_SHOW_PROCESS_SETTING, CLEAR_SHOW_PROCESS_SETTING, SET_PROCESS_SETTING_TAB_SELECT, SET_SHOW_CONFIRM_DELETE_USER, CLEAR_SHOW_CONFIRM_DELETE_USER, CLEAR_SHOW_ADD_USER_DIALOG, SET_SHOW_ADD_USER_DIALOG } from "commons/Types";

const defaultState = {
    leftMenuSelected: LeftMenu.Home,
    isShowProcessSetting: false,
    processSettingTabSelect: ProcessSettingTabs.UserInfo,
    isShowConfirmDeleteUser: false,
    isShowAddUserDialog: false,

};
const AdminReducer = function (state = defaultState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case SET_LEFT_MENU_SELECT:
            return Object.assign({}, state, {
                leftMenuSelected: payload,
            });
        case SET_SHOW_PROCESS_SETTING:
            return Object.assign({}, state, {
                isShowProcessSetting: true,
            });
        case CLEAR_SHOW_PROCESS_SETTING:
            return Object.assign({}, state, {
                isShowProcessSetting: false,
            });
        case SET_PROCESS_SETTING_TAB_SELECT:
            return Object.assign({}, state, {
                processSettingTabSelect: payload,
            });
        case SET_SHOW_CONFIRM_DELETE_USER:
            return Object.assign({}, state, {
                isShowConfirmDeleteUser: true,
            });
        case CLEAR_SHOW_CONFIRM_DELETE_USER:
            return Object.assign({}, state, {
                isShowConfirmDeleteUser: false,
            });
        case SET_SHOW_ADD_USER_DIALOG:
            return Object.assign({}, state, {
                isShowAddUserDialog: true,
            });
        case CLEAR_SHOW_ADD_USER_DIALOG:
            return Object.assign({}, state, {
                isShowAddUserDialog: false,
            });
        default:
            return state;
    }
}
export default AdminReducer
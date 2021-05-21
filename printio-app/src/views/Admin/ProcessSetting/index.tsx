import { DefaultButton, IconButton, Image, Label, MaskedTextField, mergeStyleSets, Modal, TextField } from "@fluentui/react";
import { useId } from "@fluentui/react-hooks";
import { ProcessSettingTabs } from "commons/Enum";
import OFUtils from "commons/OFUtils";
import { CLEAR_SHOW_PROCESS_SETTING, SET_PROCESS_SETTING_TAB_SELECT, SET_SHOW_ADD_USER_DIALOG, SET_SHOW_CONFIRM_DELETE_USER } from "commons/Types";
import { AddUserDialog } from "components/Dialog/AddUserDialog";
import { DeleteUserConfirm } from "components/Dialog/DeleteUserConfirm";
import React, { useState } from "react";
import { connect } from "react-redux";
import './ProcessSetting.css'

const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '1120px',
        height: '710px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF'
    },
    header: {
        width: '100%',
        height: '70px',
    },
    headerInside: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexFlow: 'row nowrap',
    },

});
const iconButtonStyles = {
    root: {
        marginLeft: 'auto',
        marginTop: '31px',
        marginRight: '20px',
        float: 'right',
        color: 'rgb(119,119,119)',
        height: '25px',
        with: '100%'
    },
    rootHovered: {
    },
};

const ProcessSettingCP = (props: IProcessSettingProps) => {
    const { isShowProcessSetting, tabSelect, handleCloseProcessSetting, handleTabSelect, handleDeleteUser, handleOpenAddUser } = props;
    const titleId = useId('title');
    const [userDeleted, setUserDeleted] = useState(null);
    const tabs = [
        { id: ProcessSettingTabs.UserInfo, name: "ユーザー情報編集" },
        { id: ProcessSettingTabs.WorkingTime, name: "作業時間変更" },
    ];

    const listUser = [
        { id: 1, name: "田中太郎", isEdit: true },
        { id: 2, name: "田中太郎", isEdit: false },
        { id: 3, name: "田中太郎", isEdit: false },
        { id: 4, name: "田中太郎", isEdit: false },
        { id: 5, name: "田中太郎", isEdit: false },
        { id: 6, name: "田中太郎", isEdit: false },
        { id: 7, name: "田中太郎", isEdit: false },
        { id: 8, name: "田中太郎", isEdit: false },
        { id: 9, name: "田中太郎", isEdit: false },
        { id: 10, name: "田中太郎", isEdit: false },
        { id: 11, name: "田中太郎", isEdit: false },
        { id: 12, name: "田中太郎", isEdit: false },
        { id: 13, name: "田中太郎", isEdit: false },
    ];

    const listWork = [
        { id: 1, name: "資材受入",time: "00：50", isEdit: true },
        { id: 2, name: "前処理",time: "00：50", isEdit: false },
        { id: 3, name: "製造",time: "00：50", isEdit: false },
        { id: 4, name: "乾燥",time: "00：50", isEdit: false },
        { id: 5, name: "QC",time: "00：50", isEdit: false },
        { id: 6, name: "梱包",time: "00：50", isEdit: false },
        { id: 7, name: "出荷",time: "00：50", isEdit: false },
    ];

    const onClose = () => {
        handleCloseProcessSetting();
    }
    const onChangeTab = (tabId: any) => {
        handleTabSelect(tabId);
    }
    const onUpdateUser = (user: any) => {
        
    }
    const onSaveUpdateUser = (user: any) => {

    }
    const onDeleteUser = (user: any) => {
        setUserDeleted(user);
        handleDeleteUser();
    }
    const onAddUser = () => {
        handleOpenAddUser();
    }
    const onChangeUserName = (event: any) => {

    }
    const onChangeWorkTime = (event: any) => {

    }
    const onSaveUpdateWorking = (work: any) => {

    }
    const onUpdateWorking = (work: any) => {

    }
    return (
        <div>
            <Modal
                titleAriaId={titleId}
                isOpen={isShowProcessSetting}
                isBlocking={false}
                isModeless={false}
                containerClassName={contentStyles.container}
                dragOptions={undefined}
                allowTouchBodyScroll={false}
            >
                <div className={contentStyles.header}>
                    <div className={contentStyles.headerInside}>
                        <IconButton
                            styles={iconButtonStyles}
                            ariaLabel="Close popup modal"
                            onClick={() => onClose()}>
                            <Image src='assets/Icon/CloseIcon.svg' className="image-close-icon" />
                        </IconButton>
                    </div>
                </div>
                <div className="setting-container">
                    <div className="flex-c flex-1 setting-body">
                        <div className="flex-r setting-tabs">
                            {tabs.map((tab) => {
                                const tabStyle = tab.id == tabSelect ? "flex-1 tab-item color-choose-tab" : "flex-1 tab-item color-tab";
                                const titleTab = tab.id == tabSelect ? "label-common tab-choose-title" : "label-common tab-title";
                                return (
                                    <a key={tab.id} className={tabStyle} onClick={() => { onChangeTab(tab.id) }}>
                                        <span className={titleTab}>{tab.name}</span>
                                    </a>
                                )
                            })}
                        </div>
                        <div className="flex-1 setting-list">
                            {/* Tab setting user choiced */}
                            {tabSelect === ProcessSettingTabs.UserInfo && <table className="flex-c" >
                                <thead>
                                    <tr>
                                        <th className="flex-c flex-1"><span className="label-common header-table">ユーザー</span></th>
                                        <th className="flex-1"></th>
                                    </tr>
                                </thead>
                                <tbody className="flex-c">
                                    {listUser.map((user) => {
                                        return (
                                            <tr key={user.id} className="flex-r" >
                                                <td className="flex-c flex-1 user-info-container">
                                                    {/* case button Edit clicked */}
                                                    {user.isEdit &&
                                                        <div className="flex-r">
                                                            <Label className="label-common user-info-edit">{user.id}　</Label>
                                                            <TextField defaultValue={user.name} className="" required onChange={() => onChangeUserName(event)} />
                                                        </div>}
                                                    {/* case button Edit not clicked */}
                                                    {!user.isEdit && <Label className="label-common user-info">{user.id}　{user.name}</Label>}
                                                </td>
                                                <td className="flex-1 last-column">
                                                    <div className="flex-r active-area">
                                                        {/* case button Edit clicked */}
                                                        {user.isEdit && <DefaultButton text={OFUtils.translate("processSetting.btn4")}
                                                            className="label-common color-white setting-btn-confirm btn-3d"
                                                            onClick={() => onSaveUpdateUser(user)} />}
                                                        {/* case button Edit not clicked */}
                                                        {!user.isEdit && <DefaultButton text={OFUtils.translate("processSetting.btn1")}
                                                            className="label-common color-white setting-btn-update btn-3d"
                                                            onClick={() => onUpdateUser(user)} />}
                                                        {/* Button Delete user */}
                                                        <DefaultButton text={OFUtils.translate("processSetting.btn2")}
                                                            className="label-common color-white setting-btn-delete btn-3d"
                                                            onClick={() => onDeleteUser(user)} />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                            {/* Tab setting Working Time choiced */}
                            {tabSelect === ProcessSettingTabs.WorkingTime && <table className="flex-c" >
                                <thead>
                                    <tr>
                                        <th className="flex-c flex-1"><span className="label-common header-table">工程</span></th>
                                        <th className="flex-c flex-1"><span className="label-common header-table">1件あたりの作業時間</span></th>
                                    </tr>
                                </thead>
                                <tbody className="flex-c">
                                    {listWork.map((work) => {
                                        return (
                                            <tr key={work.id} className="flex-r" >
                                                <td className="flex-c flex-1 working-name-container">
                                                    <Label className="label-common working-name">{work.name}</Label>
                                                </td>
                                                <td className="flex-1 last-column">
                                                    <div className="flex-r working-time-container">
                                                        {/* case button Edit not clicked */}
                                                        {!work.isEdit && <Label className="flex-1 label-common working-time">{work.time}</Label>}
                                                        {/* case button Edit clicked */}
                                                        {work.isEdit && 
                                                        <MaskedTextField value="00：50" mask="99：99" className="flex-1 working-time-input" required onChange={() => onChangeWorkTime(event)} />}
                                                        {/* case button Edit clicked */}
                                                        {work.isEdit && <DefaultButton text={OFUtils.translate("processSetting.btn4")}
                                                            className="label-common color-white setting-btn-confirm btn-3d"
                                                            onClick={() => onSaveUpdateWorking(work)} />}
                                                        {/* case button Edit not clicked */}
                                                        {!work.isEdit && <DefaultButton text={OFUtils.translate("processSetting.btn1")}
                                                            className="label-common color-white setting-btn-update btn-3d"
                                                            onClick={() => onUpdateWorking(work)} />}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                        </div>
                        {tabSelect === ProcessSettingTabs.UserInfo && <div className="flex-r setting-footer">
                            <DefaultButton text={OFUtils.translate("processSetting.btn3")}
                                className="label-common color-white btn-add-user btn-3d"
                                onClick={() => onAddUser()} />
                        </div>}
                    </div>
                </div>
                <DeleteUserConfirm userDeleted={userDeleted}/>
                <AddUserDialog lastUserBarcode={'4582573980454'}/>
            </Modal>
        </div>
    );
}

interface IProcessSettingProps {
    isShowProcessSetting: boolean,
    tabSelect: ProcessSettingTabs,
    handleCloseProcessSetting: any,
    handleTabSelect: any,
    handleDeleteUser: any,
    handleOpenAddUser: any,
}

const mapStateToProps = (state: any) => {
    return {
        isShowProcessSetting: state.admin.isShowProcessSetting,
        tabSelect: state.admin.processSettingTabSelect,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleCloseProcessSetting: () => {
            dispatch({
                type: CLEAR_SHOW_PROCESS_SETTING
            });
        },
        handleTabSelect: (tab: ProcessSettingTabs) => {
            dispatch({
                type: SET_PROCESS_SETTING_TAB_SELECT,
                payload: tab,
            });
        },
        handleDeleteUser: () => {
            dispatch({
                type: SET_SHOW_CONFIRM_DELETE_USER,
            });
        },
        handleOpenAddUser: () => {
            dispatch({
             type: SET_SHOW_ADD_USER_DIALOG,   
            });
        }
    }
};

export const ProcessSetting = connect(mapStateToProps, mapDispatchToProps)(ProcessSettingCP);
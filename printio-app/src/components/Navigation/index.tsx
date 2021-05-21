import { connect } from 'react-redux';
import './Navigation.css';
import { SET_LEFT_MENU_SELECT } from 'commons/Types';
import { Icon, Image, Label, Link, mergeStyleSets } from '@fluentui/react';
import React from 'react';
import { LeftMenu } from 'commons/Enum';

const NavigationCP = (props: NavigationProps) => {
    const {leftMenuSelected, handleLeftMenuSelect} = props;
    const navStyles = mergeStyleSets({
        home: {background: leftMenuSelected == LeftMenu.Home? 'rgba(49, 180, 149, 0.53)':'#102F5E', cursor: 'pointer'},
        order: {background: leftMenuSelected == LeftMenu.Orders? 'rgba(49, 180, 149, 0.53)':'#102F5E', cursor: 'pointer'},
        material: {background: leftMenuSelected == LeftMenu.Material? 'rgba(49, 180, 149, 0.53)':'#102F5E', cursor: 'pointer'},
        process: {background: leftMenuSelected == LeftMenu.ProcessTop? 'rgba(49, 180, 149, 0.53)':'#102F5E', cursor: 'pointer'},
    });

    const onSelectLeftMenu = (tabSelect: LeftMenu) => {
        handleLeftMenuSelect(tabSelect);
    }

    return (
        <div className="navigation-container color-blue">
            <ul>
                {/* Dashboard */}
                <li className={navStyles.home}>
                    <Link onClick={() => onSelectLeftMenu(LeftMenu.Home)} className="nav-link">
                        <Image src='assets/Icon/DashboardWhiteIcon.svg' className="nav-icon" />
                        <Label className="label-common nav-label">ホーム</Label>
                    </Link>
                </li>
                {/* Order List  */}
                <li className={navStyles.order}>
                    {/* routerLink="{{domain}}master-management/po-number" */}
                    <Link onClick={() => onSelectLeftMenu(LeftMenu.Orders)} className="nav-link">
                        <Image src='assets/Icon/OrderListWhiteIcon.svg' className="nav-icon" />
                        <Label className="label-common nav-label">注文一覧</Label>
                    </Link>
                </li>
                {/* Material Order */}
                <li className={navStyles.material}>
                    <Link onClick={() => onSelectLeftMenu(LeftMenu.Material)} className="nav-link">
                        <Image src='assets/Icon/MaterialOrderWhiteIcon.svg' className="nav-icon" />
                        <Label className="label-common nav-label">資材発注</Label>
                    </Link>
                </li>
                {/* Process control */}
                <li className={navStyles.process}>
                    <Link onClick={() => onSelectLeftMenu(LeftMenu.ProcessTop)} className="nav-link">
                        <Image src='assets/Icon/ProcessTopWhiteIcon.svg' className="nav-icon" />
                        <Label className="label-common nav-label">工程管理</Label>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
/*********************************************** */
//       Define property of components            /
/*********************************************** */
export interface NavigationProps {
    leftMenuSelected: any,
    handleLeftMenuSelect: any,
}

/*********************************************** */
//       Connect component to Redux store         /
/*********************************************** */
const mapStateToProps = (state: any) => {
    return {
        leftMenuSelected: state.admin.leftMenuSelected,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleLeftMenuSelect: (leftMenuSelected: LeftMenu) => {
            dispatch({
                type: SET_LEFT_MENU_SELECT,
                payload: leftMenuSelected,
            })
        }
    };
};

export const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationCP);
import { Image, mergeStyles, mergeStyleSets, Stack, TooltipHost } from '@fluentui/react';
import { connect } from 'react-redux';
import './Header.css';
import OFUtils from 'commons/OFUtils';
import { SHOW_LOGOUT} from "commons/Types";
import { useParams } from 'react-router';

const HeaderCP  = (props:HeaderProps) => {

    const {isLogined, isShowLogout, handleShowLogout} = props;

    const showLogout = () => {
        handleShowLogout(!isShowLogout);
    }
    
    // Styles definition
    const stackStyles = {
        root: {
            background: '#102F5E',
            height: 50,
        },
    };
    const userLogin = OFUtils.getUserLogin();
    return (
        <div>
            <Stack horizontal horizontalAlign="space-between" styles={stackStyles} className='headerClass'>
                <Stack horizontal horizontalAlign="start" >
                    <Image src='assets/Images/PrintioLogo.svg' className='logoStyle' />
                </Stack>
                {isLogined && userLogin && userLogin.id && 
                    <Stack horizontal horizontalAlign="end" className="header-right">
                        <TooltipHost>
                            <span className="header-text">{userLogin.id}</span>
                        </TooltipHost>
                        <TooltipHost>
                            <span className="header-text">{userLogin.displayName}</span>
                        </TooltipHost>
                        <TooltipHost>
                            <div onClick={()=> showLogout()}>
                                <Image src="assets/Images/Logout.svg" className="header-logout"/>
                            </div>
                        </TooltipHost>
                    </Stack>
                }
            </Stack>
        </div>
    );
}
/*********************************************** */
//       Define property of components            /
/*********************************************** */
export interface HeaderProps {
    isLogined: boolean,
    isShowLogout: boolean,
    handleShowLogout: any,
}

/*********************************************** */
//       Connect component to Redux store         /
/*********************************************** */
const mapStateToProps = (state: any) => {
    return {
        isLogined : state.common.isLoggedIn,
        isShowLogout: state.common.isShowLogout,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleShowLogout: (isShowLogout: boolean) => {
            dispatch({
                type: SHOW_LOGOUT,
                payload: isShowLogout,
            })
        }
    };
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderCP);
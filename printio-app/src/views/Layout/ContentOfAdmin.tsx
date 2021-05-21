import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { LeftMenu } from "commons/Enum";
import { Login } from 'views/Users/SignIn/Login';
import { Dashboard } from 'views/Admin/Dashboard';
import { MaterialOrder } from 'views/Admin/MaterialOrder';
import { OrderList } from 'views/Admin/OrderList';
import { Navigation } from 'components/Navigation';
import { ProcessTop } from 'views/Admin/ProcessTop';

const ContentOfAdminCP = (props: IContentLayout) => {
    const { isLogined, leftMenuSelected } = props;
    const factoryId = useParams();

    const getMainContent = () => {
        // case logined
        switch (leftMenuSelected) {
            // case tab ホーム selected
            case LeftMenu.Home:
                return <Dashboard />
            // case tab 注文一覧 selected
            case LeftMenu.Material:
                return <MaterialOrder />
            // case tab 資材発注 selected
            case LeftMenu.Orders:
                return <OrderList />
            // case tab 工程管理 selected
            case LeftMenu.ProcessTop:
                return <ProcessTop />
            // default tab ホーム selected
            default:
                return <Dashboard />
        }
    }
    const getContentDisplay = () => {
        // case not login
        if (!isLogined || !factoryId) {
            return <Login />;
        }

        return(
            <div className="flex-r admin-content">
                <Navigation/>
                {getMainContent()}
            </div>
        );
    }

    return (
        getContentDisplay()
    );
}

interface IContentLayout {
    isLogined: boolean,
    leftMenuSelected: any,
}

const mapStateToProps = (state: any) => {
    return {
        isLogined: state.common.isLoggedIn,
        leftMenuSelected: state.admin.leftMenuSelected,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {

    }
};
export const ContentOfAdmin = connect(mapStateToProps, mapDispatchToProps)(ContentOfAdminCP);
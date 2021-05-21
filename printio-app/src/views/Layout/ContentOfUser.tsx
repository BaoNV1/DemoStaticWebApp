import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { LineWork } from "commons/Enum";
import { SignInWellcome } from 'views/Users/SignInWelcome';
import { SignInChoice } from 'views/Users/SignInChoice';
import { ScanProduct } from 'views/Users/ScanProduct';
import { Process } from 'views/Users/Process';
import { Login } from 'views/Users/SignIn/Login';

const ContentOfUserCP = (props:IContentLayout) =>{
    const { isLogined, isWorkStart, lineSelect, isScanProduct, isShowProcess } = props;
    const factoryId = useParams();

    const getContentDisplay= () =>{
        // case not login
        if(!isLogined || !factoryId){
            return <Login/>;
        }
        // case logined
        // case not start work
        if(!isWorkStart){
            return <SignInWellcome/>;
        }
        //case work started
        // case not select line worker
        if(!lineSelect){
            return <SignInChoice/>;
        }
        //case selected line worker
        if(!isScanProduct){
            return <ScanProduct/>;
        }
        // waiting 2s to show process
        if(!isShowProcess){
            return <ScanProduct/>;
        }
        // show process
        return <Process/>;
    }

    return(
        getContentDisplay()
    );
}

interface IContentLayout {
    isLogined: boolean,
    isWorkStart: boolean,
    lineSelect: LineWork,
    isScanProduct: boolean,
    isShowProcess: boolean
}

const mapStateToProps = (state: any) => {
    return {
        isLogined: state.common.isLoggedIn,
        isWorkStart: state.lineWorker.isWorkStart,
        lineSelect : state.lineWorker.lineSelect,
        isScanProduct: state.lineWorker.isScanProduct,
        isShowProcess: state.lineWorker.isShowProcess
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
};
export const ContentOfUser = connect(mapStateToProps, mapDispatchToProps)(ContentOfUserCP);
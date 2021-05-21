import { DefaultButton, Label, mergeStyleSets } from '@fluentui/react';
import { LineWork } from 'commons/Enum';
import OFUtils from 'commons/OFUtils';
import { SET_SEN_MEMO } from 'commons/Types';
import { useState } from 'react';
import { connect } from 'react-redux';

const RightElement2CP = (props: IProps) => {
    const {lineSelect, name, option, rightOpt1, memoStr, handleSentMemo } = props;
    const [memoinput, setMemoinput] = useState("");
    // const [memoStr, setMemoStr] = useState(option);
    const listMemo = OFUtils.changeStringToArray(memoStr);
    const memoAreaStyles = mergeStyleSets({
        container: {
            width: '100%',
            height: rightOpt1 ? '38%' : '74%',
            display: 'flex',
            alignItems: 'center',
        },
        main: {
            width: '100%',
            height: rightOpt1 ? '90%' : '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.13))'
        },
        content: {
            width: '100%',
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '4px 0px',
            height: rightOpt1 ? '20%' : '40%',
        }
    });
    let memoElements: any[] = [];

    const getElementMemo = (item: any) => {
        return (
            <div key={item[2]} className="c-container-item-box-02">
                <div className="item-box-02-above">
                    <div className="container-image-above">
                        <div className="sharp-circle">
                            <Label className="sharp-circle-label">{OFUtils.avataText(item[1])}</Label>
                        </div>
                    </div>
                    <div className="container-label-above">
                        <Label className="label-box-above">{item[1] || ''}</Label>
                    </div>
                </div>
                <div className="item-box-02-alow">
                    <Label className="label-box-label">{item[2] || ''}</Label>
                </div>
            </div>
        );
    }

    listMemo.forEach(e => {
        if (e[0]) {
            memoElements.push(getElementMemo(e));
        }
    });

    const onSentMemo = () => {
        const user = OFUtils.getUserLogin();
        const memoStrNew = OFUtils.getFormatStringMemoProduct(lineSelect, user.displayName, memoinput);
        // setMemoStr(memoStr + memoStrNew);
        handleSentMemo(memoStr + memoStrNew);
        setMemoinput('');
    }

    const onMemoChange = (event: any) => {
        setMemoinput(event.target.value);
    }

    return (
        <div className={memoAreaStyles.container}>
            <div className={memoAreaStyles.main}>
                <div className="config-center-box">
                    <div className="cc-center-box">
                        <div className="container-item-box-01">
                            <Label className="item-box-01">{name}</Label>
                        </div>
                        <div className={memoAreaStyles.content}>
                            <div className="cc-container-item-box-02">
                                {memoElements}
                            </div>
                        </div>
                        <div className="container-item-box-03">
                            <div className="item-box-03">
                                <textarea value={memoinput} className="label-box-textfield" placeholder="メッセージ入力" onChange={() => onMemoChange(event)}></textarea>
                            </div>
                        </div>
                        <div className="container-item-box-04">
                            <div className="item-box-04">
                                <DefaultButton text={OFUtils.translate("process.btn8")} disabled={!memoinput} className="send-button" onClick={() => onSentMemo()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface IProps {
    lineSelect: LineWork,
    name: string,
    option: string,
    rightOpt1: any,
    memoStr: string,
    handleSentMemo: any,
}

const mapStateToProps = (state: any) => {
    return {
        lineSelect: state.lineWorker.lineSelect,
        memoStr: state.lineWorker.memoOfProduct,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleSentMemo: (memo: string) => {
            dispatch({
                type: SET_SEN_MEMO,
                payload: memo,
            });
        },
    }
};

export const RightElement2 = connect(mapStateToProps, mapDispatchToProps)(RightElement2CP);
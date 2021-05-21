import { useBarcode } from '@createnextapp/react-barcode';
import { Checkbox } from '@fluentui/react';
import { connect } from 'react-redux';
import { SET_ERROR_MEMO } from 'commons/Types';
import { useState } from 'react';
import { Barcode } from '../Barcode';

const iCheckbox = {
    width: 20,
    height: 20
}

const iLblCheckbox = {
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px'
};

const RightElement1CP = (props: IProps) => {
    const { name, options, errorMemo, handleSelectErrorOption } = props;
    let optionColum1: any[] = [];
    let optionColum2: any[] = [];
    const [selectOption, setSelectOption] = useState(false);

    const getBarcodeElement = () => {
        const { inputRef } = useBarcode({
            value: options[0][0],
            options: {
                displayValue: false,
                background: '#ffffff',
            }
        });
        return <canvas className="canvas-barcode-img" ref={inputRef} />;
    }

    const onChangeErrOption = (event: any) => {
        const option = event.target.name;
        const errorOptions = errorMemo ? errorMemo.split(',') : [];
        const index = errorOptions.indexOf(option, 0);
        if (index > -1) {
            errorOptions.splice(index, 1);
        }
        else{
            errorOptions.push(option);
        }

        handleSelectErrorOption(errorOptions.toString());
    }

    const getOptionElement = (option: any) => {
        return (
            <Checkbox key={option}
                className="item-error-checkbox" label={option}
                name = {option}
                // checked={false}
                onChange={() => onChangeErrOption(event)}
                styles={{
                    checkbox: iCheckbox,
                    label: iLblCheckbox
                }}
            />
        );
    }

    options.forEach(item => {
        if (item[0]) {
            for (let index = 0; index < item.length; index++) {
                if (index % 2 == 0) {
                    optionColum1.push(getOptionElement(item[index]));
                } else {
                    optionColum2.push(getOptionElement(item[index]));
                }
            }
        }
    });

    const getOtherElement = () => {
        return (
            <div className="item-error-area">
                <div className="item-error-option">
                    {optionColum1}
                </div>
                <div className="item-error-option">
                    {optionColum2}
                </div>
            </div>
        );
    }

    const getShow = () => {
        if (name == 'barcode') {
            return <Barcode value={options[0][0]}/>;
            // return getBarcodeElement();
        } else {
            return getOtherElement();
        }
    }
    return getShow();
}

interface IProps {
    name: string,
    options: any[][],
    errorMemo: string,
    handleSelectErrorOption: any,
}

const mapStateToProps = (state: any) => {
    return {
        errorMemo: state.lineWorker.errorMemoOfProduct,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleSelectErrorOption: (errMemo: string) => {
            dispatch({
                type: SET_ERROR_MEMO,
                payload: errMemo,
            });
        },
    }
};

export const RightElement1 = connect(mapStateToProps, mapDispatchToProps)(RightElement1CP);
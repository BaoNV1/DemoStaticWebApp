import { useBarcode } from "@createnextapp/react-barcode";

const BarcodeCP = (props: IProps) => {
    const { value } = props;
    const { inputRef } = useBarcode({
        value: value,
        options: {
            displayValue: false,
            background: '#ffffff',
        }
    });

    return <canvas id={value} className="canvas-barcode-img" ref={inputRef} />;
}

interface IProps {
    value: string,
}

export const Barcode = BarcodeCP;
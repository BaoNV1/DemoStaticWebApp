import { Label } from "@fluentui/react";
import OFUtils from "commons/OFUtils";
import { OFConstants } from 'commons/Constants';

const LeftElementCP = (props: IProps) => {
    const {name, options} = props;
    let optionElements: any[] = [];
    const validateValue = (val:any) => {
        if(isNaN(val)){ //Checked for numeric
            var dt=new Date(val);
            if(isNaN(dt.getTime())){ //Checked for date
              return val; //Return string if not date.
            }else{
              return OFUtils.getFormatWithMoment(val, OFConstants.LEFT_OPTION_DATE_FORMAT); //Return date
            }
          } else{
            return val; //Return string as it is number
          }
    }
    const getElement = (item: any) => {
        // case exist option name
        if(item[1]){
            return(
                <div key={item[0]} className="container-label-row-01">
                    <Label className="label-row-left">{item[0]}
                        <span className="label-row-right">：{validateValue(item[1])}</span>
                    </Label>
                </div>
            );
        }
        // case not exist option name
        return(
            <div key={item[0]} className="container-label-row-01">
                <Label className="label-row-right">{validateValue(item[0])}</Label>
            </div>
        );
    }
    
    options.forEach(e => {
        if (e[0]) {
            optionElements.push(getElement(e));
        }
    });
    return(
        <div className="container-content-row">
            {name && <div className="container-label-row-01">
                <Label className="title-label">{name}</Label>
            </div>}
            {optionElements}
        </div>
    );
}

interface IProps {
    name: string,
    options: any[][],
}

export const LeftElement = LeftElementCP;
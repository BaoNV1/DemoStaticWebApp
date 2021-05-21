import { LineWork } from 'commons/Enum';
import { Checkbox, DatePicker, DefaultButton, Dropdown, DropdownMenuItemType, ICheckboxStyleProps, ICheckboxStyles, Icon, IDatePickerStyles, IDropdownOption, IDropdownStyles, Image, ITextFieldProps, Label, SearchBox } from '@fluentui/react';
import { connect } from 'react-redux';
import './OrderList.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import React, { useState } from 'react';
import moment from 'moment';

initializeIcons(/* optional base url */);

const OrderListCP = (props: IOrderListProps) => {
    const {handleSearchOrder} = props
    const options: IDropdownOption[] = [
        { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        { key: 'grape', text: 'Grape' },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
    ];
    const [orderCode, setOrderCode] = useState('');
    const [orderStartTime, setOrderStartTime] = React.useState<Date | undefined>(undefined);
    const [orderEndTime, setOrderEndTime] = React.useState<Date | undefined>(undefined);
    const [accessPoint, setAccessPoint] = useState('');
    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');


    const onChangeOrderCode = (event:any) => {
        setOrderCode(event.target.value);
    }
    const onChangeAccessPoint = (selectedOption:any) => {
        setAccessPoint(selectedOption.text);
    }
    const onChangeProductName = (event:any) => {
        setProductName(event.target.value);
    }
    const onChangeProductCode = (event:any) => {
        setProductCode(event.target.value);
    }
    
    const onSearch = () => {
        let startTime = orderStartTime == undefined ? '' : moment(orderStartTime).format('YYYY/MM/DD');
        let endTime = orderEndTime == undefined ? '' : moment(orderEndTime).format('YYYY/MM/DD');
        handleSearchOrder(orderCode,startTime,endTime,accessPoint,productName,productName);
    }

    const list = [
        {id : 1, name : "CheckBox 1", date : '2021/02/12', isChecked : false},
        {id : 2, name : "CheckBox 2", date : '2021/02/14', isChecked : false},
        {id : 3, name : "CheckBox 3", date : '2021/02/10', isChecked : false},
        {id : 4, name : "CheckBox 4", date : '2021/02/07', isChecked : false},
        {id : 5, name : "CheckBox 5", date : '2021/02/23', isChecked : false},
        {id : 6, name : "CheckBox 6", date : '2021/02/11', isChecked : false},
        {id : 7, name : "CheckBox 7", date : '2021/04/3', isChecked : false},
        {id : 8, name : "CheckBox 8", date : '2021/05/11', isChecked : false},
        {id : 9, name : "CheckBox 9", date : '2021/06/11', isChecked : false},
        {id : 10, name : "CheckBox 90", date : '2021/07/11', isChecked : false},
        {id : 11, name : "CheckBox 91", date : '2021/08/11', isChecked : false},
        {id : 12, name : "CheckBox 92", date : '2021/05/21', isChecked : false},
        {id : 13, name : "CheckBox 93", date : '2021/05/01', isChecked : false},
    ];

    const list1 = [
        {id : 1, name : "CheckBox 11", date : '2021/01/01', isChecked : false},
        {id : 2, name : "ChecsdfkBox 22", date : '2021/01/05', isChecked : false},
        {id : 3, name : "ChecdfkBox 32", date : '2021/01/04', isChecked : false},
        {id : 4, name : "CheckBox 43", date : '2021/01/07', isChecked : false},
        {id : 5, name : "ChecksdfBox ", date : '2021/05/01', isChecked : false},
        {id : 6, name : "CheckBox 6123", date : '2021/05/06', isChecked : false},
        {id : 7, name : "ChecksBox 7123", date : '2021/05/03', isChecked : false},
        {id : 8, name : "CheckBox 1238", date : '2021/04/04', isChecked : false},
        {id : 9, name : "CheckBox 9", date : '2021/06/04', isChecked : false},
        {id : 10, name : "CheckBox 12310", date : '2021/03/03', isChecked : false},
        {id : 11, name : "ChesdfckBox ", date : '2020/05/01', isChecked : false},
        {id : 12, name : "CheckBox 12", date : '2022/05/01', isChecked : false},
        {id : 13, name : "asdzxcsdfckBox ", date : '2018/05/01', isChecked : false},
        {id : 15, name : "Che12sdf3wefx ", date : '2019/05/01', isChecked : false},
        {id : 16, name : "CheckBox 6123", date : '2022/05/01', isChecked : false},
        {id : 17, name : "CheckBox 7123", date : '2016/04/01', isChecked : false},
        {id : 18, name : "CheckBsdfox 1238", date : '2017/05/01', isChecked : false},
        {id : 19, name : "ds", date : '2021/05/01', isChecked : false},
        {id : 20, name : "sdzxcackBox ", date : '2021/05/01', isChecked : false},
        {id : 21, name : "zxchzxwfcwckBox ", date : '2021/05/01', isChecked : false},
        {id : 22, name : "zxchzxeckBox 12", date : '2021/05/01', isChecked : false},
        {id : 23, name : "CheckBox 11233", date : '2021/05/01', isChecked : false},
        {id : 24, name : "CheckBox 11", date : '2021/05/01', isChecked : false},
        {id : 25, name : "ChecasdkBox 22", date : '2021/05/01', isChecked : false},
        {id : 26, name : "Chec4wee35kBox 32", date : '2021/05/01', isChecked : false},
        {id : 27, name : "CheckBox 43", date : '2021/05/01', isChecked : false},
        {id : 28, name : "CheckergBox 5123", date : '2021/05/01', isChecked : false},
        {id : 29, name : "ChecfgkBox 6123", date : '2021/05/01', isChecked : false},
        {id : 30, name : "ChecedfkBox 7123", date : '2021/05/01', isChecked : false},
        {id : 31, name : "CheckBox 1238", date : '2021/05/01', isChecked : false},
        {id : 32, name : "CheckBox 9", date : '2021/05/01', isChecked : false},
        {id : 33, name : "CheckerBox 12310", date : '2021/05/01', isChecked : false},
        {id : 34, name : "ChecerkBox 11231", date : '2021/05/01', isChecked : false},
        {id : 35, name : "CheckcverBox 12", date : '2021/05/01', isChecked : false},
        {id : 36, name : "asdzxwcckBox ", date : '2021/05/01', isChecked : false},
        {id : 37, name : "Che12sd3x 5123", date : '2021/05/01', isChecked : false},
        {id : 38, name : "Checwer43kBox ", date : '2021/05/01', isChecked : false},
        {id : 39, name : "CheckBox 7123", date : '2021/05/01', isChecked : false},
        {id : 40, name : "CheckBox 1238", date : '2021/05/01', isChecked : false},
        {id : 41, name : "Czxczzxcvcqawx 9", date : '2021/05/01', isChecked : false},
        {id : 42, name : "sdzxcvackBox", date : '2021/05/01', isChecked : false},
        {id : 43, name : "zxchzxcxcwckBox ", date : '2021/05/01', isChecked : false},
        {id : 44, name : "zxchzxeckBox 12", date : '2021/05/01', isChecked : false},
        {id : 45, name : "CheckBox 11233", date : '2021/05/01', isChecked : false},
    ];

    const [isIndeterminateAll, setIsIndeterminateAll] = React.useState(false);
    const [isCheckAll, setIsCheckAll] = React.useState(false);
    const [checkedNumber, setCheckedNumber] = React.useState(0);
    
    const [listCheck, setListCheck] = React.useState(list);

    const tabs = [
        {id : 1, name : "全て 100"},
        {id : 2, name : "未対応 20"},
        {id : 3, name : "対応中 20"},
        {id : 4, name : "印刷中 20"},
        {id : 5, name : "出荷待ち 20"},
        {id : 6, name : "出荷済 20"},
        {id : 7, name : "差し戻し"},
        {id : 8, name : "保留 2"},
    ];

    const [chooseNumberTab, setChooseNumberTab] = React.useState(1);//Tab dang chon
    const [listTabs, setListTabs] = React.useState(tabs);
    const [isSortAsc, setIsSortAsc] = React.useState(true);
    const [nameColumnSort, setNameColumnSort] = React.useState('name');
    const onChangeTab = (tabNumber : any) => {
        setIsCheckAll(false);
        setIsIndeterminateAll(false);
        setCheckedNumber(0);
        setIsSortAsc(true);
        setNameColumnSort('name');
        if(tabNumber == 1){
            setListCheck(onSort(list,'name',true));
        }else if(tabNumber == 2){
            setListCheck(onSort(list1,'name',true));
        }
        const listTabsChoose = listTabs.filter((item)=>{return item.id == tabNumber});
        if(listTabsChoose.length > 0){
            setChooseNumberTab(listTabsChoose[0].id);
        }
    }
    const onClickSort = (nameColumn : any) => {
        setListCheck(onSort(listCheck,nameColumn,!isSortAsc));
        setIsSortAsc(!isSortAsc);
        setNameColumnSort(nameColumn);
    }

    const onSort = (items : Item[], nameColumn : any, isAsc : any)=>{
        if(isAsc){
            switch(nameColumn){
                case 'id': items.sort(function(a, b) {
                    return a.id-b.id;
                  });
                  break;
                case 'name': items.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });
                  break;
                case 'date': items.sort(function(a, b) {
                    var dateA = a.date;
                    var dateB = b.date;
                    if (dateA < dateB) {
                      return -1;
                    }
                    if (dateA > dateB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });
                  break;
            }
        }else{
            switch(nameColumn){
                case 'id': items.sort(function(b, a) {
                    return a.id-b.id;
                  });
                  break;
                case 'name': items.sort(function(b, a) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });
                  break;
                case 'date': items.sort(function(b, a) {
                    var dateA = a.date;
                    var dateB = b.date;
                    if (dateA < dateB) {
                      return -1;
                    }
                    if (dateA > dateB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });
                  break;
            }
        }
        return items;
    }

    const changeArrow = (nameColumn : any) => {
        if(nameColumn == nameColumnSort){
            if(isSortAsc){
                return <span><img className="img-up" src="assets/Icon/DownSortIcon.svg"/></span>
            }else{
                return <span><img className="img-down" src="assets/Icon/DownSortIcon.svg"/></span>
            }
        }else{
            return;
        }
    }
    
    const onChangeCheckBoxChild = (id : any)=>{
        const listItems = listCheck.filter((item)=>{return item.id == id});
        var number = checkedNumber;
        if(listItems.length > 0){
            if(listItems[0].isChecked){
                listItems[0].isChecked = false;
                setCheckedNumber(checkedNumber - 1);
                number -= 1;
            }else{
                listItems[0].isChecked = true;
                setCheckedNumber(checkedNumber + 1);
                number += 1;
            }
        }
        
        if(number == 0){
            setIsCheckAll(false);
            setIsIndeterminateAll(false);
        }else if (number == listCheck.length){
            setIsCheckAll(true);
            setIsIndeterminateAll(false);
        }else{
            setIsIndeterminateAll(true);
            setIsCheckAll(false);
        }
        setListCheck(listCheck);
    }

    const onChangeCheckBoxAll = () => {
        if(isIndeterminateAll){
            setIsCheckAll(true);
            setIsIndeterminateAll(false);
            setCheckedNumber(listCheck.length);
            listCheck.map((item)=>{
                item.isChecked = true;
            });
        }else{
            if(isCheckAll){
                setIsCheckAll(false);
                setIsIndeterminateAll(false);
                setCheckedNumber(0);
                listCheck.map((item)=>{
                    item.isChecked = false;
                });
            }else{
                setIsCheckAll(true);
                setIsIndeterminateAll(false);
                setCheckedNumber(listCheck.length);
                listCheck.map((item)=>{
                    item.isChecked = true;
                });
            }
        }
        setListCheck(listCheck);
    }


    return (
        // The Order List Screen
        <div className="flex-c flex-1 order-list-container">
            <div className="flex-r align-c dashboard-title">
                <div className="w-space50"></div>
                <Image src='assets/Icon/OrderListBlackIcon.svg' className="dashboard-title-icon" />
                <Label className="label-common dashboard-title-label">注文一覧</Label>
            </div>
            <div className="flex-r order-search">
                <div className="flex-r">
                    <Label className="label-common component-search-title">受注番号</Label>
                    <SearchBox className="search-frame" onChange={()=> {onChangeOrderCode(event)}}></SearchBox>
                </div>
                <div className="flex-r">
                    <Label className="label-common component-search-title">注文時期</Label>
                    <DatePicker placeholder="日付を選択" formatDate={(date) => moment(date).format('YYYY/MM/DD')} 
                    className="date-frame" onSelectDate={setOrderStartTime as (date: Date | null | undefined) => void} 
                    maxDate={orderEndTime} value={orderStartTime}/>
                    <Label className="label-common" style={{padding: '0px 10px'}}>~</Label>
                    <DatePicker placeholder="日付を選択" formatDate={(date) => moment(date).format('YYYY/MM/DD')} 
                    className="date-frame" onSelectDate={setOrderEndTime as (date: Date | null | undefined) => void}
                    minDate={orderStartTime} value={orderEndTime}/>
                </div>
                <div className="flex-r">
                    <Label className="label-common component-search-title">接続先</Label>
                    <Dropdown className="dropdown-frame" options={options} onChange={(e, selectedOption)=> {onChangeAccessPoint(selectedOption)}}/>
                </div>
            </div>
            <div className="flex-r order-search">
                <div className="flex-r">
                    <Label className="label-common component-search-title">品名</Label>
                    <SearchBox className="search-frame" onChange={()=> {onChangeProductName(event)}} ></SearchBox>
                </div>
                <div className="flex-r">
                    <Label className="label-common component-search-title">商品コード</Label>
                    <SearchBox className="search-frame" onChange={()=> {onChangeProductCode(event)}} ></SearchBox>
                </div>
                <div className="flex-r button-search-green">
                    <DefaultButton text="検索" className="next-process-button btn-3d button-search-title" onClick={() => {onSearch()}} />
                </div>
                <div className="flex-r button-search-red">
                    <DefaultButton text="検索" className="btn-process hold-button btn-3d button-search-title" onClick={() => {}} />
                </div>
            </div>
            <div className="flex-r tabs">
                {listTabs.map((tab)=>{
                    var style = tab.id == chooseNumberTab ? "tab-item color-choose-tab" : "tab-item color-tab";
                    var styleTitle = tab.id == chooseNumberTab ? "tab-choose-title" : "tab-title";
                    return <a key={tab.id} href="#" className={style} onClick={()=>{onChangeTab(tab.id)}}>
                                <span className={styleTitle}>{tab.name}</span>
                            </a>
                })}
            </div>
            <div>
                <table className="table-scroll small-first-col">
                    <thead>
                        <tr>
                            <th><Checkbox className="checkboxRow" checked={isCheckAll} indeterminate={isIndeterminateAll} onChange={()=>{onChangeCheckBoxAll()}}/></th>
                            <th onClick={()=>{onClickSort('id')}}>区分 {changeArrow('id')}</th>
                            <th onClick={()=>{onClickSort('name')}}>注文日 {changeArrow('name')} </th>
                            <th onClick={()=>{onClickSort('date')}}>受注番号 {changeArrow('date')}</th>
                            <th>商品コード</th>
                            <th>品名</th>
                            <th>色</th>
                            <th>サイズ</th>
                            <th>枚数</th>
                            <th>出荷日</th>
                        </tr>
                    </thead>
                    <tbody className="body-half-screen">
                        {listCheck.map((item)=>{
                            return <tr key={item.id}>
                            <td><Checkbox key={item.id} className='checkboxRow' checked={item.isChecked}  onChange={()=>{onChangeCheckBoxChild(item.id)}}/></td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                            <td>qwe</td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

class Item{
    id : any
    name : any
    date : any
    isChecked : any
}

interface IOrderListProps {
    
    handleSearchOrder: any,
}

const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleSearchOrder: (orderCode: string, orderStartTime: string, orderEndTime: string, accessPoint: string, productName: string, productCode: string, memo: string) => {
            console.log("orderCode: " +orderCode);
            console.log("orderStartTime: " +orderStartTime);
            console.log("orderEndTime: " +orderEndTime);
            console.log("accessPoint: " +accessPoint);
            console.log("productName: " +productName);
            console.log("productCode: " +productCode);
        },
    }
};
export const OrderList = connect(mapStateToProps, mapDispatchToProps)(OrderListCP);
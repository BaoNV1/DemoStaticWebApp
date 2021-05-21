import { DatePicker, DefaultButton, Image, Label } from '@fluentui/react';
import { DayOfWeek } from '@fluentui/react-northstar';
import OFUtils from 'commons/OFUtils';
import { SET_SHOW_PROCESS_SETTING } from 'commons/Types';
import ReactApexChart from 'react-apexcharts';
import { connect } from 'react-redux';
import { ProcessSetting } from '../ProcessSetting';
import './ProcessTop.css';

const ProcessTopCP = (props: IProcessTopProps) => {
    const {handleShowPeocessSetting} = props;

    const state = {
        series: [{
          data: [470, 540, 580, 690, 1100, 1200, 1380]
        },{
            data: [370, 240, 680, 990, 1500, 700, 880]
          }],
        fill:{type: 'solid'},
        options: {
          chart: {
              toolbar: {show:false},
            height: '100%'
          },
          colors:['#102F5E', '#2C987E'],
          plotOptions: {
            bar: {
                columnWidth: '65%',
                barHeight: '72px',
                horizontal: true,
                colors: {
                    backgroundBarOpacity: 0,
                    colors: {
                        backgroundBarOpacity: 0,
                    },
                },
                dataLabels: {
                    position: 'top'
                  }
            }
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#fff'],
              fontSize: '19px',
                fontFamily: 'Roboto',
                fontWeight:'bold'
            },
            formatter: function (val:any, opt:any) {
                if(opt.seriesIndex == 0) {
                    return val + "件"
                }else{
                    return val + "分"
                }
            },
            offsetX: -30,
          },
          xaxis: {
            categories: ['資材受入', '前処理', '製造', '乾燥', 'QC', '梱包', '出荷'
            ],
            labels: {
                show: false,
            }
          },
          yaxis: {
                show: true,
                labels: {
                    show: true,
                    // align: 'left',
                    offsetY: 0,
                    offsetX: 0,
                    maxWidth: 200,
                    style:{
                        fontSize: '34px',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        cssClass:'label-common processtop-graph-proc-name'
                    }
                }
          },
          legend: {
            show: false,
          }
        },
      };

      const firstDayOfWeek = DayOfWeek.Sunday;

      const onSearchByDate = (date: any) =>{

      }

      const onSettingDetail = () => {
        handleShowPeocessSetting();
      }

    return (
        <div className="flex-c flex-1 process-control-container">
            <div className="flex-r align-c processtop-title">
                <div className="left">
                    <Image src='assets/Icon/ProcessTopBlackIcon.svg' className="processtop-title-icon" />
                    <Label className="label-common main-title">工程管理</Label>
                </div>
                <div className="flex-r flex-1 right">
                    <Label className="label-common">日付検索</Label>
                    <DatePicker 
                    isRequired={ false } 
                    allowTextInput={ true } 
                    firstDayOfWeek={ firstDayOfWeek } 
                    onSelectDate={ date =>  onSearchByDate(date)} 
                    placeholder="日付を選択"
                    />
                </div>
            </div>
            <div className="flex-c flex-1 processtop-main">
                <div className="flex-r align-c processtop-mean-graph">
                    <div className="m-left">
                        <Label className="label-common date-graph">2021年3月15日（月）</Label>
                        <div className="graph-circle color-blue"></div>
                        <Label className="label-common graph-mean-name">作業件数</Label>
                        <div className="graph-circle color-green"></div>
                        <Label className="label-common graph-mean-name">作業時間</Label>
                    </div>
                    <div className="flex-1 m-right">
                        <DefaultButton text={OFUtils.translate("processtop.btn1")} className="label-common color-red processtop-btn-set btn-3d" onClick={() => onSettingDetail()} />
                    </div>
                </div>
                <div className="flex-c flex-1 processtop-graph-container">
                    <div className="flex-c flex-1 processtop-graph">
                        <div id="chart" className="flex-1">
                            <ReactApexChart options={state.options} fill={state.fill} series={state.series} type="bar" width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
            <ProcessSetting/>
        </div>
    )
}

interface IProcessTopProps {
    handleShowPeocessSetting: any,
}

const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        handleShowPeocessSetting: () => {
            dispatch({
                type: SET_SHOW_PROCESS_SETTING
            });
        }
    }
};
export const ProcessTop = connect(mapStateToProps, mapDispatchToProps)(ProcessTopCP);
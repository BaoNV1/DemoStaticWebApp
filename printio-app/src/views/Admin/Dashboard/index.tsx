import { Image, Label } from '@fluentui/react';
import { LineWork } from 'commons/Enum';
import OFUtils from 'commons/OFUtils';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { connect } from 'react-redux';
import './Dashboard.css';

const DashboardCP = (props: IDashboardProps) => {
    const state = {
        series: [{
          data: [470, 540, 580, 690, 1100, 1200, 1380]
        }],
        fill:{type: 'solid'},
        options: {
          chart: {
              toolbar: {show:false},
            height: '100%'
          },
          colors:['#102F5E'],
          plotOptions: {
            bar: {
                columnWidth: '65%',
                barHeight: '40px',
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
                return val + "枚/200面"
            },
            offsetX: -50,
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
                    maxWidth: 100,
                    style:{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                        cssClass:'label-common process-name'
                    }
                }
          }
        },
      };
    return (
        // The Dashboard Screen
        <div className="flex-c flex-1 dashboard-container">
            <div className="flex-r align-c dashboard-title">
                {/* <div className="w-space50"></div> */}
                <Image src='assets/Icon/DashboardBlackIcon.svg' className="dashboard-title-icon" />
                <Label className="label-common main-title">ホーム</Label>
            </div>
            <div className="flex-r align-c dashboard-status">
                <div className="flex-r flex-1 dashboard-status-left">
                    <div className="flex-c flex-1">
                        <Label className="label-common dashboard-status-label">本日の出荷状況</Label>
                        <div className="flex-r flex-1 align-c dashboard-status-retangle">
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-blue">
                                <Label className="label-common color-white dashboard-retangle-label-above">出荷数</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                            <div className="dashboard-retangle-space"></div>
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-red">
                                <Label className="label-common color-white dashboard-retangle-label-above">未出荷</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                            <div className="dashboard-retangle-space"></div>
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-green">
                                <Label className="label-common color-white dashboard-retangle-label-above">出荷済</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-r flex-1 dashboard-status-right ">
                    <div className="flex-c flex-1">
                        <Label className="label-common dashboard-status-label">受注状況</Label>
                        <div className="flex-r flex-1 align-c dashboard-status-retangle ">
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-blue">
                                <Label className="label-common color-white dashboard-retangle-label-above">総受注数</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                            <div className="dashboard-retangle-space"></div>
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-blue">
                                <Label className="label-common color-white dashboard-retangle-label-above">受注数</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                            <div className="dashboard-retangle-space"></div>
                            <div className="flex-c flex-1 align-justify-c dashboard-retangle color-blue">
                                <Label className="label-common color-white dashboard-retangle-label-above">総面数</Label>
                                <Label className="label-common color-white dashboard-retangle-label-alow">100</Label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-c flex-1 dashboard-main">
                <div className="">
                    <Label className="label-common title">本日の工程進捗</Label>
                </div>
                <div className="flex-r align-c">
                    <div className="graph-circle color-blue"></div>
                    <Label className="label-common subtitle">枚数/面数</Label>
                </div>
                <div className="flex-c flex-1 dashboard-graph">
                    <div id="chart" className="flex-1">
                        <ReactApexChart options={state.options} fill={state.fill} series={state.series} type="bar" width='100%' height='100%' />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IDashboardProps {
    
}

const mapStateToProps = (state: any) => {
    return {
        
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
};
export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardCP);
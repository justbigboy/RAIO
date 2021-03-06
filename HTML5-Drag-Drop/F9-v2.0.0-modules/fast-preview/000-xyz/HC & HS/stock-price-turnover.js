"use strict";

/**
 * stock-price-turnover 股价/成交量
 * xgqfrms
 * creadted 2017.10.29
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.SPTurnover = STOCK_F9_FV.Modules.SPTurnover || (
    (url = ``, uid = `default_dom_uid`, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                let arr = [];
                // let arr = json;
                if (debug) {
                    console.log(`json = \n`, json);
                }
                if (typeof(json) === "object"  && Object.keys(json).length > 0) {
                    let strs = json.details.map(
                        (obj, i) => {
                            if (debug) {
                                if(debug && obj.sjz === "2016-12-26"){
                                    // console.log(`obj =`, obj, i);
                                }
                                console.log(`obj =`, obj, i);
                            }
                            return obj.sjz;
                        }
                    );
                    strs = strs.sort();
                    arr = strs.map(
                        (date) => {
                            for (var i = 0; i < strs.length; i++) {
                                if(date === json.details[i].sjz){
                                    // arr.details[i].sjz = new Date(arr.details[i].sjz).getTime();
                                    /*
                                        x = "2017-10-25";
                                        // "2017-10-25"
                                        new Date(x);
                                        // Wed Oct 25 2017 08:00:00 GMT+0800 (中国标准时间)
                                        new Date(x).getTime();
                                        // 1508889600000
                                    */
                                    return json.details[i];
                                }
                            }
                        }
                    );
                    let keys = Object.keys(arr[0]);
                    const arr_obj = {};
                    keys.forEach(
                        (key, index) => {
                            let new_key = ``;
                            switch (key) {
                                case "sjz":
                                    new_key = `time`;
                                    break;
                                case "gj":
                                    new_key = `stock_price`;
                                    break;
                                case "cjl":
                                    new_key = `turn_over`;
                                    break;
                                case "szzs":
                                    new_key = `SH_Index`;
                                    break;
                                default:
                                    new_key = `暂无数据`;
                                    break;
                            }
                            arr_obj[new_key] = [];
                        }
                    );
                    let counter = 1;
                    arr.map(
                        (obj, i) => {
                            let time = ``,
                                turn_over = ``,
                                stock_price = ``,
                                SH_Index = ``;
                            time = (obj.sjz !== undefined) ? obj.sjz : `暂无数据`;
                            // no string, just keep number!
                            turn_over = (obj.cjl !== undefined) ? parseFloat(obj.cjl) : `暂无数据`;
                            stock_price = (obj.gj !== undefined) ? parseFloat(obj.gj) : `暂无数据`;
                            SH_Index = (obj.szzs !== undefined) ? parseFloat(obj.szzs) : `暂无数据`;
                            arr_obj.time.push(time);
                            arr_obj.stock_price.push(stock_price);
                            arr_obj.turn_over.push(turn_over);
                            arr_obj.SH_Index.push(SH_Index);
                            if (debug && counter === 1) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                counter ++;
                            }
                        }
                    );
                    datas = Object.assign(datas, arr_obj);
                    STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS(datas, uid);
                }else{
                    // console.log(`json is empty! = \n`, json);
                    // alert(`暂无数据!`);
                    datas.time = [];
                    datas.SH_Index = [];
                    datas.turn_over  = [];
                    datas.stock_price = [];
                    STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS(datas, uid);
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
    }
);



/**
 * @author xgqfrms
 *
 * @param {* Object} datas
 * @param {* String} container_uid
 * @param {* Boolean} debug
 */

STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS = STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS || (
    (datas = {}, container_uid = `container`, debug = false) => {
        let time = datas.time,
            SH_Index = datas.SH_Index,
            turn_over = datas.turn_over,
            stock_price = datas.stock_price;
        // 2012-12-31 => var oldTime = (new Date("2012/12/31 20:11:11").getTime();
        // 得到毫秒数
        let max_time = (time.length-10);// ???
        // datas
        if (!debug) {
            console.log(`datas = \n`, datas);
        }
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        // const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        let color = chart_css.color,
            colors = chart_css.colors,
            optioncolor = chart_css.optioncolor,
            gridColor = chart_css.gridColor,
            legendColor = chart_css.legendColor,
            yAxisColor = chart_css.yAxisColor;
        let ohlc = [],
            volume = [],
            sh_index = [],
            dataLength = datas.time.length,
            // set the allowed units for data grouping
            // groupingUnits = [
            //     [
            //         'week', // unit name
            //         [1] // allowed multiples
            //     ],
            //     [
            //         'month', [1, 2, 3, 4, 6]
            //     ]
            // ],
            data = [],
            i = 0;
        // datas.time = datas.time.map((k, i) => datas.time[datas.time.length - 1 - i]);
        // reverse 逆序
        // console.log(`datas.time = \n`, datas.time);
        for (i; i < dataLength; i ++) {
            let new_ms_time = new Date(datas.time[i]).getTime();
            data.push([
                new_ms_time, // the date ??? 1147651200000 (ms) ??? new Date(oldTime);
                datas.stock_price[i],
                datas.turn_over[i],
                datas.SH_Index[i]
            ]);
            ohlc.push([
                new_ms_time, // the date ??? 1147651200000 (ms) ??? new Date(oldTime);
                datas.stock_price[i],
                datas.SH_Index[i]
            ]);
            volume.push([
                new_ms_time,
                datas.turn_over[i]
            ]);
            sh_index.push([
                new_ms_time,
                datas.SH_Index[i]
            ]);
        }
        if (debug) {
            console.log(ohlc);
            console.log(volume);
            console.log(sh_index);
        }
        /*
            Highcharts lang 配置是全局配置
            针对所有图表有效，所有不能单独设置在某个图表中在，
            只能在图表初始化之前通过 Highcharts.setOptions 来设置生效。
        */
        Highcharts.setOptions({
            lang: {
                rangeSelectorZoom: '缩放',// 放大
                rangeSelectorFrom: '从',
                rangeSelectorTo: '到',
                contextButtonTitle: '图表导出菜单',
                decimalPoint: '.',
                downloadJPEG: "下载JPEG图片",
                downloadPDF: "下载PDF文件",
                downloadPNG: "下载PNG文件",
                downloadSVG: "下载SVG文件",
                drillUpText: "返回 {series.name}",
                loading: '加载中...',
                months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                // noData: '暂无数据',
                // noData: "没有数据显示!",
                noData:  `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                // numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
                numericSymbols: ['千', '百万', '十亿', '兆', '千兆', '百万兆'],
                printChart: "打印图表",
                resetZoom: '重置缩放比例',
                resetZoomTitle: '重置为原始大小',
                shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                thousandsSep: ',',
                shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdays: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
        });
        Highcharts.stockChart(container_uid, {
            chart: {
                // type: 'column',
                // height: 272,
                marginTop: 20,
            },
            noData: {
                // attr: undefined,
                // position: {
                //     align: "center",
                //     verticalAlign: "middle",
                //     x: 0,
                //     y: 0
                // },
                // style: { "fontSize": "12px", "fontWeight": "bold", "color": "#777" },
                useHTML: true,
                // useHTML: false
            },
            legend: {
                enabled: true,
                // align: 'right',
                // // align: 'bottom',
                // backgroundColor: '#FCFFC5',
                // borderColor: 'black',
                // borderWidth: 1,
                // layout: 'vertical',
                // verticalAlign: 'top',
                // y: 100,
                // shadow: true
            },
            credits: {
                // enabled: true,//
                enabled: false,
                href: `https://www.gildata.com`,
                text: `gildata`,
                // position: https://api.highcharts.com/highstock/credits.style,
                // style: https://api.highcharts.com/highstock/credits.style
            },
            title: {
                // text: '股价/成交量'
            },
            xAxis: {
                // categories: time,
                // min: max_time,
                // min: 0,
                // max: 8,
                // tickPixelInterval: 120
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 2
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    // millisecond: '%H:%M:%S.%L',
                    // second: '%H:%M:%S',
                    // minute: '%H:%M',
                    // hour: '%H:%M',
                    // day: '%m-%d',
                    // week: '%m-%d',
                    // month: '%y-%m',
                    // year: '%Y'
                    // millisecond: '%H:%M:%S.%L',
                    // second: '%H:%M:%S',
                    // minute: '%H:%M',
                    // hour: '%H:%M',
                    day: '%m月 %d日',
                    week: '%m月 %d日',
                    month: '%y年 %m月',
                    year: '%Y年'
                },
                tooltip: {
                    xDateFormat: '%Y年 %m月 %d日',
                    // valueDecimals: 3
                }
            },
            yAxis: [
                {
                    labels: {
                        align: 'right',
                        x: -3,
                        // formatter: () => {
                        //     console.log(`this.value`, this.value);
                        //     // undefined
                        //     // ??? -20 / 30
                        //     return this.value > 0 ? `+${this.value}%` : `${this.value}%`;
                        // },
                    },
                    title: {
                        // text: '股价/上证指数',
                        text: '股价'
                    },
                    // height: '60%',
                    height: '70%',
                    lineWidth: 2,
                    plotLines: [{
                        value: 0,
                        width: 2,
                        color: 'silver'
                    }],
                    // min: 0,
                    opposite: false,// default true
                },
                {
                    // opposite: true,
                    labels: {
                        align: 'left',
                        x: 3
                    },
                    title: {
                        text: '上证指数'
                    },
                    // height: '60%',
                    height: '70%',
                    offset: 0,
                    lineWidth: 2,
                    // min: 0,
                },
                {
                    labels: {
                        align: 'left',
                        x: 3
                    },
                    title: {
                        text: '成交量'
                    },
                    // top: '62.5%',
                    // height: '37.5%',
                    top: '72.5%',
                    height: '27.5%',
                    offset: 0,
                    lineWidth: 2,
                    // opposite: false,// default true
                },
                // {
                //     labels: {
                //         align: 'right',
                //         x: 3
                //     },
                //     title: {
                //         text: '成交量'
                //     },
                //     // top: '62.5%',
                //     // height: '37.5%',
                //     top: '82.5%',
                //     height: '17.5%',
                //     offset: 0,
                //     lineWidth: 2
                // }
            ],
            series: [
                {
                    // type: 'candlestick',
                    type: 'line',// 样条 "spline"
                    name: '股价',
                    color: 'green',
                    lineColor: 'green',
                    upColor: 'red',
                    upLineColor: 'red',
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        valueSuffix: ' 元'
                    },
                    // tooltip: {
                    //     formatter: () => {
                    //         return `
                    //         <b> ${this.series.name} </b><br/>
                    //         ${Highcharts.dateFormat('%Y年%m月%e日', this.x)}:
                    //         ${this.y} m
                    //         `;
                    //     }
                    // },
                    navigatorOptions: {
                        color: Highcharts.getOptions().colors[0]
                    },
                    data: ohlc,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    yAxis: 0
                    // compare: 'percent',
                    // showInNavigator: true
                },
                {
                    type: 'column',
                    name: '成交量',
                    data: volume,
                    yAxis: 2,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        valueSuffix: `手`
                        // valueSuffix: ' 万手'
                    },
                },
                {
                    type: 'line',
                    name: '上证指数',
                    data: sh_index,
                    color:"#1a75bc",
                    yAxis: 1,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        valueSuffix: ' 点'
                    },
                },
            ],
            tooltip: {
                xDateFormat: '%Y年 %m月 %d日',
                shared: true,
                // valueDecimals: 3
            },
            plotOptions: {
                // series: {
                //     pointStart: Date.UTC(2012, 0, 1),
                //     pointInterval: 24 * 3600 * 1000
                // }
            },
            navigator: {
                enabled: false,
                height: 20,
                margin: 10,
                handles: {
                    backgroundColor: "#fff",
                    borderColor: "#000"
                },
                baseSeries: 7
            },
            scrollbar: {
                enabled: true,
                step: 3,
                minWidth: 23,
                liveRedraw: !0
            },
            rangeSelector: {
                selected: 0,
                inputDateFormat: "%Y-%m-%d",
                allButtonsEnabled: !1,
                buttons: [
                    {
                        type: "day",
                        count: 36,
                        text: "一天",
                        dataGrouping: {
                            units: [
                                ["day", [1]
                                ]
                            ]
                        }
                    }
                ],
                buttonTheme: {
                    width: 0
                }
            }
        });
        setTimeout(() => {
            let no_zoom = document.querySelector(`.highcharts-range-selector-buttons`);
            no_zoom.style.display = "none";
        }, 0);
        //
    }
);


STOCK_F9_FV.Modules.SPTurnover.init = STOCK_F9_FV.Modules.SPTurnover.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast06/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `stock_price_turnover_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.SPTurnover(url, uid, false);
        // STOCK_F9_FV.Modules.SPTurnover(url, uid, true);
    }
);


STOCK_F9_FV.Modules.SPTurnover.init({
    // ip: STOCK_IP,
    // path: `${STOCK_Paths}/stockfast06/`,
    // gilcode: STOCK_SecCode
    ip: `http://10.1.5.31`,
    // ip: `http://10.1.5.202`,
    path: `/webservice/fastview/stock/stockfast06/`,
    gilcode: `600580.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast06/600570.SH`;
// http://10.1.5.31/webservice/fastview/stock/stockfast06/600570.SH


"use strict";

/**
 * @description financing-and-margin-balance-difference-trend 融资余额与融券余额差值走势
 * @author xgqfrms
 * @name financing-and-margin-balance-difference-trend FMBDT
 * creadted 2017.10.27
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.FMBDtrend = STOCK_F9_FV.Modules.FMBDtrend || (
    (url = ``, uid = `default_dom_uid`, debug = false) => {
        if (debug) {
            console.log(`uid = `, uid);
        }
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                let arr = json;
                if (debug) {
                    console.log(`data = \n`, json);
                }
                if (Array.isArray(arr) && arr.length > 0) {
                    let strs = json.map(
                        (obj) => {
                            if (debug) {
                                console.log(obj.sj);
                            }
                            return obj.sj;
                            //return num = parseInt(obj.sj.replace(/-/g, ``));
                        }
                    );
                    strs = strs.sort();
                    arr = strs.map(
                        (date) => {
                            for (var i = 0; i < strs.length; i++) {
                                if(date === arr[i].sj){
                                    return arr[i];
                                }
                            }
                        }
                    );
                    // Array.isArray(arr);
                    let keys = Object.keys(arr[0]);
                    const arr_obj = {};
                    keys.forEach(
                        (key, index) => {
                            // as / alias
                            let new_key = ``;
                            switch (key) {
                                case "sj":
                                    new_key = `time`;
                                    break;
                                case "bl":
                                    new_key = `shares`;
                                    break;
                                case "gj":
                                    new_key = `stock_price`;
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
                            // console.log(`obj = `, JSON.stringify(obj, null, 4));
                            let time = ``, shares = ``, stock_price = ``;
                            time = (obj.sj !== undefined) ? obj.sj : `暂无数据`;
                            // no string, just keep number!
                            shares = (obj.bl !== undefined) ? obj.bl : `暂无数据`;
                            stock_price = (obj.gj !== undefined) ? obj.gj : `暂无数据`;
                            // average = -1.7976931348623157e+308;
                            // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `暂无数据`;
                            arr_obj.time.push(time);
                            arr_obj.shares.push(shares);
                            arr_obj.stock_price.push(stock_price);
                            // return arr_obj;
                            if (counter === 1) {
                                // console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                counter ++;
                            }
                        }
                    );
                    // arr.forEach() just use for addEventListener() / do somthing, no return value / undefined!
                    // arr.map(), return an shaped new array!
                    datas = Object.assign(datas, arr_obj);
                    STOCK_F9_FV.Modules.FMBDtrend.FMBDTdrawHS(datas, uid);
                }else{
                    console.log(`json is empty! = \n`, json);
                    // alert(`暂无数据!`);
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
STOCK_F9_FV.Modules.FMBDtrend.FMBDTdrawHS = STOCK_F9_FV.Modules.FMBDtrend.FMBDTdrawHS || (
    (datas = {}, container_uid = `container`, debug = false) => {
        let time = datas.time,
            shares = datas.shares,
            stock_price = datas.stock_price;
        if (debug) {
            console.log(`time = \n`, time);
            console.log(`shares = \n`, shares);
            console.log(`stock_price = \n`, stock_price);
        }
        // datas
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
        // no data
        Highcharts.setOptions({
            lang: {
                noData: '暂无数据'
            }
        });
        Highcharts.chart(container_uid, {
            noData: {// all defualt value
                attr: undefined,
                position: {
                    align: `center`,
                    verticalAlign: `middle`,
                    x: 0,
                    y: 0,
                },
                style: {
                    color: `#666666`,
                    fontSize: `12px`,
                    fontWeight: `bold`
                },
                useHTML: true,
                // <h1>No Data to Show, now!</h1>
            },
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                // height: 272,
                // 16:9 ratio
                marginTop: 30,
                // marginBottom: 65,
            },
            title: {
                text: '',
                // text: 'Stacked column chart'
            },
            xAxis: {
                // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
                categories: time,
                min: 0,
                max: 8,
                // xAxis datas
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 2
                }
            },
            credits: {
                // enabled: true,//
                enabled: false,
                href: `https://www.gildata.com`,
                text: `gildata`,
                // position: https://api.highcharts.com/highstock/credits.style,
                // style: https://api.highcharts.com/highstock/credits.style
            },
            colors: ['#ff1919', '#ffff66', '#92d050'],
            // colors: ['#ff1919', '#ffff66', '#92d050'],
            // colors: [...colors],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    min: 0,
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    // labels: {
                    //     format: '{value}%',// 百分比
                    //     style: {
                    //         color: Highcharts.getOptions().colors[1]
                    //     }
                    // }
                    stackLabels: {
                        // enabled: true,// counter all cols values
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                // yAxis 2
                {
                    // x: -50,
                    // y: -50,
                    // min: 0,// bug ???
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        // enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
                    opposite: true,// yAxis label right ???
                    gridLineColor: '#2D3039'// gridLineColor: '#f0f',// highcharts-grid-line
                }
            ],
            legend: {
                symbolRadius: 0,
                // rectangle
                align: 'center',// left, center and right. (Defaults to center.)
                backgroundColor: `#ff00ff`, //Color,
                /*
                    x: 0,
                    y: 340,
                    verticalAlign: 'top',
                */
                x: 0,
                y: 0,
                verticalAlign: "bottom",
                // floating: true,
                floating: false,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            // tooltip ??? array
            tooltip: {
                shared: true,// ???
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y}<br/>
                `,
                // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                // 总数/总共/总量/总额/共有/总数
                // {${point.stackTotal ? point.stackTotal : point.y}} ???
                // {point.stackTotal || point.y}
                // {point.stackTotal ? point.stackTotal : point.y}
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                column: {
                    // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                    // stacking: 'null',
                    // stacking: 'percent',// 百分比堆叠柱形图
                    dataLabels: {
                        // enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                spline: {
                    // stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: "#434348"
                    }
                }
            },
            series: [
                {
                    name: '净利润',
                    // type = column (chart)
                    // 净利润/融资余额与融券余额差值
                    data: shares,
                    color: `#1a75bc`
                },
                {
                    type:'spline',
                    yAxis: 1,
                    color:"#fbb728",
                    name: '每股收益',
                    // data: [3, 4, 4, 2, 5],
                    data: stock_price,
                    connectNulls: true,// OK
                    // tooltip: {
                    //     headerFormat: `
                    //         <strong>
                    //             {point.x}
                    //         </strong>
                    //         <br/>
                    //     `,
                    //     pointFormat: `
                    //         <span style="color:{point.color}">\u25CF</span>
                    //         {series.name}: <b>{point.y}</b><br/>
                    //     `,
                    //     // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    // },
                    // overwrite
                }
            ],
            scrollbar: {
                enabled: true
            }
        });
    }
);


STOCK_F9_FV.Modules.FMBDtrend.init = STOCK_F9_FV.Modules.FMBDtrend.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast05/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `financing_and_margin_balance_difference_trend_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.FMBDtrend(url, uid, false);
        // STOCK_F9_FV.Modules.FMBDtrend(url, uid, true);
    }
);


STOCK_F9_FV.Modules.FMBDtrend.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast08/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast08/`,
    // gilcode: `600570.SH`
});
// const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;









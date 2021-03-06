"use strict";

/**
 * agency-rating 机构评级
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.agencyRating = STOCK_F9_FV.Modules.agencyRating || ((url = ``, uid = `default_dom_uid`, debug = false) => {
    // agencyRating
        // debug = true;
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            //shaped data
            (json) => {
                // json
                let arr = json;// Array
                // async
                if (debug) {
                    console.log(`data = \n`, json);
                }
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
                //  ["2007-04-30", "2009-10-31", "2010-02-28", "2016-10-31", "2017-09-30"]
                arr = strs.map(
                    (date) => {
                        // "2007-04-30"
                        for (var i = 0; i < strs.length; i++) {
                            if(date === arr[i].sj){
                                return arr[i];
                            }
                        }
                        // return arr[i];
                    }
                );
                // Array.isArray(arr);
                let keys = Object.keys(arr[0]);
                // (5) ["rq", "pj", "st", "wc", "xt"]
                const arr_obj = {};
                keys.forEach(
                    (key, index) => {
                        // console.log(`key, index = \n`, key, index);
                        // arr_obj[key] = [];
                        // as / alias
                        let new_key = ``;
                        switch (key) {
                            case "sj":
                                new_key = `time`;
                                break;
                            case "st":
                                new_key = `up`;
                                break;
                            case "xt":
                                new_key = `down`;
                                break;
                            case "gj":
                                new_key = `stock_price`;
                                break;
                            case "wc":
                                new_key = `keep`;
                                break;
                            default:
                                new_key = `暂无数据`;
                                break;
                        }
                        /*
                            const json = {A: `1`, B: `22`, C: `333`};
                            const {A: a, B: b, C: c} = {...json};
                            // rename object's key!
                            // import & export ??? old_name as new_name
                        */
                        arr_obj[new_key] = [];
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                let counter = 1;
                arr.map(
                    (obj, i) => {
                        // console.log(`obj = `, JSON.stringify(obj, null, 4));
                        let time = ``, up = ``, down = ``, stock_price = ``, keep = ``;
                        time = (obj.sj !== undefined) ? obj.sj : `暂无数据`;
                        // no string, just keep number!
                        up = (obj.st !== undefined) ? obj.st : `暂无数据`;
                        down = (obj.xt !== undefined) ? obj.xt : `暂无数据`;
                        // 股价
                        stock_price = (obj.gj !== undefined) ? (obj.gj >= 0 ? obj.gj : null) : `暂无数据`;
                        // invalid value === 展示“--”
                        keep = (obj.wc !== undefined) ? obj.wc : `暂无数据`;
                        arr_obj.time.push(time);
                        arr_obj.up.push(up);
                        arr_obj.down.push(down);
                        arr_obj.stock_price.push(stock_price);
                        arr_obj.keep.push(keep);
                        // return arr_obj;
                        if (counter === 1) {
                            if (debug) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                            }
                            counter ++;
                        }
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                datas = Object.assign(datas, arr_obj);
                STOCK_F9_FV.Modules.agencyRating.drawHS(datas, uid);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
        // return only work out Promise!
});



/**
 * @author xgqfrms
 *
 * @param {* Object} datas
 * @param {* String} container_uid
 * @param {* DOM Element} container_div
 * @param {* Boolean} debug
 */

// const
STOCK_F9_FV.Modules.agencyRating.drawHS = STOCK_F9_FV.Modules.agencyRating.drawHS || (
    (
        datas = {},
        container_uid = `container`,
        container_div = `dom_element`,
        debug = false
    ) => {
        let titles = {
            title1: `title 1`,
            title2: `title 2`
        }
        let {time, up, down, stock_price, keep} = {...datas};
        // let time = datas.time,
        //     up = datas.up,
        //     down = datas.down,
        //     stock_price = datas.stock_price,
        //     keep = datas.keep;
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        // let color = chart_css.color,
        //     colors = chart_css.colors,
        //     optioncolor = chart_css.optioncolor,
        //     gridColor = chart_css.gridColor,
        //     legendColor = chart_css.legendColor,
        //     yAxisColor = chart_css.yAxisColor;
        // Highcharts.chart
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
                useHTML: false,
            },
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                height: 272,// 275px;
                // 16:9 ratio
                marginTop: 30,
                // marginBottom: 65,
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: time,
                min: 0,
                max: 8,
                // xAxis datas
                labels: {
                    autoRotation: [0],// autoRotation:'false',
                    step: 2
                }
            },
            credits: {
                enabled: false,// enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            colors: ['#ff1919', '#ffff66', '#92d050'],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    min: 0,
                    floor: 0,
                    ceiling: 100,
                    max: 100,
                    title: {
                        text: '',
                    },
                    labels: {
                        format: '{value}%',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                }, // yAxis 2
                {
                    // x: -50,
                    // y: -50,
                    // min: 0,
                    // max: 100, // 0-100 ???
                    // ceiling: 100,
                    // step: 10,
                    title: {
                        text: '',
                    },
                    opposite: true,
                    gridLineColor: '#2D3039'
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
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y} <br/>
                    <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                `,
                // shared: true
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                column: {
                    // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                    // stacking: 'null',
                    stacking: 'percent',// 百分比堆叠柱形图
                    dataLabels: {
                        // enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                spline: {
                    stacking: 'normal',
                }
            },
            series: [
                {
                    name: '上调',// type = column (chart)
                    // data: [5, 3, 4, 7, 2],
                    data: up,
                },
                {
                    name: '维持',
                    // data: [2, 2, 3, 2, 1],
                    data: keep,
                },
                {
                    name: '下调',
                    // data: [3, 4, 4, 2, 5],
                    data: down,
                },
                {
                    type:'spline',
                    yAxis: 1,
                    color:"skyblue",
                    name: '股价',
                    // data: [3, 4, 4, 2, 5],
                    data: stock_price,
                    connectNulls: true,// OK
                    tooltip: {
                        headerFormat: `
                            <strong>
                                {point.x}
                            </strong>
                            <br/>
                        `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y}</b><br/>
                        `,
                        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                }
            ],
            scrollbar: {
                enabled: true
            }
        });
    }
);


STOCK_F9_FV.Modules.agencyRating.init = STOCK_F9_FV.Modules.agencyRating.init || (
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
        // console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `agency_rating_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.agencyRating(url, uid, false);
        // STOCK_F9_FV.Modules.agencyRating(url, uid, true);
    }
);


STOCK_F9_FV.Modules.agencyRating.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast05/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast05/`,
    // gilcode: `600570.SH`
});

// 600570.SH  ??? .SH & .SZ
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast05/600570.SH`;




"use strict";

/**
 * @name city-investment-debt-aaa-profitability 城投债AAA收益率(中债)
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {* String} url
 * @param {* String} tbody_uid
 * @param {* String} hc_uid
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
import "whatwg-fetch";

// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

import {exportExcel as exportExcelPlugin} from "./export-excel";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// cityInvestmentDebt3AP
OTC_F9_FV.Modules.cityInvestmentDebt3AP = OTC_F9_FV.Modules.cityInvestmentDebt3AP || (
    (url = ``, tbody_uid = ``, hc_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json =\n`, json);
                }
                try {
                    // ignore Array/Object
                    if (Object.keys(json).length > 0) {
                        // Array
                        if (Array.isArray(json)) {
                            // Object
                            if (Object.keys(json[0]).length > 0 && typeof(json[0]) === "object") {
                                let tds = document.querySelectorAll(`[data-value="data-otc-CIDA3P"]`),
                                    // tds1, tds2, tds3
                                    date = document.querySelector(`[data-time="data-otc-CIDA3P"]`),
                                    time = (json[0].rq !== undefined) ? json[0].rq : `--`,
                                    values = [];
                                let code = ["1Y", "3Y", "5Y", "7Y", "10Y"],
                                    yields = [],
                                    compare = [],
                                    difference = [];
                                for (let i = 0; i < json.length; i++) {
                                    let y1 = (json[i].y1 !== undefined) ? json[i].y1 : `--`,
                                        y3 = (json[i].y3 !== undefined) ? json[i].y3 : `--`,
                                        y5 = (json[i].y5 !== undefined) ? json[i].y5 : `--`,
                                        y7 = (json[i].y7 !== undefined) ? json[i].y7 : `--`,
                                        y10 = (json[i].y10 !== undefined) ? json[i].y10 : `--`;
                                    values.push(y1);
                                    values.push(y3);
                                    values.push(y5);
                                    values.push(y7);
                                    values.push(y10);
                                    switch (json[i].name) {
                                        case "收益率":
                                            /* string to number! */
                                            yields.push(y1 !== `--` ? parseFloat(y1) : null);
                                            yields.push(y3 !== `--` ? parseFloat(y3) : null);
                                            yields.push(y5 !== `--` ? parseFloat(y5) : null);
                                            yields.push(y7 !== `--` ? parseFloat(y7) : null);
                                            yields.push(y10 !== `--` ? parseFloat(y10) : null);
                                            break;
                                        case "比较日":
                                            compare.push(y1 !== `--` ? parseFloat(y1) : null);
                                            compare.push(y3 !== `--` ? parseFloat(y3) : null);
                                            compare.push(y5 !== `--` ? parseFloat(y5) : null);
                                            compare.push(y7 !== `--` ? parseFloat(y7) : null);
                                            compare.push(y10 !== `--` ? parseFloat(y10) : null);
                                            break;
                                        case "BP":
                                            difference.push(y1 !== `--` ? parseFloat(y1) : null);
                                            difference.push(y3 !== `--` ? parseFloat(y3) : null);
                                            difference.push(y5 !== `--` ? parseFloat(y5) : null);
                                            difference.push(y7 !== `--` ? parseFloat(y7) : null);
                                            difference.push(y10 !== `--` ? parseFloat(y10) : null);
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                // empty & reset
                                date.innerHTML = "";
                                date.insertAdjacentHTML(`beforeend`, time);
                                for (let i = 0; i < (tds.length - 1); i++) {
                                    // empty & reset
                                    tds[i].innerHTML = "";
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                                // export excel ??? extract to init module
                                setTimeout((debug = false) => {
                                    let export_excel_a = document.querySelector(`[data-excel="otc-city-investment-debt-aaa-profitability-excel"]>a`);
                                    if (export_excel_a !== null) {
                                        const printExcel = (debug = false) => {
                                            let table_uid = export_excel_a.dataset.excel,
                                                table_title = export_excel_a.dataset.title;
                                            try {
                                                exportExcelPlugin(`.${table_uid}`, `${table_title}`);
                                            } catch (error) {
                                                console.log(`excel error =`, error);
                                            }
                                        };
                                        let hasAddClick = (export_excel_a.dataset.click === "true") ? true : false;
                                        // once & bug
                                        if (!hasAddClick) {
                                            export_excel_a.addEventListener(`click`, printExcel);
                                            export_excel_a.dataset.click = "true";
                                        } else {
                                            // console.log(`excel addEventListener error =`, `\n no need addEventListener any more!`);
                                        }
                                    } else {
                                        console.log(`%c excel table\n`, `color: red;`, `addEventListener target is null!`);
                                    }
                                }, 0);
                                // drawHC
                                Object.assign(datas, {code, yields, compare, difference});
                                OTC_F9_FV.Modules.cityInvestmentDebt3AP.drawHS(datas, hc_uid, false);
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-city-investment-debt-aaa-profitability"]`;
                                const none_div = document.querySelector(uid);
                                // const none_div = document.querySelector(`[data-none-uid="otc-city-investment-debt-aaa-profitability"]`);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                // const table = document.querySelector(`.otc-city-investment-debt-aaa-profitability-table`);
                                // table.dataset.none = "no-data-div-hidden";
                                // const tbody = document.querySelector(`.otc-city-investment-debt-aaa-profitability-table-tbody`);
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `city-investment-debt-aaa-profitability.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-city-investment-debt-aaa-profitability"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const tbody_div = document.querySelector(tbody_uid);
                        tbody_div.dataset.none = "no-data-div-hidden";
                        const hc_div = document.querySelector(`#${hc_uid}`);// id
                        hc_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url = `file:///E:/**/bonds-fv/modules/city-investment-debt-aaa-profitability.js`;
                    // ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-city-investment-debt-aaa-profitability-data"]`);
            if (debug) {
                console.log(`turn_to_uids = \n`, turn_to_uids);
            }
            if (turn_to_uids.length > 0) {
                for (let i = 0; i < turn_to_uids.length; i++) {
                    turn_to_uids[i].addEventListener(`click`, (e) => {
                        let uid = e.target.dataset.uid,
                            gilcode = OTC_GILCODE ? OTC_GILCODE : window.OTC_GILCODE,
                            node_path = `12\\${gilcode}\\${uid}`;
                        try {
                            if (uid !== "null") {
                                ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                            }else{
                                console.log(`ChromeExternal & ${uid} === null\n`);
                            }
                        } catch (error) {
                            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                            console.log(`node uid = `, uid);
                        }
                    });
                }
            }else{
                throw new Error(`turn_to_uids is `, turn_to_uids);
            }
        }, 0);
        */
    }
);


OTC_F9_FV.Modules.cityInvestmentDebt3AP.drawHS = OTC_F9_FV.Modules.cityInvestmentDebt3AP.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        if (debug) {
            console.log(`HC datas = \n`, datas);
            console.log(`HC containe uid = \n`, container_uid);
        }
        let {
            code,
            yields,
            compare,
            difference,
        } = datas;
        // let max_time = (time.length-10);
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            index_color: `#2196f3`,
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor, index_color} = {...chart_css};
        // SKIN
        let skin_color = (OTC_SKIN === "black") ? `#0b1016` : `#fff`,
            grid_line_color = (OTC_SKIN === "black") ? `#2d3039` : `#e9e9e9`,
            hc_title_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#333`,
            legend_item_color = (OTC_SKIN === "black") ? `#fff` : `#0b1016`,
            legend_item_hover_color = (OTC_SKIN === "black") ? `#f79530` : `#000`,
            legend_bg_color = (OTC_SKIN === "black") ? `#0b1016` : `#ff00ff`;
        // console.log(`OTC_SKIN = `, OTC_SKIN);
        // console.log(`skin_color = `, skin_color);
        // Highcharts.chart
        Highcharts.setOptions({
            lang: {
                // noData: '暂无数据',
                noData: `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                loading: `Loading....`,
            }
        });
        Highcharts.chart(container_uid, {
            noData: {
                useHTML: true,
            },
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                backgroundColor: skin_color,
                // height: (9 / 16 * 100) + '%',
                // height: 272,// 275px;
                // 16:9 ratio
                // marginTop: 30,
                // marginBottom: 65,
                plotBorderWidth: 0,
                // marginLeft: 80
            },
            title: {
                // text: '国债收益率 (中债)',
                text: '',
                align: "center",
                x: 0,
                y: 10,
                style: {
                    // color: "#f00",
                    color: hc_title_color,
                },
            },
            xAxis: {
                categories: code,
                // min: max_time,
                // min: 0,
                // max: 8,
                // xAxis datas
                labels: {
                    // autoRotation: [0],// autoRotation:'false',
                    // // step: 2,
                    // step: 1
                },
                tickColor: grid_line_color,
                lineColor: grid_line_color,
                gridLineColor: grid_line_color,
                // plotLines: [{
                //     color: 'black',
                //     dashStyle: 'dot',
                //     width: 2,
                //     value: 1,//
                //     label: {
                //         rotation: 0,
                //         y: 15,
                //         style: {
                //             fontStyle: 'italic'
                //         },
                //         text: 'Safe fat intake 65g/day'
                //     },
                //     zIndex: 3
                // }]
            },
            credits: {
                // enabled: false,
                enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            // colors: ['#ff1919', '#ffff66', '#92d050'],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    // min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        // text: '收益率',
                        // text: '百分比',
                        text: '',
                    },
                    labels: {
                        format: '{value}',
                        // format: '{value} %',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    gridLineColor: grid_line_color,
                    // labels: {
                    //     formatter: function () {
                    //         return this.value + '%';
                    //     }
                    // },
                    // stackLabels: {// stackLabels
                    //     enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                    // plotLines: [
                    //     {
                    //         color: '#ff0000',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         // value: 1,
                    //         value: industry_circulation_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `市场平均 ${industry_circulation_value} %`,
                    //         },
                    //         zIndex: 3
                    //     },
                    //     {
                    //         color: '#00ff00',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         value: 1,
                    //         // value: industry_total_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `行业平均 ${(industry_total_value)} %`,
                    //         },
                    //         zIndex: 3
                    //     }
                    // ],
                },
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    // min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        text: 'BP',
                        // text: '',
                    },
                    opposite: true,
                    gridLineColor: grid_line_color,
                    // https://api.hcharts.cn/highcharts#yAxis.opposite
                    // labels: {
                    //     formatter: function () {
                    //         return this.value + '%';
                    //     }
                    // },
                    // labels: {
                    //     format: '{value}',// 百分比
                    //     style: {
                    //         color: Highcharts.getOptions().colors[1]
                    //     }
                    // },
                    // stackLabels: {// stackLabels
                    //     enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                    // plotLines: [
                    //     {
                    //         color: '#ff0000',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         // value: 1,
                    //         value: industry_circulation_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `市场平均 ${industry_circulation_value} %`,
                    //         },
                    //         zIndex: 3
                    //     },
                    //     {
                    //         color: '#00ff00',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         value: 1,
                    //         // value: industry_total_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `行业平均 ${(industry_total_value)} %`,
                    //         },
                    //         zIndex: 3
                    //     }
                    // ],
                }
            ],
            legend: {
                enabled: false,
                symbolRadius: 0,
                // rectangle
                align: 'center',// left, center and right. (Defaults to center.)
                itemStyle: {
                    color: legend_item_color,
                    // fontWeight: 'bold'
                },
                itemHoverStyle: {
                    color: legend_item_hover_color,
                },
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
                // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                // borderColor: '#CCC',
                // borderWidth: 1,
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
                // pointFormat: `
                //     <span style="color:{point.color}">\u25CF</span>
                //     {series.name}: {point.y} <br/>
                //     <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                // `,
                shared: true
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                column: {
                    borderWidth: 0,
                    // borderColor: grid_line_color,
                },
                // column: {
                //     // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                //     // stacking: 'null',
                //     // stacking: 'percent',// 百分比堆叠柱形图
                //     dataLabels: {
                //         enabled: true,
                //         // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                //         color: "#434348"
                //     }
                // },
                // spline: {
                //     stacking: 'normal',
                //     dataLabels: {
                //         enabled: true,
                //         color: "#434348"
                //     }
                // }
            },
            series: [
                {
                    type: 'line',
                    // type:'spline',
                    name: '收益率',
                    color: "#5523cd",
                    data: yields,
                    lineWidth: 2,
                    zIndex: 3,
                    // marker : {
                    //     enabled : true,
                    //     radius : 0,
                    //     symbol: 'square'
                    // },
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                        // 万元
                    },
                },
                {
                    type: 'line',
                    name: '比较日',
                    color: '#fd0002',
                    data: compare,
                    lineWidth: 2,
                    zIndex: 2,
                    // marker : {
                    //     enabled : true,
                    //     radius : 0,
                    //     symbol: 'square'
                    // },
                    tooltip: {
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                    },
                },
                {
                    type: 'column',
                    yAxis: 1,
                    // color: "#fadc9e",
                    color: "#ff9800",
                    negativeColor: '#7cb5ec',
                    name: 'BP差值',
                    data: difference,
                    zIndex: 1,
                    connectNulls: true,// OK
                    tooltip: {
                        // pointFormat: `
                        //     <span style="color:{point.color}">\u25CF</span>
                        //     {series.name}: <b><span style="color: #0f0">{point.y}</span> BP</b><br/>
                        // `,// ( point.y > 0 ) `color: #0f0` : `color: #f00`;
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} BP</b><br/>
                        `,
                    },
                },
            ],
            // scrollbar: {
            //     enabled: true
            // }
        });
    }
);

OTC_F9_FV.Modules.cityInvestmentDebt3AP.init = OTC_F9_FV.Modules.cityInvestmentDebt3AP.init || (
    (
        {
            ip,
            path,
            // uid,
            compare,
            date,
            skin,
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/bond/rate`,
            // uid: `bondratefast07`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/07.json`,
        // let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
        // let url = `${ip}${path}?{"ModelId": "${uid}","Compare": "${compare}","CompareDate": "${date}"}`,
        const uid = `bondratefast07`;
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}"${(compare === "2") ? `,"CompareDate":"${date}"` : ``}}`,
            tbody_uid = `[data-tbody="otc-city-investment-debt-aaa-profitability-table-tbody"]`,
            hc_uid = `city-investment-debt-aaa-profitability-hs-container`;
        OTC_F9_FV.Modules.cityInvestmentDebt3AP(url, tbody_uid, hc_uid, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,// default today!
    OTC_INIT = window.OTC_INIT || true,
    // OTC_SKIN = window.OTC_SKIN || `white`;
    OTC_SKIN = window.OTC_SKIN || `black`;

if (OTC_INIT === true) {
    // self init
    OTC_F9_FV.Modules.cityInvestmentDebt3AP.init();
}else{
    // relaod module
}

const cityInvestmentDebt3AP = OTC_F9_FV.Modules.cityInvestmentDebt3AP;
export default cityInvestmentDebt3AP;
export {cityInvestmentDebt3AP};

// OTC_F9_FV.Modules.cityInvestmentDebt3AP.init({
//     ip: OTC_IP,
//     path: OTC_PATH,
//     uid: `bondratefast07`,
//     compare: OTC_COMPARE,
//     date: OTC_DATE,
//     skin: OTC_SKIN,
// });

// OTC_F9_FV.Modules.cityInvestmentDebt3AP.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast03","Compare":"","CompareDate":""}`;



/*


http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast03","Compare":"0","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast03","Compare":"1","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast03","Compare":"2","CompareDate":"2018-01-25"}



*/






/*


let no_data = `
    <p data-none="no-data-p">
        <span data-none="no-data-span"></span>
    </p>
`;
tbd.insertAdjacentHTML(`beforeend`, no_data);


*/




/*

let uid = `[data-none-uid="otc-city-investment-debt-aaa-profitability"]`;

const none_div = document.querySelector(`[data-none-uid="otc-city-investment-debt-aaa-profitability"]`);
// data-none="no-data-div-visible"
none_div.dataset.none = "no-data-div-visible";
// show
none_div.dataset.none = "no-data-div-hidden";
// hide


none_div.setAttribute(`data-none`, `no-data-div-visible`);
// none_div.setAttribute(`data-none`, `no-data-div-hidden`);


// must be class ??? classList
none_div.classList.toggle(`.no-data-div-visible`);
none_div.classList.toggle(`.no-data-div-hidden`);

*/



/*

{
    "rq": "2018-01-29",
    "datas": [{
            "name": "收益率",
            "y1": "3.5101",
            "y3": "3.6112",
            "y5": "3.8433",
            "y7": "3.9215",
            "y10": "3.9368"

        },
        {
            "name": "比较日",
            "y1": "3.5205",
            "y3": "3.6352",
            "y5": "3.8348",
            "y7": "3.9228",
            "y10": "3.9365"
        }
    ]
}


*/

"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name dividend-matters-preplan 今日分红-预案
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};
// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};
// additionalMattersPreplan
NSB_TS_FV.Modules.additionalMattersPreplan = NSB_TS_FV.Modules.additionalMattersPreplan || ((url = ``, debug = false) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    console.log(`keys = \n`, Object.keys(json[0]));
                }
                let data = json || [];
                let preplan_code = [],
                    preplan_brief = [],
                    preplan_amount = [];
                data.map(
                    (obj, i) => {
                        if (debug) {
                            console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                        }
                        // ["zqdm", "zqjc", "mjje"]
                        preplan_code.push(obj["zqdm"]);
                        preplan_brief.push(obj["zqjc"]);
                        preplan_amount.push(obj["mjje"]);
                    }
                );
                const new_obj = {
                    preplan_code,
                    preplan_brief,
                    preplan_amount
                };
                if (debug) {
                    console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                }
                Object.assign(result_obj, new_obj);
                if (debug) {
                    console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                }
            }
            // array
            NSB_TS_FV.Modules.additionalMattersPreplan.showTable(result_obj, false);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});

// additionalMattersPreplan.showTable
NSB_TS_FV.Modules.additionalMattersPreplan.showTable = NSB_TS_FV.Modules.additionalMattersPreplan.showTable || (
    (datas = {}, debug = false) => {
        if (debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
        }
        const {
            preplan_code,
            preplan_brief,
            preplan_amount
        } = datas;
        // re-order
        let order_arr = [
            preplan_code,
            preplan_brief,
            preplan_amount
        ];
        let trs = document.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-dividend-matters-preplan"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(`[data-td-value="ntb-td-value"]`);
            if (debug) {
                console.log(`tds = \n`, tds);
                console.log(`tds[0] = \n`, tds[0]);
                console.log(`tds[1] = \n`, tds[1]);
                console.log(`tds[2] = \n`, tds[2]);
            }
            tds[0].innerHTML = order_arr[0][i];
            tds[1].innerHTML = order_arr[1][i];
            tds[2].innerHTML = order_arr[2][i];
            // DOM in JS ???
            /*
                <tr data-table-tr="ntb-table-tr-dividend-matters-preplan" data-table-tbody-tr="ntb-table-tbody-tr-dividend-matters-preplan">
                    <td data-td-value="ntb-td-value"></td>
                    <td data-td-value="ntb-td-value"></td>
                    <td data-td-value="ntb-td-value"></td>
                </tr>
            */
        }
    }
);

// init
NSB_TS_FV.Modules.additionalMattersPreplan.init = NSB_TS_FV.Modules.additionalMattersPreplan.init || (
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast06/`) => {
        let hs_datas = NSB_TS_FV.Modules.additionalMattersPreplan(url, false);
    }
);

// call init
NSB_TS_FV.Modules.additionalMattersPreplan.init(`http://10.1.5.202/webservice/fastview/otc/otcfast06/`);



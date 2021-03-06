"use strict";
/**
 * changes-shareholding-executives 高管持股变动情况
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
import "whatwg-fetch";

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.changesShareholdingExecutives = STOCK_F9_FV.Modules.changesShareholdingExecutives || (
    (url = ``, uid = `id`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                if (debug) {
                    console.log(`data = \n`, data);
                }
                if (Array.isArray(data) && data.length > 0) {
                    let html_string = ``;
                    let arr = data;
                    arr.map(
                        (obj, i) => {
                            let date = (arr[i].bdr !== undefined) ? arr[i].bdr : `暂无数据`;
                            let name = (arr[i].mc !== undefined) ? arr[i].mc : `暂无数据`;
                            let direction = (arr[i].fx !== undefined) ? arr[i].fx : `暂无数据`;
                            let share_nums = (arr[i].sl !== undefined) ? arr[i].sl : `暂无数据`;
                            let average_price = `${(arr[i].jyjj !== undefined) ? arr[i].jyjj : `暂无数据`}`;
                            let relationship = (arr[i].glgg !== undefined) ? arr[i].glgg : `暂无数据`;
                            let proportion = (arr[i].xxx !== undefined) ? arr[i].xxx : `暂无数据`;
                            // only show 5 items
                            if (i < 5) {
                                html_string += `
                                    <tr class="fv-changes-shareholding-executives-table-tr">
                                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                            ${date}
                                        </td>
                                        <td
                                            title="${name}"
                                            class="fv-changes-shareholding-executives-table-td-value"
                                            data-value="data-fv-changes-shareholding-executives">
                                            ${name}
                                        </td>
                                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                            ${direction}
                                        </td>
                                        <td
                                            title="${share_nums}"
                                            class="fv-changes-shareholding-executives-table-td-value"
                                            data-value="data-fv-changes-shareholding-executives">
                                            ${share_nums}
                                        </td>
                                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                            ${average_price}
                                        </td>
                                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                            ${relationship}
                                        </td>
                                    </tr>
                                `;
                            } else {
                                if (debug) {
                                    console.log(`Sorry, we only show 5 items, now!`);
                                }
                            }
                            // <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                            //     ${proportion}
                            // </td>
                        }
                    );
                    let td_id = document.querySelector(uid);
                    td_id.innerHTML = html_string;
                }else{
                    let table_uid = document.querySelector(`.fv-changes-shareholding-executives-table`),
                        // table_parent = table_uid.parentNode,
                        table_prev_dom = table_uid.previousElementSibling,
                        no_data_html = `
                            <div>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            </div>
                        `;
                    // remove self
                    table_uid.remove();
                    // add no-data
                    table_prev_dom.insertAdjacentHTML(`afterend`, no_data_html);
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-changes-shareholding-executives-data"]`);
            if (debug) {
                console.log(`turn_to_uid = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        gilcode = STOCK_SecCode ? STOCK_SecCode : window.STOCK_SecCode,
                        node_path = `12\\${gilcode}\\${uid}`;
                    try {
                        if (uid !== "null") {
                            ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal & ${uid} === null\n`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                    }
                });
            }else{
                throw new Error(`turn_to_uid is `, turn_to_uid);
            }
        }, 0);
    }
);



STOCK_F9_FV.Modules.changesShareholdingExecutives.init = STOCK_F9_FV.Modules.changesShareholdingExecutives.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast12/`,
            gilcode: `600570.SH`
        }
    ) => {
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `#fv-changes-shareholding-executives-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.changesShareholdingExecutives(url, uid, false);
        // STOCK_F9_FV.Modules.changesShareholdingExecutives(url, uid, true);
    }
);

var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.changesShareholdingExecutives.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast12/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast12/`,
    // gilcode: `600570.SH`
});




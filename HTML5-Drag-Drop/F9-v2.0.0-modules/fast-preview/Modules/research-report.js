"use strict";
/**
 * research-report 研究报告
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

STOCK_F9_FV.Modules.researchReport = STOCK_F9_FV.Modules.researchReport || (
    (url = ``, uid = `id`, ip = `http://10.1.5.202`, debug = false) => {
    // debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            data = json;// Array
            if (debug) {
                console.log(`data = \n`, data);
            }
            // no data ???
            if (Array.isArray(data) && data.length > 0) {
                let html_string = ``;
                let arr = data;
                arr.map(
                    (obj, i) => {
                        let date = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `暂无数据`,
                            title = `${(arr[i].title !== undefined) ? arr[i].title : `暂无数据`}`,
                            id = `${(arr[i].researchId !== undefined) ? arr[i].researchId : `暂无数据`}`,
                            type = `${(arr[i].fileType !== undefined) ? arr[i].fileType : `暂无数据`}`;
                        // "fileType": "pdf",
                        title = title.replace(/(：：)/ig, "：");// shit Chinese encoding
                        // title.replace(/: :/, ""); // ：： ？？？ shit data
                        // only show 5 items
                        if (i < 5) {
                            html_string += `
                                <tr class="fv-research-report-table-tr">
                                    <td class="fv-research-report-table-td-key" data-value="data-fv-events">
                                        ${date}
                                    </td>
                                    <td class="fv-research-report-table-td-value" data-value="data-fv-events">
                                        <a
                                            href="#${id}"
                                            data-uid="${id}"
                                            data-type="${type}"
                                            data-turn-to-uid="research-report"
                                            title="${title}"
                                            data-title="${title}"
                                            data-disabled="${ id !== "null" ? false : true}"
                                            data-link="fv-research-report-link"
                                            data-link-detail="research-report-link-detail-module">
                                            ${title}
                                        </a>
                                    </td>
                                </tr>
                            `;
                        } else {
                            if (debug) {
                                console.log(`Sorry, we only show 5 items, now!`);
                            }
                        }
                    }
                );
                let td_id = document.querySelector(uid);
                td_id.innerHTML = html_string;
                // download & open pdf
                setTimeout((debug = false) => {
                    // const host = window.location.host ? window.location.host : `10.1.5.202`;
                    // const host = `http://10.1.5.202`;
                    const host = ip;
                    // absolute url ip
                    let links = document.querySelectorAll(`[data-link="fv-research-report-link"]`);
                    if (debug) {
                        console.log(`links = \n`, links);
                    }
                    for (let i = 0; i < links.length; i++) {
                        links[i].addEventListener(`click`, (e) => {
                            // e.preventDefault();
                            // #hash ???
                            // let uid = e.target.dataset.uid;
                            if (debug) {
                                console.log(`e.target.dataset = \n`, e.target.dataset);
                            }
                            // researchid: "551173471225"
                            if (debug) {
                                console.log(`e.target.dataset = \n`, e.target.dataset);
                                console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                                console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
                            }
                            let id = e.target.dataset.uid,
                                type = e.target.dataset.type,
                                title = e.target.dataset.title;
                            try {
                                let download_pdf = `${host}/queryservice/research/attachment/${id}.${type}\\${title}.${type}`;
                                // 10.1.5.202/queryservice/research/attachment/551173471225.pdf
                                ChromeExternal.Execute("OpenFile", download_pdf);
                            } catch (e) {
                                window.open(`${host}/queryservice/research/attachment/${id}`);
                                // http://localhost:3000/fast-preview/10.1.5.202/queryservice/research/attachment/551173471225
                                // 10.1.5.202/queryservice/research/attachment/551173471225
                            }
                        });
                    }
                }, 0);
            }else{
                // alert(`暂无数据!`);
                // console.log(`暂无数据! = \n`);
                let table_uid = document.querySelector(`.fv-research-report-table`),
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
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-research-report-data"]`);
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
});


STOCK_F9_FV.Modules.researchReport.init = STOCK_F9_FV.Modules.researchReport.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/research/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `#fv-research-report-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.researchReport(url, uid, ip, false);
        // STOCK_F9_FV.Modules.researchReport(url, uid, ip, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;

STOCK_F9_FV.Modules.researchReport.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/research/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/research/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/research/600570.SH`;


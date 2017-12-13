"use strict";

/**
 * company-news 公司新闻
 * xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.companyNews = OTC_F9_FV.Modules.companyNews || (
    (url = ``, td_keys = [], tds = [], more = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;console.log(`tds = \n`, datas);
                try {
                    if (Array.isArray(datas) && datas.length > 0) {
                        for (let i = 0; i < td_keys.length; i++) {
                            let title = (datas[i].xwtitle !== undefined) ? datas[i].xwtitle.replace(/(：：)/ig, "：") : `暂无数据`,
                                time = (datas[i].xwsj !== undefined) ? datas[i].xwsj : `暂无数据`,
                                type = (datas[i].type !== undefined && datas[i].type !== null) ? datas[i].type : `暂无数据`,
                                id = (datas[i].newid !== undefined) ? datas[i].newid : `暂无数据`;
                            td_keys[i].innerText = title;
                            td_keys[i].setAttribute(`title`, title);
                            tds[2*i].innerText = time;
                            tds[2*i+1].innerText = type;
                        }
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-news.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-news.js`;
                    ConsoleError(err, url);
                }
                datas.map(
                    (obj, i) => {
                        let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `暂无数据`,
                            title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `暂无数据`}`,
                            id = `${(arr[i].newid !== undefined) ? arr[i].newid : `暂无数据`}`;
                        // news no type!
                        title = title.replace(/(：：)/ig, "：");
                        // let html_string = ``;
                        // html_string += `
                        //     <tr class="fv-company-news-table-tr">
                        //         <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                        //             ${publishDate}
                        //         </td>
                        //         <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                        //             <a
                        //                 href="#${id}"
                        //                 title="${title}"
                        //                 data-title="${title}"
                        //                 data-link="fv-company-news-link"
                        //                 data-disabled="${id !== "null" ? false : true}"
                        //                 data-link-detail="company-news-link-detail-module"
                        //                 data-newsId="${id}">
                        //                 ${title}
                        //             </a>
                        //         </td>
                        //     </tr>
                        // `;
                        // let td_id = document.querySelector(uid);
                        // td_id.innerHTML = html_string;
                    }
                );
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.companyNews.init = OTC_F9_FV.Modules.companyNews.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/news/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            td_keys = document.querySelectorAll(`[data-key="data-otc-CN"]`),
            tds = document.querySelectorAll(`[data-value="data-otc-CN"]`),
            more = document.querySelector(`[data-more="otc-company-news-link-more"]`);
        OTC_F9_FV.Modules.companyNews(url, td_keys, tds, more, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.companyNews.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/news/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyNews.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/news/430002.OC`;


"use strict";

/**
 * @name thematic-statistics-news 新三板专题统计 新闻
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* String} tbody_dom
 * @param {* String} more
 * @param {Boolean} debug
 */
import 'whatwg-fetch';
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};



OTC_TS_FV.Modules.thematicStatisticsNews = OTC_TS_FV.Modules.thematicStatisticsNews || (
    (url = ``, tbody_dom = ``, more = ``, debug = false) => {
        let datas = {};
        // let new_add = document.querySelector(`[data-text="otc-thematic-statistics-news-text"]`),
        // no_data_dom = document.querySelector(`.otc-thematic-statistics-news-title-box`),
        // hs_container = document.querySelector(`#thematic_statistics_news_hs_container`),
        // table_body = document.querySelector(`[data-table-body="otc-table-body-thematic-statistics-news"]`),
        // table_container = document.querySelector(`[data-table="otc-thematic-statistics-news-table"]`);
        // no data
        let no_data_p = `
            <div data-margin="no-data-margin-top">
                <p data-none="no-data-p">
                    <span data-none="no-data-span"></span>
                </p>
            </div>
        `;
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                // global function
                const emptyChecker = (key = ``) => {
                    // arr.map() ???
                    let result = true;
                    switch (key) {
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        // case "--":
                        //     result = false;
                        //     break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    if (Array.isArray(datas)) {
                        let tbody = ``;
                        // no data
                        // if (datas.length < 0) {
                        if (datas.length > 0) {
                            for (let i = 0; i < datas.length; i++) {
                                let title = (datas[i].xwtitle !== undefined) ? datas[i].xwtitle.replace(/(：：)/ig, ": ") : `暂无数据`,
                                    time = (datas[i].xwsj !== undefined && datas[i].xwsj !== null) ? datas[i].xwsj : `暂无数据`,
                                    type = (datas[i].newsType !== undefined && datas[i].newsType !== null) ? datas[i].newsType : `暂无数据`,
                                    id = (datas[i].newid !== undefined) ? datas[i].newid : `暂无数据`;
                                let html = `
                                    <a
                                        href="#${id}"
                                        title="${title}"
                                        data-title="${title}"
                                        data-link="otc-thematic-statistics-news-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="thematic-statistics-news-link-detail-module"
                                        data-newsId="${id}">
                                        ${title}
                                    </a>
                                `;
                                // if (i < 5) {
                                if (i < datas.length) {
                                    tbody += `
                                        <tr class="otc-thematic-statistics-news-table-tr">
                                            <td class="otc-thematic-statistics-news-table-td-key" data-key="data-otc-TSN">${html}</td>
                                            <td class="otc-thematic-statistics-news-table-td-value" data-value="data-otc-TSN">${time}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-thematic-statistics-news-table-td-value" data-value="data-otc-CN">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            // no data
                            let thead = document.querySelector(`.otc-thematic-statistics-news-table-thead`);
                            thead.style.display = "none";
                            // tbody = `
                            //     <tr class="otc-thematic-statistics-news-table-tr">
                            //         <td colspan="3">
                            //             <p data-none="no-data-p">
                            //                 <span data-none="no-data-span"></span>
                            //             </p>
                            //         </td>
                            //     </tr>
                            // `;
                            tbody = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        tbody_dom.insertAdjacentHTML(`beforeend`, tbody);
                        // open news modal
                        setTimeout(() => {
                            const host = (window.OTC_IP !== undefined && window.OTC_IP.includes("http")) ? window.OTC_IP : `http://10.1.5.202`;
                            // const host = ip;
                            // absolute url ip
                            let links = document.querySelectorAll(`[data-link="otc-thematic-statistics-news-link"]`);
                            if (debug) {
                                console.log(`links = \n`, links);
                            }
                            for (let i = 0; i < links.length; i++) {
                                links[i].addEventListener(`click`, (e) => {
                                    e.preventDefault();
                                    // #hash
                                    let id = e.target.dataset.newsid,
                                        title = e.target.dataset.title;
                                    try {
                                        let open_link = `${host}/queryservice/news/content/${id}`;
                                        // #567721125719
                                        if (debug) {
                                            console.log(`id = ${id} \ntitle = ${title}`);
                                            // no need title
                                        }
                                        // fetch news summary data
                                        let data = {};
                                        fetch(open_link)
                                        .then(res => res.json())
                                        .then(
                                            (json) => {
                                                if (debug) {
                                                    console.log(`json = \n`, JSON.stringify(json, null, 4));
                                                }
                                                data = json;
                                                // BouncedModal
                                                const UDP_wh = UDP.getClientWidthHeight;
                                                if (debug) {
                                                    console.log(`UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
                                                }
                                                if (emptyChecker(data)) {
                                                    let UDP_width = UDP_wh.w - 60,
                                                        UDP_height = UDP_wh.h - 60;
                                                    const modal = new BouncedModal({
                                                    // const modal = new UDP.BouncedModal({
                                                        // bouncedclass: "layerContianer2",//存放页面的容器类名
                                                        width: UDP_width,
                                                        height: UDP_height,
                                                        title: "公司新闻",
                                                        setOverflow: "overflow-y:none",
                                                        //设置滚动的属性(overflow-y: 竖向  overflow-x: 横向)
                                                        // str: html.join(''),// array to string
                                                        // str: html_template,
                                                        datas: Object.assign({}, data)
                                                    });
                                                    modal.init();
                                                    // return json;
                                                }else{
                                                    // alert(`暂无数据!`);
                                                    // temporary no data!
                                                    console.log(`news 暂无数据!`);
                                                }
                                            }
                                        )
                                        .catch(err => {
                                            console.log(`error infos = \n`, err);
                                            // no data
                                            console.log(`news 暂无数据!`);
                                            // disable link ???
                                            // 1. cursor: not-allowed;
                                            // 2. click alert no data!
                                            // hs_container.style.display = "none";
                                            // table_container.style.display = "none";
                                            // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                                        });
                                    } catch (err) {
                                        console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                                        // window.open(`${host}/queryservice/news/content/${id}`);
                                    }
                                });
                            }
                        }, 0);
                    }else{
                        let message = `handle json error!`,
                            fileName = `thematic-statistics-news.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                        // no data
                        // hs_container.style.display = "none";
                        // table_container.style.display = "none";
                        // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                    }
                } catch (err) {
                    let url =`otc-ts/modules/thematic-statistics-news.js`;
                    ConsoleError(err, url);
                    // no data
                    // hs_container.style.display = "none";
                    // table_container.style.display = "none";
                    // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                }
            }
        )
        .catch(err => {
            console.log(`fetch error = \n`, err);
            // no data
            // hs_container.style.display = "none";
            // table_container.style.display = "none";
            // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
        });
        // return datas;
        // <a href="#更多" data-uid="xxxxxx" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-thematic-statistics-news>更多</a>
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-thematic-statistics-news"]`);
            if (debug) {
                console.log(`turn_to_uid dom = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                        // 今日新增挂牌公司	More 13	NQTOPIC	342064
                        // more.dataset.moreUid = `${table_obj.zqdm}.OC`;
                        let uid = e.target.dataset.uid,
                            topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                            node_path = `13\\${topic_category}\\${uid}`;
                        try {
                            if (uid !== undefined && topic_category !== undefined) {
                                ChromeExternal.Execute("ExecuteCommand", node_path);
                                // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                            }else{
                                console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                            }
                        } catch (error) {
                            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                            console.log(`node uid = `, uid);
                            console.log(`node topic_category = `, topic_category);
                            console.log(`node node_path = `, node_path);
                        }
                    });
            }else{
                // null
                throw new Error(`turn_to_uid dom is null!\n`, turn_to_uid);
            }
        }, 0);
    }
);


OTC_TS_FV.Modules.thematicStatisticsNews.init = OTC_TS_FV.Modules.thematicStatisticsNews.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/news/`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-thematic-statistics-news-table-tbody"]`),
            more = document.querySelector(`[data-turn-to-uid="node-uid-thematic-statistics-news"]`);
        OTC_TS_FV.Modules.thematicStatisticsNews(url, tbody_dom, more, false);
    }
);

// OTC_SKIN ??? no need ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`;


OTC_TS_FV.Modules.thematicStatisticsNews.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/news`,
    // socket: `/news/`,
    // gilcode: OTC_GILCODE,
});

// OTC_TS_FV.Modules.thematicStatisticsNews.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/news/430002.OC`;


"use strict";

// import "babel-polyfill";
// import "whatwg-fetch";

// import { Modal } from "./modal";

const showModalData = (debug = false) => {
    const newsLinks = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
    for (let i = 0; i < newsLinks.length; i++) {
        newsLinks[i].addEventListener("click", function() {
            // fetch data & insert data to DOM
            const uid = newsLinks[i].dataset.newsid;
            // http://10.1.5.202/queryservice/news/content/573297152893
            const ORIGIN = window.parent.location.origin;
            const IP =  (ORIGIN.includes(`file://`) || ORIGIN.includes(`http://localhost`)) ? `http://10.1.5.202` : ORIGIN;
            const PATH = `/queryservice/news/content/`;
            const url = `${IP}${PATH}${uid}`;
            if (debug) {
                console.log(`fetch url =`, url);
            }
            let html = ``;
            fetch(url)
            .then(res => res.json())
            .then(json => {
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
                        case "--":
                            result = false;
                            // maybe no need, for string no data!
                            break;
                        default:
                            break;
                    }
                    result ? ((Object.keys(key).length > 0) ? `` : (result = false)) : ``;
                    return result;
                };
                if (debug) {
                    console.log(`json =`, JSON.stringify(json, null, 4));
                }
                // show modal
                if (emptyChecker(json)) {
                    let title = ``,
                        source = ``,
                        time = ``,
                        content = ``,
                        url = ``;
                    // data
                    title = json.Title;
                    source = json.Infosource;
                    time = json.PublishDate.substr(0, 10);
                    url = json.Url;
                    content = json.Content;
                    // <span>字体: </span>
                    html = `
                        <div>
                            <div data-modal="modal-title">
                                <h1>公司新闻</h1>
                            </div>
                            <div data-modal="title-box">
                                <div data-modal="title">
                                    <h3>${title}</h3>
                                </div>
                                <div data-modal="modal-font" class="fontSize">
                                    字体:
                                    <span class="fontBtn">
                                        <a data-modal-font="data-font-big" data-modal-uid="0">大</a>
                                    </span>
                                    <span class="fontBtn">
                                        <a data-modal-font="data-font-middle" data-modal-uid="1">中</a>
                                    </span>
                                    <span class="fontBtn active">
                                        <a data-modal-font="data-font-small" data-modal-uid="2">小</a>
                                    </span>
                                </div>
                                <div data-modal="info">
                                    <p>
                                        来源: <span data-info="info-source">${source}</span>
                                        日期: <span data-info="info-time">${time}</span>
                                        <a data-info="info-link" target="_blank" href="${url}">
                                            查看原文
                                            <i class="icon-external-link"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div data-modal="content">
                                <div>${content}</div>
                            </div>
                        </div>
                    `;
                    // instance
                    const options = {
                        content: html,
                        // others
                    };
                    let newsModal = new Modal(options);
                    newsModal.open();
                } else {
                    // no data!
                }
            })
            .catch(
                err => {
                    console.log(`fetch json error!\n`, err);
                    // no data!
                }
            );
        });
    }
};


document.addEventListener(`DOMContentLoaded`, (e) => {
    // ready
    console.log(`DOM fully loaded and parsed!`);
    showModalData(true);
    // showModalData();
});

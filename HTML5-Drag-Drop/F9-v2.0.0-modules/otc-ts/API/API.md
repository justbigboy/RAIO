# 新三板专题统计 New Three Board Thematic Statistics (OTC_TS_FV)

> 新三板专题统计/三板速览


## NameSpace

> OTC_TS_FV

OTC_TS_FV.Modules
OTC_TS_FV.Utils
OTC_TS_FV.Modal



备注：在涨跌幅和成交额做个可以自动排序的功能

// ??? auto order filter


参数：
    otcfast01	新增挂牌 newly-added-listing
    otcfast02	新增协议 newly-added-protocol // No Data
    otcfast03	交易排行榜 transactions-leaderboard /trading-rankings (交易排行榜-做市/ 交易排行榜-协议)
    otcfast04	增发事项-预案 additional-issues-preplan
    otcfast05	增发事项-实施 additional-issues-implementation
    otcfast06	分红事项-预案 dividend-matters-preplan
    otcfast07	分红事项-实施 dividend-matters-implementation
    otcfast08	挂牌情况 listing-situation
    otcfast09	成交概况 transaction-overview
    otcfast10	成交走势-做市图 turnover-trend-make-market-diagram
    otcfast11	成交走势-协议图 turnover-trend-protocol-diagram
    news	    公司新闻 otc-thematic-statistics-news
    bulletion	公司公告 otc-thematic-statistics-bulletin



big-event-reminder.png
company-brief-introduction.png
company-bulletin.png
company-news.png
company-performance.png
equity-shareholder.png
latest-financial-data.png
latest-transaction-data.png
main-management-business.png
management-layer-profiles.png
research-report.png

btn-icon.png
customize.png
universal.png
delete-icon.png

additional-issues.png
dividend-matters.png
listing-situation.png

newly-added-listing.png
newly-added-protocol.png
transaction-overview.png
transactions-leaderboard.png
turnover-trend.png

otc-ts-news.png
otc-ts-bulletin.png

otc-thematic-statistics-bulletin.png



## API

http://10.1.5.202/webservice/fastview/otc/参数

http://10.1.5.202/webservice/fastview/otc/otcfast01
http://10.1.5.202/webservice/fastview/otc/otcfast10

http://10.1.5.202/webservice/fastview/otc/news
http://10.1.5.202/webservice/fastview/otc/bulletion



http://q.gxfin.com/oc/836000.html

博商管理(836000.OC) - 新三板




## API

http://10.1.5.202/webservice/fastview/otc/参数

http://10.1.5.202/webservice/fastview/otc/otcfast01
http://10.1.5.202/webservice/fastview/otc/otcfast10

http://10.1.5.202/webservice/fastview/otc/news
http://10.1.5.202/webservice/fastview/otc/bulletion

http://10.1.5.202/webservice/fastview/otc/bulletin



http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH

http://10.1.5.202/information/newsinfo/



https://www.zhihu.com/question/34737321?sort=created


OTC（Over-The-Counter）场外交易市场，又称柜台交易市场或店头市场是世界上最古老的证券交易场所，源自于当初银行兼营股票买卖业务。因为采取在银行柜台上向客户出售股票的做法，被称为“柜台交易市场”，又因为这种交易不在交易所里进行，又叫做“场外交易市场”。

在OTC市场交易的是未能在证券交易所上市的证券，包括：不符合证券交易所上市标准的股票、符合证券交易所上市标准但不愿在交易所上市的股票、债券等，其一般是通过买卖双方议价的方式实现成交。




mainboard 主板

New Sanbanxi 新三板

全国中小企业股份转让系统(英语：National Equities Exchange and Quotations),

股票/股权 报价

俗称新三板,
是经中华人民共和国国务院批准设立的中国大陆证券交易场所,
为非上市股份有限公司的股份公开转让、融资、并购等相关业务提供服务。它是中国大陆除上海证券交易所、深圳证券交易所之外的第三家全国性证券交易场所。

https://zh.wikipedia.org/wiki/%E4%B8%8A%E6%B5%B7%E8%AF%81%E5%88%B8%E4%BA%A4%E6%98%93%E6%89%80

2009年8月10日发布的《上海证券交易所证券代码分配规则》规定，上证所证券代码采用六位阿拉伯数字编码，取值范围为000000-999999。
六位代码的前三位为证券种类标识区，其中第一位为证券产品标识，第二位至第三位为证券业务标识，六位代码的后三位为顺序编码区。
首位代码代表的产品定义分别为：0国债／指数、1债券、2回购、3期货、4备用、5基金／权证、6A股、7非交易业务（发行、权益分配）、8备用、9B股

http://www.sse.com.cn/

https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%9C%B3%E8%AF%81%E5%88%B8%E4%BA%A4%E6%98%93%E6%89%80

http://www.szse.cn/


```js
Object.keys(obj);
// ["name", "gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
Object.values(obj);
// ["新增挂牌", "挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]

Object.keys(obj).slice(1);
// ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
Object.values(obj).slice(1);
// ["挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]


/* 
    otcfast01	新增挂牌 newly-added-listing
    otcfast02	新增协议 newly-added-protocol // No Data
    otcfast03	交易排行榜 transactions-leaderboard /trading-rankings
    交易排行榜 transactions-leaderboard-all
    (交易排行榜-做市/ 交易排行榜-协议)
    transactions-leaderboard-make-market
    transactions-leaderboard-protocol

    otcfast04	增发事项-预案 additional-issues-preplan
    otcfast05	增发事项-实施 additional-issues-implementation
    增发事项 additional-issues-all

    otcfast06	分红事项-预案 dividend-matters-preplan
    otcfast07	分红事项-实施 dividend-matters-implementation
    分红事项 dividend-matters-all

    otcfast08	挂牌情况 listing-situation
    otcfast09	成交概况 transaction-overview

    otcfast10	成交走势-做市图 turnover-trend-make-market-diagram
    otcfast11	成交走势-协议图 turnover-trend-protocol-diagram
    成交走势 turnover-trend-diagram-all

    news	    公司新闻 otc-thematic-statistics-news
    bulletion	公司公告 otc-thematic-statistics-bulletin 
*/



交易排行榜-协议 otcfast03
交易排行榜-做市 otcfast13


http://10.1.5.202/webservice/fastview/otc/otcfast03
http://10.1.5.202/webservice/fastview/otc/otcfast13

http://10.1.5.202/webservice/fastview/otc/news

http://10.1.5.202/webservice/fastview/otc/bulletin

http://10.1.5.202/queryservice/bulletin/attachment/otc/1000000102180858.pdf

{
    "otcfast01": {
        name: "新增挂牌",// name
        gpjs: "挂牌家数",
        zqdm: "证券代码",
        zqjc: "证券简称",
        sshy: "所属行业",
        zbqs: "主板券商",
        mgsy: "每股收益",
        mgjzc: "每股净资产",
        jlrtbzz: "净利润同比增长",
        jzcsyl: "净资产收益率",
        zgb: "总股本",
        ltgb: "流通股本"
    },
    "otcfast02": {
        name: "新增协议",// ??? otcfast02 === otcfast01
        gpjs: "挂牌家数",
        zqdm: "证券代码",
        zqjc: "证券简称",
        sshy: "所属行业",
        zbqs: "主板券商",
        mgsy: "每股收益",
        mgjzc: "每股净资产",
        jlrtbzz: "净利润同比增长",
        jzcsyl: "净资产收益率",
        zgb: "总股本",
        ltgb: "流通股本"
    },
    "otcfast03": {
        name: "交易排行榜(协议/做市)",
        "xy": [
            {
                "zqdm": "证券代码",
                "zqjc": "证券简称",
                "zdf": "涨跌幅",
                "cje": "成交额"
            },
        ],
        "zs": [
            {
                "zqdm": "证券代码",
                "zqjc": "证券简称",
                "zdf": "涨跌幅",
                "cje": "成交额"
            },
        ]
    },
    "otcfast031": {
        name: "交易排行榜(协议)",
        "xy": [
            {
                "zqdm": "证券代码",
                "zqjc": "证券简称",
                "zdf": "涨跌幅",
                "cje": "成交额"
            },
        ]
    },
    "otcfast032": {
        name: "交易排行榜(做市)",
        "zs": [
            {
                "zqdm": "证券代码",
                "zqjc": "证券简称",
                "zdf": "涨跌幅",
                "cje": "成交额"
            },
        ]
    },
    "otcfast04": {
        name: "增发事项-预案",
        "zqdm": "证券代码",
        "zqjc": "证券简称",
        "mjje": "募集金额(万元)"
    },
    "otcfast05": {
        name: "增发事项-实施",
        "zqdm": "证券代码",
        "zqjc": "证券简称",
        "mjje": "募集金额(万元)"
    },
    "otcfast06": {
        name: "分红事项-预案",
        "zqdm": "证券代码",
        "zqjc": "证券简称",
        "mjje": "方案说明"
    },
    "otcfast07": {
        name: "分红事项-实施",
        "zqdm": "证券代码",
        "zqjc": "证券简称",
        "mjje": "方案说明"
    },
    "otcfast08": {
        name: "挂牌情况",
        "gpjs": "挂牌家数",
        "xzjs": "今日新增挂牌家数",
        "dgpjs": "待挂牌家数",
        "sbjs": "申报中家数",
        "bz": "标识(合计/协议/做市)"
    },
    "otcfast09": {
        name: "成交概况",
        "cjjs": "成交家数",
        "szjs": "上涨家数",
        "xdjs": "下跌家数",
        "cjl": "成交量(亿股)",
        "cje": "成交额(亿元)",
        "cjbs": "成交笔数,
        "mc": "名称(合计/协议/做市)"
    },
    "otcfast10": {
        name: "成交走势-做市图",
        "rq": "截止日期",
        "cjl": "成交量(亿股)",
        "cje": "成交额(亿元)"
    },
    "otcfast11": {
        name: "成交走势-协议图",
        "rq": "截止日期",
        "cjl": "成交量(亿股)",
        "cje": "成交额(亿元)"
    },
    "news": {
        name: "新闻",
        "xwtitle": "新闻标题",
        "xwnr": "新闻内容",
        "xwsj": "新闻时间",
        "newid": "564580757615"
    },
    "bulletin": {
        name: "公告",
        "gsggtitle": "公告标题",
        "gsggsj": "公告时间",
        "id": "1000000099090907",
        "fileType": "pdf"
    }
}

    // bulletin 公告

Object.keys(obj);
// ["otcfast01", "otcfast02", "otcfast03", "otcfast04", "otcfast05", "otcfast06", "otcfast07", "otcfast08", "otcfast09", "otcfast10", "otcfast11", "news", "bulletin"]


```


```js
{
    gpjs: "挂牌家数",
    zqdm: "证券代码",
    zqjc: "证券简称",
    sshy: "所属行业",
    zbqs: "主板券商",
    mgsy: "每股收益",
    mgjzc: "每股净资产",
    jlrtbzz: "净利润同比增长",
    jzcsyl: "净资产收益率",
    zgb: "总股本",
    ltgb: "流通股本",
},
{
    "xy": [
        {
            "zqdm": "证券代码",
            "zqjc": "证券简称",
            "zdf": "涨跌幅",
            "cje": "成交额"
        },
    ],
    "zs": [
        {
            "zqdm": "证券代码",
            "zqjc": "证券简称",
            "zdf": "涨跌幅",
            "cje": "成交额"
        },
    ],
    "alias": "协议 做市"
},
{
    {
        "zqdm": "证券代码",
        "zqjc": "证券简称",
        "mjje": "募集金额(万元)"
    },
}
{
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
    xxx: "",
}




```

otcfast02:
    与otcfast01一样

otcfast03:分xy:协议和zs:做市
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 涨跌幅
     */
    private double zdf;
    /**
     * 成交额
     */
    private String cje;

otcfast04:
         /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 募集金额（万元）
     */
    private String mjje;
otcfast05:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 募集金额（万元）
     */
    private String mjje;
otcfast06:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 方案说明
     */
    private String mjje;
otcfast07:
        /**
     * 证券代码
     */
    private String zqdm;
    /**
     * 证券简称
     */
    private String zqjc;
    /**
     * 方案说明
     */
    private String mjje;
otcfast08:
        /**
     * 挂牌家数
     */
    private int gpjs;
    /**
     * 今日新增挂牌家数
     */
    private int xzjs;
    /**
     * 待挂牌家数
     */
    private int dgpjs;
    /**
     * 申报中家数
     */
    private int sbjs;
    /**
     * 标识(合计,
     做市)
     */
    private String bz;
otcfast09:,


    /**
     * 成交家数
     */
    private int cjjs;
    /**
     * 上涨家数
     */
    private int szjs;
    /**
     * 下跌家数
     */
    private int xdjs;
    /**
     * 成交量（亿股）
     */
    private String cjl;
    /**
     * 成交额（亿元）
     */
    private String cje;
    /**
     * 成交笔数
     */
    private String cjbs;
    /**
     * 名称(合计，协议，做市)
     */
    private String mc;
otcfast10:
        /**
     * 截止日期
     */
    private String rq;
    /**
     * 成交量（亿股）
     */
    private double cjl;
    /**
     * 成交额（亿元）
     */
    private double cje;
otcfast11:
        /**
     * 截止日期
     */
    private String rq;
    /**
     * 成交量（亿股）
     */
    private double cjl;
    /**
     * 成交额（亿元）
     */
    private double cje;







## multi tabs & multi modules  === one API(args) & click fetch data (default tab one)

## one tab & multi modules  === one API(objects in object)






    otcfast01	新增挂牌 newly-added-listing
    otcfast02	新增协议 newly-added-protoco
    otcfast03	交易排行榜 transactions-leaderboard /trading-rankings (交易排行榜-做市/ 交易排行榜-协议)
    otcfast04	增发事项-预案 additional-issues-preplan
    otcfast05	增发事项-实施 additional-issues-implementation
    otcfast06	分红事项-预案 dividend-matters-preplan
    otcfast07	分红事项-实施 dividend-matters-implementation
    otcfast08	挂牌情况 listing-situation
    otcfast09	成交概况 transaction-overview
    otcfast10	成交走势-做市图 turnover-trend-make-market-diagram
    otcfast11	成交走势-协议图 turnover-trend-protocol-diagram
    news	    公司新闻 otc-thematic-statistics-news
    bulletion	公司公告 otc-thematic-statistics-bulletin

    "newly-added-listing",
    "newly-added-protoco",
    "transactions-leaderboard",
    "additional-issues-preplan",
    "additional-issues-implementation",
    "dividend-matters-preplan",
    "dividend-matters-implementation",
    "listing-situation",
    "transaction-overview",
    "turnover-trend-make-market-diagram",
    "turnover-trend-protocol-diagram",
    "otc-thematic-statistics-news",
    "otc-thematic-statistics-bulletin",


# more

```js
// <a href="#更多" data-uid="342064" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-newly-added-listing">更多</a>

// more
setTimeout((debug = false) => {
    let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-newly-added-listing"]`);
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
        throw new Error(`turn_to_uid dom is `, turn_to_uid);
    }
}, 0);



// 其中交易排行榜协议对应otcfast03 ，交易排行榜做市对应otcfast13


// more
setTimeout((debug = false) => {
    let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-equity-shareholder-data"]`);
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

```

# string to number

```json

    "id872379": {
        "gpjs": "12",
        "zqdm": "872379",
        "zqjc": "网域科技",
        "sshy": "软件和信息技术服务业",
        "zbqs": "开源证券",
        "mgsy": "--",
        "mgjzc": "--",
        "jlrtbzz": "--",
        "jzcsyl": "--",
        "zgb": "--",
        "ltgb": "--"
    }

```



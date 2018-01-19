# 债券 基准利率速览


# BONDS

bonds-fv


## .SZ & .SH

http://10.1.5.202/bonds/bonds-fv/index.html?gilcode=000001.SZ&skin=white
http://10.1.5.202/bonds/bonds-fv/index.html?gilcode=600570.SH&skin=black


新三板 F9 - 速览

新宋体：NSimSun

宋体：SimSun

http://10.1.5.202/stock/f9/fastview/common/modal.css

font: 12px/20px "Microsoft Yahei", "Arial Narrow", HELVETICA
font-family: "Microsoft YaHei", sans-serif;





```sh

$ browser-sync start --server --files "./stock/*.*"

$ browser-sync start --server --files "./*.*"


npm run page

```





## API


最新交易数据
公司简介

大事提醒
公司新闻
研究报告
公司公告

最新财务数据

    业绩预告（报告期2015-12-31，披露日期2016-02-22）
    业绩快报（报告期2015-12-31，披露日期2016-02-22）
    财务数据摘要（报告期2015-06-30）

公司表现（所属三板管理型行业二级：） 同业数据

市场表现 公司规模 公司业绩 公司估值

主营业务（截止2015-06-30）

按产品 按项目

产品及服务营业收入(元)营业成本(元)营业收入占比(%)


管理层概况与持股(截止2015-06-30)

高管离职信息

股本结构

股本股东

限售解禁安排

十大股东（截止2015-06-30）


股东户数（截止2015-06-30）


# modal

```sh
$ npm i -g uglify-es


# uglifyjs ./libs/BouncedModal.js -o ./build/foo.min.js -c -m reserved=['BouncedModal']

# OK
$ uglifyjs -h
$ uglifyjs ./libs/modal.js -o ./build/modal.min.js -c -m reserved=['BouncedModal']

# ??? BAD
$ uglifyes -h
$ uglifyes ./libs/modal.js -o ./build/modal.min.js -c -m reserved=['BouncedModal']

```



# uglifyjs

> --mangle-props & -m


```js




/*

$ npm i -g uglify-es


// OK ???
uglifyjs -h
uglifyjs ./libs/modal.js -o ./build/modal.min.js -c -m reserved=['BouncedModal']


*/



/*

$ uglifyjs ./libs/modal.js -o ./libs/modal.min.js -c --mangle reserved=['BouncedModal']
$ uglifyjs ./libs/modal.js -o ./libs/modal.min.js -c -m reserved=[`BouncedModal`]
$ uglifyjs ./libs/modal.js -o ./libs/modal.min.js -c -m reserved=["BouncedModal"]



// OK ???
uglifyjs -h


# BAD ???
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]



# OK
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP"]



uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props keep_quoted



properties: {
    // mangle property options
    reserved: ["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]
},


*/

```









# Highchart & scrollbar bug!



1. lib: highstock.js

2. method: Highcharts.chart()

http://10.1.5.202/stock/f9/fastview/build/js/holdings-participation-situation.min.js

http://10.1.5.202/stock/f9/f9-fastview/build/js/indicators-per-share.min.js

# no Data


http://cdn.hcharts.cn/highcharts/modules/no-data-to-display.js

https://api.highcharts.com/highcharts/noData

```js

    Highcharts.setOptions({
        lang: {
            noData: '暂无数据'
        }
    });


```b



f9-fastview & fastview

```js

    // init
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
    // STOCK_IP = `http://${window.parent.location.host}`;
    // STOCK_SecCode = `000001.SZ`;
    STOCK_IP = `http://10.1.5.202`;
    STOCK_Paths = `/webservice/fastview/stock`;
    console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);

    // http:// !== http:://
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
    // STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`secucode`);
    STOCK_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    // STOCK_IP = `${window.parent.location.protocol}://${window.parent.location.host}`;
    STOCK_IP = `http://${window.parent.location.host}`;
    STOCK_Paths = `/webservice/fastview/stock`;
    console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);

    // console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
    let URL = `${STOCK_IP}${STOCK_Paths}${STOCK_SecCode}`;
    console.log(`URL`, URL);

```

# gilcode=600570.SH & gilcode=000001.SZ

http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=000001.SZ&market=4609&sid=hs

http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=600570.SH&market=4609&sid=hs


# iframe

> pass .SZ/.SH



http://localhost:3000/?gilcode=000003&market=4609&sid=hs

http://localhost:3000/?gilcode=600570&market=4609&sid=hs






# uglifyjs

> --mangle-props & -m


```js

/*



// OK ???
uglifyjs -h


# BAD ???
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]



# OK
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP"]



uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props keep_quoted



properties: {
    // mangle property options
    reserved: ["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]
},


*/

```





# 股票代码 (seccode)

SH 即表示在上海证券交易所所上市的股票,(SH即ShangHai的拼音首位),如 SH600616 即代表在上海证券交易所上市的民生银行;

SZ 即表示在深圳证券交易所所上市的股票,(SZ即ShenZhen的拼音首位)如 SZ000001 即表示在深圳证券交易所上市的深发展!


http://10.1.5.202/webservice/fastview/stock/news/000060.SZ

http://10.1.5.202/webservice/fastview/stock/news/600570.SH


http://10.1.5.203/http/manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22IndexF10IndexFund%22}


# 股票代码 查询一览表

http://quote.eastmoney.com/stocklist.html


decodeURI(`https://cdn.xgqfrms.xyz/?{%27SecuCode%27:%27600570%27,%27IndexCode%27:%27147487%27,%27ImageType%27:%271%27,%27FastDateFilterType%27:%27Customer%27,%27BeginDate%27:%272017-10-17%27,%27EndDate%27:%272017-12-03%27,%27ApiName%27:%20%27JYPlateIndexIndustryImage%27%20}`);


# getParam

## Ok

https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs

## BAD

https://cdn.xgqfrms.xyz/?{'SecuCode':'600570','IndexCode':'147487','ImageType':'1','FastDateFilterType':'Customer','BeginDate':'2017-10-17','EndDate':'2017-12-03','ApiName': 'JYPlateIndexIndustryImage' }


http://222.73.146.143/f10/view/index.html?secucode=000001&market=4609&sid=hs


# gilcode

https://cdn.xgqfrms.xyz/?gilcode=600570.SH&market=4609&sid=hs
https://cdn.xgqfrms.xyz/?gilcode=000001.SZ&market=4609&sid=hs


https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs


## .SH & .SZ

> 600570.SH

> 000001.SZ

gilcode
secucode
market
sid

```js


    var COOKIE_DOMAIN = COOKIESDIAMON = '.gearbest.com';
    var DOMAIN = 'https://www.gearbest.com',
        MAIN_DOMAIN = 'https://www.gearbest.com',
        MOBILE_URL = 'https://m.gearbest.com/',
        DOMAIN_IMG = 'https://review.gbtcdn.com';
    var JS_IMG_URL = 'https://css.gbtcdn.com/imagecache/GB3/';

    var JS_LANG = '';

    var UPLOAD_URL = 'https://uploads.reuew.com/',
        DOMAIN_CART = 'https://cart.gearbest.com',
        DOMAIN_USER = 'https://user.gearbest.com',
        HTTPS_LOGIN_DOMAIN = 'https://login.gearbest.com',
        HTTPS_ORDER_DOMAIN = 'https://order.gearbest.com';
    var WEB_CLICK_DOMAIN = 'https://webclick.appinthestore.com/click/index';

    var GOODSPRICE = 'https://s.gearbest.com/api/gearbest/v2/goods/price';


    const getUrlParamete = function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        console.log(`reg = `, reg);
        // reg =  /(^|&)debug=([^&]*)(&|$)/
        var r = window.location.search.substr(1).match(reg);
        console.log(`window.location.search = `, window.location.search);
        // "?secucode=000001&market=4609&sid=hs&debug=false"
        // match() ???
        console.log(`result = `, r);
        // ["&debug=false", "&", "false", "", index: 34, input: "secucode=000001&market=4609&sid=hs&debug=false"]
        if (r !== null){
            return decodeURI(r[2]);
        }else{
            return null;
        }
    };
    var $debugCode = getUrlParamete('debug');
    // https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs&debug=false

```



# keyghost

> 键盘精灵???

https://www.mukedaba.com/thread-561-1-1.html

## JavaScript实现按键精灵的原理分析

https://www.52jbj.com/jbdq/567653.html
http://www.jb51.net/article/106286.htm

http://www.phperz.com/article/17/0623/327424.html


https://codepen.io/strick/pen/xgNGbz

https://developer.mozilla.org/zh-CN/docs/Web/API/Event
https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/TouchEvent
https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent



> JavaScript 中的事件处理

https://www.tianmaying.com/tutorial/javascript-event
https://www.zhihu.com/question/30970837



> js在输入框屏蔽按键,只能键入数字的示例代码

https://yq.aliyun.com/wenji/169729


代码如下:

```html

<input type='text' value='1' onkeydown='return GetInput()' onkeyup='Set(this)' >


<script language="javascript">
    function GetInput(){
        //屏蔽非数字和非退格符
        var k = event.keyCode;
        //48-57是大键盘的数字键，96-105是小键盘的数字键，8是退格符←
        f ((k <= 57 && k >= 48) || (k <= 105 && k >= 96) || (k== 8)){
            return true;
        } else {
            return false;
        }
    }
    function Set(obj){
        //即时处理输入框的内容,比如进行某些运算
    }
</script>

<pre>
    技术要领：onkeydown事件先于onkeyup事件被触发.<br/>
    当 onkeydown 事件 return false; 时 onkeyup 事件将不会被触发，<br/>
    并且输入框中也不会有用户刚按下的这个字符，从而实现了屏蔽某些字符的目的。<br/>
    <hr/>
    了解了这一事件触发原理，思想上应当有所延伸(比如鼠标的几个事件也会是这样的机制)...
</pre>

```


```js


console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
console.log(`gilcode `, gilcode, typeof gilcode);

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${num}/600570.SH`;

```



# webpack & uglify

> except keywords ???

https://github.com/webpack/webpack

https://webpack.js.org/concepts/loaders/

https://webpack.js.org/loaders/

https://webpack.js.org/development/how-to-write-a-loader/


```js

// except: ['$super', '$', 'exports', 'require'],//排除关键字 ???

```

https://webpack.js.org/loaders/babel-loader/
https://webpack.js.org/loaders/html-loader/

https://webpack.js.org/loaders/imports-loader/
https://webpack.js.org/loaders/exports-loader/

## plugins

https://webpack.js.org/plugins/

https://github.com/mishoo/UglifyJS2
https://github.com/alexlamsl
https://github.com/webpack-contrib/uglifyjs-webpack-plugin/blob/master/package.json

https://github.com/webpack-contrib/uglifyjs-webpack-plugin#uglifyoptions
https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/master#uglifyoptions

https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options
https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-properties-options


https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
https://www.npmjs.com/package/uglify-es

https://www.npmjs.com/package/uglifyjs-webpack-plugin

https://github.com/mishoo/UglifyJS2/tree/harmony
https://github.com/mishoo/UglifyJS2/tree/harmony#parse-options
https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options

https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-options

> 处理选项

撕裂, 乱砍, 轧布; 压榨机


## keep_classnames

keep_classnames (default: false)

Pass true to prevent the compressor from discarding class names.


## keep_fnames
keep_fnames (default: false)

Pass true to prevent the compressor from discarding function names.
Useful for code relying on Function.prototype.name.


```js

// test.js
var globalVar;
function funcName(firstLongName, anotherLongName) {
    var myVariable = firstLongName +  anotherLongName;
}


var code = fs.readFileSync("test.js", "utf8");

UglifyJS.minify(code).code;
// 'function funcName(a,n){}var globalVar;'

UglifyJS.minify(code, {mangle: {reserved: ['firstLongName']}}).code;
// 'function funcName(firstLongName,a){}var globalVar;'

UglifyJS.minify(code, {mangle: {toplevel: true }}).code;
// 'function n(n,a){}var a;'

```

```sh
$ browser-sync start --server --files "./stock/*.*"

$ browser-sync start --server --files "./*.*"

```

# https://cdn.xgqfrms.xyz/index.html?gilcode=000001.SZ&market=4609&sid=hs



```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!
$ cd ../

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://jira.gildata.com:8888/secure/RapidBoard.jspa?rapidView=29&projectKey=GFT&view=planning&selectedIssue=GFT-1494&quickFilter=57


http://localhost:3000/stock/




# webpack

ES6 => ES5


??? path

./
../

relative path ???

absolute path ???


otc


## OCT

> OTC（Over-The-Counter）场外交易市场

https://www.douban.com/note/617482827/

http://www.xinsanban8.com/shehui/20171120/17905.html

https://otc.gf.com.cn/notice_detail/new/56039510343ca3d3060b40c1

https://www.zhihu.com/question/34737321?sort=created






# data-*

> bug ???

```js

document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);


```

title(active highlight)
#2e2f33
title()
#56575b

text
#4d4d4d

    navigator: {
        height: 20,
        margin: 10
    },
    scrollbar: {
        enabled: false,
        // no scrollbar, only using rangeSelector
    },


/* svg style */


/*
rect {
    x: 0;
    y: 5;
    width: 17;
    height: 10;
    fill: rgb(255, 25, 25);
    rx: 0;
    ry: 0;
}
*/



border: 1px solid #d7dbe0;



## web server

> Apache & Nginx

/usr/local/apache2/webapps/



http://10.1.5.203/webtool/apitool/

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://10.1.5.202/xsb/ntb-zs/index.html
http://10.1.5.202/xsb/f9/index.html


/usr/local/apache2/webapps/stock/f9/fastview

/usr/local/apache2/webapps/xsb/ntb-zs
/usr/local/apache2/webapps/xsb/f9




http://jira.gildata.com:8888/secure/attachment/28925/Api1.txt

http://10.1.5.202/stock/f9/fastview/sidebar.html



http://10.1.64.125/stock/f9/sulan/sulan.html

http://10.1.5.202/stock/f9/sulan/sulan.html


file:///E:/github/RAIO/HTML5-Drag-Drop/XSB_F9/otc/otc/sulan/otcsulan.html



```js

swal("你确定要删除此模块?", {
    buttons: {
        cancel: {
            text: "确定",
            value: "cancel",
        },
        ok: {
            text: "取消",
            value: "ok",
        }
    },
})
.then((value) => {
    switch (value) {
        case "cancel":
            swal("已取消删除此模块!", "success");
            break;
        case "ok":
            swal("你确定要删除此模块?", "warning");
            break;
        default:
            swal("Got away safely!");
    }
});

```



## tips

> delete multi lines

Ctrl + X

{
    config.js,
    agency-research-statistics.js,
    agency-rating.js,
    changes-shareholding-executives.js,
    company-announcements.js,
    company-news.js,
    equity-pledge.js,
    financing-and-margin-balance-difference-trend.js,
    holdings-participation-situation.js,
    important-infos.js,
    indicators-per-share.js,
    institutional-shareholding-change-statistics.js,
    investor-relations.js,
    monthly-capital-flows-large-single-statistics.js,
    profit-forecast.js,
    recent-important-events-backup.js,
    recent-important-events.js,
    research-report.js,
    stock-price-turnover.js,
    top-ten-shareholders.js
}



有没有人知道，如何用比较简单方式来获得一组无重复的文件名？

像这样的结果：

{
    agency-research-statistics.js,
    agency-rating.js,
    changes-shareholding-executives.js,
    company-announcements.js,
    company-news.js,
    config.js,
    equity-pledge.js,
    financing-and-margin-balance-difference-trend.js
}


## how to get all the files's names in a easy way???

0. get all files's name `dir | clip`

1. multi edit `Alt+Click`
2. delete duplication `Ctrl + X`
3. format `Ctrl+K` `Ctrl+F`












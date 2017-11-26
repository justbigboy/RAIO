// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modal = STOCK_F9_FV.Modal || {};

// Modal && IIFE === Closure!
STOCK_F9_FV.Modal.Public = STOCK_F9_FV.Modal.Public  || ((debug = false) => {
    return {
        view: () => {
            const w = document.documentElement.clientWidth;
            const h = document.documentElement.clientHeight;
            if (!debug) {
                console.log(`clientHeight = `, h);
                console.log(`clientWidth = `, w);
            }
            //w:可视区域的宽度
            // h:可视区域的高度
            return {
                w,
                h
            };
        },
    }
});

/* 

window.innerHeight & window.innerWidth

The browser window (the browser viewport) is NOT including toolbars and scrollbars.

https://www.w3schools.com/js/js_window.asp?output=print

https://jsperf.com/window-innerwidth-vs-document-body-clientwidth/4


*/


STOCK_F9_FV.Modal.getClientWidthHeight = STOCK_F9_FV.Modal.getClientWidthHeight  || ((debug = false) => {
    let width = 0,
        innerwidth = 0,
        bodywidth = 0,
        height = 0,
        innerheight = 0,
        bodyheight = 0,
        isIE = navigator.userAgent.indexOf("MSIE 6.0") !== -1 ? true : false;
    if(!isIE){
        bodywidth = document.body.clientWidth;
        width = document.documentElement.clientWidth;
        innerwidth = window.innerWidth;
        // 50px ??? bug
        bodyheight = document.body.clientHeight;
        height = document.documentElement.clientHeight;
        innerheight = window.innerHeight;
        if (!debug) {
            console.log(`document.body.clientHeight = `, bodyheight);
            // 50px ??? bug
            console.log(`document.documentElement.clientHeight = `, height);
            console.log(`window.innerHeight = `, innerheight);
            console.log(`***********************************`);
            console.log(`document.body.clientWidth = `, bodywidth);
            console.log(`document.documentElement.clientWidth = `, width);
            console.log(`window.innerWidth = `, innerwidth);
        }
    }else{
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
        if (!debug) {
            console.log(`document.documentElement.clientHeight = `, height);
            console.log(`document.documentElement.clientWidth = `, width);
        }
    }
    if (!debug) {
        console.log(`isIE = `, isIE);
        console.log(`clientHeight = `, height);
        console.log(`clientWidth = `, width);
    }
    return {
        w: width,
        h: height
    };
});


(function (win) {
    if(win["UDP"]){
        win["UDP"].Public = STOCK_F9_FV.Modal.Public();
    }else{
        win.UDP = {
            Public: STOCK_F9_FV.Modal.Public(),
            // getClientWidth: STOCK_F9_FV.Modal.getClientWidth(),
            // getClientHeight: STOCK_F9_FV.Modal.getClientHeight(),
            getClientWidthHeight: STOCK_F9_FV.Modal.getClientWidthHeight()
        };
    }
})(window);




/* 

??? UDP

http://www.networkinghowtos.com/howto/view-listening-udp-ports-on-windows/


*/

/* AMD / CommonJS / UMD / CMD / ES2015 Module */

// UDP ??? namespace 

(function (win) {
    function Public(){
        return {
            view:function(){
                return{
                    //w:可视区域的宽度    h:可视区域的高度
                    w:document.documentElement.clientWidth,
                    h:document.documentElement.clientHeight
                };
            }
        }
    }
    if(win["UDP"]){
        win["UDP"].Public = Public();
        // this expression will never excuted!
    }else{
        win.UDP = {Public:Public()};
        // this expression will always excuted!
        // window.UDP.Public === Object
        // UDP.Public.view();
        // {w: 880, h: 662}
    }
})(window);






/* 


(function (win) {
    if(win["UDP"]){
        win["UDP"].Public = Public();
        // this expression will never excuted!
    }else{
        win.UDP = {
            Public:Public()
        };
    }
})(window, function (params = {kay: `value`}, debug = false, css = `color: #f0f; font-size: 23px;`) {
    console.log(`this is an anonymous function!`);
    const {key: k} = {...params};
    console.log(`%c params's key as k = ${k}!`, css);
});



*/


































function jsScroller(o,w,h){var self=this;var list=o.getElementsByTagName("div");for(var i=0;i<list.length;i++){if(list[i].className.indexOf("Scroller-Container")>-1){o=list[i]}}this._setPos=function(x,y){if(x<this.viewableWidth-this.totalWidth){x=this.viewableWidth-this.totalWidth}if(x>0){x=0}if(y<this.viewableHeight-this.totalHeight){y=this.viewableHeight-this.totalHeight}if(y>0){y=0}this._x=x;this._y=y;with(o.style){left=this._x+"px";top=this._y+"px"}};this.reset=function(){this.content=o;this.totalHeight=o.offsetHeight;this.totalWidth=o.offsetWidth;this._x=0;this._y=0;with(o.style){left="0px";top="0px"}};this.scrollBy=function(x,y){this._setPos(this._x+x,this._y+y)};this.scrollTo=function(x,y){this._setPos(-x,-y)};this.stopScroll=function(){if(this.scrollTimer){window.clearInterval(this.scrollTimer)}};this.startScroll=function(x,y){this.stopScroll();this.scrollTimer=window.setInterval(function(){self.scrollBy(x,y)},40)};this.swapContent=function(c,w,h){o=c;var list=o.getElementsByTagName("div");for(var i=0;i<list.length;i++){if(list[i].className.indexOf("Scroller-Container")>-1){o=list[i]}}if(w){this.viewableWidth=w}if(h){this.viewableHeight=h}this.reset()};this.content=o;this.viewableWidth=w;this.viewableHeight=h;this.totalWidth=o.offsetWidth;this.totalHeight=o.offsetHeight;this.scrollTimer=null;this.reset()}$(function(){$(".tabover .tab a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover .content li").hide();$(".tabover .content li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover .tab a").length;function B(){C++;C==A?C=0:C;$(".tabover .tab a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover .content ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover").mouseover(function(){clearInterval(D)});$(".tabover").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover .tab01 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover .content01 li").hide();$(".tabover .content01 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover .tab01 a").length;function B(){C++;C==A?C=0:C;$(".tabover .tab a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover .content01 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover").mouseover(function(){clearInterval(D)});$(".tabover").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover .tab02 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover .content02 li").hide();$(".tabover .content02 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover .tab02 a").length;function B(){C++;C==A?C=0:C;$(".tabover .tab02 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover .content02 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover").mouseover(function(){clearInterval(D)});$(".tabover").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover01 .tab03 a ").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover01 .content03 li").hide();$(".tabover01 .content03 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover01 .tab03 a").length;function B(){C++;C==A?C=0:C;$(".tabover01 .tab03 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover01 .content03 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover01").mouseover(function(){clearInterval(D)});$(".tabover01").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover02 .tab04 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover02 .content04 li").hide();$(".tabover02 .content04 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover02 .tab04 a").length;function B(){C++;C==A?C=0:C;$(".tabover02 .tab04 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover02 .content04 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover02").mouseover(function(){clearInterval(D)});$(".tabover02").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover03 .tab05 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover03 .content05 li").hide();$(".tabover03 .content05 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover03 .tab05 a").length;function B(){C++;C==A?C=0:C;$(".tabover03 .tab05 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover03 .content05 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover03").mouseover(function(){clearInterval(D)});$(".tabover03").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover04 .tab06 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover04 .content06 li").hide();$(".tabover04 .content06 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover04 .tab06 a").length;function B(){C++;C==A?C=0:C;$(".tabover04 .tab06 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover04 .content06 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover04").mouseover(function(){clearInterval(D)});$(".tabover04").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover06 .tab08 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover06 .content08 li").hide();$(".tabover06 .content08 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover06 .tab08 a").length;function B(){C++;C==A?C=0:C;$(".tabover06 .tab08 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover06 .content08 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover06").mouseover(function(){clearInterval(D)});$(".tabover06").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover07 .tab09 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover07 .content09 li").hide();$(".tabover07 .content09 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover07 .tab09 a").length;function B(){C++;C==A?C=0:C;$(".tabover07 .tab09 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover07 .content09 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover07").mouseover(function(){clearInterval(D)});$(".tabover07").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover08 .tab10 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover08 .content10 li").hide();$(".tabover08 .content10 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover08 .tab10 a").length;function B(){C++;C==A?C=0:C;$(".tabover08 .tab10 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover08 .content10 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover08").mouseover(function(){clearInterval(D)});$(".tabover08").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover09 .tab11 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover09 .content11 li").hide();$(".tabover09 .content11 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover09 .tab11 a").length;function B(){C++;C==A?C=0:C;$(".tabover09 .tab11 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover09 .content11 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover09").mouseover(function(){clearInterval(D)});$(".tabover09").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover10 .tab12 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover10 .content12 li").hide();$(".tabover10 .content12 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover10 .tab13 a").length;function B(){C++;C==A?C=0:C;$(".tabover10 .tab12 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover10 .content12 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover10").mouseover(function(){clearInterval(D)});$(".tabover10").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover11 .tab13 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover11 .content13 li").hide();$(".tabover11 .content13 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover11 .tab13 a").length;function B(){C++;C==A?C=0:C;$(".tabover11 .tab13 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover11 .content13 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover11").mouseover(function(){clearInterval(D)});$(".tabover11").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover12 .tab14 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover12 .content14 li").hide();$(".tabover12 .content14 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover12 .tab14 a").length;function B(){C++;C==A?C=0:C;$(".tabover12 .tab14 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover12 .content14 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover12").mouseover(function(){clearInterval(D)});$(".tabover12").mouseout(function(){D=setInterval(B,3000)})}});$(function(){$(".tabover13 .tab15 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover13 .content15 li").hide();$(".tabover13 .content15 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover13 .tab14 a").length;function B(){C++;C==A?C=0:C;$(".tabover13 .tab14 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover13 .content14 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover13").mouseover(function(){clearInterval(D)});$(".tabover13").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover14 .tab16 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover14 .content16 li").hide();$(".tabover14 .content16 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover14 .tab16 a").length;function B(){C++;C==A?C=0:C;$(".tabover14 .tab16 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover14 .content16 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover14").mouseover(function(){clearInterval(D)});$(".tabover14").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover15 .tab17 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover15 .content17 li").hide();$(".tabover15 .content17 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover15 .tab17 a").length;function B(){C++;C==A?C=0:C;$(".tabover15 .tab17 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover15 .content17 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover15").mouseover(function(){clearInterval(D)});$(".tabover15").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover16 .tab18 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover16 .content18 li").hide();$(".tabover16 .content18 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover16 .tab18 a").length;function B(){C++;C==A?C=0:C;$(".tabover16 .tab18 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover16 .content18 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover16").mouseover(function(){clearInterval(D)});$(".tabover16").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover17 .tab19 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover17 .content19 li").hide();$(".tabover17 .content19 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover17 .tab19 a").length;function B(){C++;C==A?C=0:C;$(".tabover17 .tab19 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover17 .content19 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover17").mouseover(function(){clearInterval(D)});$(".tabover17").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover18 .tab20 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover18 .content20 li").hide();$(".tabover18 .content20 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover18 .tab20 a").length;function B(){C++;C==A?C=0:C;$(".tabover18 .tab20 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover18 .content20 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover18").mouseover(function(){clearInterval(D)});$(".tabover18").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover19 .tab21 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover19 .content21 li").hide();$(".tabover19 .content21 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover19 .tab21 a").length;function B(){C++;C==A?C=0:C;$(".tabover19 .tab21 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover19 .content21 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover19").mouseover(function(){clearInterval(D)});$(".tabover19").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover20 .tab22 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover20 .content22 li").hide();$(".tabover20 .content22 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover20 .tab22 a").length;function B(){C++;C==A?C=0:C;$(".tabover20 .tab22 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover20 .content22 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover20").mouseover(function(){clearInterval(D)});$(".tabover20").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover21 .tab23 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover21 .content23 li").hide();$(".tabover21 .content23 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover21 .tab23 a").length;function B(){C++;C==A?C=0:C;$(".tabover21 .tab23 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover21 .content23 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover21").mouseover(function(){clearInterval(D)});$(".tabover21").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover22 .tab24 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover22 .content24 li").hide();$(".tabover22 .content24 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover22 .tab24 a").length;function B(){C++;C==A?C=0:C;$(".tabover22 .tab24 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover22 .content24 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover22").mouseover(function(){clearInterval(D)});$(".tabover22").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover23 .tab25 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover23 .content25 li").hide();$(".tabover23 .content25 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover23 .tab25 a").length;function B(){C++;C==A?C=0:C;$(".tabover23 .tab25 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover23 .content25 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover23").mouseover(function(){clearInterval(D)});$(".tabover23").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover24 .tab26 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover24 .content26 li").hide();$(".tabover24 .content26 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover24 .tab26 a").length;function B(){C++;C==A?C=0:C;$(".tabover24 .tab26 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover24 .content26 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover24").mouseover(function(){clearInterval(D)});$(".tabover24").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover25 .tab27 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover25 .content27 li").hide();$(".tabover25 .content27 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover25 .tab27 a").length;function B(){C++;C==A?C=0:C;$(".tabover25 .tab27 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover25 .content27 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover25").mouseover(function(){clearInterval(D)});$(".tabover25").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover26 .tab28 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover26 .content28 li").hide();$(".tabover26 .content28 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover26 .tab28 a").length;function B(){C++;C==A?C=0:C;$(".tabover26 .tab28 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover26 .content28 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover26").mouseover(function(){clearInterval(D)});$(".tabover26").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover27 .tab29 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover27 .content29 li").hide();$(".tabover27 .content29 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover27 .tab29 a").length;function B(){C++;C==A?C=0:C;$(".tabover27 .tab29 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover27 .content29 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover27").mouseover(function(){clearInterval(D)});$(".tabover27").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover28 .tab30 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover28 .content30 li").hide();$(".tabover28 .content30 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover28 .tab30 a").length;function B(){C++;C==A?C=0:C;$(".tabover28 .tab30 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover28 .content30 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover28").mouseover(function(){clearInterval(D)});$(".tabover28").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover29 .tab31 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover29 .content31 li").hide();$(".tabover29 .content31 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover29 .tab31 a").length;function B(){C++;C==A?C=0:C;$(".tabover29 .tab31 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover29 .content31 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover29").mouseover(function(){clearInterval(D)});$(".tabover29").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover30 .tab33 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover30 .content33 li").hide();$(".tabover30 .content33 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover30 .tab33 a").length;function B(){C++;C==A?C=0:C;$(".tabover30 .tab33 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover30 .content33 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover30").mouseover(function(){clearInterval(D)});$(".tabover30").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover31 .tab34 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover31 .content34 li").hide();$(".tabover31 .content34 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover31 .tab34 a").length;function B(){C++;C==A?C=0:C;$(".tabover31 .tab34 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover31 .content34 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover31").mouseover(function(){clearInterval(D)});$(".tabover31").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabover32 .tab35 a").mouseover(function(){$(this).addClass("on").siblings().removeClass("on");var F=$(this).index();C=F;$(".tabover32 .content35 li").hide();$(".tabover32 .content35 li:eq("+F+")").show()});var E=0;if(E==1){var C=0;var A=$(".tabover32 .tab35 a").length;function B(){C++;C==A?C=0:C;$(".tabover32 .tab35 a:eq("+C+")").addClass("on").siblings().removeClass("on");$(".tabover32 .content35 ul li:eq("+C+")").show().siblings().hide()}var D=setInterval(B,3000);$(".tabover32").mouseover(function(){clearInterval(D)});$(".tabover32").mouseout(function(){D=setInterval(B,3000)})}});$("a").on("click",function(A){A.preventDefault();$(this).closest("input[type=file]").trigger("click")});$(function(){$(".tabPanel6 label dl").click(function(){$(this).addClass("hit2").siblings().removeClass("hit2");$(".panes>div:eq("+$(this).index()+")").show().siblings().hide()})});$(function(){$(".tabPanel7 label dl").click(function(){$(this).addClass("hit3").siblings().removeClass("hit3");$(".panes>div:eq("+$(this).index()+")").show().siblings().hide()})});$(function(){$(".tabPanel8 label dl").click(function(){$(this).addClass("hit4").siblings().removeClass("hit4");$(".panes>div:eq("+$(this).index()+")").show().siblings().hide()})});$(function(){$(".tabPanel12 label dl").click(function(){$(this).addClass("hit6").siblings().removeClass("hit6");$(".panes>div:eq("+$(this).index()+")").show().siblings().hide()})});$(function(){$(".tabPanel19 label dl").click(function(){$(this).addClass("hit7").siblings().removeClass("hit7");$(".panes>div:eq("+$(this).index()+")").show().siblings().hide()})});
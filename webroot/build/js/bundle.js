!function e(t,i,a){function o(n,s){if(!i[n]){if(!t[n]){var l="function"==typeof require&&require;if(!s&&l)return l(n,!0);if(r)return r(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[n]={exports:{}};t[n][0].call(c.exports,function(e){var i=t[n][1][e];return o(i?i:e)},c,c.exports,e,t,i,a)}return i[n].exports}for(var r="function"==typeof require&&require,n=0;n<a.length;n++)o(a[n]);return o}({"D:\\git-repo\\DragAndDrop_webBuilder\\webroot\\_scripts\\rwd-builder.js":[function(e,t,i){$(function(){function e(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="sim-row-edit-hover"><i class="fa fa-pencil" style="line-height:30px;"></i></div>'),$(".sim-row-edit-hover i").one("click",function(e){if(e.preventDefault(),e.stopPropagation(),big_parent=$(this).parent().parent(),"image"===big_parent.attr("data-type")){var t,i=[72,79,86,69,82],a=0,o=big_parent.find("span.bgspan").length,r=function(e){console.log(e.keyCode),e.keyCode===i[a]?a++:a=0,a===i.length&&(alert('你成功打開游標hover效果設定功能了，請在"另一張圖"的欄位放上你要呈現相同大小的另外一張圖 PS:如果你不想要這個效果請在"另一張圖"的欄位上留下空白'),t=!0,$('[type="spanSrc"]').show(),$("body").off("keyup",r))},n=big_parent.find('img[src^="img/blank"]').length;0===n?(console.log("異動圖片SRC"),$('[type="src"]').show(),$('[type="BGsrc"]').hide()):(console.log("異動圖片背景"),$('[type="src"]').hide(),$('[type="BGsrc"]').show()),$("#sim-edit-image").fadeIn(500),$("#sim-edit-image .sim-edit-box").slideDown(500),$("#sim-edit-image .image").val(big_parent.find("img").attr("src")),$("#sim-edit-image .imageBG").val(big_parent.find("img").css("background-image").split('"')[1]),$("#sim-edit-image .link").val(big_parent.find("a.imglink").attr("href")),$("#sim-edit-image .target").val(big_parent.find("a.imglink").attr("target")),$("#sim-edit-image .style").val(big_parent.find("img").attr("class"));var s;big_parent.find(".hoverOpacity0").length?s="fadeIn":big_parent.find(".hoverTranslateX").length?s="slide":big_parent.find(".hoverScaleX_opacity").length&&(s="flop"),$("#sim-edit-image .HoverEffect").val(s?s:"fadeIn"),$("#sim-edit-image .align").val(big_parent.css("text-align")),1===big_parent.closest('[decode="absolute-box"]').length&&($("#sim-edit-image .left").val(big_parent.closest(".absolute-contrnt").css("left")),$("#sim-edit-image .top").val(big_parent.closest(".absolute-contrnt").css("top"))),0===o?($("body").on("keyup",r),$('[type="spanSrc"]').hide(),$("#sim-edit-image .spanSrc").val(""),console.log("Span不存在 開始偵聽有沒有輸入密技")):(console.log("Span已存在"),$('[type="spanSrc"]').show(),$("#sim-edit-image .spanSrc").val(big_parent.find("span.bgspan").css("background-image").split('"')[1])),1===o&&(t=!1,$("body").off("keyup",r),$("#sim-edit-image .spanSrc").val(big_parent.find("span.bgspan").css("background-image").split('"')[1])),$("#sim-edit-image .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("圖片儲存被觸發..");var t=$("#sim-edit-image .image").val(),i=new Image;i.src=t,$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),0===n?(big_parent.find("img").removeAttr("style").attr("src",t),"string"==typeof big_parent.attr("no-zoom")?big_parent.find("img").css({width:"100%"}):"string"==typeof big_parent.attr("nosetthewidth")?console.log("不設定CSS"):i.onload=function(){var e=this.width;big_parent.find("img").css({"max-width":e,width:"100%"}),big_parent.parent().hasClass("absolute-contrnt")&&big_parent.parent(".absolute-contrnt").css({"max-width":e})}):big_parent.find("img").css("background-image",'url("'+$("#sim-edit-image .imageBG").val()+'")');var a=$("#sim-edit-image .style").val();$("#sim-edit-image .align").val();if(big_parent.find("img").removeClass().addClass(a),a||big_parent.find("img").removeAttr("class"),0!==$("#sim-edit-image .spanSrc").val().length){0===big_parent.find("span.bgspan").length&&(big_parent.find("img").wrap('<span class="bgspan"></span>'),big_parent.find("span.bgspan").css("background-image",'url("'+$("#sim-edit-image .spanSrc").val()+'")'));var o=$("#sim-edit-image .HoverEffect").val();console.log(o),big_parent.find("img").removeClass("hoverOpacity0"),big_parent.find("span.bgspan").removeClass("hoverTranslateX hoverScaleX_opacity"),"fadeIn"===o?big_parent.find("img").addClass("hoverOpacity0"):"flop"===o?big_parent.find("span.bgspan").addClass("hoverScaleX_opacity"):"slide"===o&&big_parent.find("span.bgspan").addClass("hoverTranslateX")}else big_parent.find("span.bgspan").find("img").unwrap("span"),big_parent.find("img").removeClass("hoverOpacity0"),console.log("有開啟功能/但是沒有輸入 刪除＿hoverOpacity0");if(console.log($("#sim-edit-image .link").val()),0!=$("#sim-edit-image .link").val().length?(0!=big_parent.find("span.bgspan").length?big_parent.find("span.bgspan").wrap('<a class="imglink"></a>'):big_parent.find("img").wrap('<a class="imglink"></a>'),big_parent.find("a.imglink").attr({href:$("#sim-edit-image .link").val(),target:$("#sim-edit-image .target").val()})):0!=big_parent.find("span.bgspan").length?big_parent.find("a.imglink").find("span.bgspan").unwrap("a.imglink"):big_parent.find("img").unwrap("a.imglink"),1===big_parent.closest('[decode="absolute-box"]').length){var s=$("#sim-edit-image .left").val(),l=$("#sim-edit-image .top").val();big_parent.closest(".absolute-contrnt").css({left:s,top:l})}$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click"),$("body").off("keyup",r)}),$("#sim-edit-image .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$("#sim-edit-image .sim-edit-box-buttons-save").off(),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click"),$("body").off("keyup",r)}),1===big_parent.closest(".slick").length||1===big_parent.closest(".slick-Grouping").length||big_parent.closest("ul").hasClass("sideBySide")||1===big_parent.closest('[decode="absolute-box"]').length?($("#sim-edit-image .sim-edit-box-buttons-add,#sim-edit-image .sim-edit-box-buttons-del").show(),$("#sim-edit-image .sim-edit-box-buttons-add").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發圖片複製"),$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.parent().after(big_parent.parent().clone(!0)),$(".sim-row-edit-hover i").off("click"),$("#sim-edit-image .sim-edit-box-buttons-add").off(),$("#sim-edit-image .sim-edit-box-buttons-del").off(),$("#sim-edit-image .sim-edit-box-buttons-save").off(),$("#sim-edit-image .sim-edit-box-buttons-cancel").off(),$("body").off("keyup",r)}),$("#sim-edit-image .sim-edit-box-buttons-del").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發img刪除"),confirm("確認要刪除此圖片?")?($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.parent().remove(),$(this).off(),$(".sim-row-edit-hover i").off("click"),$("#sim-edit-image .sim-edit-box-buttons-add").off(),$("#sim-edit-image .sim-edit-box-buttons-save").off(),$("#sim-edit-image .sim-edit-box-buttons-cancel").off()):($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click"),$("body").off("keyup",r))}),1===big_parent.closest('[decode="absolute-box"]').length?$(".left_top").show():$(".left_top").hide()):$("#sim-edit-image .sim-edit-box-buttons-add,#sim-edit-image .sim-edit-box-buttons-del ,.left_top").hide()}else"text"===big_parent.attr("data-type")?($("#sim-edit-text").fadeIn(500),$("#sim-edit-text .sim-edit-box").slideDown(500),big_parent.find(".sim-row-edit-hover").remove(),$("#sim-edit-text .text").val(big_parent.html()),$("#sim-edit-text .color").val(big_parent.css("color")),$("#sim-edit-text .size").val(big_parent.css("font-size")),$("#sim-edit-text .weight").val(big_parent.css("font-weight")),$("#sim-edit-text .bgcolor").val(big_parent.css("background-color")),$("#sim-edit-text .align").val(big_parent.css("text-align")),$("#sim-edit-text .highlight").val(big_parent.css("line-height")),$("#sim-edit-text .letter-spacing").val(big_parent.css("letter-spacing")),$("#sim-edit-text .fonts").val(big_parent.attr("class").split(" ")[1]),$("#sim-edit-text .paddingTop").val(big_parent.css("padding-top")),$("#sim-edit-text .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("文字儲存被觸發.."),$("#sim-edit-text").fadeOut(500),$("#sim-edit-text .sim-edit-box").slideUp(500);var t=$("#sim-edit-text .text").val(),i=$("#sim-edit-text .color").val(),a=$("#sim-edit-text .size").val(),o=$("#sim-edit-text .fonts").val(),r=$("#sim-edit-text .weight").val(),n=$("#sim-edit-text .align").val(),s=$("#sim-edit-text .bgcolor").val(),l=$("#sim-edit-text .letter-spacing").val(),d=$("#sim-edit-text .highlight").val(),c=$("#sim-edit-text .paddingTop").val();big_parent.html(t),big_parent.removeClass("NotoSans SourceSans SourceSerif MicrosoftJhengHei serif Marcellus Andika Oxygen OpenSans ReemKufi Crimson").addClass(o),big_parent.css({color:i,"font-size":a,"text-align":n,"font-weight":r,"padding-top":c,"letter-spacing":l,"line-height":d,"background-color":s}),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()}),$("#sim-edit-text .sim-edit-box-content-text-min").click(function(){}),$("#sim-edit-text .sim-edit-box-buttons-add").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發複製"),$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.after(big_parent.clone(!0)),$(this).off()}),$("#sim-edit-text .sim-edit-box-buttons-del").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發刪除"),confirm("確認要刪除此文字框?")?($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.remove(),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()):($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),$(this).off())}),$("#sim-edit-text .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("關閉text編輯面板"),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off()})):"video"===big_parent.attr("data-type")?($("#sim-edit-video").fadeIn(500),$("#sim-edit-video .sim-edit-box").slideDown(500),$("#sim-edit-video .image").val(big_parent.find("video").attr("src")),$("#sim-edit-video .link").val(big_parent.find("a.imglink").attr("href")),$("#sim-edit-video .target").val(big_parent.find("a.imglink").attr("target")),$("#sim-edit-video .style").val(big_parent.find("video").attr("class")),$("#sim-edit-video .align").val(big_parent.css("text-align")),$("#sim-edit-video .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("影片儲存被觸發..");var t=$("#sim-edit-video .video").val();$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.find("video").removeAttr("style").attr("src",t);var i=$("#sim-edit-video .style").val();$("#sim-edit-video .align").val();big_parent.find("video").removeClass().addClass(i),0!=$("#sim-edit-video .link").val().length?(big_parent.find("video").wrap('<a class="imglink"></a>'),big_parent.find("a.imglink").attr({href:$("#sim-edit-video .link").val(),target:$("#sim-edit-video .target").val()})):big_parent.find("a.imglink").find("video").unwrap(),i||big_parent.find("video").removeAttr("class"),setTimeout(function(){big_parent.find("video").css({"max-width":big_parent.find("video").width(),width:"100%"})},300)}),$("#sim-edit-video .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-video .sim-edit-box-buttons-save").off()})):"json"===big_parent.attr("data-type")&&($("#sim-edit-json").fadeIn(500),$("#sim-edit-json .sim-edit-box").slideDown(500),big_parent.find(".sim-row-edit-hover").remove(),$("#sim-edit-json .json").val(big_parent.html()),$("#sim-edit-json .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("json儲存被觸發.."),$("#sim-edit-json").fadeOut(500),$("#sim-edit-json .sim-edit-box").slideUp(500);var t=$("#sim-edit-json .json").val();big_parent.html(t),$(this).off(),$("#sim-edit-json .sim-edit-box-buttons-cancel").off()}),$("#sim-edit-json .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("關閉json編輯面板"),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-json .sim-edit-box-buttons-save").off()}))})},function(e){e.preventDefault(),e.stopPropagation(),$(this).children(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off("click"),$(".sim-row-edit-hover").remove()})}function t(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="edit-changeColor">背景設定(局部)</div>'),$(".edit-changeColor").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().append('<div class="changeColor-box-min"><div class="sim-edit-box-title">Edit Background</div>換背景色：(輸入色碼)<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖(請輸入Url)：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>設定最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20" ;><br>局部區塊設為連結：<input class="fullLink" placeholder="請直接輸入連結網址" size="20" ;=""><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20" ;=""><button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>	'),$(this).closest(".sim-row-box").css("overflow","inherit");var t=$(this).next(".changeColor-box-min"),i=$(this).closest("[edit_BG]"),a=i.attr("class").split(" "),o=i.attr("edit_bg"),r=(i.attr("class").split(" ").length,a),n=r.splice(0,o);t.find(".changeColor-input-text").val(i.css("background-color")),t.find(".changeImg-input-text").val(i.css("background-image")),t.find(".background-attachment").val(i.css("background-attachment")),t.find(".minHeight").val(i.css("min-height")),t.find(".fullLink").val(i.children("a.full").attr("href")),t.find(".style").val(r.toString().replace(/,/g," ")),$("#btnOK").click(function(){$(this).closest("[edit_BG]").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"background-attachment":$(this).prevAll(".background-attachment").val(),"min-height":$(this).prevAll(".minHeight").val()});var e=n.toString().replace(/,/g," ")+" "+$(this).prevAll(".style").val();i.attr("class",e),t.find(".fullLink").val()?0!=i.find("a.full").length?i.find("a.full").attr("href",t.find(".fullLink").val()):(i.prepend('<a class="full" href="'+t.find(".fullLink").val()+'"/>'),$("a.full").find("a").children().unwrap()):i.children("a.full").remove(),$(this).closest(".changeColor-box-min").remove(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove(),$(this).closest(".sim-row-box").css("overflow","hidden")}),$("#btnCancel").click(function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove()})})},function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").remove(),$(".edit-changeColor").off()})}function i(){$(".rightCtrl").remove();var e=$("#rwd-builder-area-center-frame-content > .sim-row").length;$("#rwd-builder-area-center-frame-content .sim-row").removeClass("rwd-builder-area-center-frame-buttons-content-tab").append('<div class="rightCtrl"><div class="sim-row-delete"><i class="fa fa-times" ></i></div><div class="ModuleIndex">模塊順位<input type="text" size="2" class="ModuleIndexIs"></div><div class="sim-row-changeColor">背景設定(橫的整塊)</div></div>');for(var t=0;e>t;t++)$(".rightCtrl .ModuleIndexIs").eq(t).val(t)}function a(){$(".sim-row-delete").click(function(){$(this).closest(".sim-row").remove()})}function o(){$(".sim-row-changeColor").click(function(){var e=1===$(this).parent(".rightCtrl").siblings(".slick").length,t="";e&&(t='輪播畫面出現幾張：<input class="slidestoshow" value="1" placeholder="請輸入數字" size="20";><br>輪播一次滑動幾張：<input class="slidestoscroll" value="1" placeholder="請輸入數字" size="20";><br>替換圖片漸變時間：<input class="speed" value="300" placeholder="請輸入數字(單位:毫秒)" size="20";><br>每次停留時間：<input class="autoplayspeed" value="2000" placeholder="請輸入數字(單位:毫秒)" size="20";><br>換圖方式：<select class="fade"><option value="false">圖片往左滑</option><option value="true">圖片淡入淡出</option><option value="vertical">圖片上下滑動</option></select><select class="arrows"><option value="false">沒有左右箭頭</option><option value="true">要有左右箭頭</option></select><select class="dots"><option value="false">沒有點點</option><option value="true">要有點點</option></select>'),$(this).parent().append('<div class="changeColor-box"><div class="sim-edit-box-title">Edit Background</div>換背景色：<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>限制最大寬度：<input class="maxWidth" placeholder="請輸入寬度px或%" size="20";><br>限制最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20";><br>往下推：<input class="marginBottom" placeholder="註:螢幕寬小於400px失效" size="20";><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20";><br>'+t+'<button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>'),$("html, body").animate({scrollTop:$(".changeColor-box").offset().top},300);var i=$(this).next(".changeColor-box"),a=$(this).closest(".sim-row");if(i.find(".changeColor-input-text").val(a.css("background-color")),i.find(".changeImg-input-text").val(a.css("background-image")),i.find(".maxWidth").val(a.find(".sim-row-box").css("max-width")),i.find(".minHeight").val(a.css("min-height")),i.find(".background-attachment").val(a.css("background-attachment")),i.find(".marginBottom").val(a.css("margin-bottom")),i.find(".style").val(a.attr("class").replace(/sim-row/,"")),e){var o=a.children(".slick");console.log(o),i.find(".speed").val(o.attr("speed")),i.find(".autoplayspeed").val(o.attr("autoplayspeed")),i.find(".slidestoscroll").val(o.attr("slidestoscroll")),i.find(".slidestoshow").val(o.attr("slidestoshow")),console.log(o.attr("fade")),i.find(".fade").val(o.attr("fade")),i.find(".dots").val(o.attr("dots")),i.find(".arrows").val(o.attr("arrows"))}$("#btnOK").click(function(){$(this).closest(".sim-row").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"min-height":$(this).prevAll(".minHeight").val(),"margin-bottom":$(this).prevAll(".marginBottom").val(),"background-attachment":$(this).prevAll(".background-attachment").val()}),e&&(o.attr("slidestoshow",$(this).prevAll(".slidestoshow").val()),o.attr("slidestoscroll",$(this).prevAll(".slidestoscroll").val()),o.attr("dots",$(this).prevAll(".dots").val()),o.attr("arrows",$(this).prevAll(".arrows").val()),console.log($(this).prevAll(".fade").val()),o.attr("fade",$(this).prevAll(".fade").val()),o.attr("autoplayspeed",$(this).prevAll(".autoplayspeed").val()),o.attr("speed",$(this).prevAll(".speed").val())),$(this).closest(".sim-row").find(".sim-row-box").css({"max-width":$(this).prevAll(".maxWidth").val()}),$(this).closest(".sim-row").removeClass().addClass("sim-row "+$(this).prevAll(".style").val()),$(this).closest(".changeColor-box").remove()}),$("#btnCancel").click(function(){$(this).closest(".changeColor-box").remove()})})}function r(){$(".ModuleIndexIs").keyup(function(e){if("Enter"===e.key){var t=$(".ModuleIndexIs").index(this),i=$("#rwd-builder-area-center-frame-content .sim-row").length,a=$(this).val();if(console.log(a),a>=i&&(a=i-1),t===a)return;t>a?$("#rwd-builder-area-center-frame-content .sim-row").eq(a).before($(this).closest(".sim-row")):$("#rwd-builder-area-center-frame-content .sim-row").eq(a).after($(this).closest(".sim-row")),console.log($(this).closest(".sim-row"));for(var o=$("#rwd-builder-area-center-frame-content > .sim-row").length,r=0;o>r;r++)$(".rightCtrl .ModuleIndexIs").eq(r).val(r)}})}0!=$("#rwd-builder-area-center-frame-content").children().length&&(console.log("一載入content已經有東西!"),e($("#rwd-builder-area-center-frame-content>.sim-row .sim-row-edit")),t($("#rwd-builder-area-center-frame-content [edit_BG]")),i(),a(),o()),$(".rwd-builder-area-center-frame-buttons-content").load("allTemplate.html #rwd-preloaded-rows",function(n){console.log("所有模板已被載入"),$(".rwd-builder-area-center-frame-buttons-content").find(".sim-row").addClass("rwd-builder-area-center-frame-buttons-content-tab"),$(".rwd-builder-area-center-frame-buttons-content-tab").hover(function(n){n.preventDefault(),n.stopPropagation(),$(this).append('<div class="rwd-builder-area-center-frame-buttons-content-tab-add"><i class="fa fa-plus"></i>&nbsp;Insert<br><span>'+$(this).attr("ex")+"</span></div>"),$(".rwd-builder-area-center-frame-buttons-content-tab-add").click(function(){$("#rwd-builder-area-center-frame-content").append($('#rwd-preloaded-rows .sim-row[data-id="'+$(this).parent().attr("data-id")+'"]').clone().removeAttr("ex")),$("html, body").animate({scrollTop:$("html, body").height()-window.innerHeight},300),console.log($(this)),i(),a(),r(),o();$("#rwd-builder-area-center-frame-content>.sim-row:last .sim-row-edit");e($("#rwd-builder-area-center-frame-content>.sim-row:last .sim-row-edit")),t($("#rwd-builder-area-center-frame-content [edit_BG]")),$("#rwd-builder-area-center-frame-buttons-dropdown").fadeOut(200)})},function(e){e.preventDefault(),e.stopPropagation(),$(".rwd-builder-area-center-frame-buttons-content-tab-add").remove(),$(".rwd-builder-area-center-frame-buttons-content-tab-add").off()}),$("#rwd-builder-area-center-frame-buttons-add").hover(function(){$("#rwd-builder-area-center-frame-buttons-dropdown").fadeIn(200)},function(){$("#rwd-builder-area-center-frame-buttons-dropdown").fadeOut(200)}),$("#rwd-builder-area-center-frame-buttons-dropdown").hover(function(){$(".rwd-builder-area-center-frame-buttons-content").fadeIn(200)},function(){$(".rwd-builder-area-center-frame-buttons-content").fadeOut(200)}),$("#add-column-1").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-1"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-1"])').hide()}),$("#add-column-2").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-2"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-2"])').hide()}),$("#add-column-3").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-3"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-3"])').hide()}),$("#add-column-4").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-4"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-4"])').hide()}),$("#add-column-5").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-5"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-5"])').hide()})}),$("#all-edit-bord").load("allEditBord.html",function(){console.log("所有編輯面板已被載入")}),$("#rwd-builder-area-center-frame-content").sortable({revert:!0,deactivate:function(){for(var e=$("#rwd-builder-area-center-frame-content > .sim-row").length,t=0;e>t;t++)$(".rightCtrl .ModuleIndexIs").eq(t).val(t)}}),$(".sim-row").draggable({connectToSortable:"#rwd-builder-area-center-frame-content",revert:"invalid",handle:".sim-row-move"}),$("#rwd-buttons-impote").click(function(){$("#sim-edit-import").fadeIn(500),$("#sim-edit-import .sim-edit-box").slideDown(500),$("#sim-edit-import .sim-edit-box-buttons-save").on("click",function(){var n=$("#sim-edit-import .text").val();if(!/^\s*[<]{1}.*[>]{1}\s*$/m.test(n))return void alert("只能匯入Html喔，不行匯入請注意看看是不是HTML碼最前面是否有空格");$newImportText=$(n).addClass("new"),$("#rwd-builder-area-center-frame-content").append($newImportText);var s=$('#rwd-builder-area-center-frame-content .sim-row[data-id="5-1"]');console.log(s),console.log(s.length),1===s.length&&(s.prepend('<p class="sim-row-edit" data-type="text" style="line-height: 1.6em;"></p>'),s.children("p").css({"background-color":s.attr("data-titlebgcolor"),color:s.attr("data-titlecolor")}),s.children("p").html(s.attr("data-title")+"<br>"+s.attr("data-subtitle"))),$("#sim-edit-import .text").val(""),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),e($("#rwd-builder-area-center-frame-content>.sim-row.new .sim-row-edit")),t($("#rwd-builder-area-center-frame-content>.sim-row.new [edit_BG]")),$("html, body").animate({scrollTop:$(".new").offset().top},300),$("#rwd-builder-area-center-frame-content>.new").removeClass("new"),i(),a(),r(),o(),$("#sim-edit-import .sim-edit-box-buttons-save").off()}),$("#sim-edit-import .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$("#sim-edit-import .sim-edit-box-buttons-save").off()})}),$("#rwd-builder-sidebar-buttons-bbutton").click(function(){$("#sim-edit-export").fadeIn(500),$("#sim-edit-export .sim-edit-box").slideDown(500);for(var e=$("#rwd-builder-area-center-frame-content .sim-row").length,t=0;e>t;t++){var i=$("#rwd-builder-area-center-frame-content .sim-row").eq(t),a=i.height();console.log(a),0===a&&i.addClass("goRemove")}$("#rwd-builder-area-center-frame-content .goRemove").remove(),e=$("#rwd-builder-area-center-frame-content > .sim-row").length;for(var t=0;e>t;t++)$(".rightCtrl .ModuleIndexIs").eq(t).val(t);$("#rwd-preloaded-export").html($("#rwd-builder-area-center-frame-content").html()),$("#rwd-preloaded-export>#rwd-builder-area-center-frame-content").unwrap(),$("#rwd-preloaded-export .rightCtrl").remove(),$("#rwd-preloaded-export .sim-row").removeClass("ui-draggable");var o=$('#rwd-preloaded-export .sim-row[data-id="5-1"]');console.log(o.length),1===o.length&&(o.attr("data-title",o.children("p").html().split("<br>")[0]),o.attr("data-subtitle",o.children("p").html().split("<br>")[1]?o.children("p").html().split("<br>")[1]:""),o.attr("data-titlebgcolor",o.children("p").css("background-color")),o.attr("data-titlecolor",o.children("p").css("color")),o.children("p").remove());for(var r=$("#rwd-preloaded-export .sim-row").find(".imglink"),n=$("#rwd-preloaded-export .sim-row").find(".imglink").length,t=0;n>=t;t++)0==r.eq(t).children().length&&r.eq(t).remove();preload_export_html=$("#rwd-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/\s(?=\s)/g,"").replace(/&quot;/g,""),$("#sim-edit-export .text").val(preload_export_html),$("#rwd-preloaded-export").html(""),$("#sim-edit-export .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500)})}),$("#rwd-builder-sidebar-buttons-Preview").click(function(){$("#rwd-preloaded-export").html($("#rwd-builder-area-center-frame-content").html()),$("#rwd-preloaded-export .rightCtrl").remove(),$("#rwd-preloaded-export .sim-row").removeClass("ui-draggable"),$("#rwd-preloaded-export .sim-row-edit").removeAttr("data-type"),$("#rwd-preloaded-export .sim-row-edit").removeClass("sim-row-edit"),preload_export_html=$("#rwd-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/\s(?=\s)/g,"");var e=window.open("","","resizable=yes,status=yes,scrollbars=yes");e.document.write('<link href="_css/rwd-content.css" rel="stylesheet" type="text/css" /><link href="_css/reset.css" rel="stylesheet" type="text/css" /><link href="_css/slick.css" rel="stylesheet" type="text/css" />'+preload_export_html+'<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script><script type="text/javascript" src="_scripts/slick.min.js"/></script><script  type="text/javascript">$(".slick").slick({autoplay: true,Speed: 3000,dots: true,fade: true,arrows: false});</script>'),$("#rwd-preloaded-export").html(" ")})})},{}]},{},["D:\\git-repo\\DragAndDrop_webBuilder\\webroot\\_scripts\\rwd-builder.js"]);
//# sourceMappingURL=bundle.js.map

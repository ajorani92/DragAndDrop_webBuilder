!function e(t,i,n){function r(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return r(i?i:e)},c,c.exports,e,t,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({"/Users/pazzo/git-repo/DragAndDrop_webBuilder/webroot/_scripts/newsletter-builder.js":[function(e,t,i){$(function(){function e(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="sim-row-edit-hover"><i class="fa fa-pencil" style="line-height:30px;"></i></div>'),$(".sim-row-edit-hover i").one("click",function(e){e.preventDefault(),e.stopPropagation(),big_parent=$(this).parent().parent(),"image"==big_parent.attr("data-type")?($("#sim-edit-image").fadeIn(500),$("#sim-edit-image .sim-edit-box").slideDown(500),$("#sim-edit-image .image").val(big_parent.find("img").attr("src")),$("#sim-edit-image .link").val(big_parent.find("a").attr("href")),$("#sim-edit-image .style").val(big_parent.find("img").attr("class")),$("#sim-edit-image .marginTop").val(big_parent.find("img").css("margin-top")),$("#sim-edit-image .align").val(big_parent.css("text-align")),$("#sim-edit-image .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("圖片儲存被觸發..");var t=$("#sim-edit-image .image").val(),i=new Image;i.src=t,$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.find("img").removeAttr("style").attr("src",t),i.onload=function(){var e=this.width;big_parent.find("img").css({"max-width":e,width:"100%"})};var n=$("#sim-edit-image .style").val(),r=$("#sim-edit-image .marginTop").val(),o=$("#sim-edit-image .align").val();big_parent.find("img").removeClass().addClass(n).css("margin-top",r),big_parent.css("text-align",o),0!=$("#sim-edit-image .link").val().length?(big_parent.wrapInner("<a></a>"),big_parent.find("a").attr("href",$("#sim-edit-image .link").val())):big_parent.find("a").find("img").unwrap(),n||big_parent.find("img").removeAttr("class")}),$("#sim-edit-image .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-image .sim-edit-box-buttons-save").off()})):"text"==big_parent.attr("data-type")?(console.log("data-type=text"),$("#sim-edit-text").fadeIn(500),$("#sim-edit-text .sim-edit-box").slideDown(500),big_parent.find(".sim-row-edit-hover").remove(),console.log(big_parent.html()),$("#sim-edit-text .text").val(big_parent.html()),$("#sim-edit-text .color").val(big_parent.css("color")),$("#sim-edit-text .size").val(big_parent.css("font-size")),$("#sim-edit-text .weight").val(big_parent.css("font-weight")),$("#sim-edit-text .bgcolor").val(big_parent.find("span").css("background-color")),$("#sim-edit-text .align").val(big_parent.css("text-align")),$("#sim-edit-text .fonts").val(big_parent.attr("class").split(" ")[2]),$("#sim-edit-text .paddingTop").val(big_parent.css("padding-top")),$("#sim-edit-text .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("文字儲存被觸發.."),$("#sim-edit-text").fadeOut(500),$("#sim-edit-text .sim-edit-box").slideUp(500);var t=$("#sim-edit-text .text").val(),i=$("#sim-edit-text .color").val(),n=$("#sim-edit-text .size").val(),r=$("#sim-edit-text .fonts").val(),o=$("#sim-edit-text .weight").val(),a=$("#sim-edit-text .align").val(),s=$("#sim-edit-text .bgcolor").val(),l=$("#sim-edit-text .paddingTop").val();big_parent.html(t),big_parent.removeClass("NotoSans SourceSans SourceSerif MicrosoftJhengHei serif").addClass(r),big_parent.css({color:i,"font-size":n,"text-align":a,"font-weight":o,"padding-top":l}),s&&0==big_parent.find("span").length&&big_parent.wrapInner("<span></span>"),big_parent.find("span").css({"background-color":s}),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()}),$("#sim-edit-text .sim-edit-box-content-text-min").click(function(){}),$("#sim-edit-text .sim-edit-box-buttons-add").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發複製"),$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.after(big_parent.clone(!0)),$(this).off()}),$("#sim-edit-text .sim-edit-box-buttons-del").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發刪除"),confirm("確認要刪除此文字框?")?($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.remove(),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()):($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),$(this).off())}),$("#sim-edit-text .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("關閉text編輯面板"),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off()})):"icon"==big_parent.attr("data-type")&&($("#sim-edit-icon").fadeIn(500),$("#sim-edit-icon .sim-edit-box").slideDown(500),$("#sim-edit-icon i").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().parent().parent().parent().fadeOut(500),$(this).parent().parent().parent().slideUp(500),big_parent.children("i").attr("class",$(this).attr("class"))}))})},function(e){e.preventDefault(),e.stopPropagation(),$(this).children(".sim-row-edit-hover").remove(),$(this).children(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off()})}function t(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="edit-changeColor">背景設定(局部)</div>'),$(".edit-changeColor").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().append('<div class="changeColor-box-min"><div class="sim-edit-box-title">Edit Background</div>換背景色：(輸入色碼)<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖(請輸入Url)：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>設定最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20" ;><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20" ;=""><button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>\t');var t=$(this).next(".changeColor-box-min"),i=$(this).closest("[edit_BG]"),n=i.attr("class").split(" "),r=i.attr("edit_bg"),o=(i.attr("class").split(" ").length,n),a=o.splice(0,r);t.find(".changeColor-input-text").val(i.css("background-color")),t.find(".changeImg-input-text").val(i.css("background-image")),t.find(".background-attachment").val(i.css("background-attachment")),t.find(".minHeight").val(i.css("min-height")),t.find(".style").val(o.toString().replace(/,/g," ")),$("#btnOK").click(function(){$(this).closest("[edit_BG]").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"background-attachment":$(this).prevAll(".background-attachment").val(),"min-height":$(this).prevAll(".minHeight").val()});var e=a.toString().replace(/,/g," ")+" "+$(this).prevAll(".style").val();i.attr("class",e),$(this).closest(".changeColor-box-min").remove(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove()}),$("#btnCancel").click(function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove()})})},function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").remove(),$(".edit-changeColor").off()})}function i(){$("#newsletter-builder-area-center-frame-content .sim-row").removeClass("newsletter-builder-area-center-frame-buttons-content-tab").append('<div class="sim-row-delete"><i class="fa fa-times" ></i></div><div class="sim-row-changeColor">背景設定(橫的整塊)</div>')}function n(){$(".sim-row-delete").click(function(){$(this).parent().remove()})}function r(){$(".sim-row-changeColor").click(function(){$(this).parent().append('<div class="changeColor-box"><div class="sim-edit-box-title">Edit Background</div>換背景色：<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>限制最大寬度：<input class="maxWidth" placeholder="請輸入寬度px或%" size="20";><br>限制最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20";><br>往下推：<input class="marginBottom" placeholder="註:螢幕寬小於400px失效" size="20";><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20";><br><button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>\t');var e=$(this).next(".changeColor-box"),t=$(this).closest(".sim-row");e.find(".changeColor-input-text").val(t.css("background-color")),e.find(".changeImg-input-text").val(t.css("background-image")),e.find(".maxWidth").val(t.css("max-width")),e.find(".minHeight").val(t.css("min-height")),e.find(".background-attachment").val(t.css("background-attachment")),e.find(".marginBottom").val(t.css("margin-bottom")),e.find(".style").val($(this).closest(".sim-row").attr("class").replace(/sim-row/,"")),$("#btnOK").click(function(){$(this).closest(".sim-row").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"max-width":$(this).prevAll(".maxWidth").val(),"min-height":$(this).prevAll(".minHeight").val(),"margin-bottom":$(this).prevAll(".marginBottom").val(),"background-attachment":$(this).prevAll(".background-attachment").val()}),$(this).closest(".sim-row").removeClass().addClass("sim-row "+$(this).prevAll(".style").val()),$(this).closest(".changeColor-box").remove()}),$("#btnCancel").click(function(){$(this).closest(".changeColor-box").remove()})})}0!=$("#newsletter-builder-area-center-frame-content").children().length&&(console.log("一載入content已經有東西!"),e($("#newsletter-builder-area-center-frame-content>.sim-row .sim-row-edit")),t($("#newsletter-builder-area-center-frame-content [edit_BG]")),i(),n(),r()),$(".newsletter-builder-area-center-frame-buttons-content").load("allTemplate.html #newsletter-preloaded-rows",function(o){$(".newsletter-builder-area-center-frame-buttons-content").find(".sim-row").addClass("newsletter-builder-area-center-frame-buttons-content-tab"),$(".newsletter-builder-area-center-frame-buttons-content-tab").hover(function(o){o.preventDefault(),o.stopPropagation(),$(this).append('<div class="newsletter-builder-area-center-frame-buttons-content-tab-add"><i class="fa fa-plus"></i>&nbsp;Insert</div>'),$(".newsletter-builder-area-center-frame-buttons-content-tab-add").click(function(){$("#newsletter-builder-area-center-frame-content").prepend($('#newsletter-preloaded-rows .sim-row[data-id="'+$(this).parent().attr("data-id")+'"]').clone()),i(),n(),r();$("#newsletter-builder-area-center-frame-content>.sim-row:first .sim-row-edit");e($("#newsletter-builder-area-center-frame-content>.sim-row:first .sim-row-edit")),t($("#newsletter-builder-area-center-frame-content [edit_BG]")),$("#newsletter-builder-area-center-frame-buttons-dropdown").fadeOut(200)})},function(e){e.preventDefault(),e.stopPropagation(),$(".newsletter-builder-area-center-frame-buttons-content-tab-add").remove(),$(".newsletter-builder-area-center-frame-buttons-content-tab-add").off()}),$("#newsletter-builder-area-center-frame-buttons-add").hover(function(){$("#newsletter-builder-area-center-frame-buttons-dropdown").fadeIn(200)},function(){$("#newsletter-builder-area-center-frame-buttons-dropdown").fadeOut(200)}),$("#newsletter-builder-area-center-frame-buttons-dropdown").hover(function(){$(".newsletter-builder-area-center-frame-buttons-content").fadeIn(200)},function(){$(".newsletter-builder-area-center-frame-buttons-content").fadeOut(200)}),$("#add-column-1").hover(function(){$('.newsletter-builder-area-center-frame-buttons-content-tab[data-type="column-1"]').show(),$('.newsletter-builder-area-center-frame-buttons-content-tab:not([data-type="column-1"])').hide()}),$("#add-column-2").hover(function(){$('.newsletter-builder-area-center-frame-buttons-content-tab[data-type="column-2"]').show(),$('.newsletter-builder-area-center-frame-buttons-content-tab:not([data-type="column-2"])').hide()}),$("#add-column-3").hover(function(){$('.newsletter-builder-area-center-frame-buttons-content-tab[data-type="column-3"]').show(),$('.newsletter-builder-area-center-frame-buttons-content-tab:not([data-type="column-3"])').hide()}),$("#add-column-4").hover(function(){$('.newsletter-builder-area-center-frame-buttons-content-tab[data-type="column-4"]').show(),$('.newsletter-builder-area-center-frame-buttons-content-tab:not([data-type="column-4"])').hide()})}),$("#all-edit-bord").load("allEditBord.html",function(){console.log("所有編輯面板已被載入")}),$("#newsletter-builder-area-center-frame-content").sortable({revert:!0}),$(".sim-row").draggable({connectToSortable:"#newsletter-builder-area-center-frame-content",revert:"invalid",handle:".sim-row-move"}),$("#newsletter-buttons-impote").click(function(){$("#sim-edit-import").fadeIn(500),$("#sim-edit-import .sim-edit-box").slideDown(500),$("#sim-edit-import .sim-edit-box-buttons-save").one("click",function(){var o=$("#sim-edit-import .text").val();$("#newsletter-builder-area-center-frame-content").prepend(o),$("#sim-edit-import .text").val(""),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),e($("#newsletter-builder-area-center-frame-content>.sim-row .sim-row-edit")),t($("#newsletter-builder-area-center-frame-content [edit_BG]")),i(),n(),r()}),$("#sim-edit-import .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500)})}),$("#newsletter-builder-sidebar-buttons-bbutton").click(function(){$("#sim-edit-export").fadeIn(500),$("#sim-edit-export .sim-edit-box").slideDown(500),$("#newsletter-preloaded-export").html($("#newsletter-builder-area-center-frame-content").children().html()),$("#newsletter-preloaded-export .sim-row-delete,#newsletter-preloaded-export .sim-row-changeColor,#newsletter-preloaded-export .edit-changeColor").remove(),$("#newsletter-preloaded-export .sim-row").removeClass("ui-draggable"),preload_export_html=$("#newsletter-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/\n/g,""),$("#sim-edit-export .text").val(preload_export_html),$("#newsletter-preloaded-export").html(" "),$("#sim-edit-export .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500)})}),$("#newsletter-builder-sidebar-buttons-Preview").click(function(){$("#newsletter-preloaded-export").html($("#newsletter-builder-area-center-frame-content").html()),$("#newsletter-preloaded-export .sim-row-delete,#newsletter-preloaded-export .sim-row-changeColor,#newsletter-preloaded-export .edit-changeColor").remove(),$("#newsletter-preloaded-export .sim-row").removeClass("ui-draggable"),$("#newsletter-preloaded-export .sim-row-edit").removeAttr("data-type"),$("#newsletter-preloaded-export .sim-row-edit").removeClass("sim-row-edit"),preload_export_html=$("#newsletter-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/&quot;/g,"");var e=window.open("","",!0);e.document.write('<link href="_css/newsletter.css" rel="stylesheet" type="text/css" />'+preload_export_html),$("#newsletter-preloaded-export").html(" ")})})},{}]},{},["/Users/pazzo/git-repo/DragAndDrop_webBuilder/webroot/_scripts/newsletter-builder.js"]);
//# sourceMappingURL=bundle.js.map

!function e(t,i,o){function a(r,s){if(!i[r]){if(!t[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(n)return n(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[r]={exports:{}};t[r][0].call(c.exports,function(e){var i=t[r][1][e];return a(i?i:e)},c,c.exports,e,t,i,o)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({"D:\\git-repo\\DragAndDrop_webBuilder\\webroot\\_scripts\\rwd-builder.js":[function(e,t,i){$(function(){function e(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="sim-row-edit-hover"><i class="fa fa-pencil" style="line-height:30px;"></i></div>'),$(".sim-row-edit-hover i").one("click",function(e){e.preventDefault(),e.stopPropagation(),big_parent=$(this).parent().parent(),"image"===big_parent.attr("data-type")?($("#sim-edit-image").fadeIn(500),$("#sim-edit-image .sim-edit-box").slideDown(500),$("#sim-edit-image .image").val(big_parent.find("img").attr("src")),$("#sim-edit-image .link").val(big_parent.find("a.imglink").attr("href")),$("#sim-edit-image .target").val(big_parent.find("a.imglink").attr("target")),$("#sim-edit-image .style").val(big_parent.find("img").attr("class")),$("#sim-edit-image .align").val(big_parent.css("text-align")),$("#sim-edit-image .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("圖片儲存被觸發..");var t=$("#sim-edit-image .image").val(),i=new Image;i.src=t,$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.find("img").removeAttr("style").attr("src",t),i.onload=function(){var e=this.width;big_parent.find("img").css({"max-width":e,width:"100%"})};var o=$("#sim-edit-image .style").val();$("#sim-edit-image .align").val();big_parent.find("img").removeClass().addClass(o),0!=$("#sim-edit-image .link").val().length?(big_parent.find("img").wrap('<a class="imglink"></a>'),big_parent.find("a.imglink").attr({href:$("#sim-edit-image .link").val(),target:$("#sim-edit-image .target").val()})):big_parent.find("a.imglink").find("img").unwrap(),o||big_parent.find("img").removeAttr("class"),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click")}),$("#sim-edit-image .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$("#sim-edit-image .sim-edit-box-buttons-save").off(),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click")}),big_parent.closest(".sim-row-box").hasClass("slick")||big_parent.closest("ul").hasClass("pz_footerNotice")?($("#sim-edit-image .sim-edit-box-buttons-add,#sim-edit-image .sim-edit-box-buttons-del").show(),$("#sim-edit-image .sim-edit-box-buttons-add").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發圖片複製"),$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.parent().after(big_parent.parent().clone(!0)),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click")}),$("#sim-edit-image .sim-edit-box-buttons-del").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發img刪除"),confirm("確認要刪除此圖片?")?($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.parent().remove(),$(this).off(),$(".sim-row-edit-hover i").off("click"),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()):($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),$(".sim-row-edit-hover i,.sim-edit-box-buttons-del,.sim-edit-box-buttons-add,.sim-edit-box-buttons-cancel,.sim-edit-box-buttons-save").off("click"))})):$("#sim-edit-image .sim-edit-box-buttons-add,#sim-edit-image .sim-edit-box-buttons-del").hide()):"text"===big_parent.attr("data-type")?(console.log("data-type=text"),$("#sim-edit-text").fadeIn(500),$("#sim-edit-text .sim-edit-box").slideDown(500),big_parent.find(".sim-row-edit-hover").remove(),console.log(big_parent.html()),$("#sim-edit-text .text").val(big_parent.html()),$("#sim-edit-text .color").val(big_parent.css("color")),$("#sim-edit-text .size").val(big_parent.css("font-size")),$("#sim-edit-text .weight").val(big_parent.css("font-weight")),$("#sim-edit-text .bgcolor").val(big_parent.find("span").css("background-color")),$("#sim-edit-text .align").val(big_parent.css("text-align")),$("#sim-edit-text .fonts").val(big_parent.attr("class").split(" ")[2]),$("#sim-edit-text .paddingTop").val(big_parent.css("padding-top")),$("#sim-edit-text .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("文字儲存被觸發.."),$("#sim-edit-text").fadeOut(500),$("#sim-edit-text .sim-edit-box").slideUp(500);var t=$("#sim-edit-text .text").val(),i=$("#sim-edit-text .color").val(),o=$("#sim-edit-text .size").val(),a=$("#sim-edit-text .fonts").val(),n=$("#sim-edit-text .weight").val(),r=$("#sim-edit-text .align").val(),s=$("#sim-edit-text .bgcolor").val(),d=$("#sim-edit-text .paddingTop").val();big_parent.html(t),big_parent.removeClass("NotoSans SourceSans SourceSerif MicrosoftJhengHei serif Marcellus Andika Oxygen OpenSans").addClass(a),big_parent.css({color:i,"font-size":o,"text-align":r,"font-weight":n,"padding-top":d}),s&&0==big_parent.find("span").length&&big_parent.wrapInner("<span></span>"),big_parent.find("span").css({"background-color":s}),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()}),$("#sim-edit-text .sim-edit-box-content-text-min").click(function(){}),$("#sim-edit-text .sim-edit-box-buttons-add").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發複製"),$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.after(big_parent.clone(!0)),$(this).off()}),$("#sim-edit-text .sim-edit-box-buttons-del").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("觸發刪除"),confirm("確認要刪除此文字框?")?($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.remove(),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-cancel").off()):($(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),$(this).off())}),$("#sim-edit-text .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("關閉text編輯面板"),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-text .sim-edit-box-buttons-add").off(),$("#sim-edit-text .sim-edit-box-buttons-save").off(),$("#sim-edit-text .sim-edit-box-buttons-del").off()})):"video"===big_parent.attr("data-type")?($("#sim-edit-video").fadeIn(500),$("#sim-edit-video .sim-edit-box").slideDown(500),$("#sim-edit-video .image").val(big_parent.find("video").attr("src")),$("#sim-edit-video .link").val(big_parent.find("a.imglink").attr("href")),$("#sim-edit-video .target").val(big_parent.find("a.imglink").attr("target")),$("#sim-edit-video .style").val(big_parent.find("video").attr("class")),$("#sim-edit-video .align").val(big_parent.css("text-align")),$("#sim-edit-video .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("影片儲存被觸發..");var t=$("#sim-edit-video .video").val();$(this).parent().parent().parent().fadeOut(500),$(this).parent().parent().slideUp(500),big_parent.find("video").removeAttr("style").attr("src",t);var i=$("#sim-edit-image .style").val();$("#sim-edit-image .align").val();big_parent.find("video").removeClass().addClass(i),0!=$("#sim-edit-video .link").val().length?(big_parent.find("video").wrap('<a class="imglink"></a>'),big_parent.find("a.imglink").attr({href:$("#sim-edit-video .link").val(),target:$("#sim-edit-video .target").val()})):big_parent.find("a.imglink").find("video").unwrap(),i||big_parent.find("video").removeAttr("class"),setTimeout(function(){big_parent.find("video").css({"max-width":big_parent.find("video").width(),width:"100%"})},300)}),$("#sim-edit-video .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-video .sim-edit-box-buttons-save").off()})):"json"===big_parent.attr("data-type")&&($("#sim-edit-json").fadeIn(500),$("#sim-edit-json .sim-edit-box").slideDown(500),big_parent.find(".sim-row-edit-hover").remove(),$("#sim-edit-json .json").val(big_parent.html()),$("#sim-edit-json .sim-edit-box-buttons-save").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("json儲存被觸發.."),$("#sim-edit-json").fadeOut(500),$("#sim-edit-json .sim-edit-box").slideUp(500);var t=$("#sim-edit-json .json").val();big_parent.html(t),$(this).off(),$("#sim-edit-json .sim-edit-box-buttons-cancel").off()}),$("#sim-edit-json .sim-edit-box-buttons-cancel").one("click",function(e){e.preventDefault(),e.stopPropagation(),console.log("關閉json編輯面板"),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),$(this).off(),$("#sim-edit-json .sim-edit-box-buttons-save").off()}))})},function(e){e.preventDefault(),e.stopPropagation(),$(this).children(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off("click"),$(".sim-row-edit-hover").remove()})}function t(e){e.hover(function(e){e.preventDefault(),e.stopPropagation(),$(this).append('<div class="edit-changeColor">背景設定(局部)</div>'),$(".edit-changeColor").one("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().append('<div class="changeColor-box-min"><div class="sim-edit-box-title">Edit Background</div>換背景色：(輸入色碼)<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖(請輸入Url)：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>設定最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20" ;><br>局部區塊設為連結：<input class="fullLink" placeholder="請直接輸入連結網址" size="20" ;=""><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20" ;=""><button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>	'),$(this).closest(".sim-row-box").css("overflow","inherit");var t=$(this).next(".changeColor-box-min"),i=$(this).closest("[edit_BG]"),o=i.attr("class").split(" "),a=i.attr("edit_bg"),n=(i.attr("class").split(" ").length,o),r=n.splice(0,a);t.find(".changeColor-input-text").val(i.css("background-color")),t.find(".changeImg-input-text").val(i.css("background-image")),t.find(".background-attachment").val(i.css("background-attachment")),t.find(".minHeight").val(i.css("min-height")),t.find(".fullLink").val(i.children("a.full").attr("href")),t.find(".style").val(n.toString().replace(/,/g," ")),$("#btnOK").click(function(){$(this).closest("[edit_BG]").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"background-attachment":$(this).prevAll(".background-attachment").val(),"min-height":$(this).prevAll(".minHeight").val()});var e=r.toString().replace(/,/g," ")+" "+$(this).prevAll(".style").val();i.attr("class",e),t.find(".fullLink").val()?0!=i.find("a.full").length?i.find("a.full").attr("href",t.find(".fullLink").val()):(i.prepend('<a class="full" href="'+t.find(".fullLink").val()+'"/>'),$("a.full").find("a").children().unwrap()):i.children("a.full").remove(),$(this).closest(".changeColor-box-min").remove(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove(),$(this).closest(".sim-row-box").css("overflow","hidden")}),$("#btnCancel").click(function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").off(),$(".sim-row-edit-hover").off(),$(".sim-row-edit-hover i").off(),$(".sim-row-edit-hover").remove(),$(".changeColor-box-min").remove(),$(".edit-changeColor").remove()})})},function(e){e.preventDefault(),e.stopPropagation(),$(".edit-changeColor").remove(),$(".edit-changeColor").off()})}function i(){$("#rwd-builder-area-center-frame-content .sim-row").removeClass("rwd-builder-area-center-frame-buttons-content-tab").append('<div class="sim-row-delete"><i class="fa fa-times" ></i></div><div class="sim-row-changeColor">背景設定(橫的整塊)</div>')}function o(){$(".sim-row-delete").click(function(){$(this).parent().remove()})}function a(){$(".sim-row-changeColor").click(function(){$(this).parent().append('<div class="changeColor-box"><div class="sim-edit-box-title">Edit Background</div>換背景色：<input class="changeColor-input-text" type="text" placeholder="請輸入#色碼" size="20";><br>換背景圖：<input class="changeImg-input-text" type="text" placeholder="請輸入url(網址...)" size="20";><br>背景是否固定：<select class="background-attachment"><option value="scroll">不固定(隨滾輪捲動)</option><option value="fixed">固定(不隨滾輪捲動)</option></select><br>限制最大寬度：<input class="maxWidth" placeholder="請輸入寬度px或%" size="20";><br>限制最小高度：<input class="minHeight" placeholder="請輸入高度px" size="20";><br>往下推：<input class="marginBottom" placeholder="註:螢幕寬小於400px失效" size="20";><br>加上特殊樣式：<input class="style" placeholder="多個樣式請用空白分開" size="20";><br><button class="btnOK" id="btnOK">OK</button><button class="btnOK" id="btnCancel">Cancel</button></div>	');var e=$(this).next(".changeColor-box"),t=$(this).closest(".sim-row");e.find(".changeColor-input-text").val(t.css("background-color")),e.find(".changeImg-input-text").val(t.css("background-image")),e.find(".maxWidth").val(t.find(".sim-row-box").css("max-width")),e.find(".minHeight").val(t.css("min-height")),e.find(".background-attachment").val(t.css("background-attachment")),e.find(".marginBottom").val(t.css("margin-bottom")),e.find(".style").val(t.attr("class").replace(/sim-row/,"")),$("#btnOK").click(function(){$(this).closest(".sim-row").css({"background-color":$(this).prevAll(".changeColor-input-text").val(),"background-image":$(this).prevAll(".changeImg-input-text").val(),"min-height":$(this).prevAll(".minHeight").val(),"margin-bottom":$(this).prevAll(".marginBottom").val(),"background-attachment":$(this).prevAll(".background-attachment").val()}),$(this).closest(".sim-row").find(".sim-row-box").css({"max-width":$(this).prevAll(".maxWidth").val()}),$(this).closest(".sim-row").removeClass().addClass("sim-row "+$(this).prevAll(".style").val()),$(this).closest(".changeColor-box").remove()}),$("#btnCancel").click(function(){$(this).closest(".changeColor-box").remove()})})}0!=$("#rwd-builder-area-center-frame-content").children().length&&(console.log("一載入content已經有東西!"),e($("#rwd-builder-area-center-frame-content>.sim-row .sim-row-edit")),t($("#rwd-builder-area-center-frame-content [edit_BG]")),i(),o(),a()),$(".rwd-builder-area-center-frame-buttons-content").load("allTemplate.html #rwd-preloaded-rows",function(n){console.log("所有模板已被載入"),$(".rwd-builder-area-center-frame-buttons-content").find(".sim-row").addClass("rwd-builder-area-center-frame-buttons-content-tab"),$(".rwd-builder-area-center-frame-buttons-content-tab").hover(function(n){n.preventDefault(),n.stopPropagation(),console.log($(this)),$(this).append('<div class="rwd-builder-area-center-frame-buttons-content-tab-add"><i class="fa fa-plus"></i>&nbsp;Insert<br><span>'+$(this).attr("ex")+"</span></div>"),$(".rwd-builder-area-center-frame-buttons-content-tab-add").click(function(){$("#rwd-builder-area-center-frame-content").prepend($('#rwd-preloaded-rows .sim-row[data-id="'+$(this).parent().attr("data-id")+'"]').removeAttr("ex").clone()),i(),o(),a();$("#rwd-builder-area-center-frame-content>.sim-row:first .sim-row-edit");e($("#rwd-builder-area-center-frame-content>.sim-row:first .sim-row-edit")),t($("#rwd-builder-area-center-frame-content [edit_BG]")),$("#rwd-builder-area-center-frame-buttons-dropdown").fadeOut(200)})},function(e){e.preventDefault(),e.stopPropagation(),$(".rwd-builder-area-center-frame-buttons-content-tab-add").remove(),$(".rwd-builder-area-center-frame-buttons-content-tab-add").off()}),$("#rwd-builder-area-center-frame-buttons-add").hover(function(){$("#rwd-builder-area-center-frame-buttons-dropdown").fadeIn(200)},function(){$("#rwd-builder-area-center-frame-buttons-dropdown").fadeOut(200)}),$("#rwd-builder-area-center-frame-buttons-dropdown").hover(function(){$(".rwd-builder-area-center-frame-buttons-content").fadeIn(200)},function(){$(".rwd-builder-area-center-frame-buttons-content").fadeOut(200)}),$("#add-column-1").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-1"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-1"])').hide()}),$("#add-column-2").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-2"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-2"])').hide()}),$("#add-column-3").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-3"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-3"])').hide()}),$("#add-column-4").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-4"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-4"])').hide()}),$("#add-column-5").hover(function(){$('.rwd-builder-area-center-frame-buttons-content-tab[data-type="column-5"]').show(),$('.rwd-builder-area-center-frame-buttons-content-tab:not([data-type="column-5"])').hide()})}),$("#all-edit-bord").load("allEditBord.html",function(){console.log("所有編輯面板已被載入")}),$("#rwd-builder-area-center-frame-content").sortable({revert:!0}),$(".sim-row").draggable({connectToSortable:"#rwd-builder-area-center-frame-content",revert:"invalid",handle:".sim-row-move"}),$("#rwd-buttons-impote").click(function(){$("#sim-edit-import").fadeIn(500),$("#sim-edit-import .sim-edit-box").slideDown(500),$("#sim-edit-import .sim-edit-box-buttons-save").one("click",function(){var n=$("#sim-edit-import .text").val();$("#rwd-builder-area-center-frame-content").prepend(n),$("#sim-edit-import .text").val(""),$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500),e($("#rwd-builder-area-center-frame-content>.sim-row .sim-row-edit")),t($("#rwd-builder-area-center-frame-content [edit_BG]")),i(),o(),a()}),$("#sim-edit-import .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500)})}),$("#rwd-builder-sidebar-buttons-bbutton").click(function(){$("#sim-edit-export").fadeIn(500),$("#sim-edit-export .sim-edit-box").slideDown(500),$("#rwd-preloaded-export").html($("#rwd-builder-area-center-frame-content").html()),$("#rwd-preloaded-export>#rwd-builder-area-center-frame-content").unwrap(),$("#rwd-preloaded-export .sim-row-delete,#rwd-preloaded-export .sim-row-changeColor,#rwd-preloaded-export .edit-changeColor").remove(),$("#rwd-preloaded-export .sim-row").removeClass("ui-draggable"),console.log();for(var e=$("#rwd-preloaded-export .sim-row").find(".imglink"),t=$("#rwd-preloaded-export .sim-row").find(".imglink").length,i=0;t>=i;i++)0==e.eq(i).children().length&&e.eq(i).remove();preload_export_html=$("#rwd-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/\s(?=\s)/g,""),$("#sim-edit-export .text").val(preload_export_html),$("#rwd-preloaded-export").html(" "),$("#sim-edit-export .sim-edit-box-buttons-cancel").one("click",function(){$(this).closest(".sim-edit-box").parent().fadeOut(500),$(this).closest(".sim-edit-box").slideUp(500)})}),$("#rwd-builder-sidebar-buttons-Preview").click(function(){$("#rwd-preloaded-export").html($("#rwd-builder-area-center-frame-content").html()),$("#rwd-preloaded-export .sim-row-delete,#rwd-preloaded-export .sim-row-changeColor,#rwd-preloaded-export .edit-changeColor").remove(),$("#rwd-preloaded-export .sim-row").removeClass("ui-draggable"),$("#rwd-preloaded-export .sim-row-edit").removeAttr("data-type"),$("#rwd-preloaded-export .sim-row-edit").removeClass("sim-row-edit"),preload_export_html=$("#rwd-preloaded-export").html(),preload_export_html=preload_export_html.replace(/style=""/g,"").replace(/max-width:\snone;/g,"").replace(/min-height:\s0px;/g,"").replace(/min-height:\s0px;/g,"").replace(/background-image: url\(&quot;none&quot;\);/g,"").replace(/background-image:\surl\(&quot;&quot;\);/g,"").replace(/padding-top:\s0px;/g,"").replace(/background-color:\srgba\(0,\s0,\s0,\s0\);/g,"").replace(/\s(?=\s)/g,"");var e=window.open("","","resizable=yes,status=yes,scrollbars=yes");e.document.write('<link href="_css/rwd-content.css" rel="stylesheet" type="text/css" /><link href="_css/slick.css" rel="stylesheet" type="text/css" />'+preload_export_html+'<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script><script type="text/javascript" src="_scripts/slick.min.js"/></script><script  type="text/javascript">$(".slick").slick({autoplay: true,Speed: 3000,dots: true,fade: true,arrows: false});</script>'),$("#rwd-preloaded-export").html(" ")})})},{}]},{},["D:\\git-repo\\DragAndDrop_webBuilder\\webroot\\_scripts\\rwd-builder.js"]);
//# sourceMappingURL=bundle.js.map

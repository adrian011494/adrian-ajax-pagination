var MalinkyAjaxPaging=function(t){var a=function(){function a(t,a,n){var i;return function(){var e=this,o=arguments,r=function(){i=null,n||t.apply(e,o)},p=n&&!i;clearTimeout(i),i=setTimeout(r,a),p&&t.apply(e,o)}}var n=p,i=g,e=l,o=m,r=c,v=d,x=u,j=y,b=k,T=_,L=f,E=S,I=h,D=w,M=!1,A=function(){t.ajax({type:"GET",url:I,dataType:"html",success:function(a){var n=t.parseHTML(a),i=(t(n).find(j),1),e=0;for(var o in malinkySettings)t(n).find(malinkySettings[o].posts_wrapper).length&&t(n).find(malinkySettings[o].post_wrapper).length&&t(n).find(malinkySettings[o].pagination_wrapper).length&&(1==t(n).find(malinkySettings[o].posts_wrapper).length?e++:t(n).find(malinkySettings[o].posts_wrapper).each(function(t){e++}));for(var o in malinkySettings)t(n).find(malinkySettings[o].posts_wrapper).length&&t(n).find(malinkySettings[o].post_wrapper).length&&t(n).find(malinkySettings[o].pagination_wrapper).length&&(1==e?(t(n).find(malinkySettings[o].posts_wrapper).attr("data-paginator-count",i),t(n).find(malinkySettings[o].pagination_wrapper).attr("data-paginator-count",i)):1==t(n).find(malinkySettings[o].posts_wrapper).length?(t(n).find(malinkySettings[o].posts_wrapper).attr("data-paginator-count",i),t(n).find(malinkySettings[o].posts_wrapper+" "+malinkySettings[o].pagination_wrapper).attr("data-paginator-count",i),t(n).find(malinkySettings[o].posts_wrapper+" "+malinkySettings[o].next_page_selector).attr("data-paginator-count",i),i++):t(n).find(malinkySettings[o].posts_wrapper).each(function(a){t(this).attr("data-paginator-count",i),t(this).find(malinkySettings[o].pagination_wrapper).attr("data-paginator-count",i),t(this).find(malinkySettings[o].next_page_selector).attr("data-paginator-count",i),i++}));var p=t(n).find(j+'[data-paginator-count="'+D+'"] '+b),g=t(j+'[data-paginator-count="'+D+'"] '+b).last(),s=t(j+'[data-paginator-count="'+D+'"] '+b);if(g.after(p),"infinite-scroll"!=x&&"load-more"!=x||(L++,1==e?(L>T&&(t('#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]').parent().remove(),window.removeEventListener("scroll",R)),I=I.replace(/\/page\/[0-9]*/,"/page/"+L)):(t(n).find(E+'[data-paginator-count="'+D+'"]').attr("href")||(t('#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]').parent().remove(),window.removeEventListener("scroll",R)),I=t(n).find(E+'[data-paginator-count="'+D+'"]').attr("href"))),"pagination"==x){s.remove(),history.pushState(null,null,I);var l=t(n).find(r+'[data-paginator-count="'+D+'"]').first();t(r+'[data-paginator-count="'+D+'"]').replaceWith(l)}P()},error:function(t,a){Q()},complete:function(){"pagination"==x&&t("body,html").animate({scrollTop:t(j+'[data-paginator-count="'+D+'"]').offset().top-150},400),"infinite-scroll"==x&&(M=!1)}})},G=function(){t(r+'[data-paginator-count="'+D+'"]').last().before('<div class="malinky-ajax-pagination-loading" data-paginator-count="'+D+'">'+n+"</div>")},H=function(){t('.malinky-ajax-pagination-loading[data-paginator-count="'+D+'"]').show(),"load-more"!=x&&"infinite-scroll"!=x||t('#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]').text(e)},P=function(){t('.malinky-ajax-pagination-loading[data-paginator-count="'+D+'"]').hide(),"load-more"!=x&&"infinite-scroll"!=x||t('#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]').text(o),clearTimeout(s)},Q=function(){t('.malinky-ajax-pagination-loading[data-paginator-count="'+D+'"]').hide(),clearTimeout(s)},R=a(function(){if(!M){var a=t(document).height()-t(window).scrollTop()-t(window).height();v>a-i&&(M=!0,H(),A())}},250);"infinite-scroll"==x?t(E+'[data-paginator-count="'+D+'"]').attr("href")&&(G(),t(r+'[data-paginator-count="'+D+'"]').remove(),window.addEventListener("scroll",R)):"load-more"==x?t(E+'[data-paginator-count="'+D+'"]').attr("href")&&(t(r+'[data-paginator-count="'+D+'"]').last().after('<div class="malinky-load-more"><a href="'+I+'" id="malinky-ajax-pagination-button" class="malinky-load-more__button" data-paginator-count="'+D+'">'+m+"</a></div>"),G(),t(r+'[data-paginator-count="'+D+'"]:not(:has(>a#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]))').remove(),t('#malinky-ajax-pagination-button[data-paginator-count="'+D+'"]').click(function(t){t.preventDefault(),s=setTimeout(H,750),A()})):"pagination"==x&&(G(),t(document).on("click",r+'[data-paginator-count="'+D+'"]',function(t){t.preventDefault(),s=setTimeout(H,750),I=t.target.href,A()}),window.addEventListener("popstate",function(t){I=document.URL,A()}))},n=0,e=1,o=0;for(var r in malinkySettings)t(malinkySettings[r].posts_wrapper).length&&t(malinkySettings[r].post_wrapper).length&&t(malinkySettings[r].pagination_wrapper).length&&t(malinkySettings[r].next_page_selector).length&&(1==t(malinkySettings[r].posts_wrapper).length?o++:t(malinkySettings[r].posts_wrapper).each(function(t){o++}));for(var r in malinkySettings)if(t(malinkySettings[r].posts_wrapper).length&&t(malinkySettings[r].post_wrapper).length&&t(malinkySettings[r].pagination_wrapper).length&&t(malinkySettings[r].next_page_selector).length)for(1==o?(t(malinkySettings[r].posts_wrapper).attr("data-paginator-count",e),t(malinkySettings[r].pagination_wrapper).attr("data-paginator-count",e),t(malinkySettings[r].next_page_selector).attr("data-paginator-count",e)):1==t(malinkySettings[r].posts_wrapper).length?(t(malinkySettings[r].posts_wrapper).attr("data-paginator-count",e),t(malinkySettings[r].posts_wrapper+" "+malinkySettings[r].pagination_wrapper).attr("data-paginator-count",e),t(malinkySettings[r].posts_wrapper+" "+malinkySettings[r].next_page_selector).attr("data-paginator-count",e),e++):t(malinkySettings[r].posts_wrapper).each(function(a){t(this).attr("data-paginator-count",e),t(this).find(malinkySettings[r].pagination_wrapper).attr("data-paginator-count",e),t(this).find(malinkySettings[r].next_page_selector).attr("data-paginator-count",e),e++}),i=1;i<=t(malinkySettings[r].posts_wrapper).length;i++){var p=malinkySettings[r].ajax_loader,g=(malinkySettings[r].malinky_load_more,malinkySettings[r].malinky_load_more_button,parseInt(malinkySettings[r].infinite_scroll_buffer)),s="",l=malinkySettings[r].loading_more_posts_text,m=malinkySettings[r].load_more_button_text,c=malinkySettings[r].pagination_wrapper,d=t(document).height()-t(c).offset().top,u=malinkySettings[r].paging_type,y=malinkySettings[r].posts_wrapper,k=malinkySettings[r].post_wrapper,_=parseInt(malinkySettings.max_num_pages),f=parseInt(malinkySettings.next_page_number),S=malinkySettings[r].next_page_selector,h=t(malinkySettings[r].next_page_selector).attr("href")||malinkySettings.next_page_url,w=++n;a()}}(jQuery);
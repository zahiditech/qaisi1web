//<![CDATA[
$(document)['ready'](function () {
        $('#qaisi1web-prot')['html']('<a href="http://qaisi1web.blogspot.com" rel="dofollow" target="_blank">تصميم : القيسي ويب</a>');
        setInterval(function () {
                if (!$('#qaisi1web-prot:visible')['length']) {
                  window['location']['href'] = 'http://qaisi1web.blogspot.com';
                };
            }, 3000);
    });

$('#nav-med').affix({offset: {top: $('header').height()}});	
$(document).ready(function(){$('.popular-posts>ul>li>div>div.item-thumbnail>a>img').attr('src',function(e,t){return t.replace('s72-c','s60')})});

posts_no_thumb_sum = 390;
posts_thumb_sum = 230;
img_thumb_height = 260;
img_thumb_width = 480;
// ]]>

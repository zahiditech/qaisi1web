 //<![CDATA[
// BY: www.qaisi1web.blogspot.com - Assad Alqaisi
$(document)['ready'](function () {
        $('#qaisi1web-prot')['html']('<a href="http://qaisi1web.blogspot.com" rel="dofollow" target="_blank">القيسي ويب | الأفضل لكم</a>');
        setInterval(function () {
                if (!$('#qaisi1web-prot:visible')['length']) {
                  window['location']['href'] = 'http://qaisi1web.blogspot.com';
                };
            }, 3000);
    });
$(document).ready(function(){$(".post-body img:eq(0)").each(function(){var r=$(this),t=r.attr("src"),a=r.parent().attr("href"),e=$("#blog-banner"),c=$('<a rel="prettyPhoto" href="'+a+'"><img src="'+t+'" /></a>');c.appendTo(".bckpic"),e.css({"background-image":"url("+t+")"})})});
$(document).ready(function(){ 
$('a[name="ma3lomat"]').before($('#qaisi1web-ma3lomat').html()); 
$('#qaisi1web-ma3lomat').html(''); 
}); 
function totalPosts(json){document.getElementById('qaisi1webstatpost').innerHTML=json.feed.openSearch$totalResults.$t};function qaisi1webtc(json){document.getElementById('qaisi1webstatcommen').innerHTML=json.feed.openSearch$totalResults.$t};document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalPosts\"><\/script><script type=\"text/javascript\" src=\"/feeds/comments/default?alt=json-in-script&max-results=0&callback=qaisi1webtc\"><\/script>');
//share post
$(document).on("click",".share-toggle",function(){var e=$(this);e.toggleClass("toggle-active"),e.siblings(".share").toggleClass("share-active")});
function InsertarImagenVideo(id) {
var IDelemento = document.getElementById(id),
sustituir = IDelemento.innerHTML;
sustituir = sustituir.replace(/\[img\](.[^\]]*)\[\/img\]/ig, "<img class='img-comentarios' src='$1'\/>");
sustituir = sustituir.replace(/\[video\]https:\/\/www\.youtube\.com\/embed\/(.*?)\[\/video\]/ig, "<iframe class='vid-comentarios' src='https://www.youtube.com/embed/$1'><\/iframe>");
sustituir = sustituir.replace(/\[video\](https:\/\/youtu\.be\/|https:\/\/www\.youtube\.com\/watch\?v\=)(.*?)\[\/video\]/ig, "<iframe class='vid-comentarios' src='https://www.youtube.com/embed/$2'><\/iframe>");
sustituir = sustituir.replace(/\[video\](http:\/\/youtu\.be\/|http:\/\/www\.youtube\.com\/watch\?v\=)(.*?)\[\/video\]/ig, "<iframe class='vid-comentarios' src='https://www.youtube.com/embed/$2'><\/iframe>");
sustituir = sustituir.replace(/\[video\](http:\/\/player\.vimeo\.com\/video\/)(.*?)\[\/video\]/ig, "<iframe class='vid-comentarios' src='http://player.vimeo.com/video/$2'><\/iframe>");
document.getElementById(id).innerHTML = sustituir;} InsertarImagenVideo('comment_block');
//]]>

 //<![CDATA[
// BY: www.qaisi1web.blogspot.com - Assad Alqaisi
$(document).on('click','.fully',function(){
           $("#sidebar-wrap" ).css( "display", "none" );
           $( ".main" ).attr('style', 'width: 150%;' );
           $( "h3.post-title" ).attr('style', 'text-align: center;' );
           $( ".sharepost ul" ).attr('style', 'margin:5px 0px 0px 330px' );
           $( ".posturls tr" ).attr('style', 'width: 82%;' );
           $( ".adAssad" ).attr('style', 'width: 47%;' );
           $( "a.ads-Assad" ).attr('style', 'margin-right: 180px;' );
           $( "#assad-qaisi1web" ).attr('style', 'margin-right: 80px;' );
           $( "a.kef-qaisi1web" ).attr('style', 'width: 957px;' );
           $( ".fully-close" ).css( "display", "block" );
           $( ".fully" ).css( "display", "none" );
      });


if ($(window).width() > 1024) {

$(document).on('click','.fully-close',function(){
           $( ".fully-close" ).css( "display", "none" );
           $( ".fully" ).css( "display", "block" );
           $( "#sidebar-wrap" ).css( "display", "block" );
           $( ".main" ).attr('style', 'width:100%' );
           $( "h3.post-title" ).attr('style', 'text-align: right;' );
           $( ".sharepost ul" ).attr('style', 'margin:5px 0px 0px 0px' );
           $( ".posturls tr" ).attr('style', 'width: 52%;' );
           $( ".adAssad" ).attr('style', 'width: 295px;' );
           $( "a.ads-Assad" ).attr('style', 'margin-right: 108px;' );
           $( "#assad-qaisi1web" ).attr('style', 'margin-right: 5px;' );
           $( "a.kef-qaisi1web" ).attr('style', 'width: 635px;' );
      });

};

if ($(window).width() < 1024) {

$(document).on('click','.fully-close',function(){
           $( ".fully-close" ).css( "display", "none" );
           $( ".fully" ).css( "display", "block" );
           $( "#sidebar-wrapper" ).css( "display", "block" );
           $( "#main-wrapper" ).attr('style', 'width:66%' );
           $( "h3.post-title" ).attr('style', 'text-align: right;' );
           $( ".sharepost ul" ).attr('style', 'margin:5px 0px 0px 0px' );
           $( ".posturls tr" ).attr('style', 'width: 52%;' );
           $( ".adAssad" ).attr('style', 'width: 295px;' );
           $( "a.ads-Assad" ).attr('style', 'margin-right: 108px;' );
           $( "#assad-qaisi1web" ).attr('style', 'margin-right: 5px;' );
           $( "a.kef-qaisi1web" ).attr('style', 'width: 635px;' );
      });

};
$(document).on('dblclick','input.form-control.fllt',function(){
           $( ".navbar-right" ).css( "display", "none" );
           $( "input.form-control.fllt-close" ).attr('style', 'width: 1045px;' );
           $( "input.form-control.fllt-close" ).css( "display", "inline-block" );
           $( "input.form-control.fllt" ).css( "display", "none" );
      });


if ($(window).width() > 1024) {

$(document).on('dblclick','input.form-control.fllt-close',function(){
           $( "input.form-control.fllt-close" ).css( "display", "none" );
           $( "input.form-control.fllt" ).css( "display", "inline-block" );
           $( ".navbar-right" ).css( "display", "block" );
           $( "input.form-control.fllt" ).attr('style', 'width: auto' );
      });

};

if ($(window).width() < 1024) {

$(document).on('dblclick','input.form-control.fllt-close',function(){
           $( "input.form-control.fllt-close" ).css( "display", "none" );
           $( "input.form-control.fllt" ).css( "display", "inline-block" );
           $( ".navbar-right" ).css( "display", "block" );
           $( "input.form-control.fllt" ).attr('style', 'width: auto' );
      });

};

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

//<![CDATA[
document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://twemoji.maxcdn.com/twemoji.min.js\"></scr" + "ipt>");
//Pre Auto Selection
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,kbd,blockquote,i"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
//]]>
jQuery(document).ready(function(e){var t=e(&quot;#backtotop&quot;);e(window).scroll(function(){e(this).scrollTop()&gt;=800?t.show(10).animate({opacity:&quot;1&quot;},10):t.animate({opacity:&quot;0&quot;},10)});t.click(function(t){t.preventDefault();e(&quot;html,body&quot;).animate({scrollTop:0},400)})})

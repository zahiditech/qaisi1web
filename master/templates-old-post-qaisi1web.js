$(document).ready(function(){
    $(&#39;[data-toggle=&quot;tooltip&quot;]&#39;).tooltip();
});
$(function () {
  $(&#39;[data-toggle=&quot;popover&quot;]&#39;).popover();
})
$(&#39;#myTabs a&#39;).click(function (e) {
  e.preventDefault()
  $(this).tab(&#39;show&#39;)
})

var loriga = document.getElementById(&#39;old-post-info&#39;);
var othmane = document.getElementById(&#39;new-post-info&#39;);
othmane.innerHTML = loriga.innerHTML;
var loriga = document.getElementById(&#39;old-post-title&#39;);
var othmane = document.getElementById(&#39;new-post-title&#39;);
othmane.innerHTML = loriga.innerHTML;
var loriga = document.getElementById(&#39;old-post-snippet&#39;);
var othmane = document.getElementById(&#39;new-post-snippet&#39;);
othmane.innerHTML = loriga.innerHTML;
var loriga = document.getElementById(&#39;old-post-authorbox&#39;);
var othmane = document.getElementById(&#39;new-post-authorbox&#39;);
othmane.innerHTML = loriga.innerHTML;

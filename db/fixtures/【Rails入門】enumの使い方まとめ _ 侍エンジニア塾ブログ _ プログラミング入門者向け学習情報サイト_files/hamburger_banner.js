$j = jQuery;

$j(document).ready( function(){
  $j(".vce-responsive-nav").one("click",function(){
	$j(".sidr-inner").after('<div class="hamburger_banner"><a href="/?cid=sp_menu" target="_blank"><img src="/blog/wp-content/themes/voice_child/images/banner/hamburger_banner.jpg"></a></div>');
  })
});

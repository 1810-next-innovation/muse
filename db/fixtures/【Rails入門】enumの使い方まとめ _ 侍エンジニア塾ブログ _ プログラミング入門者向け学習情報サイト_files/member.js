$j = jQuery;

$j(document).ready( function(){
  var url = location.href;
  if (!url.match(/login|register|lostpassword/i)) {
    $j.cookie("redirect", url, { expires: 1 });
  }
});

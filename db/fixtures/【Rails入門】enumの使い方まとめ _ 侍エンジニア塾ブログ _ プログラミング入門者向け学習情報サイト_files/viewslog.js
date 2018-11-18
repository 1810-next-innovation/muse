$j = jQuery;

$j(document).ready( function(){
  var vlog = "";
  var now = "b"+location.href.split("/blog/")[1];
  if ($j.cookie("vlog")) {
    vlog += $j.cookie("vlog")+","+now;
  }else{
    vlog += now;
  }
  $j.cookie("vlog", vlog, {
    expires: 90,
    path: "/"
  });
});

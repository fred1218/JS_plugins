<?php
// force the first request to take longer the following
$x = $_REQUEST["x"];
if($x == 2)
	$x = -1;
usleep(100000 * (3 - $x));
echo $_REQUEST["x"];
?>
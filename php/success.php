<?php 
session_start ();
	if($_GET["send"] ==1)
		echo "Success ".$_SESSION["to"];
 ?>
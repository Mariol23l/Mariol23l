
<?php
require_once("../libreria/dompdf/autoload.inc.php");
require_once('../modelo/pdf.php');
$id_venta=$_POST['id'];
use Dompdf\Dompdf;
$dompdf = new DOMPDF();



$nombrepdf=("../pdf/pdf-".$id_venta.".pdf");

$html=getHtml($id_venta);
$dompdf-> load_html(($html));
$dompdf->setPaper('A3');
$dompdf-> render();
$pdf=$dompdf->output();
$filename=$nombrepdf;
file_put_contents($filename,$pdf);

$dompdf->stream($filename);
/*
require_once('../libreria/dompdf/autoload.inc.php');

use Dompdf\Dompdf;
$dompdf = new Dompdf();
ob_start(); 

require_once('../modelo/pdf.php');

$id_venta=$_POST['id'];
$html='<5>hola mundo</5>';/
//$html.='<link type="text/css" rel="stylesheet" href="../css/pdf.css">';

//$css= file_get_contents('../css/pdf.css');


$dompdf->set_paper("A4", "landscape");
$dompdf-> load_html(utf8_decode($html));

//$dompdf->WriteHTML($css, \Dompdf\HTMLParserMode::HEADER_CSS);
//$dompdf->WriteHTML($html, \Dompdf\HTMLParserMode::HTML_BODY);

$dompdf->render();
$dompdf->stream('FicheroEjemplo.pdf');
//$dompdf->stream("../pdf/pdf-".$id_venta.".pdf", [
    //    "Attachment" => true
 //   ]);
  //  file_put_contents("../pdf/pdf-".$id_venta.".pdf", array("Attachment"=>true));
//$dompdf->stream("../pdf/pdf-".$id_venta.".pdf",array("Attachment"=>false));
//$dompdf->Output(,"F");*/
?>
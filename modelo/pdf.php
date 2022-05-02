<?php
include_once 'venta.php';
include_once 'VentaProducto.php';

function getHtml($id_venta){
    $venta= new venta();
    $venta_producto= new ventaProducto();
    $venta->buscar_id($id_venta);
    $venta_producto->buscar_detVenta($id_venta);
    $plantilla='
    <html>
    <head>
    <style>

.clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  
  a {
    color: #0c7ef0;
    text-decoration: underline;
  }

  /*encabezado morado*/
  table thead tr {
    height: 100px;
    background: rgb(0, 110, 255);
  }
  body {
    position: relative;
    width: 21cm;  
    height: 29.7cm; 
    margin: 0 auto; 
    color: #0d0058;
    background: #FFFFFF; 
    font-family: Arial, sans-serif; 
    font-size: 12px; 
    font-family: Arial;
  }
  
  header {
    padding: 10px 0;
    margin-bottom: 30px;
  }
#logo {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left:30px ;
    margin-right: 40px;
   
  }
  
  #logo img {
    width:100px;
    height: 100px;
  
  }

  h1 {
   border-top: 1px solid rgb(15, 0, 80);
  border-bottom: 1px solid rgb(15, 0, 80);
  color: rgb(15, 0, 80);
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px 0;
  background: url(../img/fondo.jpg);
}

  #project {
    position:relative;
    padding: 0px 0px 0px -8% !important;
  margin-top:150px;
    float: left;
   display: inline;
    color: rgb(0, 0, 0);
  }
  
  #project span {
    color: rgb(5, 0, 80);
    margin-right: 10px;
    width: 200px;
    font-size: 16px;
  }
  
  #company {
    float: right;
    text-align: right;
  }
  
  #project div{
    font-size: 16px;    
  }

  #company div {
    white-space: nowrap;    
  }

  #negocio {
    font-size: 18px;
    color: rgb(1, 0, 80);
  }
    table {
      position:relative;
    padding: 0px 0px 0px -12% !important;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px;
  }
    table tr:nth-child(2n-1) td {
    background: rgb(227, 220, 230);
  }
   table th,
  table td {
    text-align: center;
  }
  
  table th {
 padding: 0px 15px 0px 15px !important;
    font-size:16px;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid #C1CED9;
    white-space: nowrap;        
    font-weight: normal;
  }

    table .service {

    font-weight: bold;
    text-align: center;
  }

  table td.service{
    vertical-align: top;
  }

  table td.servic{

    font-size:13px;
      text-align: center;
    vertical-align: top;
  }


    table td.total {
    color : rgb(1, 0, 80);
  }
#res{
 padding: 0px 0px 0px 40rem !important;
}
  table td.grand {
    font-size:14px;
    border-top: 1px solid  rgb(17, 0, 80);
    
  }
  
  #notices .notice {
    color: rgb(115, 117, 93);
    font-size: 1.2em;
  }
    footer {
    color: #5D6975;
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #C1CED9;
    padding: 8px 0;
    text-align: center;
  }

    </style>
    </head>
    <body>
    <header class="clearfix">
      <div id="logo">
        <img src="../img/logo.png" width="100" height="100">
      </div>
      <h1>COMPROBANTE DE PAGO</h1>
      <div id="company" class="clearfix">
        <div id="negocio"><b>DISTRIBUIDORA E IMPORTADORA MERLYN S.A.</b></div>
        <div><b>Direccion Numero ###,</b><br /><b>LIMA M.-LIMA</b></div>
        <div><b>(344) 342234</b></div>
        <div><a href="mailto:company@example.com"><b>company@example.com</b></a></div>
      </div>';
      foreach ($venta->objetos as $objeto) {

        $plantilla.='
        <div id="project">
          <div><b><span>ID de Venta: </span>'.$objeto->id_venta.'</b></div>
          <div><b><span>Fecha Inicio: </span>'.$objeto->fecha.'</b></div>
          <div><b><span>Fecha Final : </span>'.$objeto->fecha.'</b></div>
          <div><b><span>Plazo Pago : </span>'.$objeto->formapago.'</b></div>
          <div><b><span>Razn. Social: </span>'.$objeto->razsocial.'</b></div>
          <div><b><span>RUC Clinica: </span>'.$objeto->ruc.'</b></div>
          <div><b><span>Rte. - Venta: </span>'.$objeto->vendedor.'</b></div>
        </div>';
        }
        $plantilla.='
        </header>
        <main>
          <table>
            <thead>
              <tr>      
                <th class="service">Producto</th>
                <th class="service">Lote</th>
                <th class="service">Vencimiento</th>
                <th class="service">Concentracion</th>
                <th class="service">Laboratorio</th>
                <th class="service">Presentacion</th>
                <th class="service">Cantidad</th>
                <th class="service">PrecioVenta</th>
                <th class="service">Subtotal</th>
              </tr>
            </thead>
            <tbody>';
            foreach ($venta_producto->objetos as $objeto) {
         
                $plantilla.='<tr>
                  .$ob
                  <td class="servic">'.$objeto->nombre.'</td>           
                  <td class="servic">'.$objeto->lote.'</td>
                  <td class="servic">'.$objeto->vencimiento.'</td>
                  <td class="servic">'.$objeto->concentracion.'</td>
                  <td class="servic">'.$objeto->laboratorio.'</td>
                  <td class="servic">'.$objeto->presentacion.'</td>
                  <td class="servic">'.$objeto->cantidad.'</td>
                  <td class="servic">'.$objeto->preventa.'</td>
                  <td class="servic">S/'.$objeto->subtotal.'</td>
                </tr>';
              }
              $calculos= new Venta();
              $calculos->buscar_id($id_venta);
              foreach ($calculos->objetos as $objeto) {
                $igv=$objeto->total*0.18;
                $sub=$objeto->total-$igv;
                
                $plantilla.='
                <tr>
                  <td colspan="8" class="grand total" id="res">SUBTOTAL</td>
                  <td class="grand total">S/.'.$sub.'</td>
                </tr>
                <tr>
                  <td colspan="8" class="grand total"  id="res">IGV(18%)</td>
                  <td class="grand total">S/.'.$igv.'</td>
                </tr>
                <tr>
                  <td colspan="8" class="grand total"  id="res">TOTAL</td>
                  <td class="grand total">S/.'.$objeto->total.'</td>
                </tr>';
      
              }
             $plantilla.='
              </tbody>
            </table>
            <div id="notices">
              <div>NOTICE:</div>
              <div class="notice">*Presentar este comprobante de pago para cualquier reclamo o devolucion.</div>
              <div class="notice">*El reclamo procedera dentro de las 24 horas de haber hecho la compra.</div>
              <div class="notice">*Si el producto esta dañado o abierto, la devolucion no procedera.</div>
              <div class="notice">*Revise su producto cuando se le entregue.</div>
            </div>
          </main>
          <footer>
            Created by Merlyn
          </footer>
        </body>
        </html>';
          
          return $plantilla;
}
?>
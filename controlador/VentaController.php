<?php
include '../modelo/venta.php';
$venta  = new venta();
session_start();


if ($_POST['funcion']=='listar') {
    $venta->buscar();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json['data'][]=$objeto;
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}

if ($_POST['funcion']=='mostrar_consulta') {
    $venta->producto_mas_vendido();
     foreach ($venta -> objetos as $objeto) {
      $producto_mas_vendido=$objeto->producto;
    }
    $venta->venta_diaria();
    foreach ($venta -> objetos as $objeto) {
      $venta_diaria=$objeto->venta_diaria;
    }
    $venta->venta_mensual();
    foreach ($venta -> objetos as $objeto) {
      $venta_mensual=$objeto->venta_mensual;
    }
    $venta->venta_anual();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json[]=array(
            'producto_mas_vendido'=>$producto_mas_vendido,
            'venta_diaria'=>$venta_diaria,
            'venta_mensual'=>$venta_mensual,
            'venta_anual'=>$objeto->venta_anual
        );
    }
    $jsonstring=json_encode($json[0]);
    echo $jsonstring;
}


if ($_POST['funcion']=='buscar_venta') {
    $venta->buscar_venta();
    $json= array();
    $fecha_actual=new DateTime();
    foreach($venta->objetos as $objeto){
        $vencimiento =new DateTime($objeto->fechaven);
        $diferencia=$vencimiento->diff($fecha_actual);
        $anio=$diferencia->y;
        $mes=$diferencia->m;
        $dia=$diferencia->d;
        $verficado=$diferencia->invert;
        if ($verficado==0) {
            $mes=$mes*(-1);
            $dia=$dia*(-1);
            $estado='danger';
        }else {  
            if($mes>=1  || $dia>7){
                $estado='light';
            }
            else if($dia<=7 && $mes<1 ){
                $estado='warning';
            }
        }
        $json[]=array(
            'id'=>$objeto->id_venta,
            'ruc'=>$objeto->ruc,
            'razsocial'=>$objeto->razsocial,
            'formapago'=>$objeto->formapago,
            'total'=>$objeto->total,
            'fechaemision'=>$objeto->fecha,
            'fechavencimiento'=>$objeto->fechaven,
            'vendedor'=>$objeto->nombre_us,
            'estado'=>$estado
        );
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}

if ($_POST['funcion']=='borrar') {
    $id=$_POST['id'];
    $lote->borrar($id);
}


if ($_POST['funcion']=='venta_mes') {
    $venta->venta_mes();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json[]=$objeto;
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}

if ($_POST['funcion']=='comprador_mes') {
    $venta->comprador_mes();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json[]=$objeto;
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}

if ($_POST['funcion']=='ventas_anual') {
    $venta->ventas_anual();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json[]=$objeto;
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}

if ($_POST['funcion']=='producto_masvendido') {
    $venta->producto_masvendido();
    $json=array();
    foreach ($venta -> objetos as $objeto) {
        $json[]=$objeto;
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}
?>

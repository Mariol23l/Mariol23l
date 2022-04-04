<?php
include_once 'Conexion.php';
class venta{
    var $objetos;
    public function __construct(){
        $db=new Conexion();
        $this->acceso=$db->pdo;
    }
    function crear($ruc,$razsocial,$total,$fecha,$vendedor,$formapago,$fven){
        $sql = "INSERT INTO venta(fecha,fechaVen,ruc,razsocial,total,vendedor,formapago) values(:fecha,:fechaVen,:ruc,:razsocial,:total,:vendedor,:formapago)";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':fecha' => $fecha,':fechaVen'=>$fven,':ruc' => $ruc,':razsocial' => $razsocial,':total' => $total,':vendedor' => $vendedor,':formapago' => $formapago));
    }

    function ultima_venta(){
            $sql = "SELECT MAX(id_venta) as ultima_venta FROM venta";
            $query = $this->acceso->prepare($sql);
            $query->execute();
            $this->objetos = $query->fetchall();
            return $this->objetos;
    }
    function borrar($id_venta){
        $sql = "DELETE FROM venta where id_venta=:id_venta";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id_venta' => $id_venta));
        echo 'delete';
    }

    function buscar(){
        $sql = "SELECT id_venta,fecha,ruc,razsocial,total, CONCAT(usuario.nombre_us,' ',usuario.apellidos_us) as vendedor,formaPago FROM venta join usuario on vendedor=id_usuario";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

    function verificar($id_venta,$id_usuario){
        $sql = "SELECT * FROM venta WHERE vendedor=:id_usuario and id_venta=:id_venta";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id_usuario'=>$id_usuario,':id_venta'=>$id_venta));
        $this->objetos = $query->fetchall();
        if (!empty( $this->objetos)) {
            return 1;
        }else{
            return 0;
        }
    }

    function recuperar_vendedor($id_venta){
        $sql = "SELECT us_tipo FROM venta join usuario on id_usuario=vendedor where  id_venta=:id_venta";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id_venta'=>$id_venta));
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

    function producto_mas_vendido(){


        $sql = "SELECT SUM(cantidad)as total,CONCAT( producto.nombre,' ',concentracion) as producto FROM `venta`
        JOIN venta_producto ON id_venta=venta_id_venta 
        JOIN lote ON id_lote=lote_id_lote
        JOIN producto ON id_producto=lote_id_prod
        WHERE year(fecha)=year(curdate()) and month(fecha)=month(curdate())
        GROUP BY lote_id_lote ORDER BY total DESC LIMIT 1";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }
    function venta_diaria(){
        $sql = "SELECT  ROUND(SUM(total),2) as venta_diaria FROM venta WHERE DATE(fecha)=DATE(curdate())";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }
     function venta_mensual(){
        $sql = "SELECT  ROUND(SUM(total),2) as venta_mensual FROM venta WHERE year(fecha)=year(curdate()) and month(fecha)=month(curdate())";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }
     function venta_anual(){
        $sql = "SELECT  ROUND(SUM(total),2) as venta_anual FROM venta WHERE year(fecha)=year(curdate())";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

    function buscar_id($id_venta){
        $sql = "SELECT id_venta,fecha,ruc,razsocial,total, CONCAT(usuario.nombre_us,' ',usuario.apellidos_us) as vendedor,formaPago FROM venta join usuario on vendedor=id_usuario and id_venta=:id_venta";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id_venta'=>$id_venta));
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }
    function buscar_venta(){
        if (!empty($_POST['consulta'])) {
            $consulta = $_POST['consulta'];
            $sql = "SELECT * FROM venta 
            join usuario on vendedor=id_usuario
            where razsocial LIKE :consulta ";
            $query = $this->acceso->prepare($sql);
            $query->execute(array(':consulta' => "%$consulta%"));
            $this->objetos = $query->fetchall();
            return $this->objetos;
        } else {
            $sql = "SELECT * FROM venta
            join usuario on vendedor=id_usuario
             where razsocial NOT LIKE '' and formapago LIKE 'Credito' ORDER BY id_venta DESC, razsocial";
            $query = $this->acceso->prepare($sql);
            $query->execute();
            $this->objetos = $query->fetchall();
            return $this->objetos;
        }
    }

    function venta_mes(){
        $sql = "SELECT ROUND(SUM(total),2) as cantidad ,month(fecha) as mes from venta where year(fecha)=year(curdate()) GROUP by month(fecha)";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

    function comprador_mes(){
        $sql = "SELECT razsocial,ROUND(SUM(total),2) as cantidad ,month(fecha) as mes from venta where year(fecha)=year(curdate()) GROUP BY month(fecha),ruc ORDER BY cantidad DESC LIMIT 3";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

    function ventas_anual(){
        $sql = "SELECT ROUND(SUM(total),2) as cantidad ,month(fecha) as mes from venta where year(fecha)=year(date_add(curdate(),INTERVAL -1 YEAR)) GROUP by month(fecha)";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }

       function producto_masvendido(){
        $sql = "SELECT  SUM(cantidad)as total, producto.nombre as nombre, concentracion FROM `venta`
        JOIN venta_producto ON id_venta=venta_id_venta 
        JOIN lote ON id_lote=lote_id_lote
        JOIN producto ON id_producto=lote_id_prod
        WHERE year(fecha)=year(curdate()) and month(fecha)=month(curdate())
        GROUP BY lote_id_lote ORDER BY total DESC LIMIT 5";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchall();
        return $this->objetos;
    }
}
?>
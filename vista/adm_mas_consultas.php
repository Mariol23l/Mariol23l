<?php
session_start();
if ($_SESSION['us_tipo']==3 || $_SESSION['us_tipo']==1) {
    include_once 'layouts/header.php';
?>
<title>ADM | Mas Consultas</title>
<?php
    include_once 'layouts/nav.php';
    ?>
<!-- CREAR LOTE -->

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Mas Consultas</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="adm_catalogo.php">Inicio</a></li>
                        <li class="breadcrumb-item active">Mas Consultas</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!--Seccion Ventas-->
    <section>
        <div class="container-fluid">
            <div class="card card-lightblue">
                <div class="card-header">
                    <h3 class="card-title">Consultas Generales </h3>
                </div>
                <div class="card-body">
                    <div class="row">
                         <div class="col-md-12">
                              <h2>Ventas por Mensuales</h2>
                              <div class="chart-responsive">
                                   <canvas id='Grafico1' style="min-height:250px; height:250px; max-height:250px; max-width 100%;"></canvas>
                              </div>
                         </div>
                        <div class="col-md-12">
                            <hr class="solid">
                              <h2>Top 3 Compradores del Mes</h2>
                              <div class="chart-responsive">
                                   <canvas id='Grafico2' style="min-height:250px; height:250px; max-height:250px; max-width 100%;"></canvas>
                              </div>
                         </div>
                         
                         <div class="col-md-12">
                             <hr class="solid">
                              <h2>Compartiva Ventas | MES & AÑO</h2>
                              <div class="chart-responsive">
                                   <canvas id='Grafico3' style="min-height:250px; height:250px; max-height:250px; max-width 100%;"></canvas>
                              </div>
                         </div>
                         
                         <div class="col-md-12">
                             <hr class="solid">
                              <h2>Top 5 Productos mas Vendidos por Mes</h2>
                              <div class="chart-responsive">
                                   <canvas id='Grafico4' style="min-height:250px; height:250px; max-height:250px; max-width 100%;"></canvas>
                              </div>
                         </div>
                    </div>
                </div>
                <div class="card-footer">

                </div>
            </div>
        </div>
    </section>
</div>
<!-- /.content-wrapper -->
<?php
    include_once 'layouts/footer.php';
} else {
    header('Location: ../index.php');
}
?>
<script src="../js/chart.min.js"></script>
<script src="../js/mas_consultas.js"></script>

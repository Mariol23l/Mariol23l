<?php
session_start();
if ($_SESSION['us_tipo'] == 2 || $_SESSION['us_tipo']==3 || $_SESSION['us_tipo']==1) {
    include_once 'layouts/header.php';
?>
<title>Editar Datos</title>
<?php
    include_once 'layouts/nav.php';
    ?>
<!-- API GOOGLE MAPS -->

<div id="map" style="height:100vh ;width:100%"></div>

<?php
    include_once 'layouts/footer.php';
} else {
    header('Location: ../index.php');
}
?>
<script src="../js/google.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"></script>
$(document).ready(function () {
  let funcion;
  venta_mes();
  comprador_mes();
  ventas_anual();
  producto_masvendido();
  async function producto_masvendido() {
    funcion = "producto_masvendido";
    let listap = ["", "", "", "", ""];
    const response = await fetch("../controlador/VentaController.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "funcion=" + funcion,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (productos) {
        let i = 0;
        productos.forEach((producto) => {
          listap[i] = producto;
          i++;
        });
      });
    let CanvasG4 = $("#Grafico4").get(0).getContext("2d");
    let datos = {
      labels: ["Mes Actual"],
      datasets: [
        {
          label: listap[0].nombre + listap[0].concentracion,
          backgroundColor: "rgba(236, 97, 18 ,1)",
          borderColor: "rgba(236, 97, 18 ,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(236, 97, 18 ,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(236, 97, 18 ,1)",
          data: [listap[0].total],
        },
        {
          label: listap[1].nombre + listap[1].concentracion,
          backgroundColor: "rgba(124, 185, 16 ,1)",
          borderColor: "rgba(124, 185, 16 ,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(124, 185, 16 ,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(124, 185, 16 ,1)",
          data: [listap[1].total],
        },
        {
          label: listap[2].nombre + listap[2].concentracion,
          backgroundColor: "rgba(5, 0, 116,1)",
          borderColor: "rgba(5, 0, 116,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(5, 0, 116,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(5, 0, 116,1)",
          data: [listap[2].total],
        },
        {
          label: listap[3].nombre + listap[3].concentracion,
          backgroundColor: "rgba(255,255,0,1)",
          borderColor: "rgba(255,255,0,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(255,255,0,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(255,255,0,1)",

          data: [listap[3].total],
        },
        {
          label: listap[4].nombre + listap[4].concentracion,
          backgroundColor: "rgba(1, 59, 77,1)",
          borderColor: "rgba(1, 59, 77,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(1, 59, 77,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(1, 59, 77,1)",
          data: [listap[4].total],
        },
      ],
    };
    let opciones = {
      reponsive: true,
      maintainAspectRatio: false,
      datasetFill: false,
    };
    let G4 = new Chart(CanvasG4, {
      type: "bar",
      data: datos,
      options: opciones,
    });
  }
  async function ventas_anual() {
    funcion = "ventas_anual";
    let listav = ["", "", "", "", "", "", "", "", "", "", "", ""];
    const response = await fetch("../controlador/VentaController.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "funcion=" + funcion,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (meses) {
        meses.forEach((mes) => {
          if (mes.mes == 1) {
            listav[0] = mes;
          }
          if (mes.mes == 2) {
            listav[1] = mes;
          }
          if (mes.mes == 3) {
            listav[2] = mes;
          }
          if (mes.mes == 4) {
            listav[3] = mes;
          }
          if (mes.mes == 5) {
            listav[4] = mes;
          }
          if (mes.mes == 6) {
            listav[5] = mes;
          }
          if (mes.mes == 7) {
            listav[6] = mes;
          }
          if (mes.mes == 8) {
            listav[7] = mes;
          }
          if (mes.mes == 9) {
            listav[8] = mes;
          }
          if (mes.mes == 10) {
            listav[9] = mes;
          }
          if (mes.mes == 11) {
            listav[10] = mes;
          }
          if (mes.mes == 12) {
            listav[11] = mes;
          }
        });
      });
    funcion = "venta_mes";
    let listam = ["", "", "", "", "", "", "", "", "", "", "", ""];
    const responsem = await fetch("../controlador/VentaController.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "funcion=" + funcion,
    })
      .then(function (responsem) {
        return responsem.json();
      })
      .then(function (meses) {
        meses.forEach((mes) => {
          if (mes.mes == 1) {
            listam[0] = mes;
          }
          if (mes.mes == 2) {
            listam[1] = mes;
          }
          if (mes.mes == 3) {
            listam[2] = mes;
          }
          if (mes.mes == 4) {
            listam[3] = mes;
          }
          if (mes.mes == 5) {
            listam[4] = mes;
          }
          if (mes.mes == 6) {
            listam[5] = mes;
          }
          if (mes.mes == 7) {
            listam[6] = mes;
          }
          if (mes.mes == 8) {
            listam[7] = mes;
          }
          if (mes.mes == 9) {
            listam[8] = mes;
          }
          if (mes.mes == 10) {
            listam[9] = mes;
          }
          if (mes.mes == 11) {
            listam[10] = mes;
          }
          if (mes.mes == 12) {
            listam[11] = mes;
          }
        });
      });
    let CanvasG3 = $("#Grafico3").get(0).getContext("2d");
    let datos = {
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      datasets: [
        {
          label: "Año Anterior",
          backgroundColor: "rgba(210,214,222,1)",
          borderColor: "rgba(210,214,222,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(210,214,222,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(210,214,222,1)",
          data: [
            listav[0].cantidad,
            listav[1].cantidad,
            listav[2].cantidad,
            listav[3].cantidad,
            listav[4].cantidad,
            listav[5].cantidad,
            listav[6].cantidad,
            listav[7].cantidad,
            listav[8].cantidad,
            listav[9].cantidad,
            listav[10].cantidad,
            listav[11].cantidad,
          ],
        },
        {
          label: "Año Actual",
          backgroundColor: "rgba(106, 90, 205,0.9)",
          borderColor: "rgba(106, 90, 205,0.8)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(106, 90, 205,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(106, 90, 205,1)",
          data: [
            listam[0].cantidad,
            listam[1].cantidad,
            listam[2].cantidad,
            listam[3].cantidad,
            listam[4].cantidad,
            listam[5].cantidad,
            listam[6].cantidad,
            listam[7].cantidad,
            listam[8].cantidad,
            listam[9].cantidad,
            listam[10].cantidad,
            listam[11].cantidad,
          ],
        },
      ],
    };
    let opciones = {
      reponsive: true,
      maintainAspectRatio: false,
      datasetFill: false,
    };
    let G3 = new Chart(CanvasG3, {
      type: "bar",
      data: datos,
      options: opciones,
    });
  }

  async function comprador_mes() {
    funcion = "comprador_mes";
    let lista = ["", "", ""];
    const response = await fetch("../controlador/VentaController.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "funcion=" + funcion,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (compradores) {
        let i = 0;
        compradores.forEach((comprador) => {
          lista[i] = comprador;
          i++;
        });
      });
    let CanvasG2 = $("#Grafico2").get(0).getContext("2d");
    let datos = {
      labels: ["Mes Actual"],
      datasets: [
        {
          label: lista[0].razsocial,
          backgroundColor: "rgba(60,141,188,0.9)",
          borderColor: "rgba(60,141,188,0.8)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: [lista[0].cantidad],
        },
        {
          label: lista[1].razsocial,
          backgroundColor: "rgba(255,0,0,1)",
          borderColor: "rgba(255,0,0,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(255,0,0,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(255,0,0,1)",
          data: [lista[1].cantidad],
        },
        {
          label: lista[2].razsocial,
          backgroundColor: "rgba(0,255,0,1)",
          borderColor: "rgba(0,255,0,1)",
          pointRadius: "false",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(0,255,0,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(0,255,0,1)",
          data: [lista[2].cantidad],
        },
      ],
    };
    let opciones = {
      reponsive: true,
      maintainAspectRatio: false,
      datasetFill: false,
    };
    let G2 = new Chart(CanvasG2, {
      type: "bar",
      data: datos,
      options: opciones,
    });
  }

  async function venta_mes() {
    funcion = "venta_mes";
    let array = ["", "", "", "", "", "", "", "", "", "", "", ""];
    const response = await fetch("../controlador/VentaController.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "funcion=" + funcion,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (meses) {
        meses.forEach((mes) => {
          if (mes.mes == 1) {
            array[0] = mes;
          }
          if (mes.mes == 2) {
            array[1] = mes;
          }
          if (mes.mes == 3) {
            array[2] = mes;
          }
          if (mes.mes == 4) {
            array[3] = mes;
          }
          if (mes.mes == 5) {
            array[4] = mes;
          }
          if (mes.mes == 6) {
            array[5] = mes;
          }
          if (mes.mes == 7) {
            array[6] = mes;
          }
          if (mes.mes == 8) {
            array[7] = mes;
          }
          if (mes.mes == 9) {
            array[8] = mes;
          }
          if (mes.mes == 10) {
            array[9] = mes;
          }
          if (mes.mes == 11) {
            array[10] = mes;
          }
          if (mes.mes == 12) {
            array[11] = mes;
          }
        });
      });
    let CanvasG1 = $("#Grafico1").get(0).getContext("2d");
    let datos = {
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      datasets: [
        {
          data: [
            array[0].cantidad,
            array[1].cantidad,
            array[2].cantidad,
            array[3].cantidad,
            array[4].cantidad,
            array[5].cantidad,
            array[6].cantidad,
            array[7].cantidad,
            array[8].cantidad,
            array[9].cantidad,
            array[10].cantidad,
            array[11].cantidad,
          ],
          backgroundColor: [
            "#FF0000",
            "#0CFF00",
            "#001BFF",
            "#FF00F0",
            "#F7FF00",
            "#00FFE8",
            "#A200FF",
            "#FF8F00",
            "#9BFF00",
            "#000000",
            "#009EFF",
            "#108504",
          ],
        },
      ],
    };
    let opciones = {
      maintainAspectRatio: false,
      responsive: true,
    };
    let G1 = new Chart(CanvasG1, {
      type: "doughnut",
      data: datos,
      options: opciones,
    });
  }
});

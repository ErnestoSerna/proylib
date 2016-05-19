
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Trabajo', 'Porciento'],
          ['Fotos familiares',     60],
          ['Mis fotos',     30],
          ['Datos personales',  10]
        ]);
         var options = {
          title: 'Porcentaje de trabajo en cada area de la pagina',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }	
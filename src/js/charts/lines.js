var charts_lines = document.querySelectorAll('.chart-lines');

if(charts_lines.length > 0){
    charts_lines.forEach(chart => {
        
        new Chart(chart, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: '# Visitas 2019',
                    data: [100, 200, 100, 250, 120, 200],
                    borderWidth: 5,
                    pointRadius:2,
                    backgroundColor:'rgba(0,123,255,.7)'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    })
}
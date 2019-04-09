var charts_doughnut = document.querySelectorAll('.chart-doughnut');

if (charts_doughnut.length > 0) {
    charts_doughnut.forEach(chart => {

        var labels = JSON.parse(chart.getAttribute('data-labels'))
        var backgroundColor = JSON.parse(chart.getAttribute('data-background-color'))
        var borderColor = JSON.parse(chart.getAttribute('data-border-color'))
        var data = JSON.parse(chart.getAttribute('data-dataset'))

        var obj = new Chart(chart, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor
                }]
            },
            options: {
                cutoutPercentage: 85,
                legend: { display: false }
            }
        });
    })
}


try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    window.feather = require('feather-icons');
    window.Chart = require('chart.js');

    require('bootstrap');
} catch (e) { }

(function ($) {
    "use strict"; 

    // Activing feather icons
    feather.replace();

    var ctx_lines = document.getElementById('chart-lines');
    var ctx_doughnut = document.getElementById('chart-doughnut');

    if (ctx_lines && ctx_doughnut){
        var myChart = new Chart(ctx_lines, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: '# Visitas 2019',
                    data: [100, 200, 100, 250, 120, 200],
                    backgroundColor: [
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                    ],
                    borderColor: [
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                        'rgba(0, 123, 255, .8)',
                    ],
                    borderWidth: 5,
                    fill: false
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

        var myChart = new Chart(ctx_doughnut, {
            type: 'doughnut',
            data: {
                labels: ['Diseño', 'Programación'],
                datasets: [{
                    label: '# Visitas',
                    data: [100, 200],
                    backgroundColor: [
                        'rgba(227, 52, 47, 1)',
                        'rgba(0, 123, 255, 1)',
                    ],
                    borderColor: [
                        'rgba(227, 52, 47, 1)',
                        'rgba(0, 123, 255, 1)',
                    ],
                    weight: 1
                }]
            }
        });
    }
    

    // Toggle the side navigation
    $("#btn-toggle, #btn-toggle-top").on('click', function (e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };
    });
})(jQuery); 


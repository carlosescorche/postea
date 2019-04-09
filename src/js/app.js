try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    window.feather = require('feather-icons');
    window.Chart = require('chart.js');

    require('./charts/lines');
    require('./charts/doughnut');
    require('./charts/bar');

    require('bootstrap');
} catch (e) {
    throw e
}

(function ($) {
    "use strict";

    // Activing feather icons
    feather.replace();

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




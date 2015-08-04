Ext.define('KitchenSink.view.charts.column3d.StackedController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-stacked-3d',

    onThemeSwitch: function () {
        var chart = this.lookupReference('chart'),
            currentThemeClass = Ext.getClassName(chart.getTheme()),
            themes = Ext.chart.theme,
            themeNames = [],
            currentIndex = 0,
            name;

        for (name in themes) {
            if (Ext.getClassName(themes[name]) === currentThemeClass) {
                currentIndex = themeNames.length;
            }
            if (name !== 'Base' && name.indexOf('Gradients') < 0) {
                themeNames.push(name);
            }
        }
        chart.setTheme(themes[themeNames[++currentIndex % themeNames.length]]);
        chart.redraw();
    },

    onStackedToggle: function (segmentedButton, button, pressed) {
        var chart = this.lookupReference('chart'),
            series = chart.getSeries()[0],
            value = segmentedButton.getValue();
        series.setStacked(value === 0);
        chart.redraw();
    },

    onSaturationChange: function (slider, value) {
        this.setBarStyle({
            saturationFactor: value
        });
    },

    onBrightnessChange: function (slider, value) {
        this.setBarStyle({
            brightnessFactor: value
        });
    },

    onColorSpreadChange: function (slider, value) {
        this.setBarStyle({
            colorSpread: value
        });
    },

    setBarStyle: function (style) {
        var chart = this.lookupReference('chart'),
            series = chart.getSeries()[0];

        series.setStyle(style);
        chart.redraw();
    },

    onSliderDragStart: function () {
        var chart = this.lookupReference('chart');
        chart.suspendAnimation();
    },

    onSliderDragEnd: function () {
        var chart = this.lookupReference('chart');
        chart.resumeAnimation();
    }

});
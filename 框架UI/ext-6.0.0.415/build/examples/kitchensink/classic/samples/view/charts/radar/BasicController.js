Ext.define('KitchenSink.view.charts.radar.BasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.radar-basic',

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },

    onRefresh: function () {
        var chart = this.lookupReference('chart');
        chart.getStore().refreshData();
    },

    onDataRender: function (v) {
        return v + '%';
    }

});
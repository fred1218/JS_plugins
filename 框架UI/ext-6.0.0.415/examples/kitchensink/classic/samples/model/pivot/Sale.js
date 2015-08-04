Ext.define('KitchenSink.model.pivot.Sale',{
    extend: 'KitchenSink.model.Base',

    fields: [
        {name: 'id',        type: 'int'},
        {name: 'company',   type: 'string'},
        {name: 'country',   type: 'string'},
        {name: 'person',    type: 'string'},
        {name: 'date',      type: 'date'},
        {name: 'value',     type: 'float'},
        {name: 'quantity',  type: 'float'},
        {
            name: 'year',
            convert: function(v, record){
                return Ext.Date.format(record.get('date'), "Y");
            }
        },{
            name: 'month',
            convert: function(v, record){
                return parseInt(Ext.Date.format(record.get('date'), "m"), 10) - 1;
            }
        },{
            name: 'continent',
            convert: function(v, record){
                if(Ext.Array.indexOf(['Belgium', 'Netherlands', 'United Kingdom'], record.get('country')) >= 0) return 'Europe';
                if(Ext.Array.indexOf(['Canada', 'United States'], record.get('country')) >= 0 ) return 'North America';
                if(Ext.Array.indexOf(['Australia'], record.get('country')) >= 0 ) return 'Australia';
            }
        }
    ]
});

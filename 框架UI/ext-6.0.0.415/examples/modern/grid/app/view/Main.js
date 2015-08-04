Ext.define('Grid.view.Main', {
    extend: 'Ext.grid.Grid',
    xtype: 'main',

    requires: [
        'Ext.grid.HeaderGroup',
        'Ext.grid.plugin.Editable'
    ],

    store: 'Contacts',
    title: 'Sample Grid',
    grouped: true,
    plugins: [
        {type: 'grideditable'},
        {type: 'gridviewoptions'},
        {type: 'gridmultiselection'},
        {type: 'gridpagingtoolbar'},
        {type: 'gridcolumnresizing'},
        {type: 'gridsummaryrow'}
    ],
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 200,
        editable: true,
        groupable: false,
        summaryType: 'count',
        summaryRenderer: function(value) {
            return value + ' Users';
        }
    }, {
        text: 'Miscellaneous',
        xtype: 'gridheadergroup',
        items: [{
            text: 'Age',
            tpl: '{age} years',
            align: 'center',
            width: 110,
            xtype: 'templatecolumn',
            dataIndex: 'age',
            summaryType: 'average',
            summaryRenderer: function(value) {
                return value.toFixed(2) + ' years';
            }
        }, {
            text: 'Gender',
            dataIndex: 'gender',
            width: 120,
            align: 'center',
            editable: true,
            editor: {
                xtype: 'selectfield',
                options: [
                    {text: 'Male',  value: 'Male'},
                    {text: 'Female', value: 'Female'}
                ]
            },
            summaryType: function(records, field) {
                var ln = records.length,
                    femaleCount = 0,
                    i, record, value;

                for (i = 0; i < ln; i++) {
                    record = records[i];
                    value = record.get(field);
                    if (value.toLowerCase() === 'female') {
                        femaleCount++;
                    }
                }

                return (ln ? Math.round((femaleCount / ln) * 100) : 0) + '% female';
            }
        }]
    }, {
        text: 'Identifiers',
        xtype: 'gridheadergroup',
        items: [{
            text: 'Guid',
            dataIndex: 'guid',
            groupable: false,
            width: 300,
            editable: true
        }, {
            text: 'Email',
            dataIndex: 'email',
            groupable: false,
            width: 300
        }]
    }, {
        text: 'Address',
        dataIndex: 'address',
        groupable: false,
        width: 300
    }, {
        text: 'About',
        dataIndex: 'about',
        groupable: false,
        width: 200
    }, {
        text: 'Company',
        dataIndex: 'company',
        width: 200
    }, {
        text: 'Registered',
        dataIndex: 'registered',
        groupable: false,
        width: 120,
        xtype: 'datecolumn',
        format: 'd-m-Y'
    }]
});

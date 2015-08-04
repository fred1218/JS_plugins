/**
 * Serbian Cyrillic Translation
 * by Čolovic Vladan (cyrillic, utf8 encoding)
 * sr_RS (ex: sr_CS, sr_YU)
 * 12 May 2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Јануар", "Фебруар", "Март", "�?прил", "Мај", "Јун", "Јул", "�?вгу�?т", "Септембар", "Октобар", "�?овембар", "Децембар"];

        Ext.Date.dayNames = ["�?едеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0414\u0438\u043d\u002e',
            // Serbian Dinar
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.sr_RS.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.sr_RS.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} изабраних редова"
});

Ext.define("Ext.locale.sr_RS.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Затвори ову »картицу«"
});

Ext.define("Ext.locale.sr_RS.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Унешена вредно�?т није правилна"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.sr_RS.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Учитавам..."
});

Ext.define("Ext.locale.sr_RS.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Дана�?",
    minText: "Датум је и�?пред најмањег дозвољеног датума",
    maxText: "Датум је након највећег дозвољеног датума",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Следећи ме�?ец (Control+Де�?но)',
    prevText: 'Претходни ме�?ец (Control+Лево)',
    monthYearText: 'Изаберите ме�?ец (Control+Горе/Доле за избор године)',
    todayTip: "{0} (Размакница)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.sr_RS.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Страна",
    afterPageText: "од {0}",
    firstText: "Прва �?трана",
    prevText: "Претходна �?трана",
    nextText: "Следећа �?трана",
    lastText: "По�?ледња �?трана",
    refreshText: "О�?вежи",
    displayMsg: "Приказана {0} - {1} од {2}",
    emptyMsg: '�?емам шта приказати'
});

Ext.define("Ext.locale.sr_RS.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Минимална дужина овог поља је {0}",
    maxLengthText: "Мак�?имална дужина овог поља је {0}",
    blankText: "Поље је обавезно",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.sr_RS.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Минимална вредно�?т у пољу је {0}",
    maxText: "Мак�?имална вредно�?т у пољу је {0}",
    nanText: "{0} није правилан број"
});

Ext.define("Ext.locale.sr_RS.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Па�?ивно",
    disabledDatesText: "Па�?ивно",
    minText: "Датум у овом пољу мора бити након {0}",
    maxText: "Датум у овом пољу мора бити пре {0}",
    invalidText: "{0} није правилан датум - захтевани облик је {1}",
    format: "d.m.y"
});

Ext.define("Ext.locale.sr_RS.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Учитавам..."
    });
});

Ext.define("Ext.locale.sr_RS.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Ово поље прихвата e-mail адре�?у и�?кључиво у облику "korisnik@domen.com"',
    urlText: 'Ово поље прихвата URL адре�?у и�?кључиво у облику "http:/' + '/www.domen.com"',
    alphaText: 'Ово поље може �?адржати и�?кључиво �?лова и знак _',
    alphanumText: 'Ово поље може �?адржати �?амо �?лова, бројеве и знак _'
});

Ext.define("Ext.locale.sr_RS.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Ра�?тући редо�?лед",
    sortDescText: "Опадајући редо�?лед",
    lockText: "Закључај колону",
    unlockText: "Откључај колону",
    columnsText: "Колоне"
});

Ext.define("Ext.locale.sr_RS.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "�?азив",
    valueText: "Вредно�?т",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.sr_RS.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "У реду",
        cancel: "Оду�?тани",
        yes: "Да",
        no: "�?е"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.sr_RS.Component", {	
    override: "Ext.Component"
});

/**
 * Macedonia translation
 * By PetarD petar.dimitrijevic@vorteksed.com.mk (utf8 encoding)
 * 23 April 2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Јануари", "Февруари", "Март", "�?прил", "Мај", "Јуни", "Јули", "�?вгу�?т", "Септември", "Октомври", "�?оември", "Декември"];

        Ext.Date.dayNames = ["�?едела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0434\u0435\u043d',
            // Macedonian Denar
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.mk.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.mk.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} избрани редици"
});

Ext.define("Ext.locale.mk.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Затвори tab"
});

Ext.define("Ext.locale.mk.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Вредно�?та во ова поле е невалидна"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.mk.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Вчитувам..."
});

Ext.define("Ext.locale.mk.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Дене�?ка",
    minText: "Овој датум е пред најмалиот датум",
    maxText: "Овој датум е пред најголемиот датум",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Следен ме�?ец (Control+Стрелка де�?но)',
    prevText: 'Претходен ме�?ец (Control+Стрелка лево)',
    monthYearText: 'Изберете ме�?ец (Control+Стрелка горе/Стрелка де�?но за менување година)',
    todayTip: "{0} (Spacebar)",
    format: "d.m.y"
});

Ext.define("Ext.locale.mk.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Страница",
    afterPageText: "од {0}",
    firstText: "Прва Страница",
    prevText: "Претходна Страница",
    nextText: "Следна Страница",
    lastText: "По�?ледна Страница",
    refreshText: "О�?вежи",
    displayMsg: "Прикажувам {0} - {1} од {2}",
    emptyMsg: '�?ема податоци за приказ'
});

Ext.define("Ext.locale.mk.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Минималната должина за ова поле е {0}",
    maxLengthText: "Мак�?ималната должина за ова поле е {0}",
    blankText: "Податоците во ова поле �?е потребни",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.mk.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Минималната вредно�?т за ова поле е {0}",
    maxText: "Мак�?ималната вредно�?т за ова поле е {0}",
    nanText: "{0} не е валиден број"
});

Ext.define("Ext.locale.mk.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?еактивно",
    disabledDatesText: "�?еактивно",
    minText: "Датумот во ова поле мора да биде пред {0}",
    maxText: "Датумот во ова поле мора да биде по {0}",
    invalidText: "{0} не е валиден датум - мора да биде во формат {1}",
    format: "d.m.y"
});

Ext.define("Ext.locale.mk.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Вчитувам..."
    });
});

Ext.define("Ext.locale.mk.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Ова поле треба да биде e-mail адре�?а во формат "user@example.com"',
    urlText: 'Ова поле треба да биде URL во формат "http:/' + '/www.example.com"',
    alphaText: 'Ова поле треба да �?одржи �?амо букви и _',
    alphanumText: 'Ова поле треба да �?одржи �?амо букви, бројки и _'
});

Ext.define("Ext.locale.mk.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Сортирај Ра�?течки",
    sortDescText: "Сортирај Опаѓачки",
    lockText: "Заклучи Колона",
    unlockText: "Отклучи колона",
    columnsText: "Колони"
});

Ext.define("Ext.locale.mk.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Име",
    valueText: "Вредно�?т",
    dateFormat: "m.d.Y"
});

Ext.define("Ext.locale.mk.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "Потврди",
        cancel: "Поништи",
        yes: "Да",
        no: "�?е"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.mk.Component", {	
    override: "Ext.Component"
});

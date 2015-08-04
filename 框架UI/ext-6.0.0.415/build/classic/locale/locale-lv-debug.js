/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 *
 * Latvian Translations
 * initial translation by salix 17 April 2007
 * updated and modified from en by Juris Vecvanags (2014)
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.defaultDateFormat = "d.m.Y";
        Ext.Date.monthNames = ["JanvÄ?ris", "FebruÄ?ris", "Marts", "AprÄ«lis", "Maijs", "JÅ«nijs", "JÅ«lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["SvÄ“tdiena", "Pirmdiena", "Otrdiena", "TreÅ¡diena", "Ceturtdiena", "Piektdiena", "Sestdiena"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };

        Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ac',     // Euro
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.lv.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.lv.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} iezÄ«mÄ“tu rindu"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.lv.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "IelÄ?dÄ“..."
});

Ext.define("Ext.locale.lv.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Å odiena",
    minText: "'Å is datums ir mazÄ?ks par minimÄ?lo datumu",
    maxText: "Å is datums ir lielÄ?ks par maksimÄ?lo datumu",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'NÄ?kamais mÄ“nesis (Control+pa labi)',
    prevText: 'IepriekÅ¡Ä“jais mÄ“nesis (Control+pa kreisi)',
    monthYearText: 'MÄ“neÅ¡a izvÄ“le (Control+uz augÅ¡u/uz leju lai pÄ?rslÄ“gtu gadus)',
    todayTip: "{0} (Atstarpe)",
    format: "d.m.Y",
    startDay: 1
});

Ext.define("Ext.locale.lv.picker.Month", {
    override: "Ext.picker.Month",
    okText: "Labi",
    cancelText: "Atcelt"
});

Ext.define("Ext.locale.lv.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Lapa",
    afterPageText: "no {0}",
    firstText: "PirmÄ? lapa",
    prevText: "iepriekÅ¡Ä“jÄ? lapa",
    nextText: "NÄ?kamÄ? lapa",
    lastText: "PÄ“dÄ“jÄ? lapa",
    refreshText: "Atjaunot",
    displayMsg: "KopÄ? {2} ieraksti. RÄ?du ierakstus no {0} lÄ«dz {1}",
    emptyMsg: 'Nav datu'
});

Ext.define("Ext.locale.lv.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "LÅ«dzu gaidiet..."
});

Ext.define("Ext.locale.lv.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Aizvert Å¡o cilni"
});

Ext.define("Ext.locale.lv.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "VÄ“rtÄ«ba Å¡ajÄ? laukÄ? nav pareiza"
});

Ext.define("Ext.locale.lv.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Lauka minimÄ?lais garums ir {0}",
    maxLengthText: "Lauka maksimÄ?lais garums ir {0}",
    blankText: "Å is lauks ir obligÄ?ts",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.lv.form.field.Number", {
    override: "Ext.form.field.Number",
    decimalPrecision: 2,
    minText: "Lauka minimÄ?lÄ? vÄ“rtÄ«ba ir {0}",
    maxText: "Lauka maksimÄ?lÄ? vÄ“rtÄ«ba ir{0}",
    nanText: "{0} nav skaitlis"
});

Ext.define("Ext.locale.lv.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "AtspÄ“jots",
    disabledDatesText: "AtspÄ“jots",
    minText: "Datumam Å¡ajÄ? laukÄ? jÄ?bÅ«t lielÄ?kam kÄ? {0}",
    maxText: "Datumam Å¡ajÄ? laukÄ? jÄ?bÅ«t mazÄ?kam kÄ? {0}",
    invalidText: "{0} ir nepareizi noformÄ“ts datums. Datuma formÄ?ts: {1}",
    format: "d.m.Y",
    altFormats: "d/m/Y|d/m/y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.lv.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "IelÄ?dÄ“..."
    });
});

Ext.define("Ext.locale.lv.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Å is lauks paredzÄ“ts e-pasta adresei formÄ?tÄ? "lietotÄ?js@domÄ“ns.lv"',
    urlText: ' Å is lauks paredÅ¾ets URL formÄ?tÄ? "http:/' + '/www.paraugs.lv"',
    alphaText: 'Å is lauks drÄ«kst saturÄ“t tikai burtus un _ zÄ«mi',
    alphanumText: 'Å is lauks drÄ«kst saturÄ“t tikai burtus, ciparus un _ zÄ«mi'
});

Ext.define("Ext.locale.lv.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Please enter the URL for the link:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Trekns (Ctrl+B)',
                text: 'PÄ?rveidot iezÄ«mÄ“to tekstu treknrakstÄ?.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'KursÄ«vs (Ctrl+I)',
                text: 'PÄ?rveidot iezÄ«mÄ“to tekstu slÄ«prakstÄ?.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'PasvÄ«trot (Ctrl+U)',
                text: 'PasvÄ«trot iezÄ«mÄ“to tekstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'PalielinÄ?t tekstu',
                text: 'PalielinÄ?t rakstzÄ«mju izmÄ“ru.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'SamazinÄ?t tekstu',
                text: 'SamazinÄ?t rakstzÄ«mju izmÄ“ru.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Fona krÄ?sa',
                text: 'MainÄ«t iezÄ«mÄ“tÄ? teskta fona krÄ?su.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'RakstzÄ«mju krÄ?sa',
                text: 'MainÄ«t iezÄ«mÄ“tÄ? teskta krÄ?su.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'CentrÄ“t pa kreisi',
                text: 'CentrÄ“t tekstu pa kreisi.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'CentrÄ“t pa vidu',
                text: 'CentrÄ“t pa vidu',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'CentrÄ“t pa labi',
                text: 'CentrÄ“t tekstu pa labi.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Saraksts',
                text: 'SÄ?kt sarakstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'NumurÄ“ts saraksts',
                text: 'SÄ?kt numurÄ“tu sarakstu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Hipersaite',
                text: 'PÄ?rveidot iezÄ«mÄ“to tekstu par hipersaiti',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'RediÄ£Ä“t pirmkodu',
                text: 'PÄ?rslÄ“gt uz pirmkoda rediÄ£Ä“Å¡anas reÅ¾Ä«mu.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.lv.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "KÄ?rtot pieaugoÅ¡Ä? secÄ«bÄ?",
    sortDescText: "KÄ?rtot dilstoÅ¡Ä? secÄ«bÄ?",
    lockText: "NoslÄ“gt kolonnu",
    unlockText: "AtslÄ“gt kolonnu",
    columnsText: "Kolonnas"
});

Ext.define("Ext.locale.lv.grid.DateColumn", {
    override: "Ext.grid.DateColumn",
    format: 'd.m.Y'
});

Ext.define("Ext.locale.lv.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(TukÅ¡s)',
    groupByText: 'GrupÄ“t izmantojot Å¡o lauku',
    showGroupsText: 'RÄ?dÄ«t grupÄ?s'
});

Ext.define("Ext.locale.lv.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Nosaukums",
    valueText: "VÄ“rtÄ«ba",
    dateFormat: "j.m.Y",
    trueText: "true",
    falseText: "false"
});

Ext.define("Ext.locale.lv.form.field.Time", {
    override: "Ext.form.field.Time",
    minText: "VÄ“rtÄ«bai Å¡ajÄ? laukÄ? jabÅ«t pÄ“c pl. {0}",
    maxText: "VÄ“rtÄ«bai Å¡ajÄ? laukÄ? jabÅ«t vienÄ?dai vai mazÄ?kai par pl. {0}",
    invalidText: "{0} ir nekorekts laiks",
    format: "H:i",
    altFormats: "g:ia|g:iA|g:i a|g:i A|h:i|g:i|H:i|ga|ha|gA|h a|g a|g A|gi|hi|gia|hia|g|H"
});

Ext.define("Ext.locale.lv.form.CheckboxGroup", {
    override: "Ext.form.CheckboxGroup",
    blankText: "IezvÄ“laties vismaz vienu variantu no Å¡is grupas"
});

Ext.define("Ext.locale.lv.form.RadioGroup", {
    override: "Ext.form.RadioGroup",
    blankText: "IezvÄ“laties vienu variantu no Å¡is grupas"
});

Ext.define("Ext.locale.lv.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "Labi",
        cancel: "Atcelt",
        yes: "JÄ?",
        no: "NÄ“"
    }
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.lv.Component", {
    override: "Ext.Component"
});
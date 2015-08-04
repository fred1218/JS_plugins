/**
 * Bulgarian Translation
 *
 * By Георги Ко�?тадинов, Калгари, Канада
 * 10 October 2007
 * By Nedko Penev
 * 26 October 2007
 *
 * (utf-8 encoding)
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Януари", "Февруари", "Март", "�?прил", "Май", "Юни", "Юли", "�?вгу�?т", "Септември", "Октомври", "�?оември", "Декември"];

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

        Ext.Date.dayNames = ["�?едел�?", "Понеделник", "Вторник", "Ср�?да", "Четвъртък", "Петък", "Събота"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u043b\u0432',
            // Bulgarian Leva
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.bg.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.bg.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} избрани колони"
});

Ext.define("Ext.locale.bg.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Затвори таб"
});

Ext.define("Ext.locale.bg.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "�?евалидна �?тойно�?т на полето"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.bg.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Зареждане..."
});

Ext.define("Ext.locale.bg.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Дне�?",
    minText: "Тази дата е преди минималната",
    maxText: "Тази дата е �?лед мак�?ималната",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Следващ ме�?ец (Control+Right)',
    prevText: 'Предишен ме�?ец (Control+Left)',
    monthYearText: 'Избери ме�?ец (Control+Up/Down за преме�?тване по години)',
    todayTip: "{0} (Spacebar)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.bg.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Отмени"
});

Ext.define("Ext.locale.bg.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Страница",
    afterPageText: "от {0}",
    firstText: "Първа �?траница",
    prevText: "Предишна �?траница",
    nextText: "Следваща �?траница",
    lastText: "По�?ледна �?траница",
    refreshText: "Презареди",
    displayMsg: "Показвайки {0} - {1} от {2}",
    emptyMsg: '�?�?ма данни за показване'
});

Ext.define("Ext.locale.bg.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Минималната дължина на това поле е {0}",
    maxLengthText: "Мак�?ималната дължина на това поле е {0}",
    blankText: "Това поле е задължително",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.bg.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Минималната �?тойно�?т за това поле е {0}",
    maxText: "Мак�?ималната �?тойно�?т за това поле е {0}",
    nanText: "{0} не е валидно чи�?ло"
});

Ext.define("Ext.locale.bg.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?едо�?тъпен",
    disabledDatesText: "�?едо�?тъпен",
    minText: "Датата в това поле тр�?бва да е �?лед {0}",
    maxText: "Датата в това поле тр�?бва да е преди {0}",
    invalidText: "{0} не е валидна дата - тр�?бва да бъде във формат {1}",
    format: "d.m.y",
    altFormats: "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.bg.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Зареждане..."
    });
});

Ext.define("Ext.locale.bg.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Това поле тр�?бва да бъде емейл във формат "user@example.com"',
    urlText: 'Това поле тр�?бва да бъде URL във формат "http:/' + '/www.example.com"',
    alphaText: 'Това поле тр�?бва да �?ъдържа �?амо букви и _',
    alphanumText: 'Това поле тр�?бва да �?ъдържа �?амо букви, цифри и _'
});

Ext.define("Ext.locale.bg.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Мол�?, въведете URL за връзката:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Bold (Ctrl+B)',
                text: 'Удебел�?ва избрани�? тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Italic (Ctrl+I)',
                text: 'Прави избрани�? тек�?т кур�?ив.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Underline (Ctrl+U)',
                text: 'Подчертава избрани�? тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Уголеми тек�?та',
                text: 'Уголем�?ва размера на шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: '�?амали тек�?та',
                text: '�?амал�?ва размера на шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Цв�?т на маркирани�? тек�?т',
                text: 'Промен�? фонови�? цв�?т на избрани�? тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Цв�?т на шрифта',
                text: 'Промен�? цвета на избрани�? тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Л�?во подравн�?ване',
                text: 'Подравн�?ва тек�?та на л�?во.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Центриране',
                text: 'Центрира тек�?та.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Д�?�?но подравн�?ване',
                text: 'Подравн�?ва тек�?та на д�?�?но.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: '�?еномериран �?пи�?ък',
                text: 'Започва неномериран �?пи�?ък.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: '�?омериран �?пи�?ък',
                text: 'Започва номериран �?пи�?ък.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Хипервръзка',
                text: 'Превръща избрани�? тек�?т в хипервръзка.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Редактиране на кода',
                text: 'Преминаване в режим на редактиране на кода.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.bg.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Подреди в нара�?тващ ред",
    sortDescText: "Подреди в намал�?ващ ред",
    lockText: "Заключи колона",
    unlockText: "Отключи колона",
    columnsText: "Колони"
});

Ext.define("Ext.locale.bg.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Име",
    valueText: "Стойно�?т",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.bg.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Отмени",
        yes: "Да",
        no: "�?е"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.bg.Component", {	
    override: "Ext.Component"
});

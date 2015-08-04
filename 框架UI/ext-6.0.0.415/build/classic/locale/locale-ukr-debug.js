/**
 * Ukrainian translations for ExtJS (UTF-8 encoding)
 *
 * Original translation by zlatko
 * 3 October 2007
 *
 * Updated by dev.ashevchuk@gmail.com
 * 01.09.2009
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вере�?ень", "Жовтень", "Ли�?топад", "Грудень"];

        Ext.Date.dayNames = ["�?еділ�?", "Понеділок", "Вівторок", "Середа", "Четвер", "П’�?тниц�?", "Субота"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20b4',
            // Ukranian Hryvnia
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.ukr.view.View", {
    override: "Ext.view.View",
    emptyText: "<Порожньо>"
});

Ext.define("Ext.locale.ukr.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} обраних р�?дків"
});

Ext.define("Ext.locale.ukr.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Закрити цю вкладку"
});

Ext.define("Ext.locale.ukr.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Хибне значенн�?"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.ukr.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Завантаженн�?..."
});

Ext.define("Ext.locale.ukr.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Сьогодні",
    minText: "Ц�? дата меньша за мінімальну допу�?тиму дату",
    maxText: "Ц�? дата більша за мак�?имальну допу�?тиму дату",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: '�?а�?тупний мі�?�?ць (Control+Вправо)',
    prevText: 'Попередній мі�?�?ць (Control+Вліво)',
    monthYearText: 'Вибір мі�?�?ц�? (Control+Вверх/Вниз дл�? вибору року)',
    todayTip: "{0} (Пробіл)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.ukr.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Відміна"
});

Ext.define("Ext.locale.ukr.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Сторінка",
    afterPageText: "з {0}",
    firstText: "Перша �?торінка",
    prevText: "Попередн�? �?торінка",
    nextText: "�?а�?тупна �?торінка",
    lastText: "О�?танн�? �?торінка",
    refreshText: "О�?віжити",
    displayMsg: "Відображенн�? запи�?ів з {0} по {1}, в�?ього {2}",
    emptyMsg: 'Дані дл�? відображенн�? від�?утні'
});

Ext.define("Ext.locale.ukr.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Мінімальна довжина цього пол�? {0}",
    maxLengthText: "Мак�?имальна довжина цього пол�? {0}",
    blankText: "Це поле є обов’�?зковим дл�? заповненн�?",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.ukr.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Значенн�? у цьому полі не може бути меньше {0}",
    maxText: "Значенн�? у цьому полі не може бути більше {0}",
    nanText: "{0} не є чи�?лом"
});

Ext.define("Ext.locale.ukr.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?е до�?тупно",
    disabledDatesText: "�?е до�?тупно",
    minText: "Дата у цьому полі повинна бути більша {0}",
    maxText: "Дата у цьому полі повинна бути меньша {0}",
    invalidText: "{0} хибна дата - дата повинна бути вказана у форматі {1}",
    format: "d.m.y"
});

Ext.define("Ext.locale.ukr.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Завантаженн�?..."
    });
});

Ext.define("Ext.locale.ukr.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Це поле повинно мі�?тити адре�?у електронної пошти у форматі "user@example.com"',
    urlText: 'Це поле повинно мі�?тити URL у форматі "http:/' + '/www.example.com"',
    alphaText: 'Це поле повинно мі�?тити виключно латин�?ькі літери та �?имвол підкре�?ленн�? "_"',
    alphanumText: 'Це поле повинно мі�?тити виключно латин�?ькі літери, цифри та �?имвол підкре�?ленн�? "_"'
});

Ext.define("Ext.locale.ukr.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Будь-ла�?ка введіть адре�?у:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: '�?апівжирний (Ctrl+B)',
                text: 'Зробити напівжирним виділений тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Кур�?ив (Ctrl+I)',
                text: 'Зробити кур�?ивом виділений тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Підкре�?лений (Ctrl+U)',
                text: 'Зробити підкре�?леним виділений тек�?т.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Збільшити розмір',
                text: 'Збільшити розмір шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Зменьшити розмір',
                text: 'Зменьшити розмір шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Заливка',
                text: 'Змінити колір фону дл�? виділеного тек�?ту або абзацу.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Колір тек�?ту',
                text: 'Змінити колір виділеного тек�?ту або абзацу.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Вирівн�?ти тек�?т по лівому полю',
                text: 'Вирівнюванн�? тек�?ту по лівому полю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'Вирівн�?ти тек�?т по центру',
                text: 'Вирівнюванн�? тек�?ту по центру.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Вирівн�?ти тек�?т по правому полю',
                text: 'Вирівнюванн�? тек�?ту по правому полю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Маркери',
                text: 'Почати маркований �?пи�?ок.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: '�?умераці�?',
                text: 'Почати нумернований �?пи�?ок.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'В�?тавити гіперпо�?иланн�?',
                text: 'Створенн�? по�?иланн�? із виділеного тек�?ту.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Джерельний код',
                text: 'Режим редагуванн�? джерельного коду.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.ukr.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Сортувати по зро�?танню",
    sortDescText: "Сортувати по �?паданню",
    lockText: "Закріпити �?товпець",
    unlockText: "Відкріпити �?товпець",
    columnsText: "Стовпці"
});

Ext.define("Ext.locale.ukr.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "�?азва",
    valueText: "Значенн�?",
    dateFormat: "j.m.Y"
});

Ext.define("Ext.locale.ukr.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Відміна",
        yes: "Так",
        no: "�?і"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.ukr.Component", {	
    override: "Ext.Component"
});

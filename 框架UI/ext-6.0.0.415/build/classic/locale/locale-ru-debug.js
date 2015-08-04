/**
 * Russian translation
 * By ZooKeeper (utf-8 encoding)
 * 6 November 2007
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Январь", "Февраль", "Март", "�?прель", "Май", "Июнь", "Июль", "�?вгу�?т", "Сент�?брь", "Окт�?брь", "�?о�?брь", "Декабрь"];

        Ext.Date.shortMonthNames = ["Янв", "Февр", "Март", "�?пр", "Май", "Июнь", "Июль", "�?вг", "Сент", "Окт", "�?о�?б", "Дек"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.shortMonthNames[month];
        };

        Ext.Date.monthNumbers = {
            'Янв': 0,
            'Фев': 1,
            'Мар': 2,
            '�?пр': 3,
            'Май': 4,
            'Июн': 5,
            'Июл': 6,
            '�?вг': 7,
            'Сен': 8,
            'Окт': 9,
            '�?о�?': 10,
            'Дек': 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Во�?кре�?енье", "Понедельник", "Вторник", "Среда", "Четверг", "П�?тница", "Суббота"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0440\u0443\u0431',
            // Russian Ruble
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.ru.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.ru.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} выбранных �?трок"
});

Ext.define("Ext.locale.ru.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Закрыть �?ту вкладку"
});

Ext.define("Ext.locale.ru.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Значение в �?том поле неверное"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.ru.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Загрузка..."
});

Ext.define("Ext.locale.ru.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Сегодн�?",
    minText: "Эта дата раньше минимальной даты",
    maxText: "Эта дата позже мак�?имальной даты",
    disabledDaysText: "�?едо�?тупно",
    disabledDatesText: "�?едо�?тупно",
    nextText: 'Следующий ме�?�?ц (Control+Вправо)',
    prevText: 'Предыдущий ме�?�?ц (Control+Влево)',
    monthYearText: 'Выбор ме�?�?ца (Control+Вверх/Вниз дл�? выбора года)',
    todayTip: "{0} (Пробел)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.ru.picker.Month", {
    override: "Ext.picker.Month",
    okText: "&#160;OK&#160;",
    cancelText: "Отмена"
});

Ext.define("Ext.locale.ru.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Страница",
    afterPageText: "из {0}",
    firstText: "Перва�? �?траница",
    prevText: "Предыдуща�? �?траница",
    nextText: "Следующа�? �?траница",
    lastText: "По�?ледн�?�? �?траница",
    refreshText: "Обновить",
    displayMsg: "Отображают�?�? запи�?и �? {0} по {1}, в�?его {2}",
    emptyMsg: '�?ет данных дл�? отображени�?'
});

Ext.define("Ext.locale.ru.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Минимальна�? длина �?того пол�? {0}",
    maxLengthText: "Мак�?имальна�? длина �?того пол�? {0}",
    blankText: "Это поле об�?зательно дл�? заполнени�?",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.ru.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Значение �?того пол�? не может быть меньше {0}",
    maxText: "Значение �?того пол�? не может быть больше {0}",
    nanText: "{0} не �?вл�?ет�?�? чи�?лом",
    negativeText: "Значение не может быть отрицательным"
});

Ext.define("Ext.locale.ru.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "�?едо�?тупно",
    disabledDatesText: "�?едо�?тупно",
    minText: "Дата в �?том поле должна быть позже {0}",
    maxText: "Дата в �?том поле должна быть раньше {0}",
    invalidText: "{0} не �?вл�?ет�?�? правильной датой - дата должна быть указана в формате {1}",
    format: "d.m.y",
    altFormats: "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.ru.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Загрузка..."
    });
});

Ext.define("Ext.locale.ru.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Это поле должно �?одержать адре�? �?лектронной почты в формате "user@example.com"',
    urlText: 'Это поле должно �?одержать URL в формате "http:/' + '/www.example.com"',
    alphaText: 'Это поле должно �?одержать только латин�?кие буквы и �?имвол подчеркивани�? "_"',
    alphanumText: 'Это поле должно �?одержать только латин�?кие буквы, цифры и �?имвол подчеркивани�? "_"'
});

Ext.define("Ext.locale.ru.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Пожалуй�?та, введите адре�?:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Полужирный (Ctrl+B)',
                text: 'Применение полужирного начертани�? к выделенному тек�?ту.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Кур�?ив (Ctrl+I)',
                text: 'Применение кур�?ивного начертани�? к выделенному тек�?ту.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Подчёркнутый (Ctrl+U)',
                text: 'Подчёркивание выделенного тек�?та.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Увеличить размер',
                text: 'Увеличение размера шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Уменьшить размер',
                text: 'Уменьшение размера шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Заливка',
                text: 'Изменение цвета фона дл�? выделенного тек�?та или абзаца.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Цвет тек�?та',
                text: 'Измение цвета тек�?та.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Выровн�?ть тек�?т по левому краю',
                text: 'Вырaвнивание тек�?та по левому краю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'По центру',
                text: 'Вырaвнивание тек�?та по центру.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Выровн�?ть тек�?т по правому краю',
                text: 'Вырaвнивание тек�?та по правому краю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Маркеры',
                text: '�?ачать маркированный �?пи�?ок.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: '�?умераци�?',
                text: '�?ачать нумернованный �?пи�?ок.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'В�?тавить гипер�?�?ылку',
                text: 'Создание �?�?ылки из выделенного тек�?та.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'И�?ходный код',
                text: 'Переключить�?�? на и�?ходный код.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.ru.form.Basic", {
    override: "Ext.form.Basic",
    waitTitle: "Пожалуй�?та, подождите..."
});

Ext.define("Ext.locale.ru.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Сортировать по возра�?танию",
    sortDescText: "Сортировать по убыванию",
    lockText: "Закрепить �?толбец",
    unlockText: "Сн�?ть закрепление �?толбца",
    columnsText: "Столбцы"
});

Ext.define("Ext.locale.ru.grid.GroupingFeature", {
    override: "Ext.grid.feature.Grouping",
    emptyGroupText: '(Пу�?то)',
    groupByText: 'Группировать по �?тому полю',
    showGroupsText: 'Отображать по группам'
});

Ext.define("Ext.locale.ru.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "�?азвание",
    valueText: "Значение",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.ru.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Отмена",
        yes: "Да",
        no: "�?ет"
    }    
});

Ext.define("Ext.locale.ru.form.field.File", {
    override: "Ext.form.field.File",
    buttonText: "Обзор..."
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.ru.Component", {	
    override: "Ext.Component"
});

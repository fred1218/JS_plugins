/**
 * Traditional Chinese translation
 * By hata1234
 * 09 April 2007
 */
Ext.onReady(function() {
    var parseCodes;

    if (Ext.Date) {
        Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "�?月", "�??月", "�??一月", "�??二月"];

        Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

        Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上�?�' : '下�?�')";
        Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上�?�' : '下�?�')";

        parseCodes = {
            g: 1,
            c: "if (/(上�?�)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
                + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(上�?�|下�?�)",
            calcAtEnd: true
        };

        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u00a5',
            // Chinese Yuan
            dateFormat: 'Y/m/d'
        });
    }
});

Ext.define("Ext.locale.zh_TW.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.zh_TW.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "�?�擇了 {0} 行"
});

Ext.define("Ext.locale.zh_TW.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "關閉此標籤"
});

Ext.define("Ext.locale.zh_TW.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "數值�?符�?�欄�?�?定"
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.zh_TW.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "讀�?�中..."
});

Ext.define("Ext.locale.zh_TW.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "今天",
    minText: "日期必須大於最�?容許日期",
    maxText: "日期必須�?於最大容許日期",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: "下個月 (Ctrl+�?�方�?��?�)",
    prevText: "上個月 (Ctrl+左方�?��?�)",
    monthYearText: "�?�擇月份 (Ctrl+上/下方�?��?��?�擇年份)",
    format: "y/m/d",
    ariaTitle: '{0}',
    ariaTitleDateFormat: 'Y\u5e74m\u6708d\u65e5',
    longDayFormat: 'Y\u5e74m\u6708d\u65e5',
    monthYearFormat: 'Y\u5e74m\u6708',
    getDayInitial: function (value) {
        // Grab the last character
        return value.substr(value.length - 1);
    }
});

Ext.define("Ext.locale.zh_TW.picker.Month", {
    override: "Ext.picker.Month",
    okText: "确定",
    cancelText: "�?�消"
});

Ext.define("Ext.locale.zh_TW.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "第",
    afterPageText: "�?，共{0}�?",
    firstText: "第一�?",
    prevText: "上一�?",
    nextText: "下一�?",
    lastText: "最後�?",
    refreshText: "�?新整�?�",
    displayMsg: "顯示{0} - {1}筆,共{2}筆",
    emptyMsg: '沒有任何資料'
});

Ext.define("Ext.locale.zh_TW.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "此欄�?最少�?輸入 {0} 個字",
    maxLengthText: "此欄�?最多輸入 {0} 個字",
    blankText: "此欄�?為必填",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.zh_TW.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "此欄�?之數值必須大於 {0}",
    maxText: "此欄�?之數值必須�?於 {0}",
    nanText: "{0} �?是�?�法的數字"
});

Ext.define("Ext.locale.zh_TW.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "無法使用",
    disabledDatesText: "無法使用",
    minText: "此欄�?之日期必須在 {0} 之後",
    maxText: "此欄�?之日期必須在 {0} 之�?",
    invalidText: "{0} �?是正確的日期格�? - 必須�?是 「 {1} �? 這樣的格�?",
    format: "Y/m/d"
});

Ext.define("Ext.locale.zh_TW.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "讀�?�中 ..."
    });
});

Ext.define("Ext.locale.zh_TW.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: '此欄�?必須輸入�? "user@example.com" 之E-Mail格�?',
    urlText: '此欄�?必須輸入�? "http:/' + '/www.example.com" 之網�?�格�?',
    alphaText: '此欄�?僅能輸入�?�形英文字�?�?�底線( _ )符號',
    alphanumText: '此欄�?僅能輸入�?�形英文字�?�?數字�?�底線( _ )符號'
});

Ext.define("Ext.locale.zh_TW.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "正�?�排�?",
    sortDescText: "�??�?�排�?",
    lockText: "鎖定欄�?",
    unlockText: "解開欄�?鎖定",
    columnsText: "欄�?"
});

Ext.define("Ext.locale.zh_TW.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "�??稱",
    valueText: "數值",
    dateFormat: "Y/m/d"
});

Ext.define("Ext.locale.zh_TW.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "確定",
        cancel: "�?�消",
        yes: "是",
        no: "�?�"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.zh_TW.Component", {	
    override: "Ext.Component"
});

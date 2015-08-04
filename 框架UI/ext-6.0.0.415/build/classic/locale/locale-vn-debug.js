/**
 * List compiled by mystix on the extjs.com forums.
 * Thank you Mystix!
 * Vietnamese translation
 * By bpmtri
 * 12-April-2007 04:06PM
 */
Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

        Ext.Date.dayNames = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
        
        Ext.Date.monthNumbers = {
            "Tháng 1": 0,
            "Tháng 2": 1,
            "Tháng 3": 2,
            "Tháng 4": 3,
            "Tháng 5": 4,
            "Tháng 6": 5,
            "Tháng 7": 6,
            "Tháng 8": 7,
            "Tháng 9": 8,
            "Tháng 10": 9,
            "Tháng 11": 10,
            "Tháng 12": 11
        };
        
        Ext.Date.getShortMonthName = function(month){
            return Ext.Date.monthNames[month];
        };
        
        Ext.Date.getMonthNumber = function(name){
            return Ext.Date.monthNumbers[name];    
        };
        
        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day];
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20ab',
            // Vietnamese Dong
            dateFormat: 'd/m/Y'
        });
    }
});

Ext.define("Ext.locale.vn.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.vn.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "{0} dòng được ch�?n"
});

Ext.define("Ext.locale.vn.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "�?óng thẻ này"
});

Ext.define("Ext.locale.vn.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Giá trị của ô này không hợp lệ."
});

// changing the msg text below will affect the LoadMask
Ext.define("Ext.locale.vn.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "�?ang tải..."
});

Ext.define("Ext.locale.vn.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Hôm nay",
    minText: "Ngày này nh�? hơn ngày nh�? nhất",
    maxText: "Ngày này lớn hơn ngày lớn nhất",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Tháng sau (Control+Right)',
    prevText: 'Tháng trước (Control+Left)',
    monthYearText: 'Ch�?n một tháng (Control+Up/Down để thay đổi năm)',
    todayTip: "{0} (Spacebar - Phím trắng)",
    format: "d/m/y"
});

Ext.define("Ext.locale.vn.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Trang",
    afterPageText: "of {0}",
    firstText: "Trang đầu",
    prevText: "Trang trước",
    nextText: "Trang sau",
    lastText: "Trang cuối",
    refreshText: "Tải lại",
    displayMsg: "Hiển thị {0} - {1} của {2}",
    emptyMsg: 'Không có dữ liệu để hiển thị'
});

Ext.define("Ext.locale.vn.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Chi�?u dài tối thiểu của ô này là {0}",
    maxLengthText: "Chi�?u dài tối đa của ô này là {0}",
    blankText: "Ô này cần phải nhập giá trị",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.vn.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Giá trị nh�? nhất của ô này là {0}",
    maxText: "Giá trị lớn nhất của ô này là  {0}",
    nanText: "{0} hông phải là một số hợp lệ"
});

Ext.define("Ext.locale.vn.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Vô hiệu",
    disabledDatesText: "Vô hiệu",
    minText: "Ngày nhập trong ô này phải sau ngày {0}",
    maxText: "Ngày nhập trong ô này phải trước ngày {0}",
    invalidText: "{0} không phải là một ngày hợp lệ - phải có dạng {1}",
    format: "d/m/y"
});

Ext.define("Ext.locale.vn.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "�?ang tải..."
    });
});

Ext.define("Ext.locale.vn.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Giá trị của ô này phải là một địa chỉ email có dạng như "ten@abc.com"',
    urlText: 'Giá trị của ô này phải là một địa chỉ web(URL) hợp lệ, có dạng như "http:/' + '/www.example.com"',
    alphaText: 'Ô này chỉ được nhập các kí tự và gạch dưới(_)',
    alphanumText: 'Ô này chỉ được nhập các kí tự, số và gạch dưới(_)'
});

Ext.define("Ext.locale.vn.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Tăng dần",
    sortDescText: "Giảm dần",
    lockText: "Khóa cột",
    unlockText: "B�? khóa cột",
    columnsText: "Các cột"
});

Ext.define("Ext.locale.vn.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Tên",
    valueText: "Giá trị",
    dateFormat: "j/m/Y"
});

Ext.define("Ext.locale.vn.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "�?ồng ý",
        cancel: "Hủy b�?",
        yes: "Có",
        no: "Không"
    }    
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.vn.Component", {	
    override: "Ext.Component"
});

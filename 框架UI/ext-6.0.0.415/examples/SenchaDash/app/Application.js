/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SenchaDash.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SenchaDash',

    requires: [
        'Ext.draw.Color',
        'Ext.chart.interactions.ItemHighlight'
    ],
    models: [
        'PersonalInfoModel',
        'RightPanelSettingModel',
        'YearwiseDataModel',
        'DataXYModel',
        'MultiDataXYModel',
        'MailFriendModel',
        'EmailInboxModel',
        'dashboard.SubscriptionModel',
        'rightNavigation.FreindsList',
        'rightNavigation.ChatMessages'
    ],
    stores: [
        'NavigationTreeStore'
    ],
    views: [
        'main.MainView',
        'main.RightNavigationPanel',
        'ui.ModalsContainer',
        'ui.PanelsContainer',
        'ui.GridsContainer',
        'ui.HelperContainer',
        'ui.AlertsContainer',
        'ui.TabsAndAccordianContainer',
        'email.MainContainer',
        'pages.ProfileContainer',
        'pages.SearchResultsContainer',
        'main.MessagesPopupWin',
        'main.NotificationsPopupWin',
        'main.TopBreadcrumb',
        'email.FriendsMenu',
        'email.MessagePanel',
        'email.ComposePanel',
        'dashboard.MainContainer',
        'dashboard.ResponsiveBlock',
        'dashboard.CustomTool',
        'util.ResponsivePageRow',
        'util.ResponsivePageContainer',
        'ui.ButtonsContainer',
        'misc.WidgetsContainer',
        'tables.TablesContainer',
        'ui.TabContainer',
        'ui.SignupWindow',
        'ui.LoginWindow',
        'ui.ForgotPasswordWindow',
        'forms.GeneralContainer',
        'forms.ComponentsContainer',
        'forms.ValidationContainer',
        'forms.WizardContianer',
        'ui.ProgressbarContainer',
        'email.SingleMailContainer',
        'email.InboxPanel',
        'ui.AlertsAndToolTipContainer',
        'ui.ComponentContainer',
        'ui.ListGroupContainer',
        'pages.Error500Window',
        'pages.Error404Window',
        'pages.BlankPageContainer',
        'pages.LockScreenWindow',
        'pages.FAQContainer',
        'pages.UserProfileContainer',
        'ui.MenusContainer',
        'ui.ToolbarsContainer',
        'pages.Login',
        'pages.Register',
        'pages.PasswordReminder',
        'layouts.LayoutsContainer',
        'widgets.WidgetsContainer',
        'widgets.GoogleMapsContainer',
        'charts.MainContainer',
        'ui.CheckBoxContainer',
        'util.OldPanelContainer'
    ],
    controllers: [
        'Navigation'
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

Ext.define('Ext.theme.blackberry.Component', {
    override: 'Ext.Component'
}, function() {
    Ext.namespace('Ext.theme.is').BlackBerry = true;
    Ext.theme.name = 'BlackBerry';
});

Ext.define('Ext.theme.blackberry.viewport.Default', {
    override: 'Ext.viewport.Default',
    attachSwipeListeners: function() {
        var me = this,
            toggleMenu;
        me.callParent();
        // Add BB10 webworks API for swipe down.
        if (window.blackberry) {
            toggleMenu = function() {
                var menus = me.getMenus(),
                    menu = menus['top'];
                if (!menu) {
                    return;
                }
                if (menu.isHidden()) {
                    me.showMenu('top');
                } else {
                    me.hideMenu('top');
                }
            };
            if (blackberry.app && blackberry.app.event && blackberry.app.event.onSwipeDown) {
                blackberry.app.event.onSwipeDown(toggleMenu);
            }
            // PlayBook
            else if (blackberry.event && blackberry.event.addEventListener) {
                blackberry.event.addEventListener("swipedown", toggleMenu);
            }
        }
    },
    // BB10
    getMenuCfg: function(menu, side) {
        var type;
        if (side === 'top' || side === 'bottom') {
            type = 'Ext.theme.blackberry.ApplicationMenu';
        } else {
            type = 'Ext.theme.blackberry.ContextMenu';
        }
        return Ext.apply({
            xclass: type
        }, menu);
    }
});

/**
 * User extension designed to be used on the BB10 platform.
 */
Ext.define('Ext.theme.blackberry.ApplicationMenu', {
    extend: 'Ext.Menu',
    config: {
        /**
         * @hide
         */
        ui: 'application',
        /**
         * @hide
         */
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        defaults: {
            flex: 0,
            iconAlign: 'top',
            ui: 'tab'
        }
    }
});

/**
 * User extension designed to be used on the BB10 platform.
 */
Ext.define('Ext.theme.blackberry.ContextMenu', {
    extend: 'Ext.Menu',
    config: {
        /**
         * @hide
         */
        ui: 'context',
        /**
         * @hide
         */
        layout: {
            type: 'vbox',
            pack: 'center'
        }
    }
});

Ext.define('Ext.theme.blackberry.Menu', {
    override: 'Ext.Menu',
    requires: [
        'Ext.theme.blackberry.ApplicationMenu',
        'Ext.theme.blackberry.ContextMenu'
    ],
    config: {
        ui: 'context',
        layout: {
            pack: 'center'
        }
    }
});

Ext.define('Ext.theme.blackberry.field.Field', {
    override: 'Ext.field.Field',
    config: {
        labelAlign: 'top'
    }
});

Ext.define('Ext.theme.blackberry.Messagebox', {
    override: 'Ext.MessageBox',
    config: {
        ui: 'plain'
    }
});

Ext.define('Ext.theme.blackberry.TitleBar', {
    override: 'Ext.TitleBar',
    config: {
        titleAlign: 'left'
    }
});

Ext.define('Ext.theme.blackberry.dataview.IndexBar', {
    override: 'Ext.dataview.IndexBar',
    config: {
        direction: 'vertical',
        letters: [
            '*',
            '#',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ]
    }
});

Ext.define('Ext.theme.blackberry.dataview.NestedList', {
    override: 'Ext.dataview.NestedList',
    config: {
        toolbar: {
            splitNavigation: true
        }
    }
});

Ext.define('Ext.theme.blackberry.field.Checkbox', {
    override: 'Ext.field.Checkbox',
    config: {
        labelAlign: 'left'
    }
});

Ext.define('Ext.theme.blackberry.field.Password', {
    override: 'Ext.field.Password',
    config: {
        revealable: true
    }
});

Ext.define('Ext.theme.blackberry.field.Search', {
    override: 'Ext.field.Search',
    config: {
        component: {
            type: 'text'
        }
    }
});

Ext.define('Ext.theme.blackberry.field.Toggle', {
    override: 'Ext.field.Toggle',
    config: {
        activeLabel: 'On',
        inactiveLabel: 'Off'
    }
});

Ext.define('Ext.theme.blackberry.navigation.Bar', {
    override: 'Ext.navigation.Bar',
    config: {
        animation: false
    }
});

Ext.define('Ext.theme.blackberry.navigation.View', {
    override: 'Ext.navigation.View',
    config: {
        navigationBar: {
            splitNavigation: true
        }
    }
});

Ext.define('Ext.theme.blackberry.tab.Bar', {
    override: 'Ext.tab.Bar',
    config: {
        defaults: {
            flex: 1
        }
    }
});

Ext.define('Ext.theme.blackberry.tab.Panel', {
    override: 'Ext.tab.Panel',
    config: {
        tabBarPosition: 'bottom'
    }
});

/**
 * User extension designed to be used on the BB10 platform.
 *
 * @private
 */
Ext.define('Ext.theme.blackberry.MenuButton', {
    extend: 'Ext.Button',
    requires: [
        'Ext.theme.blackberry.ContextMenu'
    ],
    config: {
        /**
         * @hide
         */
        ui: 'tab',
        /**
         * @hide
         */
        cls: 'menu',
        menuConfig: {},
        menuItems: [],
        /**
         * @hide
         */
        menuSide: 'right',
        /**
         * @hide
         */
        menuCover: false,
        /**
         * @hide
         */
        menuCls: null,
        /**
         * @hide
         */
        listeners: {
            tap: 'onTap'
        }
    },
    /**
     * @private
     * Used to show the menu associated with this button
     */
    onTap: function(e) {
        var me = this,
            cls = Ext.baseCSSPrefix + 'open',
            menu = this.$menu;
        if (menu) {
            menu.destroy();
        }
        me.element.addCls(cls);
        me.$menu = menu = new Ext.theme.blackberry.ContextMenu(Ext.apply({}, me.getMenuConfig(), {
            cls: me.getMenuCls(),
            items: me.getMenuItems(),
            listeners: {
                scope: me,
                hide: function() {
                    if (me.$menu) {
                        me.element.removeCls(cls);
                        Ext.Viewport.removeMenu(me.getMenuSide());
                        me.$menu.destroy();
                    }
                }
            }
        }));
        menu.on({
            scope: me,
            tap: me.onMenuButtonTap,
            delegate: 'button'
        });
        Ext.Viewport.setMenu(menu, {
            side: me.getMenuSide(),
            cover: me.getMenuCover()
        });
        Ext.Viewport.showMenu(me.getMenuSide());
    },
    onMenuButtonTap: Ext.emptyFn
});

/**
 * User extension designed to be used on the BB10 platform.
 *
 * This component is used to recreate the Action Over Flow Menu component of the BB10 SDK. To recreate a native BB10 experience, it is
 * advised to insert this component into a {@link Ext.Toolbar} and have it aligned to the right edge.
 *
 *     // Used within a toolbar
 *     {
 *         xtype: 'toolbar',
 *         items: [{
 *             xclass: 'Ext.theme.blackberry.ActionOverFlowMenuButton',
 *             menuItems: [{
 *                 text: 'Chats',
 *                 iconCls: 'chats',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 text: 'Contacts',
 *                 iconCls: 'contacts',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 docked: 'bottom',
 *                 text: 'Settings',
 *                 iconCls: 'settings',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }]
 *         }]
 *     }
 */
Ext.define('Ext.theme.blackberry.ActionOverFlowMenuButton', {
    extend: 'Ext.theme.blackberry.MenuButton',
    config: {
        /**
         * @hide
         */
        cls: 'overflow',
        /**
         * @hide
         */
        ui: 'normal',
        /**
         * The items to be used within the {@link Ext.Menu} which is shown when this button is tapped.
         *
         *     // Used within a toolbar
         *     {
         *         xtype: 'toolbar',
         *         items: [{
         *             xclass: 'Ext.ux.ActionMenuButton',
         *             text: 'Chats',
         *             iconCls: 'chats',
         *             menuItems: [{
         *                 text: 'Chats',
         *                 iconCls: 'chats',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 text: 'Contacts',
         *                 iconCls: 'contacts',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 docked: 'bottom',
         *                 text: 'Settings',
         *                 iconCls: 'settings',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }]
         *         }]
         *     }
         * 
         * @type {}
         */
        menuItems: [],
        /**
         * @hide
         */
        menuCover: true,
        /**
         * @hide
         */
        menuCls: 'action-over-flow'
    }
});

/**
 * User extension designed to be used on the BB10 platform.
 *
 * This component is used to recreate the Tab Menu component of the BB10 SDK. To recreate a native BB10 experience, it is
 * advised to insert this component into a {@link Ext.Toolbar} and have it aligned to the left edge.
 *
 *     // Used within a toolbar
 *     {
 *         xtype: 'toolbar',
 *         items: [{
 *             xclass: 'Ext.theme.blackberry.TabMenuButton',
 *             text: 'Chats',
 *             iconCls: 'chats',
 *             menuItems: [{
 *                 text: 'Chats',
 *                 iconCls: 'chats',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }, {
 *                 text: 'Contacts',
 *                 iconCls: 'contacts',
 *                 handler: function() {
 *                     // do something
 *                 }
 *             }]
 *         }]
 *     }
 */
Ext.define('Ext.theme.blackberry.TabMenuButton', {
    extend: 'Ext.theme.blackberry.MenuButton',
    config: {
        /**
         * @hide
         */
        ui: 'tab',
        /**
         * @hide
         */
        cls: 'tabmenu',
        /**
         * The items to be used within the {@link Ext.Menu} which is shown when this button is tapped.
         *
         *     // Used within a toolbar
         *     {
         *         xtype: 'toolbar',
         *         items: [{
         *             xclass: 'Ext.theme.blackberry.TabMenuButton',
         *             text: 'Chats',
         *             iconCls: 'chats',
         *             menuItems: [{
         *                 text: 'Chats',
         *                 iconCls: 'chats',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }, {
         *                 text: 'Contacts',
         *                 iconCls: 'contacts',
         *                 handler: function() {
         *                     // do something
         *                 }
         *             }]
         *         }]
         *     }
         * 
         * @type {}
         */
        menuItems: [],
        /**
         * @hide
         */
        menuSide: 'left'
    },
    onMenuButtonTap: function(button) {
        if (button) {
            this.setText(button.getText());
            this.setIconCls(button.getIconCls());
        }
        Ext.Viewport.hideMenu(this.getMenuSide());
    }
});


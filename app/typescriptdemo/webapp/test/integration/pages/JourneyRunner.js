sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sub/typescriptdemo/test/integration/pages/OrdersList",
	"com/sub/typescriptdemo/test/integration/pages/OrdersObjectPage"
], function (JourneyRunner, OrdersList, OrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sub/typescriptdemo') + '/test/flp.html#app-preview',
        pages: {
			onTheOrdersList: OrdersList,
			onTheOrdersObjectPage: OrdersObjectPage
        },
        async: true
    });

    return runner;
});


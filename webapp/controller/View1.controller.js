sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("ui5Map01.controller.View1", {
		onShowHello: function() {
			var a = {
				a: 1,
				b: 2,
			    c: function(d){
			    	
			    	return a.a + a.b + d;
			    }
			};
			MessageToast.show(a.c(1));
		}
		

	});
});

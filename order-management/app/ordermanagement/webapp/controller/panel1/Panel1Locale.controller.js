sap.ui.define([
    'sap/base/util/deepExtend',
    "sap/ui/core/mvc/Controller",
    'sap/m/ColumnListItem',
    'sap/m/Input',
    'sap/m/MessageToast'
], function (deepExtend, Controller, ColumnListItem, Input, MessageToast) {
    "use strict";

    return Controller.extend("test.ordermanagement.ordermanagement.controller.panel1.Panel1Locale", {
        onInit: function () {
            this.oTable = this.byId("idPoliciesTable");
            this.oReadOnlyTemplate = this.byId("idPoliciesTable").removeItem(0);
            this.rebindTable(this.oReadOnlyTemplate, "Navigation");
            this.oEditableTemplate = new ColumnListItem({
				cells: [
					new Input({
						value: "{title}"
					}), new Input({
						value: "{texts/0/title}"
					}), new Input({
						value: "{texts/1/title}"
					}), new Input({
						value: "{texts/2/title}"
					})
				]
			});
        },
        rebindTable: function(oTemplate, sKeyboardMode) {
            this.oTable.bindItems({
                path: "/PaymentPolicies",
                parameters: {$expand:'texts'},
                template: oTemplate,
                templateShareable: true,
                key: "code"
            }).setKeyboardMode(sKeyboardMode);
        },
        onEdit: function() {
            const oModel = this.getView().getModel();
			// this.aPaymentPolicies = deepExtend([], oModel.getProperty("/PaymentPolicies"));
			this.byId("editButton").setVisible(false);
			this.byId("saveButton").setVisible(true);
			this.byId("cancelButton").setVisible(true);
			this.rebindTable(this.oEditableTemplate, "Edit");
		},

        onSave: function() {
            this.getView().getModel().submitBatch("PaymentPolicies").then(() => {
                this.byId("saveButton").setVisible(false);
                this.byId("cancelButton").setVisible(false);
                this.byId("editButton").setVisible(true);
                this.rebindTable(this.oReadOnlyTemplate, "Navigation");
            }, (oError) => {
                console.log(oError);
            });
        },

        onCancel: function() {
			this.byId("cancelButton").setVisible(false);
			this.byId("saveButton").setVisible(false);
			this.byId("editButton").setVisible(true);
			// this.oModel.setProperty("/PaymentPolicies", this.aPaymentPolicies);
			this.rebindTable(this.oReadOnlyTemplate, "Navigation");
		},

        onExit: function() {
			// this.aPaymentPolicies = [];
			this.oEditableTemplate.destroy();
			// this.oModel.destroy();
		},
    });
});
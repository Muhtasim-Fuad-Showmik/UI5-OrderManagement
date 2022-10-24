sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";
    let fragmentName, modelName, modelPropertyName, inputId, helpDialog;

    return Controller.extend("ordermanagement.controller.panel1.Panel1Right", {
        onInit: function () {
            let oModel = this.getView().getModel("consignment");
            this.getView().setModel(oModel);

            let oJSONModel = new JSONModel({
                modelDataName: "consignment>/ConsigneesOfGoods"
            });
            this.getView().setModel(oJSONModel, "configProperties");
        },

        handleSearch: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oFilter = new Filter("name", FilterOperator.Contains, sValue);
            var oBinding = oEvent.getSource().getBinding("items");
            oBinding.filter([oFilter]);
        },

        handleValueHelpPress: function () {
            console.log("Pressed!");
        },

        handleValueHelp: function () {
            let fragmentPath = "test.ordermanagement.ordermanagement.view.panel1." + this.fragmentName;

            var oView = this.getView();

            this._pValueHelpDialog = Fragment.load({
                id: oView.getId(),
                name: fragmentPath,
                controller: this
            }).then(function(oValueHelpDialog) {
                oView.addDependent(oValueHelpDialog);
                return oValueHelpDialog;
            });
            
            this._pValueHelpDialog.then(function(oValueHelpDialog) {
                this._configValueHelpDialog();
                this.helpDialog = oValueHelpDialog;
                oValueHelpDialog.open();
            }.bind(this));
        },

        handleValueHelpClose: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem"),
            oInput = this.byId(this.inputId);

            if(!oSelectedItem) {
                oInput.resetProperty("value");
                return;
            }
            oInput.setValue(oSelectedItem.getCells()[1].getText());
        },

        handleValueHelpForForwarder: function () {
            this.fragmentChanged = "Forwarder" === this.fragmentName;
            this.fragmentName = "Forwarder";
            this.modelName = "consignment";
            this.modelPropertyName = "Forwarder";
            this.inputId = "forwarderSelection";
            this.handleValueHelp();
        },

        handleValueHelpForRecipientOfGoods: function () {
            this.fragmentChanged = "RecipientOfGoods" === this.fragmentName;
            this.fragmentName = "RecipientOfGoods";
            this.modelName = "consignment";
            this.modelPropertyName = "ConsigneesOfGoods";
            this.inputId = "recipientOfGoodsSelection";
            this.handleValueHelp();
        },

        _configValueHelpDialog: function () {
            // let sInputValue = this.byId(this.inputId).getValue(),
            // oModel = this.getView().getModel(),
            // modelPropertyPath = "/" + this.modelPropertyName,
            // aProducts = oModel.getAllBindings.toString();
            // console.log("Input Value", sInputValue);
            // console.log("oModel", oModel);
            // console.log("aProducts", aProducts);
        }
    });
});
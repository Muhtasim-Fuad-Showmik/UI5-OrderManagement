sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("ordermanagement.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // Calling the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // Setting up the i18n resource files to be used within the view
            var i18nModel = new ResourceModel({
                bundleName: "ordermanagement.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            this.getRouter().initialize();
        }
    })
})
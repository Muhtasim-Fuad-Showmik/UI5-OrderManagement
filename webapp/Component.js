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

            // Setting up the JSON data to be used within the view
            var oData = {
                Consignment: {
                    PersonTypes: [
                        {
                            key: "Ce",
                            text: "Consignee of Goods"
                        },
                        {
                            key: "Cr",
                            text: "Consignor of Goods"
                        }
                    ],
                    Cities: [
                        {
                            key: "-",
                            text: "City",
                            country: "None"
                        },
                        {
                            key: "ItRo",
                            text: "Rome",
                            country: "Italy"
                        },
                        {
                            key: "ItVn",
                            text: "Venice",
                            country: "Italy"
                        },
                        {
                            key: "ItNp",
                            text: "Naples",
                            country: "Italy"
                        },
                        {
                            key: "DeBn",
                            text: "Berlin",
                            country: "Germany"
                        },
                        {
                            key: "DeHg",
                            text: "Hamburg",
                            country: "Germany"
                        },
                        {
                            key: "DeMc",
                            text: "Munich",
                            country: "Germany"
                        }
                    ],
                    Countries: [
                        {
                            key: "-",
                            text: "Country"
                        },
                        {
                            key: "It",
                            text: "Italy"
                        },
                        {
                            key: "De",
                            text: "Germany"
                        }
                    ]
                },
                Forwarding: {
                    PersonTypes: [
                        {
                            key: "Fr",
                            text: "Forwarder"
                        },
                        {
                            key: "Fa",
                            text: "Forwarding Agent"
                        }
                    ]
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Setting up the i18n resource files to be used within the view
            var i18nModel = new ResourceModel({
                bundleName: "ordermanagement.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            this.getRouter().initialize();
        }
    })
})
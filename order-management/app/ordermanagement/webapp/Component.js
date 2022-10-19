sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "test/ordermanagement/ordermanagement/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("test.ordermanagement.ordermanagement.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // Setting up the i18n resource files to be used within the view
                var i18nModel = new ResourceModel({
                    bundleName: "test.ordermanagement.ordermanagement.i18n.i18n",
                    supportedLocales: ["", "de", "it"],
			        fallbackLocale: ""
                });
                this.setModel(i18nModel, "i18n");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);
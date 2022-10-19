sap.ui.require([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "ordermanagement",
        settings: {
            id: "ordermanagement"
        },
        async: true
    }).placeAt("content");
});
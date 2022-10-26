sap.ui.define([
    'sap/ui/comp/library',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/type/String',
	'sap/m/ColumnListItem',
	'sap/m/Label',
	'sap/m/SearchField',
	'sap/m/Token',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/table/Column',
	'sap/m/Column',
	'sap/m/Text'
], function (compLibrary, Controller, TypeString, ColumnListItem, Label, SearchField, Token, Filter, FilterOperator, ODataModel, UIColumn, MColumn, Text) {
    "use strict";

    return Controller.extend("test.ordermanagement.ordermanagement.controller.panel1.Panel1Left", {
        onInit: function () {
            var oMultiInput;
            oMultiInput = this.byId("panel1customerVHD");
            // oMultiInput.addValidator(this._onMultiInputValidate);
            // oMultiInput.setTokens(this._getDefaultTokens());
            this._oMultiInput = oMultiInput;
        },

        onValueHelpRequested: function() {
            this._oBasicSearchField = new SearchField();

            // Loading the filter bar fragment onto the dialog
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "test.ordermanagement.ordermanagement.view.panel1.panel1customerVHDFilterbar"
                });
            }


            this.pDialog.then(function(oDialog) {
                var oFilterBar = oDialog.getFilterBar();
                this._oVHD = oDialog;
                // Initialize the dialog with model only the first time. Then only open it.
                if(this._bDialogInitialized) {
                    // Reset the tokens from the input and update the table
                    // oDialog.setTokens([]);
                    // oDialog.setTokens(this._oMultiInput.getTokens());
                    // oDialog.update();

                    oDialog.open();
                    return;
                }
                this.getView().addDependent(oDialog);

                // Set Basic Search for FilterBar
                oFilterBar.setFilterBarExpanded(false);
				oFilterBar.setBasicSearch(this._oBasicSearchField);

                // Trigger filter bar search when the basic search is fired
                this._oBasicSearchField.attachSearch(function() {
                    oFilterBar.search();
                });

                oDialog.getTableAsync().then(function (oTable) {
                    let oModel = this.getView().getModel();
                    oTable.setModel(oModel);

                    oTable.attachRowSelectionChange(this.onValueHelpSelectionChange);

                    // For Desktop and tablet the default table is sap.ui.table.Table
                    if(oTable.bindRows) {
                        // Bind rows to the oDataModel and add columns
                        oTable.bindAggregation("rows", {
                            path: '/RecipientTypes',
                            events: {
                                dataReceived: function() {
                                    oDialog.update();
                                }
                            }
                        });
                        oTable.addColumn(new UIColumn({label: "Customer Code", template: "code"}));
                        oTable.addColumn(new UIColumn({label: "Customer Name", template: "name"}));
                        oTable.addColumn(new UIColumn({label: "Province", template: "province"}));
                        oTable.addColumn(new UIColumn({label: "City", template: "city"}));
                        oTable.addColumn(new UIColumn({label: "Country", template: "country/name"}));
                        oTable.addColumn(new UIColumn({label: "PIVA", template: "piva"}));
                        oTable.addColumn(new UIColumn({label: "Commercial Organization", template: "commercialOrg"}));
                        oTable.addColumn(new UIColumn({label: "Distribution Channel", template: "distributionChannel"}));
                        oTable.addColumn(new UIColumn({label: "Weekly Commodity", template: "weeklyCommodity"}));
                    }

                    // For Mobile the default table is sap.m.Table
                    if (oTable.bindItems) {
                        // Bind items to the ODataModel and add columns
                        oTable.bindAggregation("items", {
                                path: 'RecipientTypes',
                                template: new ColumnListItem({
                                    cells: [new Label({text: "{code}"}), new Label({text: "{name}"})]
                            }),
                            events: {
                                dataReceived: function () {
                                    oDialog.update();
                                }
                            }
                        });
                        oTable.addColumn(new MColumn({header: new Label({text: "Customer Code"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Customer Name"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Province"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "City"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Country"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "PIVA"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Commercial Organization"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Distribution Channel"})}));
                        oTable.addColumn(new MColumn({header: new Label({text: "Weekly Commodity"})}));
                    }
                    oDialog.update();
                }.bind(this));
                
                // oDialog.setTokens(this._oMultiInput.getTokens());

                // set flag that the dialog is initialized
                this._bDialogInitialized = true;
                oDialog.open();
            }.bind(this));
        },

        onValueHelpOkPress: function(oEvent) {
            // var aTokens = oEvent.getParameter("tokens");
			// this._oMultiInput.setTokens(aTokens);
            let oSelectedItem = oEvent.getParameter("selectedItem"),
            aTokens = oEvent.getParameter("tokens"),
            oInput = this.byId("panel1customerVHD");

			this._oVHD.close();
        },

        onValueHelpCancelPress: function (oEvent) {

            // if(!oSelectedItem) {
            //     oInput.resetProperty("value");
            //     return;
            // }
            // oInput.setValue(oSelectedItem.getCells()[1].getText());

            this._oVHD.close();
        },

        onFilterBarSearch: function () {
            // let sSearchQuery = this._oBasicSearchField.getValue();
            let oBasicSearchField = sap.ui.getCore().byId("__field0");
            let sSearchQuery = oBasicSearchField.getValue();
            // console.log("Basic Search Field", this._oBasicSearchField);
            // console.log("oBasicSearchField: ", oBasicSearchField);
            // console.log("oBasicSearchField Value: ", oBasicSearchField.getValue());
            // console.log("Search Query", sSearchQuery);
            
			let aFilters = [];
			aFilters.push(new Filter({
				filters: [
					new Filter({ path: "name", operator: FilterOperator.Contains, value1: sSearchQuery }),
					new Filter({ path: "code", operator: FilterOperator.EQ, value1: sSearchQuery })
				],
				and: false
			}));

			this._filterTable(new Filter({
				filters: aFilters,
				and: false
			}));
        },

        _filterTable: function (oFilter) {
            let oVHD = this._oVHD;

            oVHD.getTableAsync().then(function (oTable) {
                if(oTable.bindRows) {
                    oTable.getBinding("rows").filter(oFilter);
                }
                if(oTable.bindItems) {
                    oTable.getBinding("items").filter(oFilter);
                }

                // This method must be called after binding update of the table
                oVHD.update();
            });
        },

        onValueHelpSelectionChange: function(iParameter, oEvent) {
            let oVHD = sap.ui.getCore().byId("__xmlview1--valueHelpDialogId");

            // Getting the oTable control created within the customers fragment
            let oTable = sap.ui.getCore().byId("__xmlview1--valueHelpDialogId-table");

            // Collection the index of the selected row
            // let selectedIndex = iParameter.getSource().getSelectedIndex();
            let selectedIndex = oTable.getSelectedIndices()[0];

            if(selectedIndex !== undefined) {
                // Collection of the customer name from the table's selected row
                let customerName = oTable.getRows()[selectedIndex].getCells()[1].getText();
    
                // Getting the input field by id and setting its value property
                let customersInput = sap.ui.getCore().byId("__xmlview1--panel1customerVHD");
                customersInput.setValue(customerName);
            }

            // This method must be called after binding update of the table
            oVHD.update();
        }
    });
});
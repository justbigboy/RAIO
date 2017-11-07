// IIFE & jQuery
$(document).ready(function() {
    $('#splitter').jqxSplitter({
        width: getWidth("Splitter"),
        height: 600,
        panels: [
            {
                size: 250,
                min: 100
            },
            {

                min: 250
            }
        ]
    });
    $('#rightSplitter').jqxSplitter({
        width: '100%',
        height: '100%',
        orientation: 'horizontal',
        panels: [
            {
                min: 200,
                size: 350,
                collapsible: false
            },
            {
                min: 200
            }
        ]
    });
    var fields = [
        {
            name: "status",
            map: "state",
            type: "string"
        },
        {
            name: "text",
            map: "label",
            type: "string"
        },
        {
            name: "tags",
            type: "string"
        },
        {
            name: "color",
            map: "hex",
            type: "string"
        },
        {
            name: "resourceId",
            type: "number"
        }
    ];
    var source = {
        localData: [
            {
                state: "new",
                label: "Combine Orders",
                tags: "orders, combine",
                hex: "#5dc3f0",
                resourceId: 3
            },
            {
                state: "new",
                label: "Change Billing Address",
                tags: "billing",
                hex: "#f19b60",
                resourceId: 1
            },
            {
                state: "new",
                label: "One item added to the cart",
                tags: "cart",
                hex: "#5dc3f0",
                resourceId: 3
            },
            {
                state: "new",
                label: "Edit Item Price",
                tags: "price, edit",
                hex: "#5dc3f0",
                resourceId: 4
            },
            {
                state: "new",
                label: "Login 404 issue",
                tags: "issue, login",
                hex: "#6bbd49"
            }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var resourcesAdapterFunc = function() {
        var resourcesSource = {
            localData: [
                {
                    id: 0,
                    name: "No name",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/jqwidgets/styles/images/common.png",
                    common: true
                },
                {
                    id: 1,
                    name: "Andrew Fuller",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/andrew.png"
                },
                {
                    id: 2,
                    name: "Janet Leverling",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/janet.png"
                },
                {
                    id: 3,
                    name: "Steven Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/steven.png"
                },
                {
                    id: 4,
                    name: "Nancy Davolio",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/nancy.png"
                },
                {
                    id: 5,
                    name: "Michael Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/Michael.png"
                },
                {
                    id: 6,
                    name: "Margaret Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/margaret.png"
                },
                {
                    id: 7,
                    name: "Robert Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/robert.png"
                },
                {
                    id: 8,
                    name: "Laura Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/Laura.png"
                },
                {
                    id: 9,
                    name: "Laura Buchanan",
                    image: "https://www.jqwidgets.com/jquery-widgets-demo/images/Anne.png"
                }
            ],
            dataType: "array",
            dataFields: [
                {
                    name: "id",
                    type: "number"
                },
                {
                    name: "name",
                    type: "string"
                },
                {
                    name: "image",
                    type: "string"
                },
                {
                    name: "common",
                    type: "boolean"
                }
            ]
        };
        var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }
    $('#kanban1').jqxKanban({

        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter,
        connectWith: "#kanban2, #kanban3",
        columns: [
            {
                text: "Backlog",
                dataField: "new",
                maxItems: 10
            }
        ],
        // render column headers.
        columnRenderer: function(element, collapsedElement, column) {
            var columnItems = $("#kanban1").jqxKanban('getColumnItems', column.dataField).length;
            // update header's status.
            element.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
            // update collapsed header's status.
            collapsedElement.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
        }
    });
    var source2 = {
        localData: [
            {
                state: "ready",
                label: "Logout issue",
                tags: "logout, issue",
                hex: "#5dc3f0",
                resourceId: 7
            },
            {
                state: "ready",
                label: "Remember password issue",
                tags: "password, issue",
                hex: "#6bbd49",
                resourceId: 8
            },
            {
                state: "ready",
                label: "Cart calculation issue",
                tags: "cart, calculation",
                hex: "#f19b60",
                resourceId: 9
            },
            {
                state: "ready",
                label: "Remove topic issue",
                tags: "topic, issue",
                hex: "#6bbd49"
            }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter2 = new $.jqx.dataAdapter(source2);
    $('#kanban2').jqxKanban({
        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter2,
        connectWith: "#kanban1, #kanban3",
        columns: [
            {
                text: "Ready",
                dataField: "ready",
                maxItems: 10
            }
        ],
        // render column headers.
        columnRenderer: function(element, collapsedElement, column) {
            var columnItems = $("#kanban2").jqxKanban('getColumnItems', column.dataField).length;
            // update header's status.
            element.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
            // update collapsed header's status.
            collapsedElement.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
        }
    });
    var source3 = {
        localData: [
            {
                state: "done",
                label: "Delete orders",
                tags: "orders, combine",
                hex: "#f19b60",
                resourceId: 4
            },
            {
                state: "work",
                label: "Add New Address",
                tags: "address",
                hex: "#6bbd49",
                resourceId: 5
            },
            {
                state: "new",
                label: "Rename items",
                tags: "rename",
                hex: "#5dc3f0",
                resourceId: 6
            },
            {
                state: "work",
                label: "Update cart",
                tags: "cart, update",
                hex: "#6bbd49"
            }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter3 = new $.jqx.dataAdapter(source3);
    $('#kanban3').jqxKanban({
        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter3,
        connectWith: "#kanban1, #kanban2",
        columns: [
            {
                text: "Backlog",
                dataField: "new",
                maxItems: 5
            },
            {
                text: "In Progress",
                dataField: "work",
                maxItems: 5
            },
            {
                text: "Done",
                dataField: "done",
                maxItems: 5
            }
        ],
        // render column headers.
        columnRenderer: function(element, collapsedElement, column) {
            var columnItems = $("#kanban3").jqxKanban('getColumnItems', column.dataField).length;
            // update header's status.
            element.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
            // update collapsed header's status.
            collapsedElement.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
        }
    });
});

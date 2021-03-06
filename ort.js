/*
 * JS for ort generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '370f9943-f52a-44a8-aaa9-5433e842b0a0';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Location",
    "location": "Location.html"
}, {
    "name": "Kontakte",
    "location": "Kontakte.html"
}, {
    "name": "ort",
    "location": "ort.html"
}, {
    "name": "contacts",
    "location": "contacts.html"
}, {
    "name": "DialogInvite",
    "location": "DialogInvite.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

ort_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'ort_mobilebutton_2',
        'mobilelabel_3': 'ort_mobilelabel_3',
        'mobilelabel_4': 'ort_mobilelabel_4'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'ort';

    /*
     * Nonvisual components
     */
    var datasources = [];

    geolocation2 = new Apperyio.DataSource(GeolocationService, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("ort");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {
            setText('ort_mobilelabel_3', 'Moep. Da ist was schief gelaufen.');
        },
        'responseMapping': [{
            'PATH': ['coords', 'latitude'],
            'ID': 'mobilelabel_3',
            'ATTR': '@'
        }, {
            'PATH': ['coords', 'longitude'],
            'ID': 'mobilelabel_4',
            'ATTR': '@'
        }],
        'requestMapping': [{
            'PATH': ['options', 'maximumAge'],
            'TYPE': 'STRING',
            'ATTR': '3000'
        }, {
            'PATH': ['options', 'timeout'],
            'TYPE': 'STRING',
            'ATTR': '5000'
        }, {
            'PATH': ['options', 'enableHighAccuracy'],
            'TYPE': 'STRING',
            'ATTR': 'true'
        }, {
            'PATH': ['options', 'watchPosition'],
            'TYPE': 'STRING',
            'ATTR': 'false'
        }]
    });

    datasources.push(geolocation2);

    /*
     * Events and handlers
     */

    // Before Show
    var ort_beforeshow = function() {
            Apperyio.CurrentScreen = "ort";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var ort_onLoad = function() {
            ort_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            ort_deviceEvents();
            ort_windowEvents();
            ort_elementsEvents();
        };

    // screen window events
    var ort_windowEvents = function() {

            $('#ort').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var ort_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var ort_elementsExtraJS = function() {
            // screen (ort) extra code

        };

    // screen elements handler
    var ort_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#ort_mobilecontainer [name="mobilebutton_2"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        try {
                            geolocation2.execute({})
                        } catch (ex) {
                            console.log(ex.name + '  ' + ex.message);
                            hideSpinner();
                        };

                    }
                },
            }, '#ort_mobilecontainer [name="mobilebutton_2"]');

        };

    $(document).off("pagebeforeshow", "#ort").on("pagebeforeshow", "#ort", function(event, ui) {
        ort_beforeshow();
    });

    if (runBeforeShow) {
        ort_beforeshow();
    } else {
        ort_onLoad();
    }
};

$(document).off("pagecreate", "#ort").on("pagecreate", "#ort", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    ort_js();
});
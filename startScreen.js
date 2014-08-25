/*
 * JS for startScreen generated by Appery.io
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

startScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_10': 'startScreen_mobilelabel_10',
        'mobilegrid_52': 'startScreen_mobilegrid_52',
        'mobilegridcell_53': 'startScreen_mobilegridcell_53',
        'myNumberInput': 'startScreen_myNumberInput',
        'mobilegridcell_54': 'startScreen_mobilegridcell_54',
        'mobilebutton_14': 'startScreen_mobilebutton_14',
        'md5Label': 'startScreen_md5Label',
        'datepicker': 'startScreen_datepicker',
        'mobilegrid_82': 'startScreen_mobilegrid_82',
        'mobilegridcell_83': 'startScreen_mobilegridcell_83',
        'mobilelabel_87': 'startScreen_mobilelabel_87',
        'mobilegridcell_84': 'startScreen_mobilegridcell_84',
        'StundeSlider': 'startScreen_StundeSlider',
        'mobilegridcell_85': 'startScreen_mobilegridcell_85',
        'mobilelabel_88': 'startScreen_mobilelabel_88',
        'mobilegridcell_86': 'startScreen_mobilegridcell_86',
        'MinuteSlider': 'startScreen_MinuteSlider',
        'mobilegrid_63': 'startScreen_mobilegrid_63',
        'mobilegridcell_64': 'startScreen_mobilegridcell_64',
        'mobileimage_68': 'startScreen_mobileimage_68',
        'mobilegridcell_65': 'startScreen_mobilegridcell_65',
        'mobilegrid_30': 'startScreen_mobilegrid_30',
        'mobilegridcell_31': 'startScreen_mobilegridcell_31',
        'mobilelabel_37': 'startScreen_mobilelabel_37',
        'mobilegridcell_32': 'startScreen_mobilegridcell_32',
        'vonStunde': 'startScreen_vonStunde',
        'mobilegridcell_35': 'startScreen_mobilegridcell_35',
        'mobilegrid_47': 'startScreen_mobilegrid_47',
        'mobilegridcell_48': 'startScreen_mobilegridcell_48',
        'mobilelabel_46': 'startScreen_mobilelabel_46',
        'mobilegridcell_49': 'startScreen_mobilegridcell_49',
        'vonMinute': 'startScreen_vonMinute',
        'mobilegridcell_33': 'startScreen_mobilegridcell_33',
        'mobilelabel_38': 'startScreen_mobilelabel_38',
        'mobilegridcell_34': 'startScreen_mobilegridcell_34',
        'bisStundeL': 'startScreen_bisStundeL',
        'mobilegridcell_36': 'startScreen_mobilegridcell_36',
        'mobilegrid_57': 'startScreen_mobilegrid_57',
        'mobilegridcell_58': 'startScreen_mobilegridcell_58',
        'mobilelabel_62': 'startScreen_mobilelabel_62',
        'mobilegridcell_59': 'startScreen_mobilegridcell_59',
        'bisMinuteL': 'startScreen_bisMinuteL',
        'mobilegridcell_90': 'startScreen_mobilegridcell_90',
        'mobilelabel_93': 'startScreen_mobilelabel_93',
        'mobilegridcell_91': 'startScreen_mobilegridcell_91',
        'mobilegridcell_92': 'startScreen_mobilegridcell_92',
        'DatumL': 'startScreen_DatumL',
        'gridClock': 'startScreen_gridClock',
        'mobilegridcell_72': 'startScreen_mobilegridcell_72',
        'mobilelabel_24': 'startScreen_mobilelabel_24',
        'selectH': 'startScreen_selectH',
        'selectH-0': 'startScreen_selectH-0',
        'mobilegridcell_73': 'startScreen_mobilegridcell_73',
        'mobilelabel_25': 'startScreen_mobilelabel_25',
        'selectM': 'startScreen_selectM',
        'selectM-0': 'startScreen_selectM-0',
        'mobilenavbar_41': 'startScreen_mobilenavbar_41',
        'mobilenavbaritem_42': 'startScreen_mobilenavbaritem_42',
        'mobilenavbaritem_43': 'startScreen_mobilenavbaritem_43',
        'mobilenavbaritem_44': 'startScreen_mobilenavbaritem_44'
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

    Apperyio.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var startScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "startScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            var requestData = "hallo";

            $.ajax({
                url: "http://141.83.68.32/mampf/",
                data: JSON.stringify(requestData),
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                success: renderResponse,
            });

            function renderResponse(json) {
                var responseTxt = (jqXHR.responseText);
                console.log(responseTxt);
            }

            ;
            localStorage.setItem('myHour', '0');
            localStorage.setItem('myMinute', '0');
            localStorage.setItem('myNumber', '0');
            localStorage.setItem('myNumberMD5', '0');
            localStorage.setItem('myHour2', '0');

            // TODO fire device events only if necessary (with JS logic)
            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events
    var startScreen_windowEvents = function() {

            $('#startScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var startScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var startScreen_elementsExtraJS = function() {
            // screen (startScreen) extra code

            /* datepicker */

            startScreen_datepicker_selector = "#startScreen_datepicker";
            startScreen_datepicker_dataPickerOptions = {
                dateFormat: "yy-mm-dd",
                firstDay: 0,

                maxDate: new Date(""),

                minDate: new Date(""),

                dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                showOtherMonths: true
            };

            startScreen_datepicker_dataPickerOptions.defaultDate = new Date("08/18/2014");

            Apperyio.__registerComponent('datepicker', new Apperyio.ApperyMobileDatePickerComponent("startScreen_datepicker", startScreen_datepicker_dataPickerOptions));

            /* selectH */

            $("#startScreen_selectH").parent().find("a.ui-btn").attr("tabindex", "11");

            /* selectM */

            $("#startScreen_selectM").parent().find("a.ui-btn").attr("tabindex", "10");

        };

    // screen elements handler
    var startScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("change", '#startScreen_mobilecontainer1 [name="myNumberInput"]').on({
                change: function() {
                    var input = $('input[dsid="myNumberInput"]');
                    var input2 = $.md5(input);
                    localStorage.setItem("myNumberMD5", input2);;
                },
            }, '#startScreen_mobilecontainer1 [name="myNumberInput"]');

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilebutton_14"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        setText('startScreen_md5Label', localStorage.getItem('myNumberMD5'));

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilebutton_14"]');

            $(document).off("change", '#startScreen_mobilecontainer1 [name="datepicker"]').on({
                change: function() {
                    var date = Appery("datepicker").getAttr("defaultDateValue");
                    localStorage.setItem("myDate", date);
                    setText('startScreen_DatumL', localStorage.getItem('myDate'));
                },
            }, '#startScreen_mobilecontainer1 [name="datepicker"]');

            $(document).off("change", '#startScreen_mobilecontainer1 [name="StundeSlider"]').on({
                change: function() {
                    var input = $('input[dsid="StundeSlider"]');
                    localStorage.setItem("myHour", input.val());
                    var until = Number(input.val()) + Number(1);
                    localStorage.setItem("myHour2", until);

                    ;
                    setText('startScreen_vonStunde', localStorage.getItem('myHour'));
                    setText('startScreen_bisStundeL', localStorage.getItem('myHour2'));
                },
            }, '#startScreen_mobilecontainer1 [name="StundeSlider"]');

            $(document).off("change", '#startScreen_mobilecontainer1 [name="MinuteSlider"]').on({
                change: function() {
                    var input = $('input[dsid="MinuteSlider"]');
                    localStorage.setItem("myMinute", input.val());;
                    setText('startScreen_vonMinute', localStorage.getItem('myMinute'));
                    setText('startScreen_bisMinuteL', localStorage.getItem('myMinute'));
                },
            }, '#startScreen_mobilecontainer1 [name="MinuteSlider"]');

            $(document).off("change", '#startScreen_mobilecontainer1 [name="selectH"]').on({
                change: function() {
                    setVar_('myHour', 'startScreen_selectH', 'value', '', this);
                    var input = localStorage.getItem("myHour");
                    var until = Number(input) + Number(1);
                    localStorage.setItem("myHour2", until);

                    ;
                    setText('startScreen_vonStunde', localStorage.getItem('myHour'));
                    setText('startScreen_bisStundeL', localStorage.getItem('myHour2'));
                },
            }, '#startScreen_mobilecontainer1 [name="selectH"]');

            $(document).off("change", '#startScreen_mobilecontainer1 [name="selectM"]').on({
                change: function() {
                    setVar_('myMinute', 'startScreen_selectM', 'value', '', this);
                    setText('startScreen_vonMinute', localStorage.getItem('myMinute'));
                    setText('startScreen_bisMinuteL', localStorage.getItem('myMinute'));
                },
            }, '#startScreen_mobilecontainer1 [name="selectM"]');

            $(document).off("click", '#startScreen_mobilefooter1 [name="mobilenavbaritem_42"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('startScreen', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilefooter1 [name="mobilenavbaritem_42"]');
            $(document).off("click", '#startScreen_mobilefooter1 [name="mobilenavbaritem_43"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('contacts', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilefooter1 [name="mobilenavbaritem_43"]');
            $(document).off("click", '#startScreen_mobilefooter1 [name="mobilenavbaritem_44"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('Location', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilefooter1 [name="mobilenavbaritem_44"]');

        };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});
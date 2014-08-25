/*
 * Services
 */

var RESTService = new Apperyio.RestService({
    'url': 'http://141.83.68.32/mampf/',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});
var GeolocationService = new Apperyio.GeolocationService({});
var ContactsService = new Apperyio.ContactsService({});

var RESTTEST = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

/*
 * Data models
 */
Apperyio.models = {
    "AAB7DD8B-612F-6E85-DA32-0D74E1330AA0": {
        "name": "String",
        "type": "string",
        "parentGuid": null,
        "reference": null
    },
    "ABB7DD8B-612F-6E85-DA32-0D74E1330AA1": {
        "name": "Number",
        "type": "number",
        "parentGuid": null,
        "reference": null
    },
    "ACB7DD8B-612F-6E85-DA32-0D74E1330AA2": {
        "name": "Boolean",
        "type": "boolean",
        "parentGuid": null,
        "reference": null
    }

};

/*
 * Data storages
 */
Apperyio.storages = {};
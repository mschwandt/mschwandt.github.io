var MampfClientApi = function() {

	this.getBestMatch = function(intention, callbackDone, callbackError) {

		$.ajax({
			url : "http://141.83.68.32/mampf/",

			success : callbackDone,

			error : callbackError,

			dataType : "json",

			type : "POST",

			data : JSON.stringify(intention, null, '  '),

			contentType : "application/json; charset=utf-8",

		/*
		 * xhrFields : { withCredentials : true }
		 */

		});
	};

};


function renderResponse(json){
	var responseTxt =(jqXHR.responseText);
	console.log(responseTxt);
}

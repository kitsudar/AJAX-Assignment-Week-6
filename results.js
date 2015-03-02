
var url = 'http://api.bing.net/qson.aspx?Query=';
var endUrl = '&JsonType=callback&JsonCallback=?';

$('input').on('keyup', function(){

$.ajax({
	url: url + $(this).val() + endUrl,
	type: 'GET',
	dataType: 'jsonp'
}).done(function(response) {
	var results = response.SearchSuggestion.Section;

	$('#results').empty();
	$.each(results, function(i, value){
		var html = $('<ul>' + '<a>' + value.Text + '</a>' + '</ul>');
		$('#results').append(html);
		$('a').attr('href', encodeURI("http://www.bing.com/ + value.Text"));
	});

	// // loop results from the array
	// for(var i = 0; i < results.length; i++){
	// 	var result = results[i]
	// 	console.log(result.Text); // see what results look like
	
	// 	var html = $('<a>' + result.Text + '</a>');
	// 	$('#results').append(html);
	// }



	});

});





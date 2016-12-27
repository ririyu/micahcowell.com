export default function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        callback(xhr.responseText);
	    }
	}
	xhr.open('GET', url, true);
	xhr.send(null);
}

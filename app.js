window.onload=function start(){
	let search = document.querySelector(".btn");
	search.addEventListener('click', function(){
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == XMLHttpRequest.DONE) {
				alert(req.responseText);
			}
		}
		req.open('GET', 'http://localhost:8888/info2180-lab4/superheroes.php', true);
		req.send(null);
	});
}
	
window.onload=function(){
	let search = document.getElementById("btn");
	search.addEventListener('click', function(e){
		e.preventDefault();
		var s = document.getElementById("search").value;
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (req.readyState == XMLHttpRequest.DONE) {
				if (req.status == 200){	
					var r = req.responseText;
					var result = document.getElementById('result');
					result.innerHTML = r;
				}else{
					alert("Error!");
				}
			}
		}
		console.log(s);
		req.open('GET', 'http://localhost:8888/info2180-lab4/superheroes.php?query='+s, true);
		req.send();
	});
}
	
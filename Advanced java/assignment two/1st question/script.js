const api_url ="https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
async function getapi(url) {
	
	const response = await fetch(url);
	
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}

	
}
getapi(api_url);
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Movie</th>
		<th>cast</th>
		<th>genres</th>
		</tr>`;
	
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.title} </td>
	<td>${r.movie}</td>
	<td>${r.cast}</td>
	<td>${r.genres}</td>		
</tr>`;
	}
	document.getElementById("feteching").innerHTML = tab;
}

function hideloader() {
	document.getElementById('loading').style.display = 'none';
}





document.getElementById("pokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
  var value = document.getElementById("pokeInput").value;
  if (value === "")
    return;
  
  console.log(value);
  
  value = value.replace(" ","-");
  value = value.toLowerCase();
  
  console.log(value);
  
  var type_url;
  
  
  
  const url = "https://pokeapi.co/api/v2/move/" + value;
  
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {	
    console.log(json);
    let results = '<hr/>';
    results += '<h2>' + json.names[2].name + '</h2>';
    results += '<h3>Accuracy: ' + json.accuracy + '</h3>';
    results += '<h3>Power: ' + (json.power ? json.power : '-') + '</h3>';
    results += '<h3>PP: ' + json.pp + '</h3>';
    results += '<h3>Move Class: ' + json.damage_class.name + '</h3>';
    results += '<h3 id="type"></h3>'
    results += '<p>' + json.flavor_text_entries[2].flavor_text + '</p>';
    document.getElementById("pokeResults").innerHTML += results;
    return json.type.url
  }).then(function(type_url) {
    fetch(type_url).then(function(response) {
      return response.json();
    }).then(function(json) {	
      console.log(json);

      document.getElementById("type").innerHTML = 'Type: ' + json.name;
    });
  });
  
  
  
  
});
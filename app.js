var result = document.getElementById("result")
var text = document.getElementById("text")
var submit = document.getElementById("submit")
var form = document.getElementById("form")

form.addEventListener("submit", function(event){
event.preventDefault();

var searchBar = text.value;
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://api.giphy.com/v1/gifs/search?q="+searchBar+"&api_key=o0g9WyxMXH2rnObfHgE6GqYj5ExqbWSd&20");
oReq.send();


function reqListener(){
    var data = JSON.parse(this.responseText);
    for (var i = 0; i<data.data.length; i++){
    var image = document.createElement("img")
    console.log(data.data[i].images.original.url);
    image.src = data.data[i].images.original.url;
    result.appendChild(image)
    }
};    
})





document.addEventListener('DOMContentLoaded', function() {
  var resp = httpGetAsync('https://koinex.in/api/ticker', function(resp) {
    var bitcoin = document.getElementById('bitcoin');
    var ether = document.getElementById('ether');
    var ripple = document.getElementById('ripple');
    var litecoin = document.getElementById('litecoin');
    var json = JSON.parse(resp);
    bitcoin.innerText = json.prices.BTC;
    ether.innerText = json.prices.ETH;
    ripple.innerText = json.prices.XRP;
    litecoin.innerText = json.prices.LTC;

  });
}, false);

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', 'Chrome Plugin');
    xmlHttp.send(null);
}
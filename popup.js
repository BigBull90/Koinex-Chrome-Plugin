document.addEventListener('DOMContentLoaded', function() {
  var resp = httpGetAsync('https://koinex.in/api/ticker', function(resp) {
    var bitcoin = document.getElementById('bitcoin');
    var ether = document.getElementById('ether');
    var ripple = document.getElementById('ripple');
    var litecoin = document.getElementById('litecoin');
    var json = JSON.parse(resp);
    bitcoin.innerText = json.stats.BTC.last_traded_price;
    ether.innerText = json.stats.ETH.last_traded_price;
    ripple.innerText = json.stats.XRP.last_traded_price;
    litecoin.innerText = json.stats.LTC.last_traded_price;
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

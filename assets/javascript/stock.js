// queryURL for Stock API
var queryURL = ["https://api.iextrading.com/1.0/stock/aapl/batch?types=quote",
    "https://api.iextrading.com/1.0/stock/msft/batch?types=quote",
    "https://api.iextrading.com/1.0/stock/tsla/batch?types=quote",
    "https://api.iextrading.com/1.0/stock/nflx/batch?types=quote",
    "https://api.iextrading.com/1.0/stock/crm/batch?types=quote"];

queryURL.forEach(function (query) {
    console.log(query);
    $.ajax({
    url: query,
    method: "GET"
}).then(function (response) {
    var companyName = response.quote.companyName;
    var symbol = response.quote.symbol;
    var closePrice = response.quote.close;
    var nameDiv = document.createElement('p');
    nameDiv.innerText = companyName
    var symbolDiv = document.createElement('p');
    symbolDiv.innerText = symbol;
    var closePriceDiv = document.createElement('p');
    closePriceDiv.innerText = closePrice;
    var newRow = document.createElement("div");
    nameDiv.className = 'table-item col';
    symbolDiv.className = 'table-item col';
    closePriceDiv.className = 'table-item col';
    newRow.className = 'table-row';
    newRow.append(nameDiv);
    newRow.append(symbolDiv);
    newRow.append(closePriceDiv);
    $('#stock-widget').append(newRow);
    console.log(response);
});

});
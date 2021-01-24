// from data.js

// var data = [{
//   datetime: "1/1/2010",
//   city: "benton",
//   state: "ar",
//   country: "us",
//   shape: "circle",
//   durationMinutes: "5 mins.",
//   comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// },

let tableData = data;
let tbody = d3.select('tbody');

data.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// let row = tbody.append('tr');
// let li = row.append('td').text(data[0].datetime);
// let li2 = row.append('td').text(data[0].city);
// let li3 = row.append("td").text(data[0].state);
// let li4 = row.append("td").text(data[0].country);
// let li5 = row.append("td").text(data[0].shape);
// let li6 = row.append("td").text(data[0].durationMinutes);
// let li7 = row.append("td").text(data[0].comments);
// let row1 = tbody.append('tr');
// let a = row1.append('td').text(data[1].datetime);
// let b = row1.append('td').text(data[1].city);
// let c = row1.append("td").text(data[1].state);
// let d = row1.append("td").text(data[1].country);
// let e = row1.append("td").text(data[1].shape);
// let f = row1.append("td").text(data[1].durationMinutes);
// let g = row1.append("td").text(data[1].comments);

// var li = d3.select("tbody").append("tr");
// var li1 = d3.select("tbody").append("td").text(data[0].datetime);
// var li2 = d3.select("tbody").append("td").text(data[0].city);
// var li3 = d3.select("tbody").append("td").text(data[0].state);
// var li4 = d3.select("tbody").append("td").text(data[0].country);
// var li5 = d3.select("tbody").append("td").text(data[0].shape);
// var li6 = d3.select("tbody").append("td").text(data[0].durationMinutes);
// var li7 = d3.select("tbody").append("td").text(data[0].comments);
// YOUR CODE HERE!

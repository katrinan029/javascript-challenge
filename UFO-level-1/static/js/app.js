// from data.js
const tableData = data;

// select button
const button = d3.select("#filter-btn");

// select form
const form = d3.select("form");

// select tbody
let tbody = d3.select('tbody');

// append tbody and have table populate
data.forEach((ufoSighting) => {
  const row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    const cell = row.append("td");
    cell.text(value);
  });
});

// create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// complete the event handler function for the form
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    const inputElement = d3.select("#datetime");

    // get the value property of teh input element
    const inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    const filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    let tbody = d3.select("tbody");

    tbody.text("");

    // append to the list

    filteredData.forEach((ufoSighting) => {
      const row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        const cell = row.append("td");
        cell.text(value);
      });
    });
};


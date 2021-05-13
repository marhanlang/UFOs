// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear existing data
    tbody.html("");
//loop through each object in data
//append row and cells for each value in row
    data.forEach((dataRow) => {
        //append row
        let row = tbody.append("tr");
        //loop through and add values as table cell(td)
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
        );
    });
}; 

function handleClick() {
    // get dt value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if date entered and filter with it
    if (date) {
        //apply filter
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild table with filtered data
    buildTable(filteredData);
 }
 // attach event to listen for a button
 d3.selectAll("#filter-btn").on("click", handleClick);

 //Build table when page loads
 buildTable(tableData);


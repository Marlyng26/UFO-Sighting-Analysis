var tableData = data;
// Create function to output table
var table=d3.select("tbody")
function makeTable(data) {
    table.html("");
    data.forEach((table_row) => {
        var row = table.append("tr")
        Object.values(table_row).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
// Create function to filter the data of user's input
function on_click(){
    var selectedDate = d3.select("#datetime").property("value");
    filteredData = tableData.filter(d => d.datetime === selectedDate);
    makeTable(filteredData);
}
// Create for the Search Button
d3.select("#filter-btn").on("click",on_click);
// Replenish the original data
makeTable(tableData)
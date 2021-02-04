// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        row.setAttribute("id", "myTr");
        document.getElementById("myTable").appendChild(row);
    }
    for (let i = 0; i < 10; i++) {
        let cols = document.createElement("td");
        let text = document.createTextNode("cell");
        cols.appendChild(text);
        document.getElementById("myTr").appendChild(cols);
    }

})();
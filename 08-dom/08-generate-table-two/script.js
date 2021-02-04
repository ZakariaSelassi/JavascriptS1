// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        document.getElementById("myTable").appendChild(row);

        for (let j = 0; j < 10; j++) {
            let cols = document.createElement("td");
            let text = document.createTextNode((i + 1) * (j + 1));
            cols.appendChild(text);
            row.appendChild(cols);
        }
    }


})();
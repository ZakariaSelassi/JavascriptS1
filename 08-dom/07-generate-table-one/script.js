// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    for (let i = 0; i < 10; i++) {
        let col = document.createElement("tr");
        col.setAttribute("class", "myTr");
        document.getElementById("myTable").appendChild(col);
    }


})();
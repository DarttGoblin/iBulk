const tableContainer = document.getElementById('tableContainer');

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const tbody = document.createElement('tbody');

function FoodsDataFetch(FoodsData) {
    FoodsData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

if (window.location.href.includes("Meat.html")) {FoodsDataFetch(meatData);}
if (window.location.href.includes("Grains.html")) {FoodsDataFetch(grainsData);}
if (window.location.href.includes("Fats.html")) {FoodsDataFetch(fatsData);}
if (window.location.href.includes("Nuts.html")) {FoodsDataFetch(nutsData);}
if (window.location.href.includes("Vegetables.html")) {FoodsDataFetch(vegetablesData);}
if (window.location.href.includes("Fruits.html")) {FoodsDataFetch(fruitsData);}
if (window.location.href.includes("Dairy.html")) {FoodsDataFetch(dairyData);}

table.appendChild(tbody);
tableContainer.appendChild(table);
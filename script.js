let category = document.getElementById("category")
let amount_input = document.getElementById("amount_input")
let date_input = document.getElementById("date_input")
let add_btn = document.getElementById("add_btn")
let table_body = document.getElementById("table_body")
let total_amt = document.querySelector(".total_amt");
// let form = document.getElementById("form")

let expenseLists = [];
let total_val = 0;
add_btn.addEventListener("click", () => {
    const category_val = category.value;
    const amount_val = Number(amount_input.value);
    const date_val = date_input.value;
    if (category_val == "") {
        alert("incomplete data, select category")
        return;
    }
    if (isNaN(amount_val) || amount_val <= 0) {
        alert("please enter valid amount")
        return;
    }
    if (date_val == "") {
        alert("incomplete data, please fill date")
        return;
    }


    expenseLists.push(category_val, amount_val, date_val);
    total_val += amount_val;

    total_amt.textContent = total_val;
    let table_row = table_body.insertRow();

    const category_cell = table_row.insertCell();
    const amount_cell = table_row.insertCell();
    const date_cell = table_row.insertCell();
    const del_cell = table_row.insertCell();

    let del_btn = document.createElement("button");

    del_btn.textContent = "Delete";
    del_btn.classList.add("del_class");
    del_btn.addEventListener("click", () => {
        expenseLists.splice(expenseLists.indexOf(expenseList), 1);

        total_val -= expenseList.amount_val;
        total_amt.textContent = total_val;

        table_body.removeChild(table_row);

    })
    const expenseList = expenseLists(expenseLists.length - 1);
    category_cell.textContent = expenseList.category_val;
    amount_cell.textContent = expenseList.amount_val;
    date_cell.textContent = expenseList.date_val;
    del_cell.appendChild.add(del_btn);

})

for (const expenseList of expenseLists) {
    total_val += amount_val;

    total_amt.textContent = total_val;
    let table_row = table_body.insertRow();

    const category_cell = table_row.insertCell();
    const amount_cell = table_row.insertCell();
    const date_cell = table_row.insertCell();
    const del_cell = table_row.insertCell();

    let del_btn = document.createElement("button");

    del_btn.textContent = "Delete";
    del_btn.classList.add("del_class");
    del_btn.addEventListener("click", () => {
        expenseLists.splice(expenseLists.indexOf(expenseList), 1);

        total_val -= expenseList.amount_val;
        total_amt.textContent = total_val;

        table_body.removeChild(table_row);

    })
    const expenseList = expenseLists(expenseLists.length - 1);
    category_cell.textContent = expenseList.category_val;
    amount_cell.textContent = expenseList.amount_val;
    date_cell.textContent = expenseList.date_val;
    del_cell.appendChild.add(del_btn);

}
console.log(expenseLists);
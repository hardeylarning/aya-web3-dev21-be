const tbody = document.getElementById('data')
const data = JSON.parse(localStorage.getItem('data'));
localStorage.removeItem('data');

// const myData = {
//     income: incomeValue,
//     age: ageValue,
//     gender: genderValue,
//     ms: msValue,
//     dpd: dpdValue
// }

console.log('Data:=> ', data.income);

for (let index = 1; index <= 10; index++) {
    let tr = document.createElement('tr')
    let sn = document.createElement('td')
    sn.innerText = index
    let budget = data.income / data.dpd + (index * 3)
    let budgetTd = document.createElement('td')
    budgetTd.innerText = budget
    let percentage = budget / data.income * 100
    let percentageTd = document.createElement('td')
    percentageTd.innerText = percentage

    let amount = document.createElement('td')
    amount.innerText = data.income
    tr.appendChild(sn)
    tr.appendChild(budgetTd)
    tr.appendChild(percentageTd)
    tr.appendChild(amount)

    tbody.appendChild(tr)
}
const btn = document.getElementById('submit')
const income = document.getElementById('income')
const age = document.getElementById('age')
const gender = document.getElementById('gender')
const ms = document.getElementById('ms')
const dpd = document.getElementById('dpd')
let myData

btn.addEventListener('click', () => {
    let incomeValue = income.value
    let ageValue = age.value
    let genderValue = gender.value
    let msValue = ms.value
    let dpdValue = dpd.value

    myData = {
        income: income.value,
        age: ageValue,
        gender: genderValue,
        ms: msValue,
        dpd: dpdValue
    }

    localStorage.setItem('data', JSON.stringify(myData));
    

    window.location.href = 'budget.html'
})

// console.log('Data ', myData.income);
console.log('Button:=> ', btn);

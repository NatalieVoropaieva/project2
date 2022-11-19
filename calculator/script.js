const insert = (num) => {
    document.form1.textview.value = document.form1.textview.value + num;
}
const equal = () => {
    let exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp)
    }
}
const backspace = () => {
    let exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1);
}
const inputFormula = (event) => {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9 +-\/\*]/g, '')
}
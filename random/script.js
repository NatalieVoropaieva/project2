const output = document.querySelector('.num-output');

let renderError = (error) => {
    const errorSection = document.getElementById("error");
    errorSection.innerText = error ? error : "";
}

let validate = (min, max) => {
    if (isNaN(min)) {
        return "Min should be a number";
    }
    if (isNaN(max)) {
        return "Max should be a number";
    }
    if (+min >= +max) {
        return "Min should be less than Max";
    }
    return null;
}

let randomNum = (event) => {
    console.log(this);
    event.preventDefault();
    const data = new FormData(event.target);
    let min = data.get("minimum");
    let max = data.get("maximum");
    const validationError = validate(min, max);
    if (!validationError) {
        min = +min;
        max = +max;
        let random = Math.random() * (max - min) + min;
        random = random.toFixed(0);
        output.innerText = random;
        renderError();
    } else {
        renderError(validationError);
    }
}

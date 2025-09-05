const onenter = document.getElementById('submit');

onenter.addEventListener("click", function () {
    const weight = document.getElementById('weight').value;
    const ht = document.getElementById('Height').value;

    if(weight === "" || ht === ""){
        alert("Please enter both weight and height!");
        return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(ht);

    if(isNaN(w) || isNaN(h) || h <= 0){
        alert("Please enter valid numbers");
        return;
    }

    const bmi = w / (h * h);
    alert("Your BMI is: " + bmi.toFixed(2));
});

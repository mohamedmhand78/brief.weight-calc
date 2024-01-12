var tallval = document.querySelector('.tallval');
var ageval = document.querySelector('.ageval');
var thin = document.querySelector('.thin');
var average = document.querySelector('.average');
var wide = document.querySelector('.wide');
var calculate = document.querySelector('.calculate');
var prerfectweight = 0;


calculate.addEventListener('click', () => {
    if (thin.checked) {
        if (tallval.value !== "" && ageval.value !== "") {
            prerfectweight = (tallval.value - 100 + ageval.value / 10) * 0.9 * 0.9;
        }
    }
    if (average.checked) {
        if (tallval.value !== "" && ageval.value !== "") {
            prerfectweight = (tallval.value - 100 + ageval.value / 10) * 0.9;
        }
    }
    if (wide.checked) {
        if (tallval.value !== "" && ageval.value !== "") {
            prerfectweight = (tallval.value - 100 + ageval.value / 10) * 0.9 * 1.1;
        }
    }
    document.getElementById('para2').innerHTML = "your perfect weight is : " + prerfectweight;
    localStorage.setItem("lastvalue", prerfectweight);
});


document.getElementById("para1").innerHTML = "history : " + localStorage.getItem("lastvalue");
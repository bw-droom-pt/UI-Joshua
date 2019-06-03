//Added an event listener
//Event listener

const btn = document.getElementById("primary").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
console.log(displayDate)
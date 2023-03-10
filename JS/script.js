const gridElem = document.querySelector(".grid");
for (let i = 1; i <= 50; i++) {
    
    let oddEven;
    let classColor;

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        oddEven = "divisibilex15";
        classColor = "fizzbuzz";
    } else if (i % 5 === 0) {
        console.log("Buzz");
        oddEven = "divisibilex5";
        classColor = "buzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        oddEven = "divisibilex3";
        classColor = "fizz";
    } else {
        console.log(i);
    }

    console.log(i, oddEven);
    gridElem.innerHTML += `<div class="box ${classColor}">${i}</div>`;
}
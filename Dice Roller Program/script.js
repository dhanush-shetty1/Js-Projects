let resultnum = document.getElementById('resultnum');
let resultimg = document.getElementById('resultimages');
let button = document.getElementById('btn');

button.onclick = function () {
    let num = Number(document.getElementById('num').value);
    let number = [];
    let images = [];

    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        number.push(random);
        images.push(`<img src="images/${random}.png" width="50" style="margin:5px;">`);
    }

    resultnum.textContent = number.join(', ');
    resultimg.innerHTML = images.join("");
};

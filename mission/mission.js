
const btnwh = document.getElementById('btnwh');

btnwh.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black";

    // 👇️ optionally change text color
    // document.body.style.color = 'white';
});

const btnbl = document.getElementById('btnbl');

btnbl.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'black';
    document.body.style.color = "white";

    // 👇️ optionally change text color
    // document.body.style.color = 'white';
});


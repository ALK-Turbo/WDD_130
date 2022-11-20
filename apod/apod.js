const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=0UieBswOrvrViwGPhI6ypg1tdwR9iF8tKV6eT2yJ";

async function getApod(url, callBack) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        hideError()
        callBack(data)
    } else {
        // error...output the message returned by the server
        const data = await response.json();
        showError(data)
        console.log("err");
        // return false to show that something went wrong

    }
}

function doStuff(data) {
    const output = document.querySelector("#output");
    output.textContent = "";
    photo = data
    const html = `<section class="information"><img src="${photo.url}" alt="${photo.title}">
    <div class="info">
        <h2>${photo.title}</h2>
        <h3>${photo.date}</h3>
        <p>${photo.explanation}</p>
    </div>
    </section>
    `;
    output.insertAdjacentHTML("beforeend", html);
    console.log("first");
};

// console.log(getApod(apodUrl, doStuff));
// getApod(apodUrl, doStuff);


function getApodByDate() {
    return apodUrl + `&date=${date.value}`
}

document.getElementById("submitButton").addEventListener('click', function onClick(event) {
    // get date with new url
    date_url = getApodByDate();
    // get info from that date
    getApod(date_url, doStuff);
});

function showError(msg) {
    //get the error element
    const output = document.querySelector("#Alert");
    error = msg
    //delete all previous content that could be there
    const prevOutput = document.querySelector("#output");
    prevOutput.textContent = "";
    //set the content of the element to the msg
    const html = `<p> ${error.msg}</p>`;
    output.insertAdjacentHTML("beforeend", html);
    console.log("first");
    // remove the hide class
    output.style.visibility = "visible";
}
function hideError() {
    //get the error element
    const output = document.querySelector("#Alert");
    // clear out the content of the element
    output.textContent = "";
    // add the hide class
    output.style.visibility = "hidden";
}

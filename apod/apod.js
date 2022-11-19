const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=0UieBswOrvrViwGPhI6ypg1tdwR9iF8tKV6eT2yJ";

async function getApod(url, callBack) {
    const response = await fetch(url);
    const data = await res.json();
    if (response.ok) {
        const data = await response.json();
        console.log(data)

        callBack(data)
    } else {
        // error...output the message returned by the server

        // return false to show that something went wrong

    }
}

function doStuff(data) {
    const output = document.querySelector("#output");
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
getApod(apodUrl, doStuff)


function getApodByDate{
    apodUrl + `&date=${date.value}`
}
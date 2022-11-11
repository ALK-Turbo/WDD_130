const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getApod(url, callBack) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data)

        callBack(data)
    }
}

function doStuff(data) {
    const output = document.querySelector("#output");
    photo = data
    const html = `<img src="${photo.url}" alt="Source Image">`;
    output.insertAdjacentHTML("afterbegin", html);
    console.log("first");
};

console.log(getApod(apodUrl, doStuff));
getApod(apodUrl, doStuff)
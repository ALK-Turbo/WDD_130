
/*
:root {
--quote-color: blue;
--quote-width: 66ch;
}
.quote {
font-size: 1.2em;
font-family: 'Courier New', Courier, monospace;
max-width: var(--quote-width);
}
.quote span {
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 1.2em;
color: var(--quote-color);
}
.quote .author {
text-align: right;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
*/

const baseUrl = "https://api.quotable.io/";

function quoteTemplate(quote) {
    return `<section class="quote">
<p><span class="quote-mark">&ldquo;</span>${quote.content}<span class="quote-mark">&rdquo;</span></p>
<p class="author">--${quote.author}</p>
`;
}

async function getQuote(url) {
    try {
        const respose = await fetch(url + 'random');
        if (respose.ok) {
            // returns a promise
            const data = await respose.json();
            return data
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default async function renderQuote(selector) {
    const quote = await getQuote(baseUrl);
    const element = document.querySelector(selector);
    const html = quoteTemplate(quote);
    element.innerHTML = html;
}
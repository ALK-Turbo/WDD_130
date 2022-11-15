const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7562530790msh39968d369327457p15c3ccjsn8a2ad8e5dfa7',
        'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
    }
};

fetch('https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long=-122.5076392&lat=37.757815', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
const axios = require('axios');
const HtmlTableToJson = require('html-table-to-json');

let myArgs = process.argv[2];

let dataFromWeb = ""
axios.request({
    url: "https://codequiz.azurewebsites.net/",
    method: "get",
    headers:{
        Cookie: "hasCookie=true;"
    } 
}).then( response => {
    dataFromWeb = response.data
    const jsonTables = HtmlTableToJson.parse(dataFromWeb)
    for (let i = 0; i < jsonTables.results[0].length; i++) {
        // console.log(jsonTables.results[0][i])
        if (jsonTables.results[0][i]['Fund Name'] === myArgs) {
            console.log(jsonTables.results[0][i]["Nav"])
        }
    }
})


/**
 * Author: Hanjun Chen
 * Created: 8/18/2017
 */
'use strict';
var axios = require('axios');

/**
 * Turn timestamp into a human date
 * @param {*} timestamp 
 */
var convertTimeStampToDate = (timestamp)=>{
    return new Date(parseInt(timestamp)).toLocaleDateString('en-US');
};

/**
 * Populate the table using the data
 * @param {*} dataArray - JSON data extracted from the promise
 */
var render = (dataArray)=>{
    dataArray.sort((a,b)=>{
        return a.timestamp - b.timestamp;
    });

    var html =`<html>
                    <head>
                        <title>Interview Test</title>
                        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
                        <link href="public/site.css" rel="stylesheet" type="text/css">
                        <link rel="icon" sizes="32x32" type="image/png" href="https://nodejs.org/static/favicon.png">
                        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                        <script src="public/TableRowHandler.js"></script>
                        <script src="public/App.js"></script>
                        
                    </head>
                    <body class="container">
                        <div>
                            <div class="row" id="colorArea" hidden>
                                <div class="alert">
                                    <p id="alert"></p>
                                </div>
                                <button class="form-control" id="clearBtn">Clear</button>
                            </div>
                            <div class="row">
                                <table class="table" id="table1">
                                    <tbody>`;

        dataArray.forEach(e=>{
            html+=`<tr class="clickable">
                        <td class="img-td">
                            <img src="${e['image']}" class="img-circle" alt="" />
                        </td>
                        <td class="contend-td">
                            <p>
                                <h1>${e['name']}</h1>
                            </p>
                            <small>${convertTimeStampToDate(e['timestamp'])}</small>
                        </td>
                        <td class="secret" hidden>
                            ${e['secret']}
                        </td>
                    </tr>`;
        });
        html+='</tbody></table></div></div></body></html>';
    return html;
};

/**
 * Callback to be mounted on / or /index or /home
 * @param {*} req - request
 * @param {*} res - response
 */
var homeCallback = (req,res)=>{
    axios.get('https://private-f3b4b-interview2.apiary-mock.com/data',{
        'accept':'application/json'
    })
    .then((result)=>{
        var dataArray = [];
        dataArray = result.data;
        let html = render(dataArray);
        res.setHeader('content-type','text/html');
        res.send(html);
    });
};

module.exports = homeCallback;
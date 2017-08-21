/**
 * Author: Hanjun Chen
 * 
 */
'use strict';
var axios = require('axios');

/**
 * Return response with JSON only, and let fronted handle the table population.
 * Will be used in Mobile mode.
 * @param {*} req 
 * @param {*} res 
 */
var homeMobileCallback = (req,res)=>{
    axios.get('https://private-f3b4b-interview2.apiary-mock.com/data',{
        'accept':'application/json'
    }).then((result)=>{
        res.json(result.data);
    });
};

module.exports = homeMobileCallback;
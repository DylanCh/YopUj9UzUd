/**
 * Author: Hanjun Chen
 * Created: 8/18/2017
 */
'use strict';

var updateColorArea = (secret)=>{
    console.log(secret);
    $('#alert').text(secret);
    $('.alert').css('background-color',secret);
    $('#colorArea').toggle();
};

var clickEventHandler = (event)=>{
    event.stopPropagation();
    event.stopImmediatePropagation();

    console.log('Table row clicked');
    var self = $(event.target);
    var secret = '';

    // Select the neighboring td that has a class call 'secret'
    for (const elem of self.closest('tr').children('td')){
        if ($(elem).hasClass('secret')){
            secret = $(elem).text().trim();
            break;
        }
    }
    updateColorArea(secret);
    return secret;
};

/**
 * Clear the secret displaying area
 */
var clearUpperArea = ()=>{
    $('#alert').val('');
    $('#colorArea').toggle();
};

$(document).ready(()=>{
   
    $('.clickable, .mobile').click((event)=>{
      clickEventHandler(event);  
    });   


    $('#clearBtn').click(()=>{
        clearUpperArea();
    });
   
});
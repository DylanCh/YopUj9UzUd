/**
 * Author: Hanjun Chen
 * Created: 8/18/2017
 */
'use strict';

$(document).ready(()=>{
   
    $('.clickable').click((event)=>{
        event.stopPropagation();
        event.stopImmediatePropagation();

        var self = $(event.target);
        var secret = '';

        // Select the neighboring td that has a class call 'secret'
        for (const elem of self.closest('tr').children('td')){
            if ($(elem).hasClass('secret')){
                secret = $(elem).text().trim();
                break;
            }
        }

        console.log(secret);
        $('#alert').text(secret);
        $('.alert').css('background-color',secret);
        $('#colorArea').toggle();
    });   

    /**
     * Clear the secret displaying area
     */
    var clearUpperArea = ()=>{
        $('#alert').val('');
        $('#colorArea').toggle();
    };

    $('#clearBtn').click(()=>{
        clearUpperArea();
    });

    

    
    
});
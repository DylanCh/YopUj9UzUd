'use strict';
/**
 * Timestamp to date conversion
 * @param {*} timestamp 
 */
var convertTimeStampToDate = (timestamp)=>{
    return new Date(parseInt(timestamp)).toLocaleDateString('en-US');
};

$(document).ready(()=>{
    
    /**
     * Desplay in mobile mode
     */
    var mobileLayout = ()=>{
        $.ajax('/m')
        .done((result)=>{
            console.log(result);
            var dataArray = result;
            var html = `<div class="row" id="colorArea" hidden>
                            <div class="alert">
                                <p id="alert"></p>
                            </div>
                            <button class="form-control" id="clearBtn">Clear</button>
                        </div>
                        <table class="table" id="table1">
                            <tbody>`;

            dataArray.forEach((element)=> {
                html+=`<tr class="clickable">
                        <td>
                            <div class="mobile">
                                <img src="${element['image']}" class="img-circle clickable" alt="" />
                            </div>
                            <h1 class="mobile">${element['name']}</h1>
                            <p class="mobile">${convertTimeStampToDate(element['timestamp'])}</p>
                        </td>
                    </tr>`;
            });

            html+='</tbody></table></div>';
            $('body').html('').prepend(html);
        })
        .fail((xhr,status,e)=>{
            console.log(stauts);
        });
    };

    // check on page initial load
    if ($(window).width()<=640)
        mobileLayout();

    // On window resize, check if the screen width is less than 
    var timer_id;
    $(window).resize(()=>{
        clearTimeout(timer_id);
        timer_id = setTimeout(()=>{
            var self = $(window);
            if (self.width()<=640){
                console.log('Mobile version activated. Width: '+self.width());
                mobileLayout();
            }
            else location.reload();
        },300);
    });
});
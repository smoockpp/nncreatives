'use strict';

const xhrRequest = (callback, url) => {

    let xhr = new XMLHttpRequest();
    let data;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE ) {
           if (xhr.status == 200) {
             data = JSON.parse(xhr.responseText);
             callback(data);
           }
           else if (xhr.status == 400) {
              console.log('There was an error 400');
           }
           else {
               console.log('something else other than 200 was returned');
           }
        }
    };
    xhr.open("GET", url, true);
    
    xhr.send();
};

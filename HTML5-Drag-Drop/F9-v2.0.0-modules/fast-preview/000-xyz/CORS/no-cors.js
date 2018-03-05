"use strict";

const url = `https://api.mlab.com/api/1/databases/gildata_crm/collections/test?q={}&apiKey=YpeswCDPr9CvDfmeIuawnh-iD5-oH0_G`

/**
 * @author xgqfrms
 * @description CORS & Fetch API
 *
 * @param {Boolean} debug
 */

const getdata = (debug = false) => {
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    }).then(
        (response) => {
            console.log(`fetch response`, response);
            return response.json();
        }
    ).then(
        (json) => {
            console.log(`fetch json`, json);
            let data = JSON.stringify(json);
            return data;
        }
    ).catch(
        (err) => {
            const color = `
                color: red;
                background: rgba(125, 125, 125, 0.7);
                font-size: 23px;
            `;
            console.log(`%c Whoops, An Error occurred!`, color, err);
            throw new Error("Whoops, An Error occurred!", err);
        }
    );
};

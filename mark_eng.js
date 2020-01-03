// ==UserScript==
// @name         trans
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  translate Chinese from English and write to a .md file.
// @author       Hank
// @include      *
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';
    var getSelectText = function () {
        var text = window.getSelection().toString();
        if (text && escape(text).indexOf('%u') < 0) {
            var local_data = 'http://localhost:8011?src=' + text
            console.log(local_data)
            GM_xmlhttpRequest({
                method: 'GET',
                url: local_data,
                onload: res => {
                    console.log(res.response)
                }
            })
        }
    }
    window.addEventListener('click', getSelectText)
})();
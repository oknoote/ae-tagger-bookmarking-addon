// ==UserScript==
// @name         AE Tagger bookmarking add-on
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prefills and submits the AE tagger form based on URL parameter "q". This allows you to bookmark examples you often use.
// @author       Owen Knoote
// @match        https://ae-tools.corp.bloomreach.com/ae-tagger.html?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url_string = window.location.href;
    var url = new URL(url_string);
    var query = url.searchParams.get("q");
    console.log("URL query:"+query);
    $("#query-input").val(query);
    $("#run-tagger-button").click();
})();
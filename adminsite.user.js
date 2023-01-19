// ==UserScript==
// @name           Adminsite
// @description    Category opener for chameleon admin site
// @version        1.9
// @downloadURL    https://gist.github.com/Lovasz-Akos/41cfe0e2cb742635b0819b157b3f0d5f/raw/f5106c733a91bebab1be1780fe01186dd9dab334/chameleon.user.js
// @updateURL      https://gist.github.com/Lovasz-Akos/41cfe0e2cb742635b0819b157b3f0d5f/raw
// @match          https://admin.cloud.chameleon-smarthome.com/*
// @grant          GM.xmlHttpRequest
// @grant          GM_xmlhttpRequest
// @grant          GM.getValue
// @grant          GM_getValue
// @grant          GM.setValue
// @grant          GM_setValue
// @grant          GM.info
// @grant          GM_info
// @require        https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require        http://code.jquery.com/jquery-latest.js
// @run-at         document-end
// ==/UserScript==

var interval = setInterval(function () {
  if (document.getElementsByClassName("btn btn-info ng-binding")[0] != null) {
    if (
      window.location.href ===
      "https://admin.cloud.chameleon-smarthome.com/#/homes"
    ) {
      for (let i = 0; i < 23; i++) {
        $(function () {
          document.getElementsByClassName("btn btn-info ng-binding")[i].click();
        });
      }
      clearInterval(interval);
    }
  }
}, 200);

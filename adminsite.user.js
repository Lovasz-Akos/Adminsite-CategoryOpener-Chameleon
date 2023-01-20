// ==UserScript==
// @name           Adminsite
// @description    Category opener for chameleon admin site
// @version        2.3
// @downloadURL    https://github.com/Lovasz-Akos/Adminsite-CategoryOpener-Chameleon/raw/master/adminsite.user.js
// @updateURL      https://github.com/Lovasz-Akos/Adminsite-CategoryOpener-Chameleon/raw/master/adminsite.user.js
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

var zNode = document.createElement("div");
zNode.innerHTML =
  '<button id="myButton" type="button">' + "Open/Close all categories</button>";
zNode.setAttribute("id", "myContainer");
document.body.appendChild(zNode);

//--- Activate the newly added button.
document
  .getElementById("myButton")
  .addEventListener("click", ButtonClickAction, false);

function ButtonClickAction(zEvent) {
  if (document.getElementsByClassName("btn btn-info ng-binding")[0] != null) {
    if (
      window.location.href ===
      "https://admin.cloud.chameleon-smarthome.com/#/homes"
    ) {
      for (
        let i = 0;
        i < document.getElementsByClassName("btn btn-info ng-binding").length;
        i++
      ) {
        $(function () {
          document.getElementsByClassName("btn btn-info ng-binding")[i].click();
        });
      }
    }
  }
}

//--- Style our newly added elements using CSS.
GM_addStyle(`
    #myContainer {
        position:               absolute;
        top:                    40pt;
        left:                   0;
        font-size:              20px;
        margin:                 2px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 15px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
`);

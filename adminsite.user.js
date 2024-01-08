// ==UserScript==
// @name           Adminsite
// @description    Category opener for chameleon admin site
// @version        2.8
// @downloadURL    https://github.com/Lovasz-Akos/Adminsite-CategoryOpener-Chameleon/raw/master/adminsite.user.js
// @updateURL      https://github.com/Lovasz-Akos/Adminsite-CategoryOpener-Chameleon/raw/master/adminsite.user.js
// @match          https://admin.cloud.chameleon-smarthome.com/#/homes
// @match          https://adminca.cloud.chameleon-smarthome.com/#/homes
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


if (
  window.location.href ===
  "https://admin.cloud.chameleon-smarthome.com/#/homes" || "adminca.cloud.chameleon-smarthome.com/#/homes" || "techforcecoadmin.chameleon.sh/#/homes"
) {
  var zNode = document.createElement("div");
  zNode.innerHTML =
    '<button id="categories" type="button">' + "Open / Close All</button>";
  zNode.setAttribute("id", "myContainer");
  document.body.appendChild(zNode);
}


//--- Activate the newly added button.
document
  .getElementById("categories")
  .addEventListener("click", ButtonClickAction, false);

function ButtonClickAction(zEvent) {
  if (document.getElementsByClassName("btn btn-info ng-binding")[0] != null) {
    if (
      window.location.href ===
      "https://admin.cloud.chameleon-smarthome.com/#/homes" || "adminca.cloud.chameleon-smarthome.com/#/homes" || "techforcecoadmin.chameleon.sh/#/homes"
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
      font-size:              15px;
      margin:                 2px;
      opacity:                0.9;
      z-index:                1100;
      padding:                5px 15px;
  }
  #categories {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      box-sizing: border-box;
      font: inherit;
      margin: 0;
      overflow: visible;
      text-transform: none;
      -webkit-appearance: button;
      font-family: inherit;
      display: inline-block;
      margin-bottom: 0;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      border: 1px solid transparent;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      user-select: none;
      color: #fff;
      background-color: #5bc0de;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
      background-image: linear-gradient(to bottom, #5bc0de 0%, #2aabd2 100%);
      background-repeat: repeat-x;
      border-color: #28a4c9;
  }
  #myContainer p {
      color:                  red;
      background:             white;
  }
`);

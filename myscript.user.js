// ==UserScript==
// @name         TM Example – Hello World
// @namespace    https://github.com/hikem1/tm-example
// @version      1.0.0.8
// @description  Exemple Tampermonkey développé avec VS Code et GitHub
// @match           *://*/*
// @updateURL    https://raw.githubusercontent.com/hikem1/tm-example/main/myscript.user.js?v=1.0.0.8
// @downloadURL  https://raw.githubusercontent.com/hikem1/tm-example/main/myscript.user.js
// @grant        none
// @require      https://raw.githubusercontent.com/hikem1/tm-example/main/lib.js
// ==/UserScript==

(function () {
    'use strict';

    console.log('✅ Script Tampermonkey chargéeeeeerrr!');

    sayHello('Tampermonkey');
})();

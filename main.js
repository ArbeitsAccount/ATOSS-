// ==UserScript==
// @name         ATOSS++
// @namespace    http://tampermonkey.net/
// @version      1.5.1
// @description  fixes stuff atoss is too dumb to fix themselves
// @updateURL   https://raw.githubusercontent.com/ArbeitsAccount/ATOSS-/refs/heads/main/main.js
// @downloadURL https://raw.githubusercontent.com/ArbeitsAccount/ATOSS-/refs/heads/main/main.js
// @author       Robin Feuerer
// @match        https://hoffmann-group.atoss.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atoss.com
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    const targets = ['Anwesenheitsbeginn stempeln', 'Pause / Anwesenheitsende stempeln'];
    new MutationObserver(() => {
        document.querySelectorAll('button[data-test="ws-info-button"]:not(.highlighted)').forEach(btn => {
            if (!btn.disabled && targets.includes(btn.getAttribute('aria-label'))) {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
            }
        });
    }).observe(document.body, { childList: true, subtree: true });
})();

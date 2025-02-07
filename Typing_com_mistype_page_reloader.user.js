// ==UserScript==
// @name         Typing.com mistype page reloader
// @namespace    https://github.com/DanielQuinan
// @version      2025-02-07
// @description  Page reloader for every typing mistake, so the user don't have to always manually reload the page or click the reload button
// @author       Daniel Quinan
// @match        www.typing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    function checkForWrongClass() {
        const letterElements = document.querySelectorAll('.letter--basic');

        for (const element of letterElements) {
            if (element.classList.contains('is-wrong')) {
                console.log('Elemento "letter--basic" com classe "is-wrong" encontrado. Atualizando a página...');
                location.reload();
                return;
            }
        }
    }

    checkForWrongClass();

    setInterval(checkForWrongClass, 1000);

    const observer = new MutationObserver(checkForWrongClass);
    observer.observe(document.body, { childList: true, subtree: true });
})();



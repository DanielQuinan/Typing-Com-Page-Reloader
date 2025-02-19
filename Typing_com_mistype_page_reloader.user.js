// ==UserScript==
// @name         Typing.com Mistype Auto Restart
// @namespace    https://github.com/DanielQuinan
// @version      2025-02-19
// @description  Automatically clicks on the restart button whevener a mistype is written
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
                console.log('Error Detected');

                const restartButton = document.querySelector('.js-restart-screen');
                if (restartButton) {
                    restartButton.click();
                } else {
                    console.log('Restart Button Not Found');
                }

                return;
            }
        }
    }


    checkForWrongClass();

    setInterval(checkForWrongClass, 1000);

    const observer = new MutationObserver(checkForWrongClass);
    observer.observe(document.body, { childList: true, subtree: true });
})();
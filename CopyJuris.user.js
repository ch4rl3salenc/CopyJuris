// ==UserScript==
// @name          Copiar Jurisprudência Jusbrasil
// @namespace     Copiar
// @description   copia
// @shortcutKeys  [Ctrl + `] ativação
// @author        Hackerman
// @version       0.1
// @include       http*://*.jusbrasil.com.br/*
// @icon          asdf
// @compatible    Chrome Google Chrome + Tampermonkey
// @grant         GM_registerMenuCommand
// @license       BSD
// @copyright     Hackerman, 02-07-2020
// ==/UserScript==

(function() {
    'use strict';

    const intervalo= setInterval( ()=>{
        const texto = document.querySelectorAll(".FactsForReferenceModalComponent-body")[0].textContent;
        console.log(texto);

        if (texto) {

            clearInterval(intervalo);

            var textArea = document.createElement("textarea");
            textArea.value = texto;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");


    }

}, 1000)


})();
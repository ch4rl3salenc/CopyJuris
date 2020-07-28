// ==UserScript==
// @name            Copiar Jurisprudência Jusbrasil
// @namespace       https://github.com/ch4rl3salenc/CopyJuris
// @description     copia
// @shortcutKeys    [Ctrl + `] ativação
// @author          ch4rl3salenc
// @version         0.1
// @include         http*://*.jusbrasil.com.br/*
// @icon            https://i.imgur.com/AC7SyUr.png
// @compatible      Chrome Google Chrome + Tampermonkey
// @grant           GM_registerMenuCommand
// @license         MIT
// @copyright       2020, ch4rl3salenc (https://openuserjs.org/users/ch4rl3salenc)
// ==/UserScript==

//==OpenUserJS==
//outhor            ch4rl3salenc
//==/OpenUserJS==

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
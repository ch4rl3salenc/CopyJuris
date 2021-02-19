// ==UserScript==
// @name            Copiar Jurisprudência Jusbrasil
// @namespace       Copiar
// @description     copia
// @shortcutKeys    [Ctrl + `] ativação
// @author          ch4rl3salenc
// @version         0.1
// @include         http*://*.jusbrasil.com.br/*
// @icon            asdf
// @compatible      Chrome Google Chrome + Tampermonkey
// @grant           GM_registerMenuCommand
// @license         LGPL-3.0-or-later; https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/LICENSE
// ==/UserScript==

(function() {
    'use strict';

    const intervalo= setInterval( ()=>{
        const texto = document.querySelectorAll(".CopyContentModal-body")[0].textContent;
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

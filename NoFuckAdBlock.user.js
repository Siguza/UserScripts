// ==UserScript==
// @name         NoFuckAdBlock
// @namespace    siguza.nofuckadblock
// @version      1.1
// @description  Fuck "FuckAdBlock"
// @author       Siguza
// @homepage     https://github.com/Siguza/UserScripts
// @include      /^https?:\/\/.*/.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.adBlockDetected = function(){};
window.adBlockNotDetected = function(){};
// FuckAdBlock
var func = null;
var fake =
{
    on: function(bool, call)
    {
        if(!bool)
        {
            func = call;
        }
        return fake;
    },
    onDetected: function()
    {
        return fake;
    },
    setOption: function(){},
    check: function()
    {
        return false;
    },
};
fake.adBlockNotDetected = fake.onNotDetected = function(call)
{
    func = call;
    return fake;
};
Object.freeze(fake);
Object.defineProperty(window, 'fuckAdBlock',
                      {
    get: function()
    {
        return fake;
    },
    set: function(val)
    {
        // lolnope
    },
});
document.addEventListener('DOMContentLoaded', function()
{
    if(func !== null)
    {
        func();
    }
});

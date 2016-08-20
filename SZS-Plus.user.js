// ==UserScript==
// @name         SZS-Plus
// @namespace    siguza.szs.plus
// @version      1.1.1
// @description  Just my own style...
// @author       Siguza
// @homepage     https://github.com/Siguza/Stash/UserScripts
// @include      /^https?:\/\/szs\.looki\.de\/.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==
/* jshint -W097 */
'use strict';

function run()
{
    var code;
    if(document.body.children.length == 1 && document.querySelector('td[align=center]') !== null && document.querySelector('td[align=center]').innerHTML.indexOf('Deine LoginZeit ist abgelaufen.') > -1)
    {
        location.pathname = '/login.php';
        return;
    }
    var refresh = document.querySelector('meta[http-equiv=refresh]');
    if(refresh)
    {
        var m = /\d+;url=(.*)$/.exec(refresh.getAttribute('content'));
        if(m)
        {
            location.href = m[1];
        }
        return;
    }
    if(location.pathname == '/login.php')
    {
        code = document.getElementsByName('code')[0];
        code.setAttribute('autocomplete', 'off');
        code.focus();
    }
    code = document.getElementsByName('zufallscode')[0];
    if(code)
    {
        code.setAttribute('autocomplete', 'off');
        code.focus();
    }
    Array.prototype.forEach.call(document.querySelectorAll('a'), function(a)
    {
        if((/^(https?:)\/\//.test(a.href) ? a.href : location.origin + (a.href.charAt(0) == '/') ? a.href : (location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1) + a.href)) == location.href)
        {
            a.classList.add('currentlink');
        }
    });
}

document.head.appendChild(document.createElement('style')).innerHTML = `
td[align=center] > center:first-child, td[valign=top][align=left], td[width="570"] ~ td[width="97"] > table:last-child, a[href="premium.php"], a[href="premium.php"] + br, img[width="1"][height="1"]
{
    display: none !important;
}
[background="/static/bgg.png"]
{
    background: none;
}
td[width="570"]
{
    min-width: 800px;
    padding-top: 103px;
    padding-bottom: 57px;
    text-align: center;
}
td[colspan="7"]
{
    position: relative;
}
td[colspan="7"] > img
{
    position: absolute;
    left :calc(50% - 400px);
}
img[alt="Fussbanner"]
{
    bottom: 0;
}
td[width="97"] > table > tbody > tr > td
{
    padding: 0 4px;
}
td[width="97"] > table > tbody > tr + tr > td
{
    padding: 3px 4px;
}
td[width="97"] > br
{
    display: none;
}
form table[border="0"]
{
    margin: auto;
}
td[width="97"] > table
{
    min-width: 100px;
    max-width: 100px;
}
td[width="97"]
{
    padding-bottom: 7px;
    position: relative;
}
td[width="97"]::after
{
    content: "";
    background: url("/static/menu.png");
    display: block;
    width: 100%;
    height: 7px;
    position: absolute;
    bottom: 0;
}
.currentlink
{
    color: #0FF;
}
.currentlink:hover
{
    color: #0CC;
}
`;

if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', run);
}
else
{
    run();
}

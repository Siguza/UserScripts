// ==UserScript==
// @name         Em8erPlus
// @author       Siguza
// @version      1.0.1
// @description  Accessibility improvements to the Em8er website
// @namespace    siguza.em8erplus
// @homepage     https://github.com/Siguza/UserScripts
// @run-at       document-start
// @grant        none
// @include      /^https?:\/\/(.*\.)?em8er\.com/.*$/
// ==/UserScript==
/*jshint multistr: true */

document.head.appendChild(document.createElement('style')).innerHTML = `
*:not(.nodeIcon>i)
{
    font-family: 'Helvetica Neue' !important;
}
#XenForo .backstretch
{
    display: none !important;
}
`;

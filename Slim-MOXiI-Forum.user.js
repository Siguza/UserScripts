// ==UserScript==
// @name         Slim-MOXiI-Forum
// @namespace    siguza.slimmoxii
// @version      1.0
// @description  Make forum not 100% of width
// @author       Siguza
// @homepage     https://github.com/Siguza/Stash/UserScripts
// @include      /^https?:\/\/(.*\.)?newosxbook\.com\/forum\/.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==
/* jshint -W097 */
'use strict';

document.head.appendChild(document.createElement('style')).innerHTML = '#wrap{width:1200px;margin:auto;}';
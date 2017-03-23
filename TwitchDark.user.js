// ==UserScript==
// @name         TwitchDark
// @author       Siguza
// @version      1.2.0
// @description  Full dark style for Twitch
// @namespace    siguza.twitchdark
// @homepage     https://github.com/Siguza/UserScripts
// @run-at       document-start
// @grant        none
// @include      /^https?:\/\/www\.twitch\.tv/.*$/
// ==/UserScript==
/*jshint multistr: true */

document.head.appendChild(document.createElement('style')).innerHTML = `
#channel .player-column #broadcast-meta .info .title:hover, .player-placeholder, .brick--theme-white, .cl-container .cl-section, .cl-container .section-header,
.cl-container .cl-section .cl-subheader, .autohost-onboarding
{
    background: none !important;
}
.cl-container .section-header .header-content .title, .cl-container .cl-section .cl-subheader
{
    color: #FFF !important;
}
#settings_contain, .cl-container fieldset .label-wrapper label, .cl-container .section-header .header-content .desc, .sub-text, #settings .form_microcopy,
.cl-container fieldset .cl-input-container label
{
    color: #CCC !important;
}
.border-t, .border-b, .brick--theme-white, .cl-container .cl-section, .cl-container .section-header, .cl-container fieldset
{
    border-color: #3b3258 !important;
}
.cl-container .cl-section
{
    border-style: solid;
    border-width: 1px;
}
.chat-container.dark, .app-main.theatre .chat-container, .chat-container.force-dark, .ember-chat-container.dark, .app-main.theatre .ember-chat-container,
.ember-chat-container.force-dark
{
    box-shadow: inset 1px 0 0 0 #3b3258 !important;
}
.cn-bar
{
    box-shadow: inset 0 -1px 0 #3b3258 !important;
}
.chat-container.dark span[style="color:#0000FF"]
{
    color: #2266FF !important;
}
.chat-container.dark span[style="color:#191971"]
{
    color: #225599 !important;
}
.chat-container.dark span[style="color:#1B2211"], .chat-container.dark span[style="color:#000000"]
{
    color: #DDD !important;
}
#main_col, .cn-bar
{
    background: #17141f !important;
}
#main_col
{
    box-shadow: inset 1px 0 0 0 #3B3258 !important;
}
#channel .player-column #broadcast-meta .info .title, #channel .player-column #broadcast-meta .info .channel, .panel-formatting .panel
{
    color: #7d7789 !important;
}
.panel-formatting .panel h2, .panel-formatting .panel h3, .card__title
{
    color: #aea9b7 !important;
}
a:hover, a:focus, a:hover .cn-bar__displayname
{
    color: #8971c1 !important;
    text-decoration: none !important;
}
.items-grid .meta p a:not(:hover), .cn-tabs__item > a:not(:hover), .cn-bar__displayname:not(:hover), .tw-tabs__item>a.active, .tw-tabs__item>button.active
{
    color: #6441a4;
}
ul.tabs li>a.active:not(:hover), .directory_header .nav li>a.active:not(:hover), ul.tabs li>button.active:not(:hover),
.directory_header .nav li>button.active:not(:hover), ul.tabs_fake li>a.active:not(:hover), ul.tabs_fake li>button.active:not(:hover)
{
    color: #6441a4;
    border-color: #6441a4 !important;
}
ul.tabs li>a.active:hover, .directory_header .nav li>a.active:hover, ul.tabs li>button.active:hover, .directory_header .nav li>button.active:hover,
ul.tabs_fake li>a.active:hover, ul.tabs_fake li>button.active:hover
{
    color: #8971c1 !important;
    border-color: #8971c1 !important;
}
.cn-tabs__item>a:hover:after
{
    border: none !important;
}
input[type="radio"]
{
    margin: 0 7px;
}
`;

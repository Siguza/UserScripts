// ==UserScript==
// @name         TwitchDark
// @author       Siguza
// @version      1.1.1
// @description  Full dark style for Twitch
// @namespace    siguza.twitchdark
// @homepage     https://github.com/Siguza/UserScripts
// @run-at       document-start
// @grant        none
// @include      /^https?:\/\/www\.twitch\.tv/.*$/
// ==/UserScript==
/*jshint multistr: true */

document.head.appendChild(document.createElement('style')).innerHTML = `
.chat-container.dark, .app-main.theatre .chat-container, .chat-container.force-dark, .ember-chat-container.dark, .app-main.theatre .ember-chat-container, .ember-chat-container.force-dark
{
    box-shadow: inset 1px 0 0 0 #322f37 !important;
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
#main_col
{
    background: #17141f !important;
    box-shadow: inset 1px 0 0 0 #3B3258 !important;
}
#channel .player-column #broadcast-meta .info .title:hover
{
    background: none !important;
}
#channel .player-column #broadcast-meta .info .title, #channel .player-column #broadcast-meta .info .channel, .panel-formatting .panel
{
    color: #7d7789 !important;
}
.panel-formatting .panel h2, .panel-formatting .panel h3
{
    color: #aea9b7 !important;
}
a:hover, a:focus
{
    color: #8971c1 !important;
    text-decoration: none !important;
}
.recent-past-broadcast
{
    display: none;
}
`;

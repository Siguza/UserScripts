// ==UserScript==
// @name         Twitch Unclutter Chat Icons
// @author       Siguza
// @version      1.0.1
// @description  Double-tap shift to show/hide chat message action icons
// @namespace    siguza.twitch-unclutter-chaticons
// @homepage     https://github.com/Siguza/UserScripts
// @match        https://www.twitch.tv/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(() =>
{
    let s = document.createElement('style');
    s.innerHTML = 'body.unclutter-chaticons .chat-line__icons{display: none !important}';
    document.head.appendChild(s);

    if(localStorage.getItem('unclutter-chaticons') == 'on')
    {
        document.body.classList.add('unclutter-chaticons');
    }

    let state = { num: 0, time: null };
    let trigger = (ev, act) =>
    {
        if(ev.key != 'Shift' || state.num % 2 != act)
        {
            state.num = 0;
            return;
        }
        let t = (new Date()).getTime();
        if(t - state.time > 1000)
        {
            state.num = 0;
        }
        if(state.num == 0)
        {
            state.time = t;
        }
        if(++state.num == 4)
        {
            state.num = 0;
            state.time = 0;
            if(document.body.classList.contains('unclutter-chaticons'))
            {
                document.body.classList.remove('unclutter-chaticons');
                localStorage.setItem('unclutter-chaticons', 'off');
            }
            else
            {
                document.body.classList.add('unclutter-chaticons');
                localStorage.setItem('unclutter-chaticons', 'on');
            }
        }
    };
    window.addEventListener('keydown', ev => trigger(ev, 0));
    window.addEventListener('keyup', ev => trigger(ev, 1));
})();

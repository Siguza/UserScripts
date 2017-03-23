// ==UserScript==
// @name         AppleSource+
// @author       Siguza
// @version      1.0.2
// @description  Improvements for opensource.apple.com
// @namespace    siguza.applesource
// @homepage     https://github.com/Siguza/UserScripts
// @run-at       document-start
// @grant        none
// @include      /^https?:\/\/opensource\.apple\.com\/(source|tarballs)\/[^\/]+\/$/
// ==/UserScript==

function ready(fn)
{
    void(document.readyState == 'loading' ? window.addEventListener('DOMContentLoaded', fn) : fn());
}

ready(function()
{
    function f(a, b)
    {
        a = a.split('.');
        b = b.split('.');
        var c = Math.min(a.length, b.length);
        for(var i = 0; i < c; ++i)
        {
            var d = a[i] - b[i];
            if(d !== 0)
            {
                return d;
            }
        }
        return a.length - b.length;
    }
    var r = location.pathname.split('/')[1] == 'tarballs' ? /^.*?-([0-9\.]+)\.tar\.gz$/ : /^.*?-([0-9\.]+)\/$/;
    var t = document.querySelector('table');
    for(var i = 0; i < t.rows.length; ++i)
    {
        var c = t.rows[i].cells[1],
            a = c && c.querySelector('a');
        if(a && a.getAttribute('href') == a.textContent)
        {
            var j = i;
            for(; i < t.rows.length; ++i)
            {
                c = t.rows[i].cells[1];
                a = c && c.querySelector('a');
                if(!a || a.getAttribute('href') != a.textContent)
                {
                    var b = t.tBodies[t.tBodies.length - 1];
                    Array.prototype.slice.call(t.rows, j, i).sort(function(x, y)
                                                                  {
                        var xx = r.exec(x.cells[1].querySelector('a').textContent),
                            yy = r.exec(y.cells[1].querySelector('a').textContent);
                        return xx && yy && f(xx[1], yy[1]);
                    }).forEach(function(e)
                               {
                        b.insertBefore(e, t.rows[i]);
                    });
                    break;
                }
            }
            break;
        }
    }
});

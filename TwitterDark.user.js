// ==UserScript==
// @name         TwitterDark
// @author       Siguza
// @version      1.0.0
// @description  Full dark style for Twitter
// @namespace    siguza.twitterdark
// @homepage     https://github.com/Siguza/Stash/tree/master/UserScripts
// @run-at       document-start
// @grant        none
// @include      /^https?:\/\/(www\.)?twitter\.com/.*$/
// ==/UserScript==
/*jshint multistr: true */

document.head.appendChild(document.createElement('style')).innerHTML = `
.permalink, .Gallery-content, .DMActivity, .ProfileCard, .DashboardProfileCard
{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEUaGhohISElJSUh9lebAAAB20lEQVRIx4XWuZXDMAwE0C0SAQtggIIYoAAEU+aKOHhYojTrYP2+QfOW/5QIJOih/q8HwF/pb3EX+UPIveYcQGgEHiu9hI+ihEc5Jz5KBIlRRRaJ1JtoSAl5Hw96hLB1/up1tnIXOck5jZQy+3iU2hAOKSH1JvwxHsp+5TLF5MOl1/MQXsVs1miXc+KDbYydyMeUgpPQreZ7fWidbNhkXNJSeAhc6qHmHD8AYovunYyEACWEbyIhNeB9fRrH3hFi0bGPLuEW7xCNaohw1vAlS805nfsrTspclB/hVdoqusg53eH7FWot+wjYpOViX8KbFFKTwlnzvj65P9H/vD0/hibYBGhPwlPO8TmxRsaxsNnrUmUXpNhirlJMPr6Hqq9k5Xn/8iYQHYIuQsWFC6Z87IOxLxHphSY4SpuiU87xJnJr5axfeRd+lnMExXpEWPpuZ1v7qZdNBOjiHzDREHX5fs5Zz9p6X0vVKbKKchlSl5rv+3p//FJ/PYvoKryI8vs+2G9lzRmnEKkh+BU8yDk515jDj/HAswu7CCz6U/Mxb/PnC9N41ndpU4hUU7JGk/C9PmP/M2xZYdvBW2PObyf1IUiIzoHmHW9yTncliYs9A9tVNppdShfgQaTLMf+j3X723tLeHgAAAABJRU5ErkJggg==) !important;
}
.global-nav-inner, .ProfileCanopy-navBar, .ProfileAvatar, .ProfileCard-avatarLink
{
    background: #000 !important;
}
body.three-col, body.ProfilePage, .follow-button,
.module .flex-module, .stream-item:not(.no-header-background-module), .ProfileHeading-content, .home-tweet-box, .LiveVideo-tweetBox, .RetweetDialog-commentBox,
.WebToast-box--altColor, .new-tweets-bar, .permalink-tweet:not(:hover), .ThreadedConversation, .ThreadedConversation--loneTweet, .TwitterCard .SummaryCard-image,
.ThreadedConversation-viewOther, .ThreadedConversation-showMore, .GalleryTweet, .WhoToFollow, .ProfileNav-item--userActions, .DMActivity-body, .DMActivity-header,
.DMDivider, .stream-end-inner, .GridTimeline-footerIcon, .hovercard .profile-social-proof, .inline-reply-tweetbox, .UserActions-editButton, .ProfileClusterFollow,
.DashboardProfileCard-avatarLink, .content-header .header-inner, .content-no-header .no-header-inner
{
    background: none !important;
}
.follow-button, .stream-item:not(.no-header-background-module), .tweet,
.ProfileHeaderCard, .TwitterCard, .QuoteTweet .tweet-content, .QuoteTweet-text a, .QuoteTweet-text a:hover, .QuoteTweet-text a:focus, .QuoteTweet-text a:active, .QuoteTweet-text .pretty-link b, .QuoteTweet-text .pretty-link s, .QuoteTweet-text .pretty-link:hover b, .QuoteTweet-text .pretty-link:hover s, .QuoteTweet-text .pretty-link:focus b, .QuoteTweet-text .pretty-link:focus s, .QuoteTweet-text .pretty-link:active b, .QuoteTweet-text .pretty-link:active s,
.ProfileHeaderCard-birthdateText, .ProfileHeaderCard-joinDateText, .ProfileHeaderCard-locationText, .ProfileHeaderCard-onlineHoursText, .ProfileHeaderCard-responsivenessLevelText, .ProfileHeaderCard-vineProfileText, .ProfileHeading-toggleItem.is-active, .ProfileHeading-toggleItem.is-active:hover, .ProfileHeading-toggleItem.is-active:focus, .ProfileNav-item.is-active .ProfileNav-value, .ProfileNav-item.is-active:hover .ProfileNav-value,
.DirectMessage--received .DirectMessage-text, .DirectMessage--sent .DirectMessage-text, .ProfileCard-bio, .hovercard.profile-card .bio-container, .UserActions-editButton, .view-toggler .active
{
    color: #CCC !important;
}
h2, h3, .wtf-module h3, .fullname:not(:hover), .ProfileHeaderCard-name, .QuoteTweet-fullname, .ProfileNameTruncated, .DashboardProfileCard-name, .UserActions-editButton:hover
{
    color: #FFF !important;
}
.not-following .follow-button:hover, .following .follow-button
{
    color: #1da1f2 !important;
}
.following .follow-button:hover
{
    color: #e81c4f !important;
}
.tweet:hover, .new-tweets-bar:hover, .TwitterCard-container--clickable:hover, .ThreadedConversation-showMore:hover, div.DMInboxItem:hover
{
    background: rgba(255, 255, 255, .05) !important;
}
.tweet, .new-tweets-bar, .module .flex-module, .stream-item:not(.no-header-background-module), .timeline-tweet-box, .QuoteTweet:not(:hover), .TwitterCard-container, .ThreadedConversation, .ThreadedConversation-viewOther .view-other-link,
.ProfileHeading-content, .WhoToFollow, .stream-end-item, .stream-end, .stream-loading, .stream-placeholder, .ProfileCard, .DashboardProfileCard,
.content-header .header-inner, .content-no-header .no-header-inner, .content-header, .content-no-header
{
    border-color: rgba(255, 255, 255, .2) !important;
}
.ThreadedConversation, .ThreadedConversation-showMore, .ThreadedConversation-showMore:after, .ThreadedConversation+.ThreadedConversation--loneTweet, :not(.ThreadedConversation--ownReply)+.ThreadedConversation--ownReply, .ThreadedConversation--ownReply+.ThreadedConversation--loneTweet:not(.ThreadedConversation--ownReply), .ThreadedConversation--loneTweet:first-child,
.permalink .inline-reply-tweetbox
{
    border-top-color: rgba(255, 255, 255, .2) !important;
}
.DMInboxItem, .DMActivity-header, .DMDivider:before, .ProfileCard-bg, .DashboardProfileCard-bg, .ProfileClusterFollow, .permalink.has-replies .inline-reply-tweetbox, .stream-item-activity-notification
{
    border-bottom-color: rgba(255, 255, 255, .2) !important;
}
.follow-button, .UserActions-editButton
{
    border-color: rgba(255, 255, 255, .3) !important;
}
.ThreadedConversation-showMore:after, .hovercard.profile-card .ProfileCard-avatarImage
{
    border: none !important;
}
.ProfileAvatar, .DashboardProfileCard-avatarImage
{
    border-color: #000 !important;
}
.ProfileAvatar
{
    box-shadow: none !important;
}
.ProfileCard-avatarLink
{
    border: solid 2px #000 !important;
    padding: 0 !important;
    margin: -44px 3px 1px -2px !important;
}
.hovercard.profile-card
{
    border: solid 1px rgba(255, 255, 255, .2) !important;
}
.ThreadedConversation-showMore
{
    height: 45px !important;
}
.show-more-link:hover
{
    text-decoration: none !important;
}
.DirectMessage--sent .DirectMessage-message
{
    background: rgba(0, 160, 255, .2) !important;
}
.DirectMessage--received .DirectMessage-message
{
    background: rgba(255, 255, 255, .1) !important;
}
.DMInboxItem.is-unread
{
    background: rgba(0, 160, 255, .15) !important;
}
.DMInboxItem.is-unread:hover
{
    background: rgba(0, 160, 255, .25) !important;
}
.GridTimeline-footer:before
{
    background: rgba(255, 255, 255, .25) !important;
}
.spinner, .pushing-state .pushstate-spinner
{
    -webkit-filter: invert(100%) hue-rotate(180deg) !important;
    filter: invert(100%) hue-rotate(180deg) !important;
}
` + (top === window ? `
html
{
    background-color: #000 !important;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEUaGhohISElJSUh9lebAAAB20lEQVRIx4XWuZXDMAwE0C0SAQtggIIYoAAEU+aKOHhYojTrYP2+QfOW/5QIJOih/q8HwF/pb3EX+UPIveYcQGgEHiu9hI+ihEc5Jz5KBIlRRRaJ1JtoSAl5Hw96hLB1/up1tnIXOck5jZQy+3iU2hAOKSH1JvwxHsp+5TLF5MOl1/MQXsVs1miXc+KDbYydyMeUgpPQreZ7fWidbNhkXNJSeAhc6qHmHD8AYovunYyEACWEbyIhNeB9fRrH3hFi0bGPLuEW7xCNaohw1vAlS805nfsrTspclB/hVdoqusg53eH7FWot+wjYpOViX8KbFFKTwlnzvj65P9H/vD0/hibYBGhPwlPO8TmxRsaxsNnrUmUXpNhirlJMPr6Hqq9k5Xn/8iYQHYIuQsWFC6Z87IOxLxHphSY4SpuiU87xJnJr5axfeRd+lnMExXpEWPpuZ1v7qZdNBOjiHzDREHX5fs5Zz9p6X0vVKbKKchlSl5rv+3p//FJ/PYvoKryI8vs+2G9lzRmnEKkh+BU8yDk515jDj/HAswu7CCz6U/Mxb/PnC9N41ndpU4hUU7JGk/C9PmP/M2xZYdvBW2PObyf1IUiIzoHmHW9yTncliYs9A9tVNppdShfgQaTLMf+j3X723tLeHgAAAABJRU5ErkJggg==) !important;
}` : '');


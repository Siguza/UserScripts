document.head.appendChild(document.createElement('style')).innerHTML = `
.ctx-menu
{
    background: hsl(209.99997245147748, 6.249999814463081%, 7%) !important;
}
.right-column, .conversation-title-bar, .conversation-input-bar, .content-titlebar, .preferences-titlebar, .modal-header, .input
{
    background: hsl(209.99997245147748, 6.249999814463081%, 12%) !important;
}
pre
{
    background: hsl(209.99997245147748, 6.249999814463081%, 15%) !important;
}
.app, .detail-view.modal::before, .modal-content
{
    background: hsl(209.99997245147748, 6.249999814463081%, 20%) !important;
}
.conversation-input-bar-editing
{
    background: #666 !important;
}
.preferences-account-input:hover, .preferences-account-input:focus, .conversation-details__name--input:hover, .conversation-details__name--input:focus
{
    background: rgba(255, 255, 255, .1) !important;
}
.message.hover .time, .message:hover .time, .message.hover .context-menu, .message:hover .context-menu, .message .show-timestamp.time, .conversation-details__name--input
{
    background: none !important;
}
.conversation-input-bar-text::placeholder, .input::placeholder
{
    color: #777 !important;
}
.ctx-menu, .text-graphite-dark
{
    color: #AAA !important;
}
.message.hover .time, .message:hover .time, .message.hover .context-menu, .message:hover .context-menu, .message .show-timestamp.time, .message-status, .panel__info-text, .preferences-detail, .preferences-devices-activated, .preferences-hint
{
    color: #CCC !important;
}
.app, .conversation-input-bar-text, .input, .preferences-content, .preferences-options-checkbox-label, .preferences-label, .preferences-devices-fingerprint-label, .preferences-av-select, user-input.user-list-light
{
    color: #EEE !important;
}
.center-column svg, .right-column svg, .message-header-label-sender
{
    filter: invert(100%) hue-rotate(180deg) brightness(1.5) !important;
}
.messages, .conversation-input-bar-text
{
    max-width: none !important;
}
.right-column
{
    box-shadow: none !important;
}
.group-creation-modal-header
{
    margin: 0 !important;
    padding: 0 16px !important;
}
pre
{
    font-family: Menlo !important;
    font-size: 15px !important;
    line-height: 1.2em !important;
    padding: 2px 3px !important;
}
`;

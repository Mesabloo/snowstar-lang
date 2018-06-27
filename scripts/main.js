$('body header span.home').on('click', () => {
    console.debug('Home clicked')
    const panel = $('body span.panel')
    if (panel.css('left') === '0px')
        panel.css('left', '-100%')
    else
        panel.css('left', '0px')
})

$('body span[class="panel"] ul li[class="item"]').on('click', () => {
    console.log('Menu item clicked')
    const panel = $('body span.panel')
    panel.css('left', '-100%')
})
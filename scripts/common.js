$(window).on('unload', e => {
    setTimeout(() => {
        $('body').toggleClass('begin')
        $('body').css('opacity', 1)
    }, 500)
})
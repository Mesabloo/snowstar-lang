$(window).on('unload', e => {
    setTimeout(() => {
        $('body').toggleClass('begin')
        $('body').css('opacity', 1)
    }, 500)
})

$('a-link, base-link').click(e => {
    $('body').toggleClass('end')
    setTimeout(() => {
        window.location.href = `${e.target.attributes.href.value}`
    }, 500)
})
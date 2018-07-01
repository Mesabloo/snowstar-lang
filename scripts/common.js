$(window).on('unload', e => {
    setTimeout(() => {
        $('body').toggleClass('begin')
        $('body').css('opacity', 1)
    }, 500)
})

$('web-link:not(".info")').click(e => {
    window.location.href = `${e.target.attributes.href.value}`
})

$(' base-link:not(".info")').click(e => {
    $('body').toggleClass('end')
    setTimeout(() => {
        window.location.href = `${e.target.attributes.href.value}`
    }, 500)
})
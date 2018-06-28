$('body .container ul .item').click((e) => {
    $('body').toggleClass('end')
    setTimeout(() => {
        window.location.href = `${e.target.attributes.name.value}.html`
    }, 500)
})

$(window).on('beforeunload', () => {
    $('body').toggleClass('begin')
    $('body').css('opacity', 1)
})
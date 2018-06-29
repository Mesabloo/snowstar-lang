$('body .container ul .item').click(e => {
    $('body').toggleClass('end')
    setTimeout(() => {
        window.location.href = `${e.target.attributes.name.value}.html`
    }, 500)
})
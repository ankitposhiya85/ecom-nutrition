const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})

$(window).scroll(function () {
    $(window).scrollTop() >= 24 ? $(".navbar").addClass("header-scrolled") : $(".navbar").removeClass("header-scrolled")
});

$(document).ready(function () {
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});



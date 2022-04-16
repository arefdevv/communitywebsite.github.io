function contact(event) {
    event.preventDefault();
    alert("Thanks for your Email, we will contact you shortly")
    emailjs
        .sendForm(
            'service_1s21u5f',
            'template_l5ckvmb',
            event.target,
            'GdOVDS0xw8ke9w8SH'
    ).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is down at the moment, please email us directly at samen.alhojaj2018@gmail.com"
        );
    })
}


var port = gsap.timeline({
    scrollTrigger: {
        trigger: '#s_2',
        start: "-400px top",
        end: "top 250px",
        scrub: true,
        toggleActions: "restart pause reverse reverse"
    },
    defaults: {
        duration: 1,
        opacity: 0
    }
})

port
    .from('#t_3', {
        opacity: 0,
        x: 30
    })
    .from('#port_desc', {
        opacity: 0,
        x: -30
    })
    .from('#s_2_btn', {
        opacity: 0,
        y: 30
    })


var blg = gsap.timeline({
    scrollTrigger: {
        trigger: '#s_3',
        start: "-550px top",
        end: "-100px 300px",
        scrub: true,
        toggleActions: "restart pause reverse reverse"
    },
    defaults: {
        duration: 1,
        opacity: 0
    }
})

blg
    .from('#blg_title', {
        opacity: 0,
        x: -30
    })
    .from('#blg_para', {
        opacity: 0,
        x: -30
    })
    .from('#s_3_btn', {
        opacity: 0,
        y: 30
    })
    .from('#card', {
        opacity: 0,
        x: 30
    })


var tl_main = gsap.timeline({
    scrollTrigger: {
        trigger: '#s_1',
        toggleActions: "restart pause pause reverse"
    },
    defaults: {
        duration: 0.8,
        opacity: 0
    }
})

tl_main
    .from('#t_1', {
        opacity: 0,
        y: 40
    })
    .from('#t_2', {
        opacity: 0,
        y: 40
    })
    .from('#s_1_btn', {
        opacity: 0,
        y: 40
    })
    .from('#s_1_dwn', {
        opacity: 0,
        y: -30,
        ease: 'elastic(1, 0.4)'
    })

var tl = gsap.timeline()

tl.from('#jump',{
    y : 200,
    duration : 2,
    delay : 0.9,
    opacity :0.1,
    stagger :0.9,
    repeat : -1


})
                                        // Skill Section starts
tl.from('.dragleft ',{
   x : -200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.dragleft',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.dragright ',{
   x : 200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.dragright',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.respo ',{
   x : -200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.respo',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.boot ',{
   x : 200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.boot',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.word',{
   x : -200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.word',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.woo ',{
   x : 200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.woo',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.shop ',{
   x : -200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.shop',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.gsap ',{
   x : 200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.gsap',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.js ',{
   x : -200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.js',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
tl.from('.react ',{
   x : 200,
    duration: 1,
    // delay : 0.2,
    opacity : 0,
    // stagger :1,
    scrollTrigger: {
        trigger : '.react',
        start : 'top 50%',
        end : '-150%',
        scrub :1,
        // markers : true,
        
    }
})
           // Skill Section Ended
var colores=['#A50F06','#E28800','#035692','#91A100'];
$(document).ready(function(){
        
    $('#fullpage').fullpage({
        //Navigation
        menu: true,
        anchors:['Julio', 'Kikin', 'Brando', 'Adrian'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Julio', 'Kikin', 'Brando', 'Adrian'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#D20911', '#69411C', '#0F7AC0', '#BCCF00'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            console.log("onLeave -> "+nextIndex);
            pintaColorLogo(nextIndex);
        },
        afterLoad: function(anchorLink, index){
            console.log("afterLoad");
        },
        afterRender: function(){
            console.log("afterRender");
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("afterSlideLoad");
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
            console.log("onSlideLeave");
        }
    });
    
    function pintaColorLogo(ind){
        TweenMax.to($('#header img'), 1, {css:{'backgroundColor':colores[ind-1]}, delay:0.3, ease:Expo.easeOut});
    }
    
    
    $('.gal').hover(function(){   
        document.body.style.cursor='pointer'; 
        TweenMax.to($(this), 0.4, {opacity:1, scale:1.1, ease:Power3.easeOut});
    }, function(){    
        document.body.style.cursor='default';   
        TweenMax.to($(this), 0.4, {opacity:0.5, scale:1, ease:Power3.easeOut});
    })
    $('.gal').click(function() {
        //
    });
    
    
});
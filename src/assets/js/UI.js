$(document).ready(function(){

    $( "#headerMenu" ).append(headerMenu);
    $( "#logo" ).append(logo);
    $( "#leftMenu" ).append(leftMenu);
    $( "#footer" ).append(footer);
    

    $('.headerNav__notify__btn, .headerNav__notify__settings__btn').click(function() {
        $('.headerNav__notify__btn, .headerNav__notify__settings__btn').not(this).next('.popUpMenu').removeClass('toggle');
        $(this).next('.popUpMenu').toggleClass('toggle');             
    });

    $('.popUpMenu__dropmenu a').click(function(){
        $(this).closest('.popUpMenu').removeClass('toggle');
    });

    $('.toggleLeftNav').click(function() {
        $('.pageCover__body__left, .pageCover__header').toggleClass('toggle');
        $('.mainNav__sub, .bi-chevron-down').removeClass('toggle');
    });

    $('.mainNav__dropdown > a').click(function() {
        $(this).next('.mainNav__sub').toggleClass('toggle');
        $(this).children('.bi-chevron-down').toggleClass('toggle');
    });

    $('#addNewCustomer').click(function(){
        $('body').toggleClass('removeScroll');
        $('.slideLeftBox').toggleClass('toggle');
    });

    $('.slideLeftBox__fade, .slideLeftBox__header__close').click(function(){
        $('body').removeClass('removeScroll');
        $('.slideLeftBox').removeClass('toggle');
    });

    $('.darkTheme').click(function(){
        $('body').toggleClass('darkThemeCSS');
    });

    $('.mapFilterToggleBtn').click(function(){
        $('.mapFilter__toggle').toggleClass('toggle');
    });

    $('.statusToggleBtn').click(function(){
        $(this).parent('.status').toggleClass('toggle');
    });

    $('.fullscreenToggle').click(function(){
        $(this).parent('.mapImage').toggleClass('toggle');
        $('body').toggleClass('removeScroll');
    });

    $('.tableUI__sort').click(function(){
        $(this).toggleClass('toggle');
        
    });

    var part = [];
    var url = window.location.href;
    part = (url.toString()).split('/');
    var urlLink = part[part.length-1];
    function currentPage(){    
        $('.mainNav>li>a').removeClass('mainNav_current');
        $('.mainNav').find(`[href='${urlLink}']`).addClass('mainNav_current');
    }
    currentPage();

    if(urlLink === 'dashboard.html'){
        $('.headerNav__pageTitle>span').text('Dashboard');        
        $('body').addClass('dashboardPage');
    }
    if(urlLink === 'cms.html'){
        $('.headerNav__pageTitle>span').text('Customer Management System');
        $('body').addClass('cmsPage');
    }
    if(urlLink === 'map.html'){
        $('.headerNav__pageTitle>span').text('Map View');
        $('body').addClass('mapPage');
    }
    
});




//$( "#headerMenu" ).load( "components/header.html" );
// function load_menu() {
//     document.getElementById("headerMenu").innerHTML='<object type="text/html" data="components/header.html" ></object>';
// };
// window.load(load_menu());


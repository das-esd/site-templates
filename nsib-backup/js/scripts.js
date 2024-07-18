
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            document.getElementById('navbrand').innerHTML ="NSIB";
            document.getElementById('navbrand').style.fontSize ="2rem";
            $("#mainNav").addClass("navbar-shrink");
        } else {
            document.getElementById('navbrand').innerHTML ='<img src="assets/image/nsiblogo.jpg" alt="NSIB" />';
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(document).ready(function(){
   
var list = "1. ALBERT DAVID/ KOLKATA ;2. ARCELLOR MITTAL/ SALTLAKE, KOLKATA ;3. BEACON TILES/ RAJARHAT, KOLKATA ;4. BENGAL DCL/ RAJARHAT, KOLKATA ;5. BENGAL UNITECH/ RAJARHAT, KOLKATA ;6. BIG BAZAR/ GANGULI BAGAN, KOLKATA ;7. BIG BAZAR/ SHREERAMPOOR, HOOGLY ;8. BIG BAZAR/ DURGAPUR ;9. CHOICE FORCE/ SALTLAKE, KOLKATA ;10. CLUB TOWN/ RAJARHAT, KOLKATA ;11. DEVA INTERNATIONAL/ KOLKATA ;12. DEVLOKE NEST/ GARIA, KOLKATA ;13. DREAM BAKE/ DHULAGARH, HOWRAH ;14. DREAM BAKE/ MAHAMAYATALA, KOLKATA ;15. FERRO INDIA PVT LTD/ SALTLAKE, KOLKATA ;16. FOOD CORPORATION, REGIONAL OFFICE/ KOLKATA ;17. FOOD CORPORATION, ZONAL OFFICE/ KOLKATA ;18. HOTEL THE SOJOURN/ KOLKATA ;19. IIPM/ SALTLAKE, KOLKATA ;20. IKF TECHNOLOGIES/ SALTLAKE, KOLKATA ;21. INDIA POST/ AIRPORT, KOLKATA ;22. INSTITUTE OF HOTEL MANAGEMENT/ KOLKATA ;23. KALYANI GOVT ENG COLLAGE/ KALYANI, NADIA ;24. KALYANI JNM HOSPITAL/ KALYANI, NADIA ;25. MAGNACON ELECTRICALS/ SALTLAKE, KOLKATA ;26. MAINAK GARDEN/ GARIA, KOLKATA ;27. MEHO HCP/ SALTLAKE, KOLKATA ;28. METRO CASH & CARRY/ KOLKATA ;29. NDRI/ KALYANI, NADIA ;30. NICCO PARK & RESORTS/ KOLKATA ;31. NWCC/ KOLKATA ;32. PARADISE MERCANTILES/ RAJARHAT, KOLKATA ;33. RELIANCE RETAIL/ EASTERN REGION ;34. RG FASHION/ KOLKATA ;35. RICOH/ SALTLAKE, KOLKATA ;36. S N BOSE/ SALTLAKE, KOLKATA ;37. SOUTH CITY/ GARDEN KOLKATA ;38. SOUTH CITY VILLA/ KOLKATA ;39. SPRING VALLY/ RAJARHAT, KOLKATA ;40. STATE BANK OF INDIA/ ALIPORE ;41. STATE BANK OF INDIA/ EAST MIDNAPORE ;42. STATE BANK OF INDIA/ WEST MIDNAPORE ;43. SUGAM PARK/ KOLKATA ;44. TECHNO INDIA COLLAGE OF TECHNOLOGY/ RAJARHAT, KOLKATA ;45. TECHNO INDIA/ ARIADAHA, KOLKATA ;46. TECHNO INDIA/ BISHNUPUR, SOUTH 24 PARGANA ;47. TECHNO INDIA/ PARK STREET, KOLKATA ;48. TECHNO INDIA/ SALTLAKE, KOLKATA ;49. TECHNO INDIA/ DAMA, KOLKATA ;50. TECHNO INDIA/ GRC HOUSE ;51. TELECHOICE/ KOLKATA ;52. VICTORIA GREENS/ GARIA, KOLKATA ;53. WEBEL/ SALTLAKE, KOLKATA ;54. TELE MINDS/ SALTLAKE, KOLKATA;55. BATA INDIA LIMITED/ BATANAGAR;56. KHOSLA ELECTRONICS/ KOLKATA;57. AMBUJA/ ECOSTATION;58. RUNGTA GROUP/ SALT LAKE;59. SURAKSHA/ KOLKATA;60. BIG BAZAR/ LILUAH;61. BIG BAZAR/ DIAMOND CITY MALL;62. AMBUJA/ ECOSPACE;63. CARLSBERG/ KOLKATA;64. SPENCER/ KOLKATA;65. RIFLE FACTORY/ ICCHAPORE KOLKATA;66. IACS/ JADAVPUR KOLKATA;67. SPENCER DC/ DHULAGARH;68. STESALIT/ SALT LAKE;69. AMBUJA (CHOICEST KITCHEN)/ PAGLADANGA;70. AMBUJA (ECO RESORT)/ RAJARHAT;71. TATA HOUSING COMPLEX/ RAJARHAT;72. SPENCER/ ACROPOLIS MALL;73. AMBUJA/ SILIGURI;74. ORDINANCE FACTORY (OFD)/ DUMDUM;75. BIGBAZAR/ ASANSOL;76. PARVATI GARDEN/ KOLKATA;77. CENTRAL/ GUWHATI;"
var substrone = list.split(';');
var listlength = substrone.length;
for(var i=0;i<=listlength-2;i++){
var srno = substrone[i].split('.');
var clients =srno[1].split('/');
document.getElementById('clientlist').innerHTML += "<div class='listdiv'>"+srno[0]+". "+clients[0]+" - <span class='locationclient'>"+clients[1]+"</span></div><hr>";
        }
});

$('#showclient').click(function(){
    $('#clientlist').toggle();
});

$('#contactForm').on('submit', function(e) {
    document.getElementById('sendMessageButton').innerHTML = "MESSAGE SENT";
    document.getElementById('sendMessageButton').disabled = true;
    $('#aftrsubmit').show();
    });

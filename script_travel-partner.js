/* navbar */
document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').style.backgroundColor = "white";
            document.getElementById('navbar1').style.color = "black";
            document.getElementById('navbar2').style.color = "black";
            document.getElementById('navbar3').style.color = "black";
            document.getElementById('navbar4').style.color = "black";
            document.getElementById('navbar5').style.color = "black";
            document.getElementById('navbar6').style.color = "black";
            document.getElementById('navbar7').style.color = "black";
            document.getElementById('navbar8').style.color = "rgb(156, 55, 156)";
            document.getElementById('navbar9').style.color = "black";
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').style.backgroundColor = "transparent";
            document.getElementById('navbar1').style.color = "white";
            document.getElementById('navbar2').style.color = "white";
            document.getElementById('navbar3').style.color = "white";
            document.getElementById('navbar4').style.color = "white";
            document.getElementById('navbar5').style.color = "white";
            document.getElementById('navbar6').style.color = "white";
            document.getElementById('navbar7').style.color = "white";
            document.getElementById('navbar8').style.color = "rgb(156, 55, 156)";
            document.getElementById('navbar9').style.color = "white";
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

/* popup */
function showPopup() {
    document.getElementById("popup_container").style.display = "block";
}
function hidePopup() {
    document.getElementById("popup_container").style.display = "none";
}
function showPopup2() {
    document.getElementById("popup_container2").style.display = "block";
}
function hidePopup2() {
    document.getElementById("popup_container2").style.display = "none";
}


/* video */
function register1() {
    document.getElementById("click1").style.color = "#c428a0";
    document.getElementById("click1").style.textDecoration = "underline";
    document.getElementById("click2").style.color = "#000";
    document.getElementById("click2").style.textDecoration = "none";
    document.getElementById("youtube2-1").style.display = "inline-block";
    document.getElementById("youtube2-2").style.display = "none";

}
function register2() {
    document.getElementById("click2").style.color = "#c428a0";
    document.getElementById("click2").style.textDecoration = "underline";
    document.getElementById("click1").style.color = "#000";
    document.getElementById("click1").style.textDecoration = "none";
    document.getElementById("youtube2-1").style.display = "none";
    document.getElementById("youtube2-2").style.display = "inline-block";
}

/* image-activity */
function bigImg1(x) {
    x.style.width = "50%";
    document.getElementById("img-activity2").style.width = "12.5%"
    document.getElementById("img-activity3").style.width = "12.5%"
    document.getElementById("img-activity4").style.width = "12.5%"
    document.getElementById("img-activity5").style.width = "12.5%"
  }
  
function normalImg1(x) {
    x.style.width = "20%";
    document.getElementById("img-activity2").style.width = "20%"
    document.getElementById("img-activity3").style.width = "20%"
    document.getElementById("img-activity4").style.width = "20%"
    document.getElementById("img-activity5").style.width = "20%"
}

function bigImg2(x) {
    x.style.width = "50%";
    document.getElementById("img-activity1").style.width = "12.5%"
    document.getElementById("img-activity3").style.width = "12.5%"
    document.getElementById("img-activity4").style.width = "12.5%"
    document.getElementById("img-activity5").style.width = "12.5%"
  }
  
function normalImg2(x) {
    x.style.width = "20%";
    document.getElementById("img-activity1").style.width = "20%"
    document.getElementById("img-activity3").style.width = "20%"
    document.getElementById("img-activity4").style.width = "20%"
    document.getElementById("img-activity5").style.width = "20%"
}

function bigImg3(x) {
    x.style.width = "50%";
    document.getElementById("img-activity1").style.width = "12.5%"
    document.getElementById("img-activity2").style.width = "12.5%"
    document.getElementById("img-activity4").style.width = "12.5%"
    document.getElementById("img-activity5").style.width = "12.5%"
  }
  
function normalImg3(x) {
    x.style.width = "20%";
    document.getElementById("img-activity1").style.width = "20%"
    document.getElementById("img-activity2").style.width = "20%"
    document.getElementById("img-activity4").style.width = "20%"
    document.getElementById("img-activity5").style.width = "20%"
}

function bigImg4(x) {
    x.style.width = "50%";
    document.getElementById("img-activity1").style.width = "12.5%"
    document.getElementById("img-activity3").style.width = "12.5%"
    document.getElementById("img-activity2").style.width = "12.5%"
    document.getElementById("img-activity5").style.width = "12.5%"
  }
  
function normalImg4(x) {
    x.style.width = "20%";
    document.getElementById("img-activity1").style.width = "20%"
    document.getElementById("img-activity3").style.width = "20%"
    document.getElementById("img-activity2").style.width = "20%"
    document.getElementById("img-activity5").style.width = "20%"
}

function bigImg5(x) {
    x.style.width = "50%";
    document.getElementById("img-activity1").style.width = "12.5%"
    document.getElementById("img-activity3").style.width = "12.5%"
    document.getElementById("img-activity4").style.width = "12.5%"
    document.getElementById("img-activity2").style.width = "12.5%"
  }
  
function normalImg5(x) {
    x.style.width = "20%";
    document.getElementById("img-activity1").style.width = "20%"
    document.getElementById("img-activity3").style.width = "20%"
    document.getElementById("img-activity4").style.width = "20%"
    document.getElementById("img-activity2").style.width = "20%"
}

$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip2").click(function () {
        $("#panel2").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip3").click(function () {
        $("#panel3").slideToggle("slow");
        $("#panel2").slideUp("slow");
        $("#panel").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip4").click(function () {
        $("#panel4").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip5").click(function () {
        $("#panel5").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip6").click(function () {
        $("#panel6").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip7").click(function () {
        $("#panel7").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip8").click(function () {
        $("#panel8").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip9").click(function () {
        $("#panel9").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip10").click(function () {
        $("#panel10").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip11").click(function () {
        $("#panel11").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel12").slideUp("slow");
    });
});
$(document).ready(function () {
    $("#flip12").click(function () {
        $("#panel12").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
        $("#panel7").slideUp("slow");
        $("#panel8").slideUp("slow");
        $("#panel9").slideUp("slow");
        $("#panel10").slideUp("slow");
        $("#panel11").slideUp("slow");
        $("#panel4").slideUp("slow");
    });
});

$(document).ready(function () {
    $("#flip").click(function () {
        // Change src attribute of image
        if ($('#down1 img').attr('src') == "./image/Group-4-1.png") {
            $('#down1 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down1 img').attr('src') == "./image/Group-4-1.png") {
            $('#down1 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip2").click(function () {
        // Change src attribute of image
        if ($('#down2 img').attr('src') == "./image/Group-4-1.png") {
            $('#down2 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down2 img').attr('src') == "./image/Group-4-1.png") {
            $('#down2 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        } 
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip3").click(function () {
        // Change src attribute of image
        if ($('#down3 img').attr('src') == "./image/Group-4-1.png") {
            $('#down3 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down3 img').attr('src') == "./image/Group-4-1.png") {
            $('#down3 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip4").click(function () {
        // Change src attribute of image
        if ($('#down4 img').attr('src') == "./image/Group-4-1.png") {
            $('#down4 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down4 img').attr('src') == "./image/Group-4-1.png") {
            $('#down4 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip5").click(function () {
        // Change src attribute of image
        if ($('#down5 img').attr('src') == "./image/Group-4-1.png") {
            $('#down5 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down5 img').attr('src') == "./image/Group-4-1.png") {
            $('#down5 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip6").click(function () {
        // Change src attribute of image
        if ($('#down6 img').attr('src') == "./image/Group-4-1.png") {
            $('#down6 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down6 img').attr('src') == "./image/Group-4-1.png") {
            $('#down6 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip7").click(function () {
        // Change src attribute of image
        if ($('#down7 img').attr('src') == "./image/Group-4-1.png") {
            $('#down7 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down7 img').attr('src') == "./image/Group-4-1.png") {
            $('#down7 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }


    });
});
$(document).ready(function () {
    $("#flip8").click(function () {
        // Change src attribute of image
        if ($('#down8 img').attr('src') == "./image/Group-4-1.png") {
            $('#down8 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down8 img').attr('src') == "./image/Group-4-1.png") {
            $('#down8 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }

    });
});
$(document).ready(function () {
    $("#flip9").click(function () {
        // Change src attribute of image
        if ($('#down9 img').attr('src') == "./image/Group-4-1.png") {
            $('#down9 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down9 img').attr('src') == "./image/Group-4-1.png") {
            $('#down9 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip10").click(function () {
        // Change src attribute of image
        if ($('#down10 img').attr('src') == "./image/Group-4-1.png") {
            $('#down10 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down10 img').attr('src') == "./image/Group-4-1.png") {
            $('#down10 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip11").click(function () {
        // Change src attribute of image
        if ($('#down11 img').attr('src') == "./image/Group-4-1.png") {
            $('#down11 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down11 img').attr('src') == "./image/Group-4-1.png") {
            $('#down11 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
$(document).ready(function () {
    $("#flip12").click(function () {
        // Change src attribute of image
        if ($('#down12 img').attr('src') == "./image/Group-4-1.png") {
            $('#down12 img').attr('src', "./image/Group-4-2.png");
        } else if ($('#down12 img').attr('src') == "./image/Group-4-2.png") {
            $('#down12 img').attr('src', "./image/Group-4-1.png");
        }
        else if ($('#down12 img').attr('src') == "./image/Group-4-1.png") {
            $('#down12 img').attr('src', "./image/Group-4-2.png");
        }
        if ($('#down1 img').attr('src') == "./image/Group-4-2.png") {
            $('#down1 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down2 img').attr('src') == "./image/Group-4-2.png") {
            $('#down2 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down3 img').attr('src') == "./image/Group-4-2.png") {
            $('#down3 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down4 img').attr('src') == "./image/Group-4-2.png") {
            $('#down4 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down5 img').attr('src') == "./image/Group-4-2.png") {
            $('#down5 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down6 img').attr('src') == "./image/Group-4-2.png") {
            $('#down6 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down7 img').attr('src') == "./image/Group-4-2.png") {
            $('#down7 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down8 img').attr('src') == "./image/Group-4-2.png") {
            $('#down8 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down9 img').attr('src') == "./image/Group-4-2.png") {
            $('#down9 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down10 img').attr('src') == "./image/Group-4-2.png") {
            $('#down10 img').attr('src', "./image/Group-4-1.png");
        }
        if ($('#down11 img').attr('src') == "./image/Group-4-2.png") {
            $('#down11 img').attr('src', "./image/Group-4-1.png");
        }
    });
});
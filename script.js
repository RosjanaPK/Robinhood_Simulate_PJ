document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').style.backgroundColor = "white";
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').style.backgroundColor = "transparent";
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
function one() {
    document.getElementsByClassName("button1")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button1")[0].style.color = "white";
    document.getElementsByClassName("button2")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button2")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button3")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button3")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button4")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button4")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button5")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button5")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button6")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button6")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/mobile_b1-choose.png";
    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
function two() {
    document.getElementsByClassName("button2")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button2")[0].style.color = "white";
    document.getElementsByClassName("button1")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button1")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button3")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button3")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button4")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button4")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button5")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button5")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button6")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button6")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/Mobile_B2-Select-Restuarant-v2.png";

    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
function three() {
    document.getElementsByClassName("button3")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button3")[0].style.color = "white";
    document.getElementsByClassName("button1")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button1")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button2")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button2")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button4")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button4")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button5")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button5")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button6")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button6")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/Mobile_B3-Select-Menu-with-Mobile-V2.png";

    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
function four() {
    document.getElementsByClassName("button4")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button4")[0].style.color = "white";
    document.getElementsByClassName("button1")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button1")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button3")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button3")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button2")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button2")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button5")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button5")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button6")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button6")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/Mobile_B4-Payment-Method.png";

    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
function five() {
    document.getElementsByClassName("button5")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button5")[0].style.color = "white";
    document.getElementsByClassName("button1")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button1")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button3")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button3")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button4")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button4")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button2")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button2")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button6")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button6")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/Mobile_B5-Paid-with-mobile-v2.png";

    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
function six() {
    document.getElementsByClassName("button6")[0].style.backgroundImage = "linear-gradient(to right, #c9249f, #8949ad)";
    document.getElementsByClassName("button6")[0].style.color = "white";
    document.getElementsByClassName("button1")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button1")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button3")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button3")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button4")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button4")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button5")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button5")[0].style.color = "rgb(168,9,124)";
    document.getElementsByClassName("button2")[0].style.backgroundImage = "none";
    document.getElementsByClassName("button2")[0].style.color = "rgb(168,9,124)";
    document.getElementById('myimage').src = "./image/Mobile_B6-Deliver-Tracking.png";

    // document.getElementById('message')
    // .innerHTML="Hii! GeeksforGeeks people";
}
// $("#toggle").on("click", function(){
//     $("#content").toggleClass("show");
//   });
// document.addEventListener('change', function(e) {
//     var id = e.target.getAttribute('data-info-id');
//     var checked = e.target.checked;
//     if (id) {
//       var div = document.getElementById(id);
//       if (div)
//         div.style.display = checked ? 'block' : 'none';
//     }

//   });
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
// $('#down1').on({
//     'click': function() {
//          var src = ($(this).attr('src') === './image/Group-4-1.png')
//             ? './image/Group-4-2.png'
//             : './image/Group-4-1.png';
//          $(this).attr('src', src);
//     }
// });
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



$(document).ready(function () {
    fLoadNotification();

    /*Load deal*/
    function fLoadNotification() {

        var sID = 0;
        $.ajax(
                {
                    type: "POST",
                    url: "dealprocess.aspx/loadnotification",
                    data: "{'sID':'" + sID + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: "true",
                    cache: "false",
                    success: function (msg) {
                        if (msg.d == "") {
                            $("#notification").css("display", "none");
                        }
                        else {
                            $("#notification").css("display", "block");
                            $("#notification").html(msg.d);
                            var top = $("#notification").outerHeight();
                            $(".wpo-header-style-3").css('margin-top', top);
                            $(".wpo-site-header .menu-close").css('margin-top', '120px');
                            $(".wpo-site-header").css('margin-top', top);
                            $(".wpo-site-header .navigation.sticky-header").css('margin-top', top);


                        }
                    },
                    Error: function (x, e) {
                        alert("Some error occured! Please try again.");
                    }
                });
    }

});

$(window).on("scroll", function () {
    // This is for Mobile
    if ($(this).scrollTop() > 10) {
        if ($(window).width() <= 768) {
            $(".groupmenu_m").hide();
        }
    } else {
        if ($(window).width() <= 768) {
            $(".groupmenu_m").show();
        }
    }
});
$(document).mouseup(function (e) {
    var container = $("#signup_box");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#signup_box").hide();
    }
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".bg-popup").css('display', 'none');
    }
});
//Notification
$("#closenoti").click(function () {
    $("#groupnoti").css("display", "none");
});

$(document).mouseup(function (e) {
    var container = $("#noti");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#groupnoti").hide();
    }
});


function myNavFunc() {
    // If it's an iPhone..
    // If it's an iPhone..
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS) {
        window.open("https://www.google.com/maps/place/Lux+Nail+Spa/@30.0272755,-97.8779,15z/data=!4m6!3m5!1s0x865b51d0e6027073:0x7cfabb298f1524a!8m2!3d30.0272755!4d-97.8779!16s%2Fg%2F11f713n3kc?hl=en&entry=ttu");
    }
    else {
        window.open("https://www.google.com/maps/place/Lux+Nail+Spa/@30.0272755,-97.8779,15z/data=!4m6!3m5!1s0x865b51d0e6027073:0x7cfabb298f1524a!8m2!3d30.0272755!4d-97.8779!16s%2Fg%2F11f713n3kc?hl=en&entry=ttu");
    }
} 
$(document).ready(function () {
    fCounter();
    $("#txtPhone").mask("999-999-9999");
    $("#txtPhone2").mask("999-999-9999");
    //Sign up
    $("#subbar").click(function () {
        $("#signup_box").css('display', 'block');
    });
    $("#subbar_m").click(function () {
        $(".bg-popup").css('display', 'block');
        $("#signup_box").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $("#signup_box").css('display', 'none');
    });
    $("#subbar").click(function () {
        $(".bg-popup").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $(".bg-popup").css('display', 'none');
    });
    //Sign up

    //Contact Form 1
    $("#bSend").click(function () {
        $("#bSend").fadeOut(50);
        $("#formwait").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail2").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail2").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone2").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }

        //Content
        //Name
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent2").html(sNotify);
            $("#formnotify2").fadeIn(50);
            $("#bSend").fadeIn(50);
            $("#formwait").fadeOut(20);
        }
        else {
            var sName = $("#txtName").val();
            var sEmail2 = $("#txtEmail2").val();
            var sPhone2 = $("#txtPhone2").val();
            var sContent = $("#txtContent").val();

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/contactus",
                data: "{'sName':'" + sName + "','sEmail2':'" + sEmail2 + "','sPhone2':'" + sPhone2 + "','sContent':'" + sContent + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        $("#formnotifycontent2").html("Thank you for messaging us. We will contact you as soon as possible. Thank you!");
                        $("#formnotify2").fadeIn(50);
                        $("#txtName").val("");
                        $("#txtEmail2").val("");
                        $("#txtPhone2").val("");
                        $("#txtContent").val("");
                    }
                    $("#formwait").fadeOut(20);
                    $("#formsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent2").html("Some Error! Please try again later");
                    $("#formnotify2").fadeIn(50);
                }
            });
        }
    });


    $("#formnotifyok2").click(function () {
        $("#formnotifycontent2").html("");
        $("#formnotify2").fadeOut(50);
    });
    $("#formnotifyok").click(function () {
        $("#formnotifycontent").html("");
        $("#formnotify").fadeOut(50);
    });


    function checkEmail(email) {
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }

    function checkPhone(email) {
        var filter = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!filter.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }
    //Contact Form

    function fCounter() {
        $.ajax(
            {
                type: "POST",
                url: "process.aspx/sCounter",
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",
                success: function (msg) {
                    $("#divTodayCount").html(msg.d["sTodayCount"]);
                    $("#divTotalCount").html(msg.d["sCount"]);
                },
                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").fadeIn(50);
                }
            });
    }

});





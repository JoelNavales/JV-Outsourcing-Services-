$(document).ready(function() {

    if (page === "CONTACT") {
        $(function() {
            $('#contactform').submit(function() {
                $(":submit", this).attr("disabled", "disabled");
    
                var dataString = $('#contactform').serialize();
    
                $.ajax({
                    type: 'POST',
                    url: './sendmail/sendmail-contact.php',
                    data: dataString,
                    success: function () {
                        $("#form-section").html("<div id='message'></div>");
                        $("#message")
                          .html("<h2>Contact Form Submitted!</h2>")
                          .append("<p>We will be in touch soon.</p>")
                          .hide()
                          .fadeIn(1500);
                      }
                });
                return false;
            }); 
        })
    }

    if (page === "GSTARTED") {
        $(function() {
            $('#signupform').submit(function() {
                $(":submit", this).attr("disabled", "disabled");
    
                var dataString = $('#signupform').serialize();
    
                $.ajax({
                    type: 'POST',
                    url: './sendmail/sendmail-gstarted.php',
                    data: dataString,
                    success: function () {
                        $("#form-container").html("<div id='message'></div>");
                        $("#message")
                          .html("<h3>Thank You for Reaching Out!</h3>")
                          .append("<p>Your form has been successfully submitted. We will get back to you shortly!</p>")
                          .hide()
                          .fadeIn(1500);
                      }
                });
                return false;
            }); 
        })
    }
});

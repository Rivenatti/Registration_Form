jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$( "#register" ).validate({
  rules: {

    // LOGIN VALIDATION
    formLogin: {
      required: true,
      minlength: 3
    },

    // PASSWORDS VALIDATION
    formPassword: {
      required: true,
      minlength: 4,
      maxlength: 20
    },

    formConfirmPassword: {
      required: true,
      equalTo: "#formPassword",
      minlength: 4,
      maxlength: 20
    },


    // EMAIL VALIDATION
    formEmail: {
      required: true,
      email: true
    },

    errorPlacement: function(label, element) {
      label.addClass('arrow');
      label.insertAfter(element);
    },
    wrapper: 'span'
  }
});

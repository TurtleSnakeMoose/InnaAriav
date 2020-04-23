var ip = ip || {};
ip.validate = ip.validate || {};


ip.validate.validateField = function (input) {
    var inputType = input.attr('type'),
        fieldName = input.data('fieldName'),
        inputValue = input.val(),
        formIsValid = true;

    input.removeClass('is-invalid').addClass('is-valid');

    switch (inputType) {
        case 'text': { 

            let minLength = parseInt(input.attr('min-length')),
                maxLength = parseInt(input.attr('max-length')),
                trimmedLength = $.trim(inputValue).length;

            if(trimmedLength < minLength || trimmedLength > maxLength){
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;
            }

            if(fieldName === 'email' && !ip.validate.isValidEmail($.trim(inputValue))){
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;
            }
        }
        break;
        
        case 'number': {
            let minLength = parseInt(input.attr('min-length')),
                maxLength = parseInt(input.attr('max-length')),
                trimmedLength = $.trim(inputValue).length;

            if( trimmedLength < minLength || trimmedLength > maxLength ) {
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;
            }
        }
            break;
    }

    return formIsValid;
}

ip.validate.validateForm = function (form) {
    
    var isValid = true,
        requiredFields = form.find('input[type!="button"], textarea');
    
    $.each(requiredFields, function(i, field){
        isValid = ip.validate.validateField($(field));

        if(!isValid)
            return false;
    });

    return isValid;
}

ip.validate.isValidEmail = function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}



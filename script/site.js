var ip = ip || {};
ip.site = ip.site || {};

$(function (){

	// load textual content and urls. done externally from txt file to allow the client to change content without bothering me.
	ip.content.loadTextualContent();
	
	ip.site.navigateToLectureSignup = function () {
		$.get( '../assets/text_content/link_to_lecture.txt', function( address ) {
			window.open(address, '_blank')
		});
	}

	ip.site.navigateToLink = function (link) {
		let address = $(link).find('label').data('address');
		window.open( address , '_blank');
	}

	// prepares and sends the contact info to e-mail by smtp.js
    ip.site.submitForm = function (submitBtn){

		var form = submitBtn.closest('.section').find('form');

		if(!ip.validate.validateForm(form)) {
			return;
		}

		var subject = ip.util.buildSubject(form);
    	var body = ip.util.buildBody(form);

		ip.util.sendEmail(subject,body)

		ip.util.nullifyForm();
	}
})

var ip = ip || {};
ip.site = ip.site || {};

$(function (){

    ip.site.submitForm = function (submitBtn){

		var form = submitBtn.closest('form');

		if(!ip.validate.validateForm(form)){
			return;
		}

		var subject = ip.util.buildSubject(form);
    	var body = ip.util.buildBody(form);

		ip.util.sendEmail(subject,body)
	}
	
})

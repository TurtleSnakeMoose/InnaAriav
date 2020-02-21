var ip = ip || {};
ip.util = ip.util || {};


ip.util.buildSubject = function (form) {
    var customerName = `${$('#cust_firstName').val()} ${$('#cust_lastName').val()}`;
    var subject = `${customerName} השאירה פרטים`

    return subject;
}

ip.util.buildBody = function (form) {

    var field = ip.util.getFieldsWithValues(form);
    
    var body = `
    <div style='direction: rtl; font-size: 18px;'>
        <h2>פרטים אישיים:</h2>
        <table>
            <tbody>
                ${ip.util.generateTableRows(field)}
            </tbody>
        </table>
    </div>
    `;

    return body;
    
}

ip.util.getFieldsWithValues = function (form){
    let fieldsToReturn = [],
         fields = form.find('input[type!="button"], textarea');

    $.each(fields, function(i, field){
        let fieldType = $(field).attr('type'),
            formGroup = $(field).closest('.form-group'),
            fieldName = formGroup.find('label:first').text();
            
        let fieldValue = $(field).val();
        
        fieldsToReturn.push({Name: fieldName, Value: fieldValue});
    });

    return fieldsToReturn;
};

ip.util.generateTableRows = function (fields) {
    var rows = ''
    $.each(fields, function (i, field){
        rows += `
            <tr>
                <td style="font-weight:bold;padding: 5px 3px;border: 1px solid lightgrey;">${field.Name}:</td>
                <td style="padding: 5px 3px;border: 1px solid lightgrey;">${field.Value}</td>
            </tr>
        `;
    });

    return rows;
}

ip.util.sendEmail = function (subject,body){
    Email.send({
        SecureToken : 'a13af5a5-9a0a-48fb-bfde-a4cb210be1da',
        To : 'contact.innap@gmail.com',
        From : 'contact.innap@gmail.com',
        Subject : subject,
        Body : body
    }).then(
        atlast => { 
            ip.util.nullifyForm()
            alert('הטופס נשלח, תודה רבה!')
        }
    );
}

ip.util.nullifyForm = function (){
    location.reload();
}


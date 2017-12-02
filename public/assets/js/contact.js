(function () {





})();

var postContact = () => {
  'use strict'

  var name        = document.getElementById('contact-name');
  var email       = document.getElementById('contact-email');
  var message     = document.getElementById('contact-message');
  var subject     = name.value + ':email=' + email.value;
  var apigClient  = apigClientFactory.newClient();

  console.log(name);
  if (name.value === '') { name.validity(); return false; }
  if (email.value === '') { email.validity(); return false; }
  if (message.value === '') { message.validity(); return false; }

  var body = {
    subject: subject,
    message: message
  };

  var promise = apigClient.contactsPost('', body)
  promise.then(response => {
    console.log(response);
    window.alert("お問い合わせを受け付けました。");
    window.location.reload();
  });

  promise.catch(response => {
    window.alert("Error: お問い合わせを送信できませんでした。");
  });

  return false;
};

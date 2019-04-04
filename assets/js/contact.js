var isFetching = false;

var postContact = () => {
  'use strict'

  var name        = document.getElementById('contact-name');
  var email       = document.getElementById('contact-email');
  var message     = document.getElementById('contact-message');
  var apigClient  = apigClientFactory.newClient();

  if (name.value === '') { return true; }
  if (email.value === '') { return true; }
  if (message.value === '') { return true; }

  var body = {
    subject: name.value + ':email=' + email.value,
    message: message.value
  };

  if (isFetching) { return false; }
  var promise = apigClient.contactsPost('', body)
  isFetching = true;

  promise.then(response => {
    window.alert("お問い合わせを受け付けました。");
    window.location.reload();
    isFetching = false;
  });

  promise.catch(response => {
    window.alert("Error: お問い合わせを送信できませんでした。");
    isFetching = false;
  });

  return false;
};

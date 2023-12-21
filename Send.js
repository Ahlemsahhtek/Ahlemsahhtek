function sendEmail() {
  var recipient = document.getElementById('recipient').value;
  var subject = 'Hello from Mailgun';
  var message = 'Hello, this is a test email from Mailgun!';

  fetch('https://api.mailgun.net/v3/sandboxd15237a2f3d54abf91ddcf71f5c79f08.mailgun.org/messages', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa('api:1bae9d652ff3e59ed89b68ca86637f83-5e3f36f5-9ddee746'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'from=YourEmail@example.com&to=' + recipient + '&subject=' + subject + '&text=' + message
  })
  .then(response => {
    console.log('Email sent!', response);
    alert('Email sent successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to send email!');
  });
}

function sendEmail() {
  var recipient = document.getElementById('recipient').value;
  var subject = 'Hello from Mailgun';
  var message = 'Hello, this is a test email from Mailgun!';

  fetch('https://api.mailgun.net/v3/YOUR_MAILGUN_DOMAIN/messages', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa('api:YOUR_MAILGUN_API_KEY'),
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

const PostMarkSmtpService = require("./postmark_smtp_service");
const SendGridSmtpService = require("./sendgrid_smtp_service");

class Mailer {
  constructor(mail, mailerFormats) {
    this.mail = mail;
    this.mailerFormats = mailerFormats;
    this.smtpService = new SendGridSmtpService();
  }

  send() {
    // Loops through mail formats and calls the send method
    this.mailerFormats.forEach((formater) =>
      this.smtpService.send(formater.format(this.mail))
    );
  }
}

module.exports = Mailer;

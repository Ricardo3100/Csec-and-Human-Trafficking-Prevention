app.post('/sendEmail', function (request, response) {
    // console.log(request.body);
    //if you send name, email, whatever, it'll always be .body
    //it ends in .name bc that's the info you're requesting.  type this into Postman
  
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'ricardo.rodriguez3100@gmal.com', // generated ethereal user
          pass: 'Cl@$$icReunion31' // generated ethereal password
        }
      });
  
      // setup email data with unicode symbols
      let mailOptions = {
        from: 'ricardo.rodriguez3100@gmail.com', // sender address
        to: 'ricardo.rodriguez3100@gmail.com', // list of receivers
        subject: 'You have a new message on csec', // Subject line
        template: 'index',
        context: {
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          comments: request.body.comments,
        }
      };
  
      let handlebarsOptions = {
        viewEngine: 'handlebars',
        viewPath: path.resolve('./templates'),
        extName: '.html',
      }
  
      transporter.use('compile', hbs(handlebarsOptions));
  
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        response.status(200).send({
          data: 'ok'
        });
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    });
  
  
  });
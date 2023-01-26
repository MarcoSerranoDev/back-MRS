const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.NODEMAILER_USER, // generated ethereal user
    pass: process.env.NODEMAILER_PASS, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `MRS <${process.env.NODEMAILER_USER}>`, // sender address
      to: email, // list of receivers
      subject, // Subject line
      html, // html body
    });
  } catch (error) {
    console.log(error);
  }
};

const getTemplate = (name, email, phone, msg) => {
  return `
        <div>
            <span>El usuario ${name} se quiere contactar</span>
            <span>Info:</span>
            <span>Nombre: ${name}</span>
            <span>Correo: ${email}</span>
            <span>Telefono: ${phone}</span>
            <span>Mensaje:</span>
            <p>${msg}</p>
        </div>
    `;
};

module.exports = {
  getTemplate,
  sendEmail,
};

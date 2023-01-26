const { getTemplate, sendEmail } = require("../config/email.config");

const sendMeEmail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const template = getTemplate(name, email, phone, message);
    await sendEmail(process.env.NODEMAILER_USER, "Contacto usuario", template);
    res.status(200).json({
      success: true,
      msg: "Correo enviado",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMeEmail,
};

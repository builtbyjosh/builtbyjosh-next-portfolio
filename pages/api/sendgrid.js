import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "joshuacollins912@gmail.com",
      from: "contact@builtbyjosh.com",
      subject: `${req.body.subject}`,
      html: `<div>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Message: ${req.body.message}</p>
      </div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}
export default sendEmail;

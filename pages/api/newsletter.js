require("dotenv").config();
const MailerLite = require("mailerlite-api-v2-node").default;

const mailerLite = MailerLite(`${process.env.API}`);

export default async (req, res) => {
  const { email } = req.body;
  console.log(email);

  // with Promises
  mailerLite.addSubscriber({
    email
  }).then((account) => {
    // ...
    console.log(account)
    return res.status(200).json({ message: "Success" });
  });

};

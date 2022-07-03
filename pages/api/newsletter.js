require('dotenv').config()

export default async (req, res) => {
  const { email } = req.body;
  console.log(email)
  const res2 = await fetch(
    `https://us13.api.mailchimp.com/3.0/lists/707df41775`,
    {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.API}`,
      },
      body: JSON.stringify({
        members: [
          {
            email_address: email,
            status: "subscribed",
          },
        ],
      }),
    }
  );
  await res2.json();
  return res.status(200).json({message: "Success"})
};

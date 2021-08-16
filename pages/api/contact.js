/// /api/contact

function handler(req, res) {
  if (req.mothod === "POST") {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res
      .status(201)
      .json({ message: " Succesfully stored message", message: newMessage });
  }
}

export default handler;

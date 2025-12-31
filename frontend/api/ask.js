import openrouter from "./openrouter.js";

export default async function ask(req, res) {
  try {
    const completion = await openrouter.chat.send({
      model: "mistralai/devstral-2512:free",
      messages: [{ role: "user", content: "What is the meaning of life?" }],
      stream: false
    });

    const content = completion.choices[0].message.content;

    return res.status(200).json({ response: content });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
}

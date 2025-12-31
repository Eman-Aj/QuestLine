import openrouter from "./openrouter.js";

//For AI
// const completion = await openrouter.chat.send({
    //   model: "mistralai/devstral-2512:free",
    //   messages: [{ role: "user", content: "What is the meaning of life?" }],
    //   stream: false
    // });

    
    //   const content = completion.choices[0].message.content;

export async function POST(req) {
  try {
    
    const body = await req.json();

    return Response.json(
        {recieved: body}, 
        {status: 200}
    );
    
    
  } catch (err) {
    console.error(err);
    return Response.json(
        { message: err.message },
        { status: 500}
    );
  }
}

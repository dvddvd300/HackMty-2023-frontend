export async function action({ request }) {
  // get the body of the request
  const body = await request.text();
  // get the response from the chatbot
  const response = await fetch('https://1d0c-131-178-102-148.ngrok-free.app/chatbot', {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "text/plain" 
    }
  });
  // return the response
  return new Response(response.body, response);
}
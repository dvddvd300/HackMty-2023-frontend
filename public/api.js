console.log("Hola mundo");

let textData = "Hola, ¿cómo estás?"; // Text data to send

let fetchData = {
  method: "POST",
  body: textData,
  headers: {
    "Content-Type": "text/plain" 
  }
};

fetch("https://85d4-131-178-102-148.ngrok-free.app/chatbot", fetchData)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); 
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

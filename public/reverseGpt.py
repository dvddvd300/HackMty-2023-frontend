from flask import Flask, render_template, request
from revChatGPT.V3 import Chatbot
from config import API_KEY

app = Flask(__name__)


chatbot = Chatbot(API_KEY)

conversation = []

@app.route("/", methods=["GET", "POST"])
def chat():
    if request.method == "POST":
        source_prompt = request.form.get("source_prompt")
        user_message = ""

        if "file" in request.files:
            uploaded_file = request.files["file"]
            if uploaded_file.filename != "":
                # Read the content of the uploaded file
                
                
                user_message = uploaded_file.read().decode("utf-8")
                chatbot.add_to_conversation(user_message, "user")
                #print("User: " + user_message)
        else:
            user_message = request.form["user_message"]
        
        if source_prompt == "Reconocimiento de emociones":
            emotion_prompt = "Analiza esta llamada telefónica enfocada a agendar una cita para que el cliente conozca un proyecto inmobiliario y describe las emociones del vendedor y comprador en un párrafo para cada uno. Trata de identificar si alguna de estas emociones ayudó a que se concretara una cita en caso de que se hubiera agendado, o qué emociones pudieron haber causado que no se lograra agendar una cita."
            response = chatbot.ask(emotion_prompt)
        elif source_prompt == "Extracción de palabras clave":
            keywords_prompt = "Lista las palabras clave en esta llamada telefónica enfocada a agendar una cita para que el cliente conozca un proyecto inmobiliario, enfócate en las palabras clave que usaron el vendedor y el comprador que consideras que ayudaron a que se concretara una cita en caso de que se hubiera agendado, o qué palabras clave pudieron haber causado que no se lograra agendar una cita."
            response = chatbot.ask(keywords_prompt)
        elif source_prompt == "Analisis y tono":
            tone_prompt = "Analiza esta llamada telefónica enfocada a agendar una cita para que el cliente conozca un proyecto inmobiliario, e identifica si el vendedor respondió las preguntas del cliente aunque no sepas si son correctas o incorrectas. En un segundo párrafo di si se tocaron estos puntos: 1. precio de los departamentos, 3. si el cliente quiere habitar el departamento o comprarlo como inversión 2. ubicación, 3. esquema de rendimientos o rentas de la construcción, 4. invitarlo a una cita."
            response = chatbot.ask(tone_prompt)
        elif source_prompt == "Estructura y flujo":
            meta_analysis_prompt = "Realiza un meta-análisis de la estructura y el flujo de  esta llamada telefónica enfocada a agendar una cita para que el cliente conozca un proyecto inmobiliario, identifica los 3 puntos principales que consideras que ayudaron a que se concretara una cita en caso de que se hubiera agendado, y que puntos durante el flujo de la llamada pudieron haber causado que no se lograra agendar una cita. Indica en qué parte de la llamada se mostró un mayor interés del cliente."
            response = chatbot.ask(meta_analysis_prompt)
        else:
            response = "Option not recognized."

        #conversation.append(("User: " + user_message, "user"))
        conversation.append((source_prompt + " " + response, "Opción:"))

    else:
        response = "Ask me something."

    return render_template("example2.html", conversation=conversation, response=response)

if __name__ == "__main__":
    app.run(debug=True)

































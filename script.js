function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;
  
    addMessage("Você", message);
    input.value = "";
  
    setTimeout(() => {
      const botReply = generateReply(message);
      addMessage("FURIA Bot", botReply);
    }, 500);
  }
  
  function addMessage(sender, text) {
    const chat = document.getElementById("chat");
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    msg.classList.add("mb-3");
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }
  
  function generateReply(message) {
    const msg = message.toLowerCase();
  
    if (msg.includes("oi") || msg.includes("olá")) {
      return "Fala, fã da FURIA! Pronto para vibrar com a gente?";
    } else if (msg.includes("jogo") || msg.includes("partida")) {
      return "Nosso próximo jogo é dia 25! Prepara o coração!";
    } else if (msg.includes("cs") || msg.includes("counter")) {
      return "CS é nossa paixão! Quer saber a line-up atual?";
    } else if (msg.includes("line") || msg.includes("time")) {
      return "Atualmente temos: MatadorDeAnão, Dhawsa, Lepstospiroca...";
    } else {
      return "Hmm... não entendi. Tente perguntar sobre os jogos ou o time!";
    }
  }
  
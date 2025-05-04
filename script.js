document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  const userInput = document.getElementById("userInput");
  const openChatButton = document.getElementById("openChatButton");
  const hiddenChat = document.getElementById("divChat");
  const showChat = document.getElementById("chatBox");

  openChatButton.addEventListener("click", function () {
    hiddenChat.innerHTML = "";
    showChat.classList.add("show");
  });

  sendButton.addEventListener("click", sendMessage);

  // Também pode enviar pressionando Enter
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (!message) return;

  addMessage("Você", message);
  input.value = "";

  setTimeout(() => {
    const botReply = generateReply(message);
    addMessage("FURIA", botReply);
  }, 500);
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");

  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  msg.classList.add(sender === "Você" ? "user-message" : "bot-message");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function generateReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("oi") || msg.includes("oie") || msg.includes("ola")) {
    return "Fala, fã da FURIA! Pronto para vibrar com a gente?";
  } else if (msg.includes("jogo") || msg.includes("partida")) {
    return "Nosso próximo jogo é dia 25! Prepara o coração!";
  } else if (
    msg.includes("cs") ||
    msg.includes("counter") ||
    msg.includes("strike")
  ) {
    return "CS é nossa paixão! Quer saber a line-up atual?";
  } else if (msg.includes("line") || msg.includes("time") || msg.includes("sim")) {
    return "Atualmente nossa line-up titular é composta por: Fallen, KSCERATO, yuurih, MOLODOY, YEKINDAR.";
  } else if (msg.includes("modalidade") || msg.includes("e-sports")) {
    return "Atualmente nós competimos em vários jogos de e-sports, incluindo Counter-Strike 2, Rocket League, League of Legends, Valorant, Rainbow Six: Siege, Apex Legends e Kings League";
  } else if (msg.includes("skin") || msg.includes("skins")) {
    return "As skins da FURIA são incríveis! Você já viu a nossa coleção? <a href='https://www.furia.gg/loja' target='_blank'>Clique aqui para conferir!</a>";
  } else if (msg.includes("não") || msg.includes("nao")) {
    return "Poxa que pena! Com o que mais posso te ajudar?";
  } else if (msg.includes("org") || msg.includes("organização") || msg.includes("história")) {
    return "A FURIA foi eleita a melhor organização de eSports do Brasil por dois anos consecutivos (2020 e 2021) pelo Prêmio eSports Brasil. Além disso, a organização foi reconhecida como a quarta maior do mundo em 2022 por um levantamento do portal norte-americano Nerd Street. Em 2023, foi eleita a melhor organização de CS:GO do ano pelo Júri da Brasil Storm CS."
  } else {
    return "Hmm... não entendi. Tente perguntar sobre os jogos ou o time!";
  }
}

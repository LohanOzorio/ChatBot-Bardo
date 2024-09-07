document.getElementById('option-1').addEventListener('click', function() {
    handleUserInteraction("Oi Bardo! como vai?", "Ola! estou otimo! novinho em pena! ops... que dizer folha! e você?", "haha! estou bem! obrigado", ":D");
  });
  
  document.getElementById('option-2').addEventListener('click', function() {
    handleUserInteraction("Bardo, o que foi a semana de imersão alura?", "A Semana de Imersão Alura foi um evento intensivo e online promovido pela Alura. Durante essa semana, os participantes mergulham em temas como desenvolvimento web, ciência de dados e IA.", "uau!", "Entra no site deles e saiba mais é só digitar www.alura.com.br");
  });
  
  document.getElementById('option-3').addEventListener('click', function() {
    handleUserInteraction("Iai Bardo, qual as novidades?", "Por aqui nenhuma! E por aí?", "A minha novidade é a semana de imersão alura", "Ah! minha nossa, eu por acaso nasci por causa da semana de imersão alura!");
  });
  
  function handleUserInteraction(userMessage, botResponse, userFollowUp, botFinal) {
    clearButtons();
  
    appendMessage("user", userMessage);
  
    setTimeout(() => {
      typeText(botResponse, function() {
        createResponseButton(userFollowUp, function() {
          typeText(botFinal, function() {
            console.log("Fim de chat");
          });
        });
      });
    }, 1000);
  }
  
  function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', sender);
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function clearButtons() {
    document.querySelectorAll('.chat-option').forEach(button => {
      button.style.display = 'none';
    });
  }
  
  function createResponseButton(responseText, callback) {
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = `<button class="chat-option" id="response-btn">${responseText}</button>`;
    
    document.getElementById('response-btn').addEventListener('click', function() {
      appendMessage("user", responseText);
      inputContainer.innerHTML = ''; // Limpa os botões
      callback(); // Executa a próxima fase da interação
    });
  }
  
  function typeText(text, callback) {
    const chatBox = document.getElementById('chat-box');
    const typingMessage = document.createElement('div');
    typingMessage.classList.add('message', 'bot', 'typing');
    chatBox.appendChild(typingMessage);
  
    let i = 0;
    const interval = setInterval(() => {
      typingMessage.textContent = text.slice(0, i + 1);
      i++;
  
      if (i === text.length) {
        clearInterval(interval);
        typingMessage.classList.remove('typing');
        callback();
      }
    }, 50); // Velocidade de digitação
  }
  
  // Função para exibir o botão de reinício
function showRestartButton() {
    const restartButton = document.getElementById('restart-btn');
    restartButton.style.display = 'block';
  
    restartButton.addEventListener('click', function() {
      resetChat();
    });
  }
  
  // Função para reiniciar o chat
  function resetChat() {
    const chatBox = document.getElementById('chat-box');
    const inputContainer = document.getElementById('input-container');
    const restartButton = document.getElementById('restart-btn');
  
    // Limpa as mensagens do chat
    chatBox.innerHTML = '';
  
    // Reexibe os botões iniciais
    inputContainer.innerHTML = `
      <button class="chat-option" id="option-1">Oi Bardo! como vai?</button>
      <button class="chat-option" id="option-2">Bardo, o que foi a semana de imersão alura?</button>
      <button class="chat-option" id="option-3">Iai Bardo, qual as novidades?</button>
    `;
  
    // Esconde o botão de reinício
    restartButton.style.display = 'none';
  
    // Reatach listeners to the new buttons
    document.getElementById('option-1').addEventListener('click', function() {
      handleUserInteraction("Oi Bardo! como vai?", "Ola! estou otimo! novinho em pena! ops... que dizer folha! e você?", "haha! estou bem! obrigado", ":D");
    });
  
    document.getElementById('option-2').addEventListener('click', function() {
      handleUserInteraction("Bardo, o que foi a semana de imersão alura?", "A Semana de Imersão Alura foi um evento intensivo e online promovido pela Alura. Durante essa semana, os participantes mergulham em temas como desenvolvimento web, ciência de dados e IA.", "uau!", "Entra no site deles e saiba mais: (site do Alura)");
    });
  
    document.getElementById('option-3').addEventListener('click', function() {
      handleUserInteraction("Iai Bardo, qual as novidades?", "Por aqui nenhuma! E por aí?", "A minha novidade é a semana de imersão alura", "Ah! minha nossa, eu por acaso nasci por causa da semana de imersão alura!");
    });
  }
  
  // Atualize a função de final de interação para exibir o botão de reinício
  function handleUserInteraction(userMessage, botResponse, userFollowUp, botFinal) {
    clearButtons();
  
    appendMessage("user", userMessage);
  
    setTimeout(() => {
      typeText(botResponse, function() {
        createResponseButton(userFollowUp, function() {
          typeText(botFinal, function() {
            showRestartButton(); // Exibe o botão de reinício no fim da conversa
          });
        });
      });
    }, 1000);
  }
  
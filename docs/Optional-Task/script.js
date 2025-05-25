window.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("./assets/sounds/Laugh-Effect.mp3");
  const { container, jokeText, jokeButton } = createElements();
  setUpStyles();
  setUpEventListeners(jokeButton, jokeText, audio);
});

function createElements() {
  const divContainer = document.createElement("div");
  divContainer.className = "container";
  document.body.appendChild(divContainer);

  const header = document.createElement("h1");
  header.className = "header";
  header.innerText = "Chuck Norris Jokes";
  divContainer.appendChild(header);

  const jokeText = document.createElement("p");
  divContainer.appendChild(jokeText);

  const jokeButton = document.createElement("button");
  jokeButton.innerText = "Tickle Tickle";
  divContainer.appendChild(jokeButton);

  return {
    container: divContainer,
    jokeText,
    jokeButton
  };
}

function setUpEventListeners(button, jokeText, audio) {
  button.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        jokeText.innerText = data.value;
        audio.play();
        emitLaughEmojis(button, 15);
      })
      .catch((err) => console.error("API Hatası:", err));
  });
}

function emitLaughEmojis(originButton, count) {
  const rect = originButton.getBoundingClientRect();

  for (let i = 0; i < count; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = "😂";

    emoji.style.left = `${rect.left + rect.width / 2}px`;
    emoji.style.top = `${rect.top + rect.height / 2}px`;

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 1) * 600;
    emoji.style.setProperty("--x", `${x}px`);
    emoji.style.setProperty("--y", `${y}px`);

    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 1500);
  }
}

function setUpStyles() {
  const style = document.createElement("style");
  style.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #74ebd5, #acb6e5);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .container {
      background: white;
      padding: 30px 40px;
      border-radius: 15px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
      text-align: center;
      max-width: 600px;
      animation: fadeIn 0.8s ease-in-out;
    }

    .header {
      font-size: 2em;
      color: #ff6f61;
      margin-bottom: 20px;
    }

    p {
      display: block;
      font-size: 18px;
      color: #444;
      margin: 20px 0;
      min-height: 60px;
      transition: all 0.3s ease;
    }

    button {
      padding: 12px 24px;
      background: #ff6f61;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background: #ff3b2e;
      transform: scale(1.05);
    }

    .emoji {
      position: absolute;
      font-size: 24px;
      pointer-events: none;
      animation: floatAway 1.5s ease-out forwards;
    }

    @keyframes floatAway {
      0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(var(--x), var(--y)) scale(1.5);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

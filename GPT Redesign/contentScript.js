// CSS einfügen
const style = document.createElement('style');
style.textContent = `
/* Hauptfarben */
:root {
  --primary-color: #22a7f0;
  --secondary-color: #f1f1f1;
  --text-color: #333333;
  --background-color: #ffffff;
}

/* Dunkler Modus */
:root.dark-mode {
  --primary-color: #22a7f0;
  --secondary-color: #222222;
  --text-color: #f1f1f1;
  --background-color: #1f1f1f;
}

/* Allgemeine Stile */
body {
  font-family: Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  color: var(--primary-color);
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  margin-bottom: 10px;
}

button {
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

/* Chat-Stile */
.chat {
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 20px;
  background-color: var(--secondary-color);
}

.chat .message {
  margin-bottom: 10px;
}

.chat .user-message {
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 10px;
  border-radius: 4px;
}

.chat .bot-message {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px;
  border-radius: 4px;
}

/* Dark Mode-Stile */
body.dark-mode {
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode .container {
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode h1, .dark-mode h2, .dark-mode h3 {
  color: var(--primary-color);
}

.dark-mode input[type="text"] {
  border: 1px solid var(--primary-color);
}

.dark-mode button {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.dark-mode .chat {
  background-color: var(--secondary-color);
}

.dark-mode .user-message {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.dark-mode .bot-message {
  background-color: var(--background-color);
  color: var(--text-color);
}

/* Anpassungen für den Senden-Button */
.send-button {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -10px;
  margin-right: -10px;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: var(--secondary-color);
}

/* Dark Mode-Stile für den Senden-Button */
.dark-mode .send-button {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.dark-mode .send-button:hover {
  background-color: var(--secondary-color);
}

`;
document.head.appendChild(style);

// Restlicher Code deines Inhalts-Scripts
// ...

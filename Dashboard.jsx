:root {
  /* Color tokens — pulled directly from the Leap With Francesca site */
  --canvas: #faf8f5;
  --canvas-deep: #f0ece5;
  --canvas-alt: #f2ede6;
  --ink: #1a1410;
  --ink-soft: #4a3f35;
  --crimson: #8b1a1a;
  --crimson-hover: #a02020;
  --crimson-tint: rgba(139, 26, 26, 0.07);
  --crimson-line: rgba(139, 26, 26, 0.15);
  --blush: #c4908a;
  --muted: #9a8a7a;

  /* Type — same three families as the main site */
  --font-script: 'Pinyon Script', cursive;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-sans: 'Josefin Sans', sans-serif;

  --shadow-soft: 0 1px 16px rgba(26, 20, 16, 0.05);
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  margin: 0;
  background: var(--canvas);
  color: var(--ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
.display {
  font-family: var(--font-display);
  color: var(--ink);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
}

p {
  line-height: 1.7;
  color: var(--ink-soft);
}

a {
  color: var(--crimson);
}

.eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--crimson);
  font-weight: 400;
}

.hairline {
  width: 48px;
  height: 1px;
  background: var(--crimson);
}

button {
  font-family: var(--font-sans);
}

button.primary {
  background: var(--crimson);
  color: var(--canvas);
  border: none;
  border-radius: 0;
  padding: 16px 40px;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
}

button.primary:hover:not(:disabled) {
  background: var(--crimson-hover);
}

button.primary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

button.ghost {
  background: transparent;
  border: 1px solid var(--crimson-line);
  color: var(--crimson);
  border-radius: 0;
  padding: 12px 28px;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

button.ghost:hover {
  background: var(--crimson-tint);
  border-color: var(--crimson);
}

button.link-tab {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0.65;
  padding: 4px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, opacity 0.2s, border-color 0.2s;
}

button.link-tab.active {
  color: var(--crimson);
  opacity: 1;
  border-bottom: 1px solid var(--crimson);
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 1px solid var(--crimson);
  outline-offset: 3px;
}

input {
  font-family: var(--font-sans);
  border: none;
  border-bottom: 1px solid var(--crimson-line);
  border-radius: 0;
  padding: 0.85rem 0.1rem;
  background: transparent;
  color: var(--ink);
  font-size: 0.95rem;
  width: 100%;
  transition: border-color 0.2s;
}

input:focus {
  border-color: var(--crimson);
}

.loading-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: var(--font-display);
  color: var(--ink);
  font-size: 1.1rem;
  background: var(--canvas);
}

.card {
  background: var(--crimson-tint);
  border-radius: 0;
  padding: 2rem 1.85rem;
}

.card-inner {
  background: var(--canvas);
}

.form-error {
  font-size: 0.82rem;
  color: var(--crimson);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

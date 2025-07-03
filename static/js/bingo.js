const words = [
  "Hugo", "Static", "Site", "Generator", "Go", "Theme",
  "Markdown", "Shortcode", "Layout", "Content",
  "Blog", "Page", "Taxonomy", "Section", "Partial",
  "Render", "Build", "Deploy", "Fast", "Flexible",
  "Simple", "Modern", "Open Source", "GitHub", "CLI"
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateBingoCard() {
  const card = document.getElementById("bingo-card");
  const shuffled = shuffle([...words]).slice(0, 25);
  shuffled[12] = "FREE"; // center space

  let html = "<table>";
  for (let row = 0; row < 5; row++) {
    html += "<tr>";
    for (let col = 0; col < 5; col++) {
      const index = row * 5 + col;
      html += `<td onclick="this.classList.toggle('marked')">${shuffled[index]}</td>`;
    }
    html += "</tr>";
  }
  html += "</table>";
  card.innerHTML = html;
}

window.onload = generateBingoCard;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showLoading") {
    createNeuralUI();
    document.getElementById("neural-ai-status").innerText = "Gemini 3.1 Flash-Lite Analiz Ediyor...";
    document.getElementById("neural-ai-container").classList.add("glowing");
  } else if (request.action === "showResult") {
    displayResult(request.data);
  } else if (request.action === "showError") {
    document.getElementById("neural-ai-status").innerText = `Hata: ${request.error}`;
    document.getElementById("neural-ai-container").classList.remove("glowing");
  }
});

function createNeuralUI() {
  if (document.getElementById("neural-ai-container")) {
    document.getElementById("neural-ai-container").remove();
  }

  const container = document.createElement("div");
  container.id = "neural-ai-container";
  container.className = "neural-expressive-pill";
  
  container.innerHTML = `
    <div class="neural-header">
      <div class="neural-logo-spinner" id="neural-spinner"></div>
      <span id="neural-ai-status">Analiz Başlıyor...</span>
      <button id="neural-close">✕</button>
    </div>
    <div id="neural-content" class="neural-hidden"></div>
  `;
  
  document.body.appendChild(container);
  
  document.getElementById("neural-close").addEventListener("click", () => container.remove());
}

function displayResult(data) {
  const container = document.getElementById("neural-ai-container");
  container.classList.remove("glowing");
  document.getElementById("neural-spinner").style.display = "none";
  document.getElementById("neural-ai-status").innerText = "Analiz Tamamlandı";
  
  const content = document.getElementById("neural-content");
  content.classList.remove("neural-hidden");
  
  content.innerHTML = `
    <div class="neural-score-card">
      <div class="neural-score-label">Yapay Zeka İhtimali</div>
      <div class="neural-score-value">${data.aiProbability}</div>
    </div>
    <p class="neural-summary">${data.summary}</p>
    <div class="neural-metrics">
      <div class="metric"><strong>Stilometri:</strong> ${data.stylometry}</div>
      <div class="metric"><strong>Burstiness:</strong> ${data.burstiness}</div>
      <div class="metric"><strong>Perplexity:</strong> ${data.perplexity}</div>
    </div>
  `;
}
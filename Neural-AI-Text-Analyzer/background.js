chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "analyzeAiText",
    title: "AI Analizi (Stilometri & Burstiness)",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "analyzeAiText") {
    
    if (tab.url.startsWith("chrome://") || tab.url.startsWith("edge://") || tab.url.startsWith("about:")) {
      console.warn("Bu eklenti tarayıcı sistem sayfalarında çalıştırılamaz.");
      return;
    }

    try {
      try {
        await chrome.tabs.sendMessage(tab.id, { action: "showLoading" });
      } catch (sendError) {
        throw new Error("İçerik betiğine ulaşılamadı. Lütfen eklentiyi test ettiğiniz SAYFAYI YENİLEYİN (F5).");
      }

      const { geminiApiKey } = await chrome.storage.local.get("geminiApiKey");
      if (!geminiApiKey) throw new Error("API anahtarı eksik. Eklenti ikonuna tıklayıp ekleyin.");

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${geminiApiKey}`;

      const prompt = `Aşağıdaki metnin AI tarafından yazılıp yazılmadığını analiz et. 
      Şu kriterlere göre incele: Stilometri (robotik ton, tekrarlar), Burstiness (cümle uzunluğu dalgalanmaları), Perplexity (kelime öngörülebilirliği).
      Sonucu SADECE şu JSON yapısında dön:
      {
        "aiProbability": "%85",
        "summary": "Genel sonuç özeti...",
        "stylometry": "...",
        "burstiness": "...",
        "perplexity": "..."
      }
      
      Metin: "${info.selectionText}"`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1 }
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      let resultText = data.candidates[0].content.parts[0].text;
      resultText = resultText.split("```json").join("").split("```").join("").trim();
      const resultObj = JSON.parse(resultText);

      await chrome.tabs.sendMessage(tab.id, { action: "showResult", data: resultObj });

    } catch (error) {
      console.error(error.message);
      chrome.tabs.sendMessage(tab.id, { action: "showError", error: error.message }).catch(() => {});
    }
  }
});
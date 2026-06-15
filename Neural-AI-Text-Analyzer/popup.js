document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get("geminiApiKey", (data) => {
    if (data.geminiApiKey) {
      document.getElementById('apiKey').value = data.geminiApiKey;
    }
  });

  document.getElementById('saveBtn').addEventListener('click', () => {
    const key = document.getElementById('apiKey').value.trim();
    const statusEl = document.getElementById('status');
    
    if(key) {
      chrome.storage.local.set({ geminiApiKey: key }, () => {
        statusEl.style.opacity = "1";
        statusEl.style.color = "#34a853";
        statusEl.innerText = "Anahtar güvenle kaydedildi!";
        setTimeout(() => statusEl.style.opacity = "0", 3000);
      });
    } else {
      statusEl.style.opacity = "1";
      statusEl.style.color = "#ea4335";
      statusEl.innerText = "Lütfen geçerli bir anahtar girin.";
      setTimeout(() => statusEl.style.opacity = "0", 3000);
    }
  });
});
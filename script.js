document.getElementById("advice-btn").addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const advice = data.slip;
      document.getElementById("advice-number").textContent = `Advice #${advice.id}`;
      document.getElementById("advice-text").textContent = `“${advice.advice}”`;
    })
    .catch(error => {
      console.error("Error fetching advice:", error);
      document.getElementById("advice-text").textContent = "Sorry, we couldn't load advice.";
    });
}

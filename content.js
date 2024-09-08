// Function to check and click the skip ad button
function skipAd() {
  const skipButton = document.querySelector(".ytp-ad-skip-button");

  if (skipButton) {
    skipButton.click();
    console.log("Ad skipped");
  }
}

// Check for the skip button every second
setInterval(skipAd, 1000);

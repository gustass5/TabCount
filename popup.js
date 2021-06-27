window.addEventListener("load", async () => {
  const span = document.getElementById("tabCount");
  const tabs = await chrome.tabs.query({});
  console.log({ tabs });
  span.innerHTML = `${tabs.length}`;
});

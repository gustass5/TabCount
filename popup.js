window.addEventListener('load', async () => {
	const tabElement = document.getElementById('tabCount');
	const tabGroupElement = document.getElementById('tabGroupCount');
	const tabs = await chrome.tabs.query({});
	const tabGroups = await chrome.tabGroups.query({});
	console.log({ tabs });
	console.log({ tabGroups });
	tabElement.innerHTML = `${tabs.length}`;
	tabGroupElement.innerHTML = `${tabGroups.length}`;
});

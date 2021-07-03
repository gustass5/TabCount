chrome.runtime.onInstalled.addListener(() => {
	updateBadgeAppearance();
});

chrome.windows.onCreated.addListener(() => {
	updateBadgeAppearance();
});

chrome.tabs.onCreated.addListener(() => {
	updateBadge();
});

chrome.tabs.onRemoved.addListener(() => {
	updateBadge();
});

function updateBadgeAppearance() {
	chrome.action.setBadgeBackgroundColor({ color: [210, 0, 60, 255] });
	updateBadge();
}

async function updateBadge() {
	const tabs = await chrome.tabs.query({});
	const tabCount = `${tabs.length}`;
	chrome.action.setBadgeText({ text: tabCount });
}

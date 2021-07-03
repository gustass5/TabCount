const colors = {
	grey: '#71717A',
	blue: '#3B82F6',
	red: '#EF4444',
	yellow: '#EAB308',
	green: '#22C55E',
	pink: '#EC4899',
	purple: '#8B5CF6',
	cyan: '#06B6D4'
};

const originalColors = {
	grey: '#5f6368',
	blue: '#0474e3',
	red: '#e22d2b',
	yellow: '#ea7321',
	green: '#008e45',
	pink: '#d91582',
	purple: '#9b36e0',
	cyan: '#007b82'
};

window.addEventListener('load', async () => {
	// Get elements for count display
	const tabElement = document.getElementById('tabCount');
	const tabGroupCountElement = document.getElementById('tabGroupCount');
	const tabGroupElement = document.getElementById('tabGroups');

	// Get all tabs, tab groups and separate
	const tabs = await chrome.tabs.query({});
	const tabGroups = await chrome.tabGroups.query({});
	const tabsOfTabGroups = tabGroups.map(tabGroup =>
		tabs.filter(tab => tab.groupId === tabGroup.id)
	);
	console.log({ tabGroups });
	// Set tab and tabGroup count
	tabElement.innerHTML = `${tabs.length}`;
	tabGroupCountElement.innerHTML = `${tabGroups.length}`;

	// Update counts of tabGroups
	tabGroups.forEach((tabGroup, index) => {
		// Create row for each tab group text
		const textRow = document.createElement('p');

		const label = document.createElement('span');
		label.innerText = tabGroup.title;

		const count = document.createElement('span');
		count.innerText = tabsOfTabGroups[index].length;

		textRow.appendChild(label);
		textRow.appendChild(count);

		// Color of each tab group
		const color = document.createElement('div');
		color.style.backgroundColor = colors[tabGroup.color];

		const parent = document.createElement('div');
		parent.classList.add('tabGroup');

		parent.appendChild(color);
		parent.appendChild(textRow);

		tabGroupElement.appendChild(parent);
	});
});

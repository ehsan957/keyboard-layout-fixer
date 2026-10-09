chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'fix-layout',
    title: 'Fix keyboard layout (EN ⇄ FA)',
    contexts: ['editable'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== 'fix-layout' || !tab) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id, frameIds: [info.frameId ?? 0] },
    files: ['converter.js', 'fix-in-page.js'],
  });
});

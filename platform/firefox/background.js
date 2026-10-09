browser.menus.create({
  id: 'fix-layout',
  title: 'Fix keyboard layout (EN ⇄ FA)',
  contexts: ['editable'],
});

browser.menus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== 'fix-layout') return;
  const target = { frameId: info.frameId ?? 0 };
  await browser.tabs.executeScript(tab.id, { ...target, file: '/converter.js' });
  await browser.tabs.executeScript(tab.id, { ...target, file: '/fix-in-page.js' });
});

const radios = document.querySelectorAll('input[name="layout"]');
const saved = document.getElementById('saved');

(globalThis.browser ?? chrome).storage.sync.get({ layout: 'persian' }).then(({ layout }) => {
  for (const r of radios) r.checked = r.value === layout;
});

for (const r of radios) {
  r.addEventListener('change', async () => {
    await (globalThis.browser ?? chrome).storage.sync.set({ layout: r.value });
    saved.textContent = 'Saved.';
    setTimeout(() => (saved.textContent = ''), 1500);
  });
}

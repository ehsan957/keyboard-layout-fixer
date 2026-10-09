const input = document.getElementById('input');
const output = document.getElementById('output');
const status = document.getElementById('status');
const layoutSelect = document.getElementById('layout');

const update = () => { output.value = fixLayout(input.value, layoutSelect.value); };

(globalThis.browser ?? chrome).storage.sync.get({ layout: 'persian' }).then(({ layout }) => {
  layoutSelect.value = layout;
  update();
});

layoutSelect.addEventListener('change', () => {
  (globalThis.browser ?? chrome).storage.sync.set({ layout: layoutSelect.value });
  update();
});

input.addEventListener('input', () => { update(); status.textContent = ''; });

document.getElementById('copy').addEventListener('click', async () => {
  if (!output.value) { status.textContent = 'Paste some text first.'; return; }
  await navigator.clipboard.writeText(output.value);
  status.textContent = 'Copied.';
});

document.getElementById('clear').addEventListener('click', () => {
  input.value = ''; output.value = ''; status.textContent = ''; input.focus();
});

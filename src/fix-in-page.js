// Injected into the page after converter.js when the menu item is clicked
(async () => {
  const el = document.activeElement;
  if (!el) return;

  let layout = 'persian';
  try { layout = (await (globalThis.browser ?? chrome).storage.sync.get({ layout: 'persian' })).layout; } catch (_) {}
  const fix = (t) => fixLayout(t, layout);

  // <textarea> and <input>
  if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
    let s = null, e = null;
    try { s = el.selectionStart; e = el.selectionEnd; } catch (_) {}
    if (s === null || s === e) {
      el.value = fix(el.value);             // nothing selected -> whole box
    } else {
      el.setRangeText(fix(el.value.slice(s, e)), s, e, 'select');
    }
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    return;
  }

  // Rich editors (Gmail, WhatsApp Web, Telegram Web, ...)
  if (el.isContentEditable) {
    const sel = window.getSelection();
    if (sel.isCollapsed) {
      const range = document.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    document.execCommand('insertText', false, fix(sel.toString()));
  }
})();

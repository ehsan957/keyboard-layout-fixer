# Store listing texts

## Name
Keyboard Layout Fixer (EN ⇄ FA)

## Summary / short description
Right-click a text box to fix text typed with the wrong keyboard layout (English ⇄ Persian).

## Description
```
Typed a whole sentence and then noticed your keyboard was set to English instead of Persian? Don't type it again. Right-click the text box and choose "Fix keyboard layout (EN ⇄ FA)".

EXAMPLES
• sghl o,fd → سلام خوبی
• اثممخ → hello

FEATURES
• Works both ways: English → Persian and Persian → English. The direction is detected automatically.
• Select part of the text to fix only that part, or select nothing to fix the whole box.
• Works in normal text fields and in rich editors like Gmail, WhatsApp Web and Telegram Web.
• Supports both Windows keyboard layouts: Persian and Persian (Standard). Choose yours in the extension's options or from the toolbar popup.
• The toolbar popup lets you paste any text and convert it.

PRIVACY
The extension does not collect, store or send any of your text. Everything happens on your device. Only your keyboard layout choice is saved in your browser.

اصلاح متنی که با کیبورد اشتباه تایپ شده
اگر یادتان رفته زبان کیبورد را به فارسی تغییر دهید، کافی است روی کادر متن راست‌کلیک کنید و گزینه «Fix keyboard layout (EN ⇄ FA)» را انتخاب کنید تا متن به فارسی درست تبدیل شود. از هر دو چیدمان کیبورد ویندوز (فارسی و فارسی استاندارد) پشتیبانی می‌کند.

Developer: Ehsan Shariaty — grizzly.ir
Support: ehsan.shariaty@gmail.com
```

## Categories and tags
- Firefox: Language Support · tags: translate, chat, whatsapp
- Chrome: Tools · Edge: Productivity

## Notes to reviewer
```
No build step and no minified code. All files are plain, hand-written JavaScript. No network requests and no remote code.

Permissions:
– menus / contextMenus: adds "Fix keyboard layout (EN ⇄ FA)" to the context menu on editable fields.
– activeTab (+ scripting on Chrome/Edge): on click, injects the bundled converter.js and fix-in-page.js into the current tab only.
– storage: saves one setting (the chosen layout: "persian" or "standard").

fix-in-page.js replaces the text of the focused textarea/input via setRangeText. For contenteditable editors it uses document.execCommand('insertText') so the page's undo history and frameworks keep working.
Firefox: data_collection_permissions is set to "none".

Developer: Ehsan Shariaty, ehsan.shariaty@gmail.com
```

## Chrome Web Store privacy fields
- **Single purpose:** Fixes text that was typed with the wrong keyboard layout. When a user types Persian while the keyboard was set to English (or the other way around), they right-click the text box and choose "Fix keyboard layout (EN ⇄ FA)" to convert the text to the correct language. A toolbar popup offers the same conversion for pasted text.
- **contextMenus:** Adds a single item, "Fix keyboard layout (EN ⇄ FA)", to the right-click menu on editable fields. This menu item is the main way users run the extension.
- **activeTab:** When the user clicks the context menu item, activeTab gives temporary access to only the current tab, so the extension can read the text in the focused text box and replace it with the converted text. It does nothing until the user clicks the menu item.
- **scripting:** Used together with activeTab to inject the extension's own bundled files (converter.js and fix-in-page.js) into the current tab after the user clicks the menu item. No remote code is loaded.
- **storage:** Saves the user's chosen keyboard layout (Persian or Persian (Standard)). No text or personal data is stored.
- **Remote code:** No · **Data usage:** none collected

Seyon Crackers - Updated JavaScript

Files:
- script.js: complete shopping app JavaScript with product catalog, responsive card rendering, search/filter/sort, quantities, cart totals, customer validation, invoice PDF generation, Tamil font fallback, and WhatsApp order sharing.

PDF library fix:
- jsPDF and AutoTable are loaded at runtime from multiple CDN URLs.
- If a CDN fails, the loader tries the next URL.
- Failed load promises are reset so the user can retry.
- Keep script.js in the same folder as index.html and style.css.
- PDF generation requires an internet connection to load the PDF libraries. Tamil names in the PDF require NotoSansTamil-Regular.ttf in the repository root; otherwise the PDF uses a standard fallback font.

After replacing script.js in GitHub, commit/push the file and hard-refresh the site (Ctrl+F5).

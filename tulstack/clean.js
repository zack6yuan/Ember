const fs = require('fs');
const path = require('path');

const files = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'components/hero.tsx',
  'components/navbar.tsx',
  'components/services.tsx',
  'components/process.tsx',
  'components/about.tsx',
  'components/contact.tsx'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) return;
  let text = fs.readFileSync(p, 'utf8');
  
  // Remove JSX comments {/* ... */}
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  
  // Remove multiline comments /* ... */
  text = text.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove single line comments // ... (but ignore http:// and https://)
  text = text.replace(/(?<!:)\/\/.*$/gm, '');
  
  // Remove empty lines (lines that contain only whitespace)
  text = text.replace(/^\s*[\r\n]/gm, '');
  
  fs.writeFileSync(p, text);
});
console.log('Successfully cleaned up files.');

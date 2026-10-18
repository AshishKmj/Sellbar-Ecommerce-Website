const fs = require('fs');

const file = 'C:\\Users\\ASHISH KUMAR\\.gemini\\antigravity-ide\\brain\\e651337b-7165-40b7-b624-c45aac3e0dcc\\.system_generated\\steps\\302\\content.md';
const content = fs.readFileSync(file, 'utf8');

// Match <img ... src="..." alt="..." /> or Gumlet images
const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi;
let match;
const results = [];
while ((match = regex.exec(content)) !== null) {
  results.push({ src: match[1], alt: match[2] });
}

console.log('Images with alt tags found:', results.length);
console.log(JSON.stringify(results.slice(0, 35), null, 2));

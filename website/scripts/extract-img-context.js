const fs = require('fs');

const file = 'C:\\Users\\ASHISH KUMAR\\.gemini\\antigravity-ide\\brain\\e651337b-7165-40b7-b624-c45aac3e0dcc\\.system_generated\\steps\\302\\content.md';
const content = fs.readFileSync(file, 'utf8');

// Find matches where an image URL is near a brand or product name
const matches = [];
const imgUrlRegex = /(https:\/\/s3ng\.cashify\.in\/[^"'\s\\]+?\.(?:png|jpg|jpeg|webp|svg))/g;

let match;
while ((match = imgUrlRegex.exec(content)) !== null) {
  const start = Math.max(0, match.index - 120);
  const end = Math.min(content.length, match.index + match[0].length + 120);
  const snippet = content.slice(start, end).replace(/\\"/g, '"');
  matches.push({ url: match[1], context: snippet });
}

console.log('Total context matches:', matches.length);
matches.slice(0, 25).forEach((m, idx) => {
  console.log(`\n--- Match ${idx + 1} ---`);
  console.log('URL:', m.url);
  console.log('Context:', m.context.replace(/\s+/g, ' '));
});

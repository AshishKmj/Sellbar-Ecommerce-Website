const fs = require('fs');

const filePath = process.argv[2];
const query = process.argv[3] ? process.argv[3].toLowerCase() : '';

if (!filePath || !fs.existsSync(filePath)) {
  console.error('File not found:', filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const textSegments = [];
const pushCalls = content.split('self.__next_f.push(');

for (const call of pushCalls) {
  try {
    const raw = call.substring(call.indexOf('['), call.lastIndexOf(']') + 1);
    if (!raw) continue;
    const parsed = JSON.parse(raw);
    if (parsed && parsed[1]) {
      const str = parsed[1];
      const matches = str.match(/"([^"\\]*(\\.[^"\\]*)*)"/g);
      if (matches) {
        for (const m of matches) {
          const clean = m.replace(/^"|"$/g, '').replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
          if (
            clean.length > 20 &&
            !clean.includes('static/chunks') &&
            !clean.includes('data:image') &&
            !clean.includes('.css') &&
            !clean.includes('width=') &&
            !clean.includes('min-w-0') &&
            !clean.includes('props:children')
          ) {
            if (!query || clean.toLowerCase().includes(query)) {
              textSegments.push(clean);
            }
          }
        }
      }
    }
  } catch (e) {}
}

const unique = Array.from(new Set(textSegments));
console.log(`Found ${unique.length} matching segments:`);
for (const item of unique) {
  console.log('•', item);
}

const fs = require('fs');

const file = 'C:\\Users\\ASHISH KUMAR\\.gemini\\antigravity-ide\\brain\\e651337b-7165-40b7-b624-c45aac3e0dcc\\.system_generated\\steps\\302\\content.md';
const content = fs.readFileSync(file, 'utf8');

const imgMatches = content.match(/https:\/\/[^"'\s]+?\.(?:png|jpg|jpeg|webp|svg)/gi) || [];
const uniqueImgs = [...new Set(imgMatches)];
console.log('Total unique images found:', uniqueImgs.length);
console.log(JSON.stringify(uniqueImgs.slice(0, 40), null, 2));

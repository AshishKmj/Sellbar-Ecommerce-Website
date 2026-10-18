const fs = require('fs');

const html = fs.readFileSync('C:/Users/ASHISH KUMAR/.gemini/antigravity-ide/brain/e651337b-7165-40b7-b624-c45aac3e0dcc/.system_generated/steps/880/content.md', 'utf-8');

// Find all self.__next_f.push lines
const fPush = html.match(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g) || [];
console.log('Total __next_f chunks:', fPush.length);

let combined = '';
fPush.forEach(p => {
  try {
    // Unescape unicode and json
    const inner = p.replace(/^self\.__next_f\.push\(\[1,"/, '').replace(/"\]\)$/, '');
    combined += inner.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
  } catch(e) {}
});

fs.writeFileSync('scripts/next-f-combined.txt', combined);
console.log('Saved combined next-f length:', combined.length);

// Let's search combined for sections or component data
const keywords = ['history', 'passion', 'promise', 'principle', 'founder', 'mandeep', 'manocha', 'sustainability', 'grandparent', 'waste', 'stepper', '2009', '2013', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
keywords.forEach(kw => {
  const count = (combined.toLowerCase().match(new RegExp(kw, 'g')) || []).length;
  console.log(`Keyword "${kw}": ${count} occurrences`);
});

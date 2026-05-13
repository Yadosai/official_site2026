const xlsx = require('xlsx')
const fs = require('fs')

const workbook = xlsx.readFile('./data/thanks.xlsx')

const sponsorSheet = workbook.Sheets['協賛']
const sponsorRows = xlsx.utils.sheet_to_json(sponsorSheet)
const sponsors = sponsorRows.map(row => String(row['団体名'] || '')).filter(Boolean)

const outputPath = './front/data/thanks.json'
fs.writeFileSync(outputPath, JSON.stringify({ sponsors }, null, 2))
console.log(`✅ ${outputPath} を生成しました（協賛: ${sponsors.length}件）`)

const xlsx = require('xlsx')
const fs = require('fs')

const workbook = xlsx.readFile('./data/mogiten.xlsx')
const sheet = workbook.Sheets['Sheet1'] 

const rows = xlsx.utils.sheet_to_json(sheet)

const mogiten = rows.map(row => {
  const name = String(row['店舗名'] || '')
  const fontSize = name.length > 10 ? '16px' : '24px'

  return {
    mogitenName: name,
    mogitenFontSize: fontSize,
    organizationName: String(row['団体名'] || ''),
    mogitenIntroduction: String(row['PR文'] || ''),
    mogitenId: String(row['テント番号'] || ''),
    holdingTime_1: String(row['出店'] || ''),
    holdingTime_2: ''
  }
})

const outputPath = './front/data/mogiten.json'
fs.writeFileSync(outputPath, JSON.stringify({ mogiten }, null, 2))
console.log(`✅ ${outputPath} を生成しました（${mogiten.length}件）`)
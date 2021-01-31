let handler = async m => m.reply(`
╭─「 Donation • Credit 」
│ •  Sorry!! Yet Not Available [ Abhinav ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler

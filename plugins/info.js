let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Made in javascript via NodeJs
╠➥ Rec: Mr.*Abhinav* [ Abhinav ]
╠➥ Script: Mr Abhinav ™
║      [WhatsAlexa]
║
╠═〘 Thanks To 〙 ═
╠➥ WhatsAlexa ™
╠➥ Mr. Abhinav™
╠➥ And other friends :)
║
╠═〘 WhatsAlexa BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

 

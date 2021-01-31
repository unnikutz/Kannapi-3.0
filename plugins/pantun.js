let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
"*PROTECTIVE: *\n\nThere was a small child playing with stones, \nStones were thrown into the well, \nLearning is timeless, \nAlso does not look at age. \N *Abhinav*",
 "* PANTUN: *\n\nPlant peanuts in the morning, \nTrown six wilted sticks, \nDon't look for bad people, \nWhen you are fasting. \N *Abhinav*",
 "* PANTUN: *\n\nAt the end of the month you will get a salary, \nPayment to buy diamonds, \nDo not forget to fast and give alms. \N *Abhinav*",
 "* INTEREST: *\n\ nThe list time for the last day, \nTime feels a lot wasted, \nYou don't need to worry, \n my love is only for you. \N *Abhinav*",
 "* PROTECTIVE: *\n\nThere was a small child playing with stones, \nStones were thrown into the well, \nLearning is timeless, \nAlso doesn't look at age. \N *Abhinav*",
 "* PANTUN: * \n\nA thousand ducks in a lion's cage, \n only one striped, \n Thousands of girls in Indonesia, \n only you I love. \N *YouTube:* mr.ravanan",
 "* ASSISTANCE: * \n\nSunday going to the market, \nBuy vegetables and rice, \nEvery day you have to learn, \nSurely you will be smart. \N _Abhinav_",
 "* PANTUN: * \n\nStyled fried chicken, \nBuy it in front of the monument. \N Dear brother, my handsome brother, is here faithfully waiting. \N ```Abhinav```",
 "* PROTECTION: *\n\nSmall fire from the stove, \nThe small fire runs out of wood. \NI've been waiting for a long time, \nWhen did you say I love you. \N _Abhinav_",
 "* PANTUN: *\n\nA thousand ducks in a lion's cage, \n only one striped color \n Thousands of girls in Indonesia, \n only you I love. \N _Abhinav",
 "* PROTECTIVE: *\n\nGo fishing at dawn,\nAfter lunch brings fish \nWho is studious \nBeing successful then. \N ```Abhinav```",
 "* PANTUN: * \n\nBuy a computer is normal \nIn order to learn to be enthusiastic \nLet's learn fasting \nFor us to be strong \N ```Abhinav```",
 "* PROTECTIVE: * \n\nDrinking a bottle of warm tasting, \ndoughing a glass is anyone's request. \NWhich handsome man has? \NMay I fall in love. \N ~Abhinav~",
 ]

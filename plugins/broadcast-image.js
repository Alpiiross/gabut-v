// all chats ke broadcast

let handler  = async (m, { conn, text }) => {

  let chats = Object.keys(await conn.chats)

  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)

  for (let id of chats) {

       let bcbg = 'https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'

       await conn.delay(1500)

       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', ftroli)

     }

  m.reply('*Broadcast selesai*')

}

handler.help = ['broadcastimage','bcimg'].map(v => v + ' <teks>')

handler.tags = ['owner']

handler.command = /^(broadcast|bcimg)$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Dapatkan Ingfo Terkait Bot dan Commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Putar Lagu Dari Teks Yanh Diberikan' },
          { name: '⏹️ Stop', value: 'Membuat bot berhenti, dan keluar dari voice chat' },
          { name: '📊 Queue', value: 'Lihat dan atur antrian lagu di server ini.' },
          { name: '⏭️ Skip', value: 'Skip lagu yang sedang diputar' },
          { name: '⏸️ Pause', value: 'Pause lagu yang sedang diputar' },
          { name: '▶️ Resume', value: 'Melanjutkan lagu yang di pause' },
          { name: '🔁 Loop', value: 'Menyalakan/Mematikan Loop Lagu' },
          { name: '🔄 Autoplay', value: 'Menyalakan atau Mematikan autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Peegi ke detik tertentu pada lagu' },
          { name: '⏮️ Previous', value: 'Putar lagu di antrian sebelumnya' },
          { name: '🔀 Shuffle', value: 'Acak lagu di antrian' },
          { name: '📃 playlist', value: 'Atur Pleylis muh' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Mengecek Latensi Bot Jir" },
          { name: '🗑️ Clear', value: 'Menghapus Semua Lagu di Antrian :O' },
          { name: '⏱️ Time', value: 'Menunjukkan waktu putar lagu' },
          { name: '🎧 Filter', value: 'Pasang filter ke lagu' },
           { name: '🎵 Now Playing', value: 'Menginfokan Lagu yang Sedang Diputar hehe' },
          { name: '🔊 Volume', value: 'Menyetel volume lagu [ hati hati budeg ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1150827819547504741/1168917372267151370/standard.gif?ex=65538222&is=65410d22&hm=b4994392f44679da41fc9304eb69deaa3769e136057556deec0db69ae8d33a97&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://youtube.com/@chiseleddeepslate?si=hNXpHkgv87O8n44i')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.com/invite/gGrWGTUS')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://github.com/Craxe2024/iTEST')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

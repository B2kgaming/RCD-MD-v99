const {
    smd,
    sleep
} = require('../lib');
const teddyM = { "smd": "asta" };

smd({
    cmdname: "teddy",
    type: "fun",
    info: "cute teddy",
    on: "text",
    filename: __filename,
}, async (citel, match, { smd }) => {
    let isteddy = smd === "teddy" ? true : citel.isPublic && match.toLowerCase().includes("teddy") ? true : "";
    let isHi = match.toLowerCase().includes("hi");
    
    if (isteddy && !teddyM[citel.id]) {
        teddyM[citel.id] = true;
        let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈'];
        const { key } = await citel.reply(`(\\_/)\n( •.•)\n/>🤍`);
        for (let i = 0; i < teddy.length; i++) {
            await sleep(500);
            await citel.reply(`(\\_/)\n( •.•)\n/>${teddy[i]}`, { edit: key });
        }
    }
    
    if (isHi) {
        await citel.reply('hi');
    }
});

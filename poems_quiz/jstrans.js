const a = poems.split("++++++++++++++++")
    .map((poem) => {
    const sent = poem.split(/。|】/).filter((sent) => {
        if (sent.includes("【")) {
            return false;
        }
        return true;
    });
    return sent.filter((sent) => {
        if (sent.split("，").length != 2) {
            return false;
        }
        return true;
    }).map((sents) => {
        const rand = Math.random();
        if (rand < 0.5) {
            return sents.split("，")[0] + "，_______。";
        }
        if (rand >= 0.5) {
            return "_______，" + sents.split("，")[1] + "。";
        }
        return "";
    });
});
a.forEach((eachs) => {
    eachs.forEach((t) => console.log(t));
});

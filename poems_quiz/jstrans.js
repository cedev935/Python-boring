const randomBlank = (sents) => {
    const rand = Math.random();
    if (rand < 0.5) {
        return sents.split("，")[0] + "，_______。";
    }
    if (rand >= 0.5) {
        return "_______，" + sents.split("，")[1] + "。";
    }
    return "";
};
const leftBlank = (sents) => {
    return "_______，" + sents.split("，")[1] + "。";
};
const rightBlank = (sents) => {
    return sents.split("，")[0] + "，_______。";
};
const sentenceSplit = (poem) => {
    const sent = poem.split(/。|】/);
    return sent;
};
const sentenceFilter = (sentence) => {
    if (sentence.includes("【")) {
        return false;
    }
    if (sentence.split("，").length != 2) {
        return false;
    }
    return true;
};
const poemFilter = (poem) => {
    return true;
};
const result = poems.split("++++++++++++++++")
    .filter(poemFilter)
    .map(sentenceSplit)
    .map((splitedPoem) => splitedPoem.filter(sentenceFilter))
    .map((splitedPoem) => splitedPoem.map(randomBlank));
result.forEach((eachs) => {
    eachs.forEach((t) => console.log(t));
});

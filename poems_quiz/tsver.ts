const randomChoose = (sents: string) => {
    const rand = Math.random()
    if (rand < 0.5) { return sents.split("，")[0] + "，_______。" }
    if (rand >= 0.5) { return "_______，" + sents.split("，")[1] + "。" }
    return ""
}

const sentenceSplit = (poem: string) => {
    const sent = poem.split(/。|】/)
    return sent
}

const sentenceFilter = (sentence: string) => {
    if (sentence.includes("【")) { return false }
    if (sentence.split("，").length != 2 ) {return false}
    return true
}

const poemFilter = (poem: string) => {
    return true
}

const result = poems.split("++++++++++++++++")
    .filter(poemFilter)
    .map(sentenceSplit)
    .map((splitedPoem) => splitedPoem.filter(sentenceFilter))
    .map((splitedPoem) => splitedPoem.map(randomChoose))

result.forEach((eachs) => {
    eachs.forEach((t) => console.log(t))
})

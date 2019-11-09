const poems = `here`

const res = poems.split("++++++++++++++++")
    .map((poem) => {
        const sent = poem.split("。")
        return sent.filter((sent) => {
            if (sent.split("，").length != 2) {
                return false
            } return true
        }).map((sents) => {
            const rand = Math.random()
            if (rand < 0.5) { return sents.split("，")[0] + "，_______。" }
            if (rand >= 0.5) { return "_______，" + sents.split("，")[1] + "。" }
            return ""
        } )
    })

console.log(res)

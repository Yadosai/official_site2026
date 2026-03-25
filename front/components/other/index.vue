<template>
    <div id="otherEyeCatch">
        <p>その他</p>
    </div>
    <div id="otherContainer">
        <item v-for="other in otherItems" :key="other.itemTitle"
            :itemTitle="other.itemTitle"
            :item-contents="other.itemContents"
            :item-font-size="other.itemFontSize" />
    </div>
</template>

<script>
import item from '~/components/other/item'
import otherData from '~/data/other.json'

export default {
    components: { item },
    data() {
        return {
            otherItems: otherData.otherItems
        }
    }
}
</script>

<style scoped>
#otherEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background: #CBCBCB;
}

#otherEyeCatch p {
    color: #000;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

#otherContainer {
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
    background: #FFF;
}

@media (min-width: 950px) {
    #otherEyeCatch p {
        font-size: 40px;
    }
}
</style>
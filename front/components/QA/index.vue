<template>
    <div class="QAEyeCatch">
        <p>Q＆A</p>
        <div class="QAabout">
            <p>よくある質問にお答えします</p><p>ここに載っていなくてわからないことがある場合は</p><p>各SNSのDMまでご連絡ください</p>
        </div>
    </div>
    <div class="QAcontainer">
        <item v-for="qa in qaItems" :key="qa.question"
            :question="qa.question"
            :answer="qa.answer"
            :linkText="qa.linkText" />
    </div>
</template>
  
<script>
import item from '~/components/QA/item'
import qaData from '~/data/qa.json'

export default {
    components: { item },
    data() {
        return {
            qaItems: qaData.qaItems
        }
    }
}
</script>
  
<style lang="scss">
.QAEyeCatch {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    background-color: $quaternary-color;
}
.QAEyeCatch p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 20px;
    margin: 0px;
}
.QAabout {
    background-color: $primary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
}
.QAabout p {

    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}
.QAcontainer {
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
    background-color: $secondary-color;
}
@media (min-width: 950px) {
    .QAEyeCatch p {
        font-size: 40px;
    }
    .QAabout p {
        font-size: 20px;
    }
}
</style>
  
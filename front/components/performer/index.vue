<template>
  <div id="performerEyeCatch">
    <p>出演団体一覧</p>
  </div>

  <div class="perfoermerListContainer">
    <item v-for="performer in performers" :key="performer.performerName"
      :performerName="performer.performerName"
      :performerNameFontsize="performer.performerNameFontsize"
      :kikakuList="performer.kikakuList"
      :mogitenList="performer.mogitenList"
      :instaID="performer.instaID"
      :instaIDUrl="performer.instaIDUrl"
      :twitterID="performer.twitterID"
      :twitterIDUrl="performer.twitterIDUrl" />
  </div>
</template>

<script>
import item from '~/components/performer/item'
import performerData from '~/data/performers.json'

export default {
  components: { item },
  data() {
    return {
      performers: performerData.performers
    }
  }
}
</script>

<style scoped>
#performerEyeCatch {
  background: #CBCBCB;
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  align-self: stretch;
}

#performerEyeCatch p {
  color: #000;
  font-family: "Kaisei HarunoUmi";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
}

.perfoermerListContainer {
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 25px;
  align-self: stretch;
  flex-wrap: wrap;
}

@media (min-width: 950px) {
  #performerEyeCatch p {
    font-size: 40px;
  }

}
</style>
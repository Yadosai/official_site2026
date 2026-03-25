<template>
    <div class="thanksEyeCatch">
        <p class="thanksEyeCatchTitle">協賛団体</p>
        <div class="thanksabout">
            <p>やどかり祭は地域のたくさんの企業や団体からの支援金で成り立っております。</p><p>委員一同、毎年のご支援に深く感謝申し上げます。</p><p>この一覧の中には筑波大生が生活の中でも大変お世話になっているところもあります。新入生はぜひ足を運んでみてください。</p>
        </div>
    </div>
    <div class="bigsponsorContainer">
        <sponsorItem v-for="sponsor in bigSponsors" :key="sponsor.sponsorUrl"
            :sponsorUrl="sponsor.sponsorUrl"
            :sponsorLogoUrl="sponsor.sponsorLogoUrl"
            :sponsorDescript="sponsor.sponsorDescript" />
    </div>
    
    <div class="sponsorsContainer">
        <div v-for="(group, groupIndex) in miniSponsorGroups" :key="groupIndex" class="miniCon">
            <span v-for="name in group" :key="name">{{ name }}</span>
        </div>
    </div>
</template>

<script>
import sponsorItem from '~/components/thanks/sponsorItem'
import sponsorData from '~/data/sponsors.json'

export default {
    components: { sponsorItem },
    data() {
        return {
            bigSponsors: sponsorData.bigSponsors,
            miniSponsors: sponsorData.miniSponsors
        };
    },
    computed: {
        miniSponsorGroups() {
            const chunkSize = Math.ceil(this.miniSponsors.length / 4);
            return Array.from({ length: 4 }, (_, i) =>
                this.miniSponsors.slice(i * chunkSize, (i + 1) * chunkSize)
            );
        }
    }
}
</script>

<style lang="scss">
.thanksEyeCatch {
    display: flex;
    padding: 25px;
    margin: 0;
    flex-direction: column;
    align-items: center;
    background-color: $quaternary-color;
}

.thanksEyeCatchTitle {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 24px;
    margin: 0;
}

.thanksabout {
    background-color: $primary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: 5px;
    margin: 0;
    text-align: center;
}
.thanksabout p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}
.bigsponsorContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0;
}
.sponsorsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
    padding: 50px;
    margin: 0;
}
.miniCon {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: fit-content;
    width: fit-content;
    align-content: flex-start;
    gap: 5px;
    margin: 0;
}
.miniCon span {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    width: fit-content;
    margin: 0;
}

@media (min-width: 950px) {
    .thanksEyeCatchTitle {
        font-size: 40px;
    }
}
</style>

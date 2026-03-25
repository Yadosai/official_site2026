<template>
    <div class="kikakuEyeCatch">
        <p class="kikakuEyeCatchTitle" id="map" >会場地図</p>
        <img src="~/assets/img/kikaku/kikakuMap.png">
        <p class="kikakuEyeCatchTitle" id="timeTable">タイムテーブル</p>
        <div class="switchButtonContainer">
            <div class="switchButton left" :class="{ 'isActive': selectedFestival === 'zenyasai' }"
                @click="selectFestival('zenyasai')">
                <p>前夜祭</p>
                <div class="textContainer" :class="{ 'isActive': selectedFestival === 'zenyasai' }">
                    <p>5月30日</p>
                </div>
            </div>
            <div class="switchButton right" :class="{ 'isActive': selectedFestival === 'honsai' }"
                @click="selectFestival('honsai')">
                <p>本祭</p>
                <div class="textContainer" :class="{ 'isActive': selectedFestival === 'honsai' }">
                    <p>6月1日</p>
                </div>
            </div>
        </div>
    </div>
    <div class="timeTableContainer">
        <timeTable :kikaku-data="kikakuData[selectedFestival]" :stages="stageList[selectedFestival]"
            :timeTableStart="festivalData[selectedFestival].timeTableStart"
            :timeTableEnd="festivalData[selectedFestival].timeTableEnd" />
    </div>

    <div class="titleTextContainer">
        <p>企画一覧</p>
    </div>

    <div class="kikakuItemList">
        <item v-for="kikaku in kikakuItems" :key="kikaku.kikakuID + '-' + kikaku.title"
            :kikakuID="kikaku.kikakuID"
            :title="kikaku.title"
            :imgUrl="kikaku.imgUrl"
            :holder="kikaku.holder"
            :places="kikaku.places"
            :dates="kikaku.dates"
            :description="kikaku.description" />
    </div>

</template>

<script>
import item from '~/components/kikaku/item'
import timeTable from '~/components/kikaku/timetable'
import kikakuData from '~/data/kikaku.json'

export default {
    components: { item, timeTable },
    data() {
        return {
            kikakuData: kikakuData.timetable,
            stageList: kikakuData.stages,
            festivalData: kikakuData.festivalData,
            kikakuItems: kikakuData.kikakuItems,
            selectedFestival: 'zenyasai',
        }
    },
    methods: {
        selectFestival(festival) {
            this.selectedFestival = festival;
        }
    }
}

</script>

<style scoped lang="scss">
.kikakuEyeCatch {
    display: flex;
    padding: 25px 25px 0px 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
    background: $secondary-color;
}

#map #timeTable {
    scroll-margin-top: 70px;
}

.kikakuEyeCatchTitle {
    color: $tertiary-color;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.kikakuEyeCatch img {
    width: 70%;
    height: auto;

}

.switchButtonContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    align-self: stretch;
    background: rgba(255, 255, 255, 0.00);
}

.switchButton {
    display: flex;
    width: 105px;
    height: 48px;
    padding: 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    opacity: 0.9;
    color: $secondary-color;
    border: 2px solid $primary-color;
    box-sizing: border-box;
}

.switchButton.left {
    border-radius: 8px 0px 0px 8px;
}

.switchButton.right {
    border-radius: 0px 8px 8px 0px;
}

.switchButton.isActive {
    background: $primary-color;
}

.switchButton p {
    color: $primary-color;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.switchButton.isActive p {
    color: $secondary-color;

}

.switchButton .textContainer p {
    color: $primary-color;
    text-align: center;
    font-family: "Kaisei HarunoUmi";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.switchButton.isActive .textContainer p {
    color: $secondary-color;
}

.textContainer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

.timeTableContainer {
    text-align: center;
    overflow-x: scroll;
}

.titleTextContainer {
    background: $quaternary-color;
    display: flex;
    padding-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}

.titleTextContainer p {
    color: $tertiary-color;
    font-family: "Kaisei HarunoUmi";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.kikakuItemList {
    background: #CBCBCB;
    display: flex;
    padding: 25px 0px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
}

@media (min-width: 950px) {
    .kikakuEyeCatchTitle {
        font-size: 40px;
    }

    .kikakuEyeCatch img {
        width: 650px;
        height: auto;
    }
}
</style>
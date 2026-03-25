<template>
    <div class="Welcome">
        <h1 class="WelcomeTitle">Welcome!</h1>
    </div>
</template>

<style lang="scss">
.Welcome {
    text-align: center;
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: $quaternary-color;
}
</style>

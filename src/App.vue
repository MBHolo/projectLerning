<script setup>
    import HeaderBlock from './components/pagesBlocks/HeaderBlock.vue';
    import HeaderUserBlock from './components/pagesBlocks/HeaderUserBlock.vue';
    import { settingsViewApps } from './modules/stores/StoreSettingsViewApp';

    //Использование store настройки отображения приложения
    const useStoreSettingsViewApps = settingsViewApps();
</script>

<template>  
    <HeaderBlock></HeaderBlock>
    <div class="blur__block" :class="[{'active': useStoreSettingsViewApps.getBlurMainContainerParams()}]"></div>
    <div class="main-container">
        <HeaderUserBlock></HeaderUserBlock>
        <router-view />
    </div>
</template>

<style scoped>
    .main-container{
        width: 100%;
        margin-left: 80px;
        height: auto;
        position: relative;
    }
    .blur__block{
        position: absolute;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: var(--color-blur-block-not-active);
        transition: background-color .5s;
    }
    .blur__block.active{
        z-index: 1;
        background-color: var(--color-blur-block-active);
    }
</style>

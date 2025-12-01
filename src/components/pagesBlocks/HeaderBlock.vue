<template>
    <div class="header" :class="[{'active': useStoreSettingsViewApps.getShowHeaderBlockParams()}]">
        <div class="header-main">
            <div class="header-main-logo">
                <router-link :to="{name: 'home'}"><img id="headerLogo" src="../../images/logo/logoLight.svg" alt=""></router-link>
            </div>
            <div class="header-main-arrow" @click="showHeader()">
                <img id="headerArrow" src="../../images/arrows/headerArrow.svg" alt=""></img>
            </div>
        </div>
        <div class="header-menu">
            <router-link :to="{name: 'courses'}" class="nav-link">
                <div class="nav-link-item">
                    <div class="nav-link-item-main">
                        <img src="../../images/menuHeader/courses.svg" alt="">
                        <div class="nav-link-item-text">Курсы</div>
                    </div>
                    <div class="nav-link-item-arrow">
                        
                    </div>
                </div>
            </router-link>
            <router-link :to="{name: 'calendar'}" class="nav-link">
                <div class="nav-link-item">
                    <div class="nav-link-item-main">
                        <img src="../../images/menuHeader/calendar.svg" alt="">
                        <div class="nav-link-item-text">Календарь</div>
                    </div>
                    <div class="nav-link-item-arrow">

                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { settingsViewApps } from '../../modules/stores/StoreSettingsViewApp';

    //Использование store настройки отображения приложения
    const useStoreSettingsViewApps = settingsViewApps();

    function showHeader(){
        useStoreSettingsViewApps.showHeaderBlock();
        useStoreSettingsViewApps.blurMainContainer();
    }
</script>

<style scoped>
    .header{
        user-select: none;
        left: -200px;
        position: fixed;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        width: 280px;
        height: calc(100%);
        background-color: var(--color-hedaer-main);
        overflow: auto;
        overflow-x: hidden;
        transition: left .4s, padding .4s;
        padding: 35px 15px;
    }
    .header.active{
        left: 0px;
        padding: 35px 15px;
    }
    .header .header-main{
        padding-right: 10px;
        transition: padding .4s;
    }
    .header.active .header-main{
        padding-right: 15px;
    }
    .header-main{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 80px;
        padding: 0px 15px;
    }
    .header-main-logo a{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    .header-main-arrow{
        width: auto;
        height: 100%;
        display: flex;
        align-self: center;
        cursor: pointer;
    }
    img#headerLogo{
        width: 100%;
        height: auto;
        display: block;
    }
    .header img#headerArrow{
        height: 100%;
        display: flex;
        justify-content: end;
        transform: rotate(-90deg);
        transition: transform .4s;
    }
    .header.active img#headerArrow{
        transform: rotate(90deg);
    }
    .header-menu{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .nav-link{
        color: var(--color-main-light);
        font-weight: 700;
        font-size: 14px;
        padding: 10px 15px;
        background-color: rgba(255, 255, 255, .0);
        transition: background-color .4s;
        border-radius: 8px;
    }
    .nav-link:hover{
        background-color: rgba(255, 255, 255, .04);
    }
    .nav-link-item{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        overflow: hidden;
        margin-left: 192px;
        transition: margin .4s;
    }
    .header.active .nav-link-item{
        margin-left: 0px;
    }
    .nav-link-item-main{
        display: flex;
        gap: 15px;
        height: 24px;
        align-items: center;
    }
    .nav-link-item-main img{
        height: 100%;
    }
</style>

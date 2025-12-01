<template>
    <div class="header__user__block">
        <div class="header__user__block__container">
            <div class="header__user__block__container-search__block">
                <HeaderSearchBlock></HeaderSearchBlock>
            </div>
            <div class="header__user__block__container-user__block">

            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderSearchBlock from './HeaderSearchBlock.vue';
</script>

<style scoped>
    .header__user__block{
        display: block;
        width: 100%;
        height: 65px;
    }
    .header__user__block__container{
        height: 100%;
        width: 100%;
        padding: 7px 15px;
        display: flex;
        justify-content: space-between;
    }
</style>
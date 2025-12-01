//В данном файле хранится логика отображения приложения
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const settingsViewApps = defineStore('settingsViewApps', () => {
    const isBlurMainContainer   = ref(false);
    const isShowHeaderBlock     = ref(false);

    //Блюрить рабоче пространство
    function blurMainContainer(){
        isBlurMainContainer.value = !isBlurMainContainer.value;
    }

    //Показать блок бокового меню
    function showHeaderBlock(){
        isShowHeaderBlock.value = !isShowHeaderBlock.value;
    }

    //Геттер для полученичя параметра блюра
    function getBlurMainContainerParams(){
        return isBlurMainContainer.value;
    }

    //Геттер для получения параметра отображения бокового меню
    function getShowHeaderBlockParams(){
        return isShowHeaderBlock.value;
    }

    return {
        getBlurMainContainerParams,
        getShowHeaderBlockParams,
        blurMainContainer,
        showHeaderBlock,
    };
});
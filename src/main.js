//Подключение стилей
import './style/main.css';
import './style/root.css';

//Добавление модулей
import router from "./modules/router";
import { createPinia } from 'pinia';

const pinia = createPinia();

//Создание приложения
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
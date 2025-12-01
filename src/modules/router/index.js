import { createRouter, createWebHistory } from 'vue-router';
import PageHome     from '../../components/pages/PageHome.vue';
import PageCourses  from '../../components/pages/PageCourses.vue';
import PageCalendar from '../../components/pages/PageCalendar.vue';
import PageAccount  from '../../components/pages/PageAccount.vue'; 

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:       "/",
            name:       "home",
            component:  PageHome,
            meta: {
                title: 'Главная страница',
            }
        },
        {
            path:       "/courses",
            name:       "courses",
            component:  PageCourses,
            meta: {
                title: 'Курсы',
            }
        },
        {
            path:       "/calendar",
            name:       "calendar",
            component:  PageCalendar,
            meta: {
                title: 'Календарь',
            }
        },
        {
            path:       "/account",
            name:       "account",
            component:  PageAccount,
            meta: {
                title: 'Личный кабинет',
            }
        },
    ]
})

export default router;
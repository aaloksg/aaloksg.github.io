import { createRouter, createWebHistory } from 'vue-router';
import BioView from '@/views/BioView.vue';
import PublicationsView from '@/views/PublicationsView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import FunProjects from '@/views/FunProjects.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'bio',
            component: BioView,
        },
        {
            path: '/publication',
            name: 'publication',
            component: PublicationsView,
        },
        {
            path: '/my-projects',
            name: 'my-projects',
            component: ProjectsView,
        },
        {
            path: '/fun-projects',
            name: 'fun-projects',
            component: FunProjects,
        },
    ],
});

export default router;

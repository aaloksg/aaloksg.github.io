import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'bio',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/BioView.vue'),
        },
        {
            path: '/publication',
            name: 'publication',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/PublicationsView.vue'),
        },
        {
            path: '/my-projects',
            name: 'my-projects',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/ProjectsView.vue'),
        },
        {
            path: '/fun-projects',
            name: 'fun-projects',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/fun-projects/FunProjects.vue'),
        },
    ],
});

export default router;

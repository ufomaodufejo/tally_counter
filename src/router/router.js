import ContainerComp from '@/views/ContainerComp';
import NotFound from '@/views/NotFound';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'Home',
            component: ContainerComp
          },
          {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
          }
    ]
})

export default router;
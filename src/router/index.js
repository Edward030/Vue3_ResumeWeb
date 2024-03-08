import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView-1.vue';
//Dynamic routes
const CourseStudy = () => import('../views/home/CourseStudy-2.vue');
const Specialist = () => import('../views/home/Specialist-3.vue');
const Photography = () => import('../views/home/Photography-4.vue');
const Projects = () => import('../views/home/Projects-5.vue');
// other pages
const iScroll = () => import('../views/iScroll/iScroll.vue');
const Page3 = () => import('../views/page3/page3.vue');
const Page4 = () => import('../views/page4/page4.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home/coursestudy',
    name: 'CourseStudy',
    component: CourseStudy,
  },
  {
    path: '/home/specialist',
    name: 'Specialist',
    component: Specialist,
  },
  {
    path: '/home/photography',
    name: 'Photography',
    component: Photography,
  },
  {
    path: '/home/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/iScroll',
    name: 'iScroll',
    component: iScroll,
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3,
  },
  {
    path: '/page4',
    name: 'page4',
    component: Page4,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 避免頁面操作產生刷新頁面的效果
  routes
})

export default router;

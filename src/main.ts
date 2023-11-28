import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/lib/index.css';
import { IndexBar, IndexAnchor, Cell } from 'vant';

const app = createApp(App);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(Cell);
app.mount('#app')



import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js'; // Ajuste o caminho de importação se necessário

const app = createApp(App);

app.use(router); 
app.mount('#app');
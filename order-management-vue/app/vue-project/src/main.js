import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

export default {
    data() {
        return {
            orderTypes: [
                {
                    code: "Cs",
                    title: "Casual",
                },
                {
                    "code": "Ex",
                    "title": "Express"
                }
            ]
        }
    }
}

createApp(App).mount('#app');

import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n"
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faDocker, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

library.add(faDocker, faGithub, faLinkedin, faCode)

createApp(App)
    .use(i18n)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

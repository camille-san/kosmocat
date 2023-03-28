import {reactive} from 'vue'

export const HOME = {
    key: 'HOME',
    label: 'menu.home'
};
export const CV = {
    key: 'CV',
    label: 'menu.cv'
};

export const MENU = [HOME, CV];

export const store = reactive({
    currentPage: HOME
})
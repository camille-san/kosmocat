import {reactive} from 'vue'

export const ABOUT = {
    key: 'ABOUT',
    label: 'menu.about',
    color: 'text-amber-400'
};
export const TECHNO = {
    key: 'TECHNO',
    label: 'menu.techno',
    color: 'text-rose-400'
};
export const CONTACT = {
    key: 'CONTACT',
    label: 'menu.contact',
    color: 'text-violet-400'
};
export const MENU = [ABOUT, TECHNO, CONTACT];

export const store = reactive({
    currentPage: ABOUT
})
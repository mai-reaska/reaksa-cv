import { Component } from "vue";

export const AppState = {
    activePage: null,
    darkMode: false,
    color: 'slate',
    availablePages: [],
    showJson: false,
    gtagActive: false
};

export const Page = {
    key: '',
    label: '',
    data: [],
    component: Component
};

export const AppColor = [
    'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];


import { App } from './components/App.js';

export const main = document.querySelector('root');

const init = () => {
    window.addEventListener("hashChange", () => console.log(window.location.hash));
}

window.addEventListener("load", () => {
    data.appendChild(App(data));
    init();
})


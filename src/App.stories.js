import App from './App.vue';

import { PLANTILLA_HTML } from "./constants/storybook.constant";

const TITULO = `MANAGEMENT APP`;

const SUMMARY = `
    El componente <strong>MANAGEMENT APP</strong> permite la creación del componente principal, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 100%"><app v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'APP',
    component: App,
}

const Template = args => ({
    components: { App },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
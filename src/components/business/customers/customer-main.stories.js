import CustomerMain from './customer-main.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT CUSTOMER-FILTERS`;

const SUMMARY = `
    El componente <strong>MANAGEMENT CUSTOMER-MAIN</strong> permite la creación de un componente para buscar y listar clientes, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 100%"><customer-main v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BUSINESS/Customers',
    component: CustomerMain,
}

const Template = args => ({
    components: { CustomerMain },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
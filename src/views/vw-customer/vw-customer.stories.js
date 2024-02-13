import VwCustomer from './vw-customer.vue';

import { PLANTILLA_HTML } from "../../constants/storybook.constant";

const TITULO = `MANAGEMENT VIEW-CUSTOMER`;

const SUMMARY = `
    El componente <strong>MANAGEMENT VIEW-CUSTOMER</strong> permite la creación de una vista para buscar y listar clientes, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 100%"><vw-customer v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'VIEWS/Customers',
    component: VwCustomer,
}

const Template = args => ({
    components: { VwCustomer },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
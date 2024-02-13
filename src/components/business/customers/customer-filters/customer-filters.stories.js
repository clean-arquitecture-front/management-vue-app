import CustomerFilters from './customer-filters.vue';

import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";

const TITULO = `MANAGEMENT CUSTOMER-FILTERS`;

const SUMMARY = `
    El componente <strong>MANAGEMENT CUSTOMER-FILTERS</strong> permite la creación de un componente para filtrar clientes, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 100%"><customer-filters v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BUSINESS/Customers/CustomerFilters',
    component: CustomerFilters,
}

const Template = args => ({
    components: { CustomerFilters },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
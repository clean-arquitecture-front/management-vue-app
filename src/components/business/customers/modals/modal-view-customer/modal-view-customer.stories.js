import ModalViewCustomer from './modal-view-customer.vue';

import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `MANAGEMENT MODAL-VIEW-CUSTOMER`;

const SUMMARY = `
    El componente <strong>MANAGEMENT MODAL-VIEW-CUSTOMER</strong> permite la creación de un componente para ver el detalle de los datos de un cliente, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 50%"><modal-view-customer v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BUSINESS/Customers/Modals/ModalViewCustomer',
    component: ModalViewCustomer,
}

const Template = args => ({
    components: { ModalViewCustomer },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
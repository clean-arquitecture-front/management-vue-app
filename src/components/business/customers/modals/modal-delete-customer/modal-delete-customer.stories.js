import ModalDeleteCustomer from './modal-delete-customer.vue';

import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `MANAGEMENT MODAL-DELETE-CUSTOMER`;

const SUMMARY = `
    El componente <strong>MANAGEMENT MODAL-DELETE-CUSTOMER</strong> permite la creación de un componente para modificar los datos de un cliente, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 50%"><modal-delete-customer v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BUSINESS/Customers/Modals/ModalDeleteCustomer',
    component: ModalDeleteCustomer,
}

const Template = args => ({
    components: { ModalDeleteCustomer },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    
}
Base.storyName = "Base";
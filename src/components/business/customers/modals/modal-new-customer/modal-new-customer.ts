import { defineComponent, reactive } from "vue";
import useVuelidate from "@vuelidate/core";

import {
    VButton,
    VInput,
    VModal
} from "management-components";

import {
    validatorCustomer
} from "management-core";

import useModal from "../../../../../composables/common/modal.composable";
import useCustomerGrid from "../../../../../composables/business/customer-grid.composable";

export default defineComponent({
    components: {
        VButton,
        VInput,
        VModal
    },
    setup() {

        const customer = reactive({
            "name": "",
            "lastName": "",
            "dni": ""
        });
        const v$ = useVuelidate(validatorCustomer, customer);

        const { openCloseModal, isOpen } = useModal();
        const { createCustomer } = useCustomerGrid();

        const closeModal = () => {
            openCloseModal(false);
        }

        const saveCustomer = () => {
            v$.value.$validate();

            if (!v$.value.$error) {
                createCustomer(customer);
                openCloseModal(false);
            }

        }

        return {
            v$,
            isOpen,
            customer,
            closeModal,
            saveCustomer
        }
    }
})
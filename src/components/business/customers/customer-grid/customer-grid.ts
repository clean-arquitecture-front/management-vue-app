import { defineComponent, onMounted, onUnmounted} from "vue";

import {
    VButton,
    VCard,
    VGrid
} from "management-components";

import useCustomerGrid from "../../../../composables/business/customer-grid.composable";
import useModal from "../../../../composables/common/modal.composable";

import { TypeModalEnum } from "../../../../enums/type-model.enum";

export default defineComponent({
    components: {
        VButton,
        VCard,
        VGrid
    },
    setup() {
        const {
            setListCustomer,
            getListCustomer,
            setCustomer,
            resetValues
        } = useCustomerGrid();

        const { openCloseModal, setType } = useModal();

        const customers = getListCustomer();

        const openModalCreateCustomer = (type: number) => {
            setType(type);
            openCloseModal(true);
        }

        const openModalUpdateCustomer = (type: number, customer: any) => {
            setCustomer(customer);
            setType(type);
            openCloseModal(true);
        }

        const openModalDeleteCustomer = (type: number, customer: any) => {
            setCustomer(customer);
            setType(type);
            openCloseModal(true);
        }

        const openModalViewCustomer = (type: number, customer: any) => {
            setCustomer(customer);
            setType(type);
            openCloseModal(true);
        }

        onMounted(() => {
            setListCustomer({});
        });

        onUnmounted(() => {
            resetValues();
        })

        return {
            customers,
            TypeModalEnum,
            openModalCreateCustomer,
            openModalDeleteCustomer,
            openModalUpdateCustomer,
            openModalViewCustomer
        }
    }
})
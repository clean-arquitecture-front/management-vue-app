import { defineComponent } from "vue";

import { 
    VButton,
    VModal 
} from "management-components";

import useModal from "../../../../../composables/common/modal.composable";
import useCustomerGrid from "../../../../../composables/business/customer-grid.composable";

export default defineComponent({
    components: {
        VButton,
        VModal
    },
    setup() {

        const { openCloseModal, isOpen } = useModal();
        const { getCustomer, deleteCustomer } = useCustomerGrid()
        const customer = getCustomer();

        const closeModal = () => {
            openCloseModal(false);
        }

        const removeCustomer = () => {
            deleteCustomer(customer.value.id);
            openCloseModal(false);
        }
        return {
            isOpen,
            customer,
            closeModal,
            removeCustomer
        }
    }
})
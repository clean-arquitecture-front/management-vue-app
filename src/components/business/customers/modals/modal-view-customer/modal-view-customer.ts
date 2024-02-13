import { defineComponent } from "vue";

import { 
    VButton,
    VInput,
    VModal 
} from "management-components";

import useModal from "../../../../../composables/common/modal.composable";
import useCustomerGrid from "../../../../../composables/business/customer-grid.composable";

export default defineComponent({
    components: {
        VButton,
        VInput,
        VModal
    },
    setup() {

        const { openCloseModal, isOpen } = useModal();
        const { getCustomer } = useCustomerGrid()
        const customer = getCustomer();

        const closeModal = () => {
            openCloseModal(false);
        }

        return {
            isOpen,
            customer,
            closeModal
        }
    }
})
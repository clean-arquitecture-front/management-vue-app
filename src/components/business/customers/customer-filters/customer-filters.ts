import { defineComponent, reactive } from "vue";

import {
    VButton,
    VCard,
    VInput
} from "management-components";

import useCustomerGrid from "../../../../composables/business/customer-grid.composable";

export default defineComponent({
    components: {
        VButton,
        VCard,
        VInput
    },
    setup() {
        const filter = reactive({});

        const {
            setListCustomer,
        } = useCustomerGrid();

        const searchCustomer = () => {
            setListCustomer(filter);
        }

        return {
            filter,
            searchCustomer
        }
    }
})
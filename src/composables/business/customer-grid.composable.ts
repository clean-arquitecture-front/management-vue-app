import { executeAction } from "../../utils/vuex.util";
import { computed } from "vue";
import { useStore } from "vuex";

import {
    CUSTOMER_GRID_SET_LIST_CUSTOMER,
    CUSTOMER_GRID_GET_LIST_CUSTOMER,
    CUSTOMER_GRID_SET_CUSTOMER,
    CUSTOMER_GRID_GET_CUSTOMER,
    CUSTOMER_GRID_CREATE_CUSTOMER,
    CUSTOMER_GRID_UPDATE_CUSTOMER,
    CUSTOMER_GRID_DELETE_CUSTOMER,
    CUSTOMER_RESET_VALUES
} from "../../store/business/customer-grid.store";

export default function useCustomerGrid() {
    const store = useStore();

    const setListCustomer = (params: any) => {
        executeAction(CUSTOMER_GRID_SET_LIST_CUSTOMER, params);
    }

    const setCustomer = (customer: any) => {
        executeAction(CUSTOMER_GRID_SET_CUSTOMER, customer);
    }

    const createCustomer = (customer: any) => {
        executeAction(CUSTOMER_GRID_CREATE_CUSTOMER, customer);
    }

    const updateCustomer = (customer: any) => {
        executeAction(CUSTOMER_GRID_UPDATE_CUSTOMER, customer);
    }

    const deleteCustomer = (id: number) => {
        executeAction(CUSTOMER_GRID_DELETE_CUSTOMER, id);
    }

    const resetValues = () => {
        executeAction(CUSTOMER_RESET_VALUES, null);
    }

    const getListCustomer = () => {
        const listCustomer = computed(
            () => store.getters[CUSTOMER_GRID_GET_LIST_CUSTOMER]
        );

        return listCustomer;
    }

    const getCustomer = () => {
        const customer = computed(
            () => store.getters[CUSTOMER_GRID_GET_CUSTOMER]
        )

        return customer;
    }

    return {
        getListCustomer,
        setListCustomer,
        getCustomer,
        setCustomer,
        createCustomer,
        updateCustomer,
        deleteCustomer,
        resetValues
    }
}
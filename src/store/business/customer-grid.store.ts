import {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    getCustomer,
    listCustomer
} from 'management-core';

export const CUSTOMER_GRID_GET_LIST_CUSTOMER = "customerGridStore/getListCustomer";
export const CUSTOMER_GRID_SET_LIST_CUSTOMER = "customerGridStore/setListCustomer";

export const CUSTOMER_GRID_SET_CUSTOMER = "customerGridStore/setCustomer"
export const CUSTOMER_GRID_GET_CUSTOMER = "customerGridStore/getCustomer"

export const CUSTOMER_GRID_CREATE_CUSTOMER = "customerGridStore/createCustomer"
export const CUSTOMER_GRID_UPDATE_CUSTOMER = "customerGridStore/updateCustomer"
export const CUSTOMER_GRID_DELETE_CUSTOMER = "customerGridStore/deleteCustomer"
export const CUSTOMER_RESET_VALUES = "customerGridStore/resetValues"

export default {
    namespaced: true,
    state: {
        customer: {},
        customers: [],
    },
    mutations: {
        SET_LIST_CUSTOMER(state: any, customers: any) {
            state.customers = customers;
        },
        SET_CUSTOMER(state: any, customer: any) {
            state.customer = customer;
        },
        RESET_VALUES(state: any) {
            state.customers = [];
            state.customer = {};
        }
    },
    actions: {
        async setListCustomer({commit}: any, params: any) {
            const customers = await listCustomer(params);
            commit('SET_LIST_CUSTOMER', customers);
        },
        async setCustomer({commit}: any, customer: any) {
            const entity = await getCustomer(customer.id);
            commit('SET_CUSTOMER', entity);
        },
        async createCustomer({commit}: any, customer: any) {
            await createCustomer(customer);
            const customers = await listCustomer({});
            commit('SET_LIST_CUSTOMER', customers);
        },
        async updateCustomer({commit}: any, customer: any) {
            await updateCustomer(customer);
            const customers = await listCustomer({});
            commit('SET_LIST_CUSTOMER', customers);
        },
        async deleteCustomer({commit}: any, id: number) {
            await deleteCustomer(id);
            const customers = await listCustomer({});
            commit('SET_LIST_CUSTOMER', customers);
        },
        async resetValues({commit}: any) {
            commit('RESET_VALUES');
        }
    },
    getters: {
        getListCustomer(state: any) {
            return state.customers;
        },
        getCustomer(state: any) {
            return state.customer
        }
    }
}
import { computed, shallowRef, watch } from "vue";
import { useStore } from "vuex";

import ModalDeleteCustomer from "../../components/business/customers/modals/modal-delete-customer/modal-delete-customer.vue";
import ModalNewCustomer from "../../components/business/customers/modals/modal-new-customer/modal-new-customer.vue";
import ModalUpdateCustomer from "../../components/business/customers/modals/modal-update-customer/modal-update-customer.vue";
import ModalViewCustomer from "../../components/business/customers/modals/modal-view-customer/modal-view-customer.vue";

import { executeAction } from "../../utils/vuex.util";

import { TypeModalEnum } from "../../enums/type-model.enum";

import { 
    MODAL_STORE_GET_IS_OPEN,
    MODAL_STORE_GET_TYPE,
    MODAL_STORE_SET_IS_OPEN,
    MODAL_STORE_SET_TYPE
} from "../../store/common/modal.store";

import { 
    OVERLAY_STORE_SET_IS_OPEN 
} from "../../store/common/overlay.store";

export default function useModal() {
    
    const modalComponent: any = shallowRef();
    const store = useStore();

    const isOpen = computed(
        () => store.getters[MODAL_STORE_GET_IS_OPEN]
    );

    const getType = computed(
        () => store.getters[MODAL_STORE_GET_TYPE]
    );

    const openCloseModal = (flag: boolean) => {
        executeAction(MODAL_STORE_SET_IS_OPEN, flag);
        executeAction(OVERLAY_STORE_SET_IS_OPEN, flag);

        if(!flag) {
            setTimeout(() => {
                setType(0);
            }, 500)
        }
    }

    const setType = (type: number) => {
        executeAction(MODAL_STORE_SET_TYPE, type);
    }

    const chooseModalComponent = () => {
        const type = getType.value;
        if (+type === +TypeModalEnum.NEW_CUSTOMER) {
            return ModalNewCustomer;
        } else if (+type === +TypeModalEnum.VIEW_CUSTOMER) {
            return ModalViewCustomer;
        } else if (+type === +TypeModalEnum.UPDATE_CUSTOMER) {
            return ModalUpdateCustomer;
        } else if (+type === +TypeModalEnum.DELETE_CUSTOMER) {
            return ModalDeleteCustomer;
        } else {
            return null;
        }
    }

    watch(getType, () => {
        modalComponent.value = chooseModalComponent();
    })

    return {
        getType,
        isOpen,
        modalComponent,
        openCloseModal,
        setType
    }
}
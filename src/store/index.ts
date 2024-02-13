import { createStore } from 'vuex'

import customerGridStore from "./business/customer-grid.store";
import modalStore from "./common/modal.store";
import overlayStore from "./common/overlay.store";

export default createStore({
  modules: {
    customerGridStore,
    modalStore,
    overlayStore
  }
})
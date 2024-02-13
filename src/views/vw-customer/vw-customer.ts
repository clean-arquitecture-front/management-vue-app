import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
    components: {
        CustomerMain: defineAsyncComponent(() =>
        import('../../components/business/customers/customer-main.vue')
    )
    }
})
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
    components: {
        CustomerFilters: defineAsyncComponent(() =>
            import('./customer-filters/customer-filters.vue')
        ),
        CustomerGrid: defineAsyncComponent(() =>
            import('./customer-grid/customer-grid.vue')
        )
    }
});
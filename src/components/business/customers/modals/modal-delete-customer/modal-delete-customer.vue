<template>
  <v-modal title="ELIMINAR CLIENTE" :isOpen="isOpen">
    <template #content>
      <span class="question">Esta seguro de eliminar el cliente?</span>
    </template>
    <template #footer>
      <v-button class="v-button secondary" @Click="closeModal"
        >CANCELAR</v-button
      >
      <v-button class="v-button primary" @Click="removeCustomer">ACEPTAR</v-button>
    </template>
  </v-modal>
</template>

<script src="./modal-delete-customer.ts" lang="ts"/>
<style src="./modal-delete-customer.scss" lang="scss" scoped/>
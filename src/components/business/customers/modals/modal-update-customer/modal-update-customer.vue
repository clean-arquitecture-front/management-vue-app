<template>
  <v-modal title="MODIFICACIÓN CLIENTE" :isOpen="isOpen">
    <template #content>
      <div>
        <v-input v-model="customer.name" label="NOMBRE" placeholder="Ingrese nombres" />
      </div>
      <div class="mt-5">
        <v-input v-model="customer.lastName" label="APELLIDOS" placeholder="Ingrese apellidos" />
      </div>
      <div class="mt-5">
        <v-input v-model="customer.dni" label="DNI" placeholder="Ingrese dni"/>
      </div>      
    </template>
    <template #footer>
      <v-button class="v-button secondary" @Click="closeModal"
        >CANCELAR</v-button
      >
      <v-button class="v-button primary" @Click="modifyCustomer">ACEPTAR</v-button>
    </template>
  </v-modal>
</template>

<script src="./modal-update-customer.ts" lang="ts"/>
<style src="./modal-update-customer.scss" lang="scss" scoped/>
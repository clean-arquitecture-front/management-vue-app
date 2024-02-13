<template>
  <v-modal title="NUEVO CLIENTE" :isOpen="isOpen">
    <template #content>
      <div>
        <v-input v-model="customer.name" label="NOMBRE" placeholder="Ingrese nombres" :invalid="v$.name.$error"/>
      </div>
      <div class="mt-5">
        <v-input v-model="customer.lastName" label="APELLIDOS" placeholder="Ingrese apellidos" :invalid="v$.lastName.$error"/>
      </div>
      <div class="mt-5">
        <v-input v-model="customer.dni" label="DNI" placeholder="Ingrese dni" :invalid="v$.dni.$error"/>
      </div>      
    </template>
    <template #footer>
      <v-button class="v-button secondary" @Click="closeModal"
        >CANCELAR</v-button
      >
      <v-button class="v-button primary" @Click="saveCustomer">ACEPTAR</v-button>
    </template>
  </v-modal>
</template>

<script src="./modal-new-customer.ts" lang="ts"/>
<style src="./modal-new-customer.scss" lang="scss" scoped/>
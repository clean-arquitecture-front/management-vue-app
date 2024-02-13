<template>
  <v-modal title="VISTA CLIENTE" :isOpen="isOpen">
    <template #content>
      <div>
        <v-input v-model="customer.name" label="NOMBRE" placeholder="Ingrese nombres" disabled/>
      </div>
      <div class="mt-5">
        <v-input v-model="customer.lastName" label="APELLIDOS" placeholder="Ingrese apellidos" disabled/>
      </div>
      <div class="mt-5">
        <v-input v-model="customer.dni" label="DNI" placeholder="Ingrese dni" disabled/>
      </div>      
    </template>
    <template #footer>
      <v-button class="v-button secondary" @Click="closeModal"
        >CANCELAR</v-button
      >
    </template>
  </v-modal>
</template>

<script src="./modal-view-customer.ts" lang="ts"/>
<style src="./modal-view-customer.scss" lang="scss" scoped/>
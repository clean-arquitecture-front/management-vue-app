<template>
  <v-card title="Filtros Cliente">
    <template #content>
        <div class="inputs">
            <v-input v-model="filter.name" label="NOMBRE" placeholder="Ingrese nombre"/>
            <v-input v-model="filter.lastName" label="APELLIDOS" placeholder="Ingrese apellidos"/>
            <v-input v-model="filter.dni" label="DNI" placeholder="Ingrese dni"/>
        </div>
        <div class="options">
            <span></span>
            <v-button class="v-button primary" @click="searchCustomer">BUSCAR</v-button>
        </div>
    </template>
  </v-card>
</template>

<script src="./customer-filters.ts" lang="ts"/>
<style src="./customer-filters.scss" lang="scss" scoped/>
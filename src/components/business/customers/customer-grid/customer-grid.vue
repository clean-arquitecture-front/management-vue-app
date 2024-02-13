<template>
  <v-card title="Clientes">
    <template #content>
      <div class="space-between">
        <span></span>
        <v-button class="v-button primary" @click="openModalCreateCustomer(TypeModalEnum.NEW_CUSTOMER)">NUEVO</v-button>
      </div>
      <v-grid>
        <template #thead>
          <tr>
            <th>N°</th>
            <th>NOMBRES</th>
            <th>APELLIDOS</th>
            <th>DNI</th>
            <th>ACCIONES</th>
          </tr>
        </template>
        <template #tbody>
          <tr v-for="(customer, index) in customers" :key="customer.id">
            <td>{{ index + 1 }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.dni }}</td>
            <td>
              <a href="javascript:void(0)" 
                class="icon-normal"
                @click="openModalUpdateCustomer(TypeModalEnum.UPDATE_CUSTOMER, customer)"
                ><em class="fa-solid fa-pencil"></em
              ></a>
              <a href="javascript:void(0)" 
                class="icon-normal"
                @click="openModalViewCustomer(TypeModalEnum.VIEW_CUSTOMER, customer)"
                ><em class="fa-solid fa-eye"></em
              ></a>
              <a
                href="javascript:void(0)"
                class="icon-remove"
                @click="openModalDeleteCustomer(TypeModalEnum.DELETE_CUSTOMER, customer)"
                ><em class="fa-solid fa-trash"></em
              ></a>
            </td>
          </tr>
        </template>
      </v-grid>
    </template>
  </v-card>
</template>

<script src="./customer-grid.ts" lang="ts"/>
<style src="./customer-grid.scss" lang="scss" scoped/>
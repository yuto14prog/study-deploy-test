<script setup lang="ts">
import apiService from "@/services/apiService";
import { onMounted, ref } from "vue";

type User = {
    id: number;
    firstName: string;
    lastName: string;
};

const users = ref<User[]>([]);
const error = ref(null)

const fetchUsers = async () => {
    try {
        const response = await apiService.getUsers()
        users.value = response.data
    } catch (err: any) {
        console.error('Error fetching users:', {
            message: err.message,
            code: err.code,
            response: err.response
        })
        error.value = err.message
    }
}

onMounted(() => {
    fetchUsers()
})

</script>

<template>
  <main>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>
  </main>
</template>

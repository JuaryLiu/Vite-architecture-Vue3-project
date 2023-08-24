<template>
    <div>{{ count }}</div>
    <el-button type="primary" @click="add" >add</el-button>
</template>

<script setup>
import {getUserList} from '@api/users.js'
import { onMounted, ref } from 'vue'
import useStore from '@store/index.js'
import {storeToRefs} from 'pinia'
const store = useStore()
const {useCounterStore} = store
const {count} = storeToRefs(useCounterStore) 
const {addCount} = useCounterStore
onMounted(() => {
    getUserList().then(res => {
        console.log(res.data);
    })
})
const add = () => {
    addCount()
}

</script>

<style lang="scss" scoped>
div {
    width: clamp(100px, 30% ,200px);
    height: (50px * 2);
}
</style>
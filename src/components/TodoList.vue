<template>
    <ul class="list-group" >
        <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
            <span>{{todo.title}}</span>
            <span class="my-auto todo-remove" @click="$emit('removeTodo', index)">X</span>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.list-group-item {
    display: flex;
    justify-content: space-between;
}

.todo-remove {
    color: red;
    font-weight: bold;
    cursor: pointer;
}
</style>
<template>
    <div>
        <todo-header/>
        <section class="app-section my-5 container">
            <todo-form class="todo-form" @submitTodo="addTodo"/>
            <todo-list :todos="todos" class="w-100 my-5" @removeTodo="removeTodo" />
        </section>
    </div>
</template>

<script>
import {TodoHeader, TodoList, TodoForm} from "./components";
import * as axios from "axios";
export default {
    components: {
        TodoHeader,
        TodoList,
        TodoForm
    },
    async beforeMount() {
        const { data } = await axios.get("http://localhost:3000/todos");
        // this.todos=data;
        setTimeout(()=>this.todos=Object.freeze(data), 2000);
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index,1);
        }
    }
}
</script>
<style scoped>
.app-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

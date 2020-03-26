<template>
    <form @submit.prevent="submitTodo" class="form-inline">
        <div class="form-group">
            <input type="text" v-model="todo" class="form-control" id="todo-input" placeholder="Example Todo...">
        </div>
        <button class="btn btn-primary" type="submit">Add</button>
    </form>
</template>
<script>
export default {
    data() {
        return { todo: "" }
    },
    methods: {
        submitTodo() {
            this.$emit("submitTodo", this.todo);
            this.todo = "";
        }
    }
}
</script>
<style scoped>
.btn-primary {
}
</style>
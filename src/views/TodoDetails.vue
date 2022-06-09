<template>
    <div v-if="todo">
        <h1>{{ todo.title }}</h1>
        <hr>
        <p>Status: <span :class="(todo.completed ? 'complete' : 'unfinished')">{{ todo.completed ? "Complete" : "Unfinished" }}</span></p>
    </div>
</template>

<script>
import TodosService from "@/services/TodosService";
export default {
    data() {
        return {
            todo: null
        }
    },
    props: ['id'],
    created() {
        TodosService.getTodo(this.id)
        .then(response => {
            this.todo = response.data
            console.log(response.data)
        })
        .catch()
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .complete {
        font-weight: bold;
        color:green;
    }
    .unfinished {
        font-weight: bold;
        color: red
    }
</style>

<template>
    <div v-if="todo">
        <h1>{{ todo.title }}</h1>

        <p>Status: <span :class="(todo ? 'complete' : 'unfinished')">{{ todo ? "Complete" : "Unfinished" }}</span></p>
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
    created() {
        TodosService.getTodo(10)
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

<template>
  <div class="todos">

    <TodoCard 
    v-for="todo in todos" 
    :key="todo.id"
    :todo="todo">
    </TodoCard>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TodosService from '@/services/TodosService'
import TodoCard from '../components/TodoCard.vue'


export default {
  name: 'TodoList',
  components: {
    TodoCard
  },
  data() {
    return {
      todos: null
    }
  },
  created() {
    TodosService.getTodos()
    .then(response => {
      this.todos = response.data
      console.log(this.todos)
    })
    .catch(err => {
      console.log(err)
    })
  },

}
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
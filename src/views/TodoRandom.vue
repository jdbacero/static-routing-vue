<template>
  <div class="todos">

    <TodoCard 
    :key="todo.id"
    :todo="todo"
    v-if="todo">
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
      todo: null
    }
  },
  created() {
    let total = 0
    TodosService.getTodos()
    .then(response => {
        total = response.data.length
    })
    .then(() => {
        let random_num = Math.floor(Math.random() * (total - 0) ) + 0
        TodosService.getTodo(random_num)
        .then(response => {
            this.todo = response.data
        })
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
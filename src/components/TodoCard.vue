<template>
  <router-link
    class="todo-link"
    :to="{name: 'TodoDetails', params: {id: todo.id}}"
  >
    <div class="todo-card">
      <h3>Title: {{ todo.title }}</h3>
      <span>Completion status: <b>{{ todo.completed }}</b></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.todo-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.todo-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>

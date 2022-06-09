<template>
  <router-link
    class="todo-link"
    to="/todo/10"
  >
    <div class="todo-card">
      <h3>Title of Todo</h3>
      <span>Completion status: <b>False</b></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    // msg: String
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

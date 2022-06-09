import axios from 'axios'

const todosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getTodos() {
        return todosClient.get()
    },
    getTodo(id) {
        return todosClient.get(`/${id}`).catch(err => {console.log(err)})
    },
    getRandomTodo() {
        async() => await this.getTodos()
        .then(response => {
            let total = response.data.length
            let random_num = Math.floor(Math.random() * (total - 0) ) + 0
            console.log(total)
            return this.getTodo(random_num)
        })
    }
}
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
        return todosClient.get(`/${id}`)
    }
}
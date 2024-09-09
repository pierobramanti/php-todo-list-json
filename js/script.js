const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            url: "server.php"
        }
    },
    methods: {
        getToDoList() {
            axios.get(this.url).then((res) => {
                console.log(res.data)
                this.todoList = res.data
            })
        }
    },
    mounted() {
        this.getToDoList()
    }

}).mount("#app")
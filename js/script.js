const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            url: "server.php"
        }
    },
    methods: {
    }

}).mount("#app")
<template>
    <div id="app">
        <Header :addTodo="addTodo" />
        <List :todos="todos" :delTodo="delTodo" />
        <Footer :todos="todos" :allSelectDone="allSelectDone" :delAllTodo="delAllTodo" />
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import List from './components/List.vue'
    import Footer from './components/Footer.vue'
    export default {
        name: 'app',
        components: {
            Header,
            List,
            Footer,
        },
        data(){
            return {
                todos:[
                    {
                        task:'吃饭',
                        done:false
                    },
                    {
                        task:'睡觉',
                        done:false
                    },
                    {
                        task:'打豆豆',
                        done:false
                    }
                ],
            }
        },
        methods:{
            allSelectDone(value){
                this.todos.forEach(function(item){
                    item.done = value
                })
            },
            addTodo(task){
                if(!task.trim()){
                    return
                }
                const todo = {
                    task:task.trim(),
                    done:false
                }
                this.todos.unshift(todo)
            },
            delTodo(index){
                this.todos.splice(index,1)
            },
            delAllTodo(){
                this.todos = this.todos.filter(todo=>!todo.done)
            }
        }
    }
</script>

<style>
    #app {
        width: 600px;
        margin: 100px auto;
    }
</style>
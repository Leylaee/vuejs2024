const comments = {
    template: '#commentTemplate',
    data: function () {
        return {
            com:[]
        }
    },
    props: ['comment'],
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(response => this.com = response.data)
    }

 }
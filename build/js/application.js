var app = new Vue({
    el: '#app',
    data () {
        return {
            comunicados: null,
            tipoComunicados: null,
            tipo: -1
        }
    },

    mounted () {
        axios
            .get('http://localhost:84/comunicados')
            .then(response => (this.comunicados = response.data))
            .catch(error => console.log(error));


        axios
            .get('http://localhost:84/tiposComunicados')
            .then(response => (this.tipoComunicados = response.data))
            .catch(error => console.log(error));
    }
})
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
            .get('./endpoints/comunicados.json')
            .then(response => (this.comunicados = response.data))
            .catch(error => console.log(error));


        axios
            .get('./endpoints/tiposComunicados.json')
            .then(response => (this.tipoComunicados = response.data))
            .catch(error => console.log(error));
    }
})
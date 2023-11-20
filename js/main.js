const { createApp } = Vue

  createApp({
    data() {
      return {

        toDo : [
            {
                text: "Fare la spesa",
                done: false
            },
            {
                text: "Finire gli esercizi",
                done: true
            },
            {
                text: "Suonare la batteria",
                done: true
            },
            {
                text: "Ascoltare l'ultimo album di Calcutta",
                done: false
            },
            {
                text: "Pagare la luce",
                done: false
            },
        ]
      }
    },
    methods: {



    },
    mounted() {
        console.log("Pagina caricata")
    }
  }).mount('#app')
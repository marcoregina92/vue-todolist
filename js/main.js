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

        deleteElement(i) {
            console.log("cancella", i);
            // Rimuovo l'elemento tramite l'utilizzo del metodo .splice: il primo argomento (i) 
            // si riferisce dove vogliamo lavorare. Il secondo invece si riferisce
            // a quanti argomenti vogliamo eliminare (1)
            this.toDo.splice(i, 1);

        }



    },
    mounted() {
        console.log("Pagina caricata")
    }
  }).mount('#app')
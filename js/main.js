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
                done: false
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
    }
  }).mount('#app')
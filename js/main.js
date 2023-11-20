const { createApp } = Vue

createApp({
    data() {
        return {
            userInput: "",
            inputError: false,
            toDo: [
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
    },
    methods: {

        deleteElement(i) {
            console.log("cancella", i);
            // Rimuovo l'elemento tramite l'utilizzo del metodo .splice: il primo argomento (i) 
            // si riferisce dove vogliamo lavorare. Il secondo invece si riferisce
            // a quanti argomenti vogliamo eliminare (1)
            this.toDo.splice(i, 1);

        },

        addElement() {
            console.log(this.userInput);

            if (this.userInput.length < 2) {
                this.inputError = true;
            } else {
                //    Aggiungo il nuovo oggetto 
                const newElement = {
                    text: this.userInput,
                    done: false
                };
                this.toDo.push(newElement);


                // reset 
                this.userInput = "";
                this.inputError = false;

            }
        },

        addCheck(i) {
            console.log("check", i);
            this.toDo[i].done = !this.toDo[i].done
        }



    },
    mounted() {
        console.log("Pagina caricata")
    }
}).mount('#app')
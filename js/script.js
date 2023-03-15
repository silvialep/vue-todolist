/*

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/


const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [],
        doneList: [],

        newItem: {},


        newText: '',

        
        }
        
    },


    methods: {

        addItem() {
            this.toDoList.push({text: this.newText, done: false});
            this.newText = '';
        },

        checkDone(indice) {
            // milestone 1 che barra il testo
            // this.toDoList[indice].done = true;

            // milestone 2 che cancella l'item dalla lista
            this.toDoList.splice(indice, 1);
        },

    },





  }).mount('#app')
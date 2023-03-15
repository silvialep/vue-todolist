/*

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

        checkDone(indice, object) {
            // milestone 1 che barra il testo
            // this.toDoList[indice].done = true;

            // milestone 2 che cancella l'item dalla lista
            this.toDoList.splice(indice, 1);

            // aggiungo gli item tolti ad una nuova lista
            this.doneList.push(object);
            console.log(this.doneList);
        },

    },





  }).mount('#app')
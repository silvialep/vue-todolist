

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
            this.toDoList[indice].done = !this.toDoList[indice].done;

            // milestone 2 che cancella l'item dalla lista
            this.toDoList.splice(indice, 1);

            // aggiungo gli item tolti ad una nuova lista
            this.doneList.push(object);
            console.log(this.doneList);
            console.log(this.toDoList);
        },

        changeBool() {
            console.log('prova');
            this.newItem.done = !this.newItem.done;
            console.log(this.newItem.done);
        }

    },





  }).mount('#app')
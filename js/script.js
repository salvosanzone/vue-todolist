/*
  **Descrizione:**
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
**MILESTONE 1**
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.
**MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
**MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

*/



/*
  1.scrivo una oggetto formato da due proprieta
  2.attaverso un ciclo for faccio stampare la liste
  3.tramite al v-model sull'input scrivo
  4.creo una funzione che al click del button fa il push sulla lista,conseguentemente il ciclo la stamperà
*/

const app = new Vue({

  el: '#app',

  data: {

    //array di oggetti con due proprietà
    toDoList: [
      {
        text: 'Fare la spesa',
        done: true,

      },
      {
        text: 'Ricordato di studiare',
        done: true,

      },
      {
        text: 'Chiamare a fabio',
        done: true,

      },
    ],
    //creo una variabile vuota da collegare all'input
    itemByInput: '',

  },


  methods: {

    //creo una funzione che, tramite una key-up pusha cio che ho scritto nell'input direttamente alla toDoList
    pushNewItem(){this.toDoList.push({
        text:this.itemByInput,
        done:false
      })
      //resetto il v-model
      this.itemByInput = '';
    },

    //creo una funzione che al click eliminerà dall'array un elemento
    deleteItem(index){
      this.toDoList.splice(index,1)
    }
  }

});


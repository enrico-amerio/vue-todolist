const {createApp} = Vue;

createApp({
  data(){
    return{
      toDoList: [
        { nome: "Sistemare il treppiedi modulare", fatto: true },
        { nome: "Avvitare il bullone A con il cacciavite a stella", fatto: true },
        { nome: "Assicurare il processore all'intercapedine C", fatto: false },
        { nome: "Inserire il gancio B nell'apposito alloggiamento", fatto: false },
        { nome: "Agganciare il calcio facendo pressione sulla base del medesimo", fatto: false},
        { nome: "Infilare nel micro post processore la canna del mirino che si basa sull'ordine della grandezza del medesimo ", fatto: false},
      ],
      error:'',
      newTask: ''
    }
  },
  methods:{
    addTask(){
      if(this.newTask.length > 4){
        this.toDoList.unshift({ nome: `${this.newTask}`, fatto: false},);
        this.newTask= '';
        this.error = '';
      }else{
        this.error = 'Inserisci una task valida';
      }
    },
    deleteTask(index){
      if (this.toDoList[index].fatto === true) {
        this.toDoList.splice(index, 1);
        this.error = '';
      }else{
        this.error = 'Devi completare la task prima di poterla eliminare';

      }
    }
  }
}).mount('#app');
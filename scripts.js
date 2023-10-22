const Main = {
  data() {
    return {
      tasks: [],
      newTask: {
        done: false,
      },
    };
  },
  methods: {
    addTask: function () {
      if (this.newTask.description) {
        this.tasks.push(this.newTask);
        this.newTask = { done: false };

        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } else {
        alert("Preencha o campo de descrição.");
      }
    },
    // melhor forma para fazer a atualização do local storage, menos eficiente
    //  pq vamos ter q chamar a função em todo lugar que esta fazendo uma atualizaçãoi
    storeTasks(){
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
  },
  created() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : this.tasks;
  },
  updated() {
    // para uma aplicação mais complexa talçvex não seja a melhor 
    // opção já que vai atualizar o local storage sempre q tiver 
    // uma atualização mesmo q n seja dessa parte especificamente
    // localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
};

Vue.createApp(Main).mount("#app");

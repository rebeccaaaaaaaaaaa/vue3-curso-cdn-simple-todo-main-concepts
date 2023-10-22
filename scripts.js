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
        this.newTask = {};
      } else {
        alert('Preencha o campo de descrição.')
      }
    },
  },
};

Vue.createApp(Main).mount("#app");

const vm = new Vue({
    el: '#app',
    data: {
      addText: '',
      list:[],
  },
  methods: {
      addToDo() {
          if (this.addText) {
              this.list.push({
                  text: this.addText
              });
          }
          this.addText = '';  
      },
      del(){
        this.list = [];
      },
      del1(todo){
         var index = this.list.indexOf(todo);
         console.log(index);
         this.list.splice(index,1); 
      },
  }
  });
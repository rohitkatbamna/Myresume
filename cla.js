class Field {
    constructor(field) {
      this.field = field;
    }
    print(){
        let na = [];
      for(let i = 0; i < (this.field).length; i = i+1){
        na.push(this.field[i].join())
      }
      na =na.join("");
      return console.log(na);
    }
}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.print;
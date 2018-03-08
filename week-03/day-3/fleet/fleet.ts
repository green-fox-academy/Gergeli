import {Thing} from "./thing";

class Fleet {
    private things: Thing[];

    constructor(){}
    add(thing: Thing){
        this.things.push(thing);
    }

    get getThings(): Thing[] {
      return this.things;
    }

    public Print() {
      for(let i: number = 0; i < this.getThings.length; i++){
        let a = '';
        if(this.things[i].complete){
          a = 'X';
        }
        console.log(i+1 + ' [' + a + ']' + this.things[i].getName);
      }
    }
}

export {Fleet};

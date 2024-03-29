class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }
  public complete() {
      this.completed = true;
  }

  getName() {
    return this.name;
  }
}

export {Thing};

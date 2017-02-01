export class People {
  private _name: string;
  private _mark: number;

  constructor(userName: string, userMark: number) {
    this.name = userName;
    this.mark = userMark;
  }

  public set name(n: string) {
    n = n.toLowerCase();
    let lastLetter: string = n.charAt(n.length - 1).toUpperCase();
    n.substr(n.length - 1);

    this._name = n + lastLetter;
  }
  public get name(): string {
    return this._name;
  }

  public set mark(m: number) {
    if(m > 10) {
      this._mark = 9;
    }
    else {
      if(m < 0)
        this._mark = 0;
      else
        this._mark = m;
    }
  }
  public get mark(): number {
    return this._mark;
  }

}

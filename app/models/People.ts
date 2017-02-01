export class People {
  _name: string;
  _mark: number;

  constructor(userName: string, userMark: number) {
    this._name = userName;
    this._mark = userMark;
  }
  //
  // public set name(n: string) {
  //   this._name = n + " ad a ";
  // }
  //
  // public get name(): string {
  //   return this._name;
  // }

}

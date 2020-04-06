export class body {
  set alert(value: string) {
    this._alert = value;
  }

  set isbn(value: string) {
    this._isbn = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set genre(value: string[]) {
    this._genre = value;
  }

  set review(value: string[]) {
    this._review = value;
  }

  set recommend(value: string) {
    this._recommend = value;
  }

  set author(value: string) {
    this._author = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set score(value: string) {
    this._score = value;
  }

  set year(value: string) {
    this._year = value;
  }

  set rating(value: string) {
    this._rating = value;
  }

  set reviewers(value: string) {
    this._reviewers = value;
  }

  set img(value: string) {
    this._img = value;
  }

  set url(value: string) {
    this._url = value;
  }
  constructor(
    public _alert:string,
    public _isbn:string,
    public _description:string,
    public _genre:string[],
    public _review:string[],
    public _recommend:string,
    public _author:string,
    public _title:string,
    public _score:string,
    public _year:string,
    public _rating:string,
    public _reviewers:string,
    public _img:string,
    public _url:string
              ) {}
}

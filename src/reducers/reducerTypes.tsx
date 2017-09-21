export type Greeting = {
  readonly greeting: String;
  readonly language: String;
}

export type State = {
  readonly greeting: Greeting;
};

export type Action = {
  type: String;
  // tslint:disable-next-line:no-any
  payload: any;
};

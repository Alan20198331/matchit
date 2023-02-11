export type BaseDbModel<T, P> = P & {
  type: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id?: any;
  createdAt: number;
};

export type UserDbModel = BaseDbModel<
  "user",
  {
    name: string;
    password: string;
  }
>;

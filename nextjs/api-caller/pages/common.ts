export type Info = {
  page: number;
  result: number;
  seed: string;
}

export type User = {
  email: string;
  gender: 'female' | 'male';
  name: {
    title: string;
    first: string;
    last: string;
  };
}

export type UsersResult = {
  info: Info;
  results: User[];
}

export type HasId = {
  id: string,
};

export type Card = HasId & {
  task: string,
};

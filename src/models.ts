export type HasId = {
  id: string,
};

export type Card = HasId & {
  columnId: string,
  message: string,
};

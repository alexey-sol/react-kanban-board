export type TaskStatus = 'TO_DO' | 'IN_PROGRESS' | 'DONE';

export type HasId = {
  id: string,
};

export type Card = HasId & {
  task: string,
};

type Level = 'log' | 'error';

// eslint-disable-next-line no-console -- Good enough for now
export const log = (message: unknown, level: Level = 'log') => console[level](message);

export const logError = (message: unknown) => log(message, 'error');

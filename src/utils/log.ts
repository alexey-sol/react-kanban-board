type Level = 'log' | 'error';

// eslint-disable-next-line no-console -- Good enough for now
export const log = (message: string, level: Level = 'log') => console[level](message);

export const logError = (message: string) => log(message, 'error');

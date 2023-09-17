/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return import.meta.env[key] || "";
};

/** @github API entrypoint */
export const API_URL = getEnvVar("VITE_API_URL");
/** @github Domain link */
export const GITHUB_DOMAIN = getEnvVar("VITE_GITHUB_DOMAIN");
/** @github Main repo link */
export const GITHUB_MAIN = getEnvVar("VITE_GITHUB_MAIN");
/** @github Feedback link */
export const GITHUB_FEEDBACK = getEnvVar("VITE_GITHUB_FEEDBACK");

/** Режим запуска программы */
export const NODE_ENV = getEnvVar("VITE_NODE_ENV");
/** Режим разработки */
export const isDevEnv = NODE_ENV === "development";
/** Режим продакшена */
export const isProdEnv = NODE_ENV === "production";

export const firebaseConfig = {
  apiKey: getEnvVar("VITE_FIREBASE_apiKey"),
  authDomain: getEnvVar("VITE_FIREBASE_authDomain"),
  databaseURL: getEnvVar("VITE_FIREBASE_databaseURL"),
  projectId: getEnvVar("VITE_FIREBASE_projectId"),
  storageBucket: getEnvVar("VITE_FIREBASE_storageBucket"),
  messagingSenderId: getEnvVar("VITE_FIREBASE_messagingSenderId"),
  appId: getEnvVar("VITE_FIREBASE_appId"),
};

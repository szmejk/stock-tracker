declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_TOKEN: string;
    }
  }
}

//has to be a module in order for augmentation to work
export {};

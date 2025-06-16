import 'redux';

declare module 'redux' {
  import { RootState } from 'store/types';

  interface Store {
    getState(): RootState;
  }
}

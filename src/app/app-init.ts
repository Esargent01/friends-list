import { Store } from '@ngrx/store';
import { loadFriendsList } from 'src/ngrx/actions/friends.actions';
import { AppState } from 'src/ngrx/state/app.state';

export const appInitFn = (store: Store<AppState>) => {
  return () => {
    store.dispatch(loadFriendsList());
  };
};

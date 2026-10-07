import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './store/config/store';
import { router } from './providers/router/router';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

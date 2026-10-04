import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router';
import { Provider } from 'react-redux';
import { store } from './store/config/store';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

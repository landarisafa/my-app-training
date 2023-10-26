import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import reportWebVitals from './reportWebVitals';
import RoutesApp from './routes';
import { AuthProvider } from './utils/custom-hooks/useAuth';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/user",
//     element: <UserSpace />,
//     children: [
//       {
//         path:'',
//         element:<Dashboard/>
//       },
//       {
//         path: 'list',
//         element: <ListItems />
//       }
//     ]
//   }
// ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap your App component with the AuthProvider */}
      <RoutesApp />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

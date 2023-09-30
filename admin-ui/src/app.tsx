import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { ConfigProvider, theme } from 'antd';
import enUS from 'antd/locale/en_US';

function App() {
  return (
    <ConfigProvider 
      locale={enUS}
      theme={{ algorithm: theme.darkAlgorithm }}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ConfigProvider>
  );
}

export default App;

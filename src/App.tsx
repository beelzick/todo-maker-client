import Layout from './components/Layout/Layout'
import Card from './components/Card/Card'
import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloProvider } from '@apollo/client'
import client from './lib/apolloClient'
import './styles/reset.css'

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Layout>
        <ApolloProvider client={client}>
          <Card />
        </ApolloProvider>
      </Layout>
    </Auth0Provider>
  )
}

export default App

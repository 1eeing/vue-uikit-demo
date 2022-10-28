import React from 'react'
import ReactDOM from 'react-dom'
import {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom'
import {
  Provider,
  ConversationContainer,
  ChatContainer,
  SearchContainer,
  AddContainer,
} from '@xkit-yx/im-kit-ui'

const App = () => {
  const navigate = useNavigate()

  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{ width: '100%', height: '10%', display: 'flex' }}>
        <div style={{ marginRight: '10px' }}>
          <Link to="/">会话列表</Link>
        </div>
        <div>
          <Link to="/chat">聊天页</Link>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '10%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '80%', height: '100%' }}>
          <SearchContainer />
        </div>
        <div style={{ width: '20%', height: '100%' }}>
          <AddContainer />
        </div>
      </div>
      <div style={{ width: '100%', height: '80%' }}>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ width: '100%', height: '100%' }}>
                <ConversationContainer
                  onSessionItemClick={() => {
                    navigate('chat')
                  }}
                />
              </div>
            }
          />
          <Route
            path="/chat"
            element={
              <div style={{ width: '100%', height: '100%' }}>
                <ChatContainer />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export const render = (view: HTMLElement, initOptions: any) => {
  ReactDOM.render(
    <MemoryRouter initialEntries={['/']}>
      <Provider initOptions={initOptions}>
        <App />
      </Provider>
    </MemoryRouter>,
    view
  )
}

export const unmount = ReactDOM.unmountComponentAtNode

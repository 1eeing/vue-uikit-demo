import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
  ConversationContainer,
  ChatContainer,
  SearchContainer,
  AddContainer,
} from '@xkit-yx/im-kit-ui'

export const render = (view: HTMLElement, initOptions: any) => {
  ReactDOM.render(
    <Provider initOptions={initOptions}>
      <div style={{ width: '100%', height: '10%', display: 'flex' }}>
        <div style={{ width: '80%', height: '100%' }}>
          <SearchContainer />
        </div>
        <div style={{ width: '20%', height: '100%' }}>
          <AddContainer />
        </div>
      </div>
      <div style={{ width: '100%', height: '90%', display: 'flex' }}>
        <div style={{ width: '30%', height: '100%' }}>
          <ConversationContainer />
        </div>
        <div style={{ width: '70%', height: '100%' }}>
          <ChatContainer />
        </div>
      </div>
    </Provider>,
    view
  )
}

export const unmount = ReactDOM.unmountComponentAtNode

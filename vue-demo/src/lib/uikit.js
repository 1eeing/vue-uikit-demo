import { jsxs, jsx } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import { Provider, SearchContainer, AddContainer, ConversationContainer, ChatContainer } from '@xkit-yx/im-kit-ui';

const render = (view, initOptions) => {
    ReactDOM.render(jsxs(Provider, Object.assign({ initOptions: initOptions }, { children: [jsxs("div", Object.assign({ style: { width: '100%', height: '10%', display: 'flex' } }, { children: [jsx("div", Object.assign({ style: { width: '80%', height: '100%' } }, { children: jsx(SearchContainer, {}, void 0) }), void 0), jsx("div", Object.assign({ style: { width: '20%', height: '100%' } }, { children: jsx(AddContainer, {}, void 0) }), void 0)] }), void 0), jsxs("div", Object.assign({ style: { width: '100%', height: '90%', display: 'flex' } }, { children: [jsx("div", Object.assign({ style: { width: '30%', height: '100%' } }, { children: jsx(ConversationContainer, {}, void 0) }), void 0), jsx("div", Object.assign({ style: { width: '70%', height: '100%' } }, { children: jsx(ChatContainer, {}, void 0) }), void 0)] }), void 0)] }), void 0), view);
};
const unmount = ReactDOM.unmountComponentAtNode;

export { render, unmount };

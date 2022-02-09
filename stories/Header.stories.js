import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from './Header';
export default {
    title: 'Example/Header',
    component: Header,
};
const Template = (args) => _jsx(Header, { ...args }, void 0);
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map
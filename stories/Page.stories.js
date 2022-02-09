import { jsx as _jsx } from "react/jsx-runtime";
import { Page } from './Page';
import * as HeaderStories from './Header.stories';
export default {
    title: 'Example/Page',
    component: Page,
};
const Template = (args) => _jsx(Page, { ...args }, void 0);
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
//# sourceMappingURL=Page.stories.js.map
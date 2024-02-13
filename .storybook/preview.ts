import type { Preview, App } from "@storybook/vue3";
import store from '../src/store';
import router from '../src/router';
import { setup } from '@storybook/vue3';

import "../src/assets/styles/storybook/_styles.scss";
import "../src/assets/styles/_styles.scss";
import 'management-components/dist/bundle.css';
import '../src/utils/http.util';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

setup((app: App) => {
  app.use(store).use(router);
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
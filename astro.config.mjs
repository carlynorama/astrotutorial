// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site:"https://bucolic-churros-68e989.netlify.app",
  integrations: [preact()]
});
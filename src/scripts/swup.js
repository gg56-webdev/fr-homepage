import Swup from 'swup';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupFadeTheme from '@swup/fade-theme';

new Swup({
  plugins: [new SwupA11yPlugin(),  new SwupFadeTheme()],
});

export {};

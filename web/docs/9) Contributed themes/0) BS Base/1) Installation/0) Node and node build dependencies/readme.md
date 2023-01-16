You will need to have node, [npm](https://www.npmjs.com/get-npm) (5.2+ version with npx runner) or [pnpm](https://pnpm.js.org/en/installation) package manager and [gulp-cli](https://www.npmjs.com/package/gulp-cli) npm package installed globally.

For node and node package manager you want to use consult the internet against your local environment and OS you are using.

<!-- note-tip -->
> TIP: Our build process by default is using pnpm and will fallback to npm if pnpm is not installed on your system. Also we are using npx runner to run gulp scripts.
However, you can use any other node package manager and runner - edit your custom theme package.json file and change `build-css` script to suit your needs.

Install gulp-cli with next command:

```php
npm install -g gulp-cli
```

<!-- note-tip -->
> TIP: We tested gulp tasks against node 8.x, 10.x and 11.x. We currently do not support node 12.x out of the box. If you have any problem compiling your custom theme locally you can try two things:

Use an older version of node with nvm, or
Remove node_modules and appropriate lock file in your custom theme and then try to upgrade node modules. This should then install latest packages for your system and then gulp sass command should work.
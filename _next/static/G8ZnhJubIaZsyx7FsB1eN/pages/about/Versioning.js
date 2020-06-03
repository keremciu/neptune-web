(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/uL9":function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/Versioning",function(){return n("0Fcp")}])},"0Fcp":function(e,s,n){"use strict";n.r(s),n.d(s,"meta",(function(){return u})),n.d(s,"default",(function(){return f}));var t=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),i=n("ZVZ0"),a=n("zEEr"),p=n("VEKf"),c=n("Qi1R"),u=(l.a.createElement,{name:"Versioning Policy"}),d={meta:u},b="wrapper";function f(e){var s=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(b,Object(t.a)({},d,n,{components:s,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The current version of Components is ",Object(i.a)(c.c,{version:a.version,mdxType:"PackageVersion"}),". CSS is at ",Object(i.a)(c.c,{version:p.version,mdxType:"PackageVersion"}),"."),Object(i.a)("p",null,"Our goal is to ensure all our consumers understand when and how new features are added, and to be well-prepared when we remove features or make breaking changes."),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"We understand you need stability from Neptune Web, and are working towards less and less frequent breaking changes.")," We appreciate your patience while we get there."),Object(i.a)("h2",{id:"semantic-versioning"},"Semantic Versioning"),Object(i.a)("p",null,"We follow ",Object(i.a)("a",Object(t.a)({parentName:"p"},{href:"https://semver.org"}),"SemVer"),". Please note that we do not bump versions for changes to the internal implementation of components."),Object(i.a)("h2",{id:"release-schedule"},"Release Schedule"),Object(i.a)("p",null,"For the rest of 2020, you can expect at most one major release per month. We hope to reduce the frequency of major releases further next year, once the library has stabilised."),Object(i.a)("p",null,"The core team will generally release a minor release once per fortnight, with patch releases when required."),Object(i.a)("p",null,"Because we accept contributions at all times, extra minor releases may happen when new features are contributed."),Object(i.a)("h2",{id:"the-relationship-between-components-and-css"},"The relationship between Components and CSS"),Object(i.a)("p",null,"Because Components depends on CSS, when we release a new CSS build, we will update the dependency and release a new Components build. We do not do the reverse."),Object(i.a)("h2",{id:"support-policy"},"Support policy"),Object(i.a)("p",null,"We only support the latest version of Neptune Web, and do not backport any changes to older versions."))}f.isMDXComponent=!0},VEKf:function(e){e.exports=JSON.parse('{"name":"@transferwise/neptune-css","description":"Neptune CSS is TransferWise\'s Design System CSS library","version":"1.2.0","license":"MIT","repository":{"type":"git","fullname":"transferwise/neptune-web","url":"git+https://github.com/transferwise/neptune-web.git"},"keywords":[],"author":{"name":"TransferWise","url":"https://transferwise.com/"},"bugs":{"url":"https://github.com/transferwise/neptune-web/issues"},"homepage":"https://transferwise.github.io/neptune-web","files":["dist","src"],"scripts":{"build":"npm-run-all build:*","build:clean":"rm -rf dist","build:copy-assets":"npm-run-all --parallel copy:*","build:less-compiler":"gulp lessCompiler --gulpfile=../../node_modules/@transferwise/less-config --prod --src=\'src/less\'","build:less-customProperties":"cpx \'src/less/variables/*.less\' \'dist/css/variables\'","dev":"gulp lessWatcher --gulpfile=../../node_modules/@transferwise/less-config --src=\'src/less\'","docs":"yarn dev","copy:images":"cpx \'src/img/**\' dist/img","copy:fonts":"cpx \'src/fonts/*\' dist/fonts","prettier":"prettier --write src/less/*.less"},"dependencies":{"@transferwise/neptune-tokens":"^0.0.2","bootstrap":"github:transferwise/bootstrap#semver:^5.20.0","svgo":"1.3.2"},"devDependencies":{"@transferwise/less-config":"^1.0.1","yargs":"^15.3.1"},"resolutions":{"svgo":"1.3.2"}}')},zEEr:function(e){e.exports=JSON.parse('{"name":"@transferwise/components","version":"27.5.2","description":"TransferWise styleguide components in react","license":"Apache-2.0","main":"./build/umd/polyfill/main.js","module":"./build/es/polyfill/index.js","style":"./build/main.css","sideEffects":["*.css"],"files":["build"],"repository":{"type":"git","fullname":"transferwise/neptune","url":"git+https://github.com/transferwise/neptune-web.git"},"scripts":{"dev":"npm-run-all --parallel dev:*","dev:watch-less":"gulp lessWatcher --gulpfile=../../node_modules/@transferwise/less-config --dest=src","dev:storybook":"start-storybook -p 3001","docs":"npm-run-all --parallel docs:*","docs:babel":"NODE_ENV=es babel src -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\' -w","docs:watch-less":"gulp lessWatcher --gulpfile=../../node_modules/@transferwise/less-config --dest=src","build":"npm-run-all build:*","build:clean":"rm -rf lib build","build:compile-css":"gulp lessCompiler --gulpfile=../../node_modules/@transferwise/less-config --dest=src","build:umd":"NODE_ENV=umd rollup -c","build:umd-nopolyfill":"NODE_ENV=umd-nopolyfill rollup -c","build:es":"NODE_ENV=es babel src -d build/es/polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\'","build:es-nopolyfill":"NODE_ENV=es-nopolyfill babel src -d build/es/no-polyfill --ignore \'**/*.spec.js\',\'**/*.story.js\'","build:copy-files":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/polyfill","build:copy-files2":"cpx \'src/**/!(db)/*.{css,json,svg}\' build/es/no-polyfill","test":"jest --env=jsdom --runInBand --config=../../node_modules/@transferwise/test-config/jest.config.js && yarn test:bundleSize","test:watch":"jest --watch --env=jsdom --config=../../node_modules/@transferwise/test-config/jest.config.js","test:bundleSize":"bundlesize","lint":"eslint \'src/**/*.js\'","lint:fix":"yarn lint --fix"},"devDependencies":{"@babel/cli":"^7.6.0","@babel/core":"7.6.4","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-transform-react-jsx":"^7.9.0","@babel/plugin-transform-runtime":"^7.9.0","@babel/preset-env":"^7.4.5","@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.3","@rollup/plugin-node-resolve":"^7.1.3","@storybook/addon-a11y":"^5.3.18","@storybook/addon-actions":"^5.3.18","@storybook/addon-info":"^5.3.18","@storybook/addon-knobs":"^5.3.18","@storybook/react":"^5.3.18","@transferwise/less-config":"^1.0.1","@transferwise/test-config":"^1.0.1","babel-loader":"^8.1.0","babel-preset-minify":"^0.5.1","bundlesize":"^0.18.0","lodash.times":"^4.3.2","rollup":"^2.7.6","rollup-plugin-babel":"^4.4.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-uglify":"^6.0.4"},"peerDependencies":{"bootstrap":"github:transferwise/bootstrap#semver:^5.20.0","currency-flags":"^2.1.1","prop-types":"^15.7.2","react":"16.13.1","react-dom":"16.13.1"},"dependencies":{"@babel/runtime":"^7.9.2","@transferwise/formatting":"^2.1.0","@transferwise/icons":"^1.0.0","@transferwise/neptune-css":"^1.2.0","classnames":"^2.2.6","commonmark":"^0.29.1","core-js":"^3.6.5","lodash.clamp":"^4.0.3","lodash.debounce":"^4.0.8","lodash.topairs":"^4.3.0","react-required-if":"^1.0.3","react-spring":"^8.0.27","react-transition-group":"^4.2.1"},"lint-staged":{"*.js":["eslint --fix","git add"]},"husky":{"hooks":{"pre-commit":"lint-staged"}}}')}},[["/uL9",0,1,2,3]]]);
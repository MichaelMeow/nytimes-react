# nytimes_fake

* _npm Install_
* _Make sure atom react package is version 0.17.0_

```$ apm install react@0.17.0```

```$ npm install webpack@3.4.0 -g```

```$ npm install webpack-dev-server@2.5.0 -g```

```$ npm install eslint@4.13.1 -g```

```$ npm install eslint-plugin-react@7.10.0 -g```

* _Note: on home windows consider changing .eslintrc.json from linebreak-style: "unix" to "windows"_

* _Site can later be loaded at http://localhost:8080_

* _To recompile with larger changes (requires start script):_

```$ npm run start```

* _thoughts on Angular vs React_

Angular was a framework which required a lot of thinking about overall architecture, and adding an element meant making a lot of changes.  Components were larger things based on doing something.

With react I feel lightness in creating components, and I only have to change something in one or two places when I make a new one.  They feel like legos whereas components in react were more like puzzle pieces.  The legos can be put anywhere and they are small and simple.  The puzzle pieces of angular need to be fit in a specific way.

Passing data down and actions up is a little bit easier in React, but it feels similar.  We haven't gotten to passing callback functions as props to pass actions back yet but that sounds like passing actions up in Angular but with a different method.

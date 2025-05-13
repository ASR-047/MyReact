


#PARCEL
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorith - written in C++
- Caching - faster build
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking Algo - remove unused code
- Different build for Dev and Prod bundles

- can I use default export and named export together in one file???

# Setting up Testing in my app

- Install React Testing Library
- Install jest
- Install babel dependencies
- Configure babel
- create .parcelrc While Parcel includes transpilation by default, you may still need to use Babel with other tools such as test 
- runners like Jest, and linters like ESLint. If this is the case, you may not be able to completely remove your Babel config.
- You can - make Parcel ignore your Babel config instead, which will have performance benefits and prevent the other issues described above.

- To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

- jest configuration npx jest --init
- install jsdom library it is like a browser in which the test will be run
- install @babel/preset-react to enable jsx for testing
- add one more config into the babel configuration ["@babel/preset-react", {runtime : "automatic"}]
- install another library npm i -D @testing-library/jest-dom and import this library into the testing file


import React, { Component } from 'react';

class Demo extends Component {

  componentDidMount() {
    fetch('/api/user')
      .then(res => res.json())
      .then(userInfo => console.log('Hello,', userInfo.username))
      .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div className="Demo">
        <section className="Demo__content">
          <article>
            <header>Server-side</header>
            <ul>
              <li><a href="https://github.com/expressjs/express" target="_blank">Express.js</a></li>
              <li><a href="https://github.com/expressjs/cors" target="_blank">Cors</a></li>
              <li><a href="https://github.com/remy/nodemon" target="_blank">Nodemon</a></li>
            </ul>
          </article>
          <article>
            <header>Client-side</header>
            <ul>
              <li><a href="https://github.com/facebook/react" target="_blank">React</a></li>
              <li><a href="https://github.com/reduxjs/redux" target="_blank">Redux</a></li>
              <li><a href="https://github.com/reduxjs/redux-thunk" target="_blank">Redux Thunk</a></li>
              <li><a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank">Redux DevTools</a></li>
              <li><a href="https://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a></li>
            </ul>
          </article>
          <article>
            <header>Webpack</header>
            <ul>
              <li><a href="https://github.com/gaearon/react-hot-loader" target="_blank">React Hot Loader</a></li>
              <li><a href="https://github.com/tcoopman/image-webpack-loader#readme" target="_blank">Image-webpack-loader</a></li>
              <li><a href="https://github.com/webpack-contrib/sass-loader" target="_blank">Sass Loader</a></li>
              <li><a href="https://github.com/postcss/autoprefixer" target="_blank">Autoprefixer</a></li>
            </ul>
            </article>
        </section>
      </div>
    );
  }
}

export default Demo;
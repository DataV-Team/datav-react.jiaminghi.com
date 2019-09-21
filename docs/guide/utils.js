export function render ({ r, $ }) {
  const e = React.createElement;

  ReactDOM.render(e(...r), document.querySelector($))
}
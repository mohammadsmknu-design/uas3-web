

const App = () => {
  return (
    <div>
      <button type="button" classnamename="btn btn-primary">Primary</button>
<button type="button" classnamename="btn btn-secondary">Secondary</button>
<button type="button" classnamename="btn btn-success">Success</button>
<button type="button" classnamename="btn btn-danger">Danger</button>
<button type="button" classnamename="btn btn-warning">Warning</button>
<button type="button" classnamename="btn btn-info">Info</button>
<button type="button" classnamename="btn btn-light">Light</button>
<button type="button" classnamename="btn btn-dark">Dark</button>

<button type="button" classnamename="btn btn-link">Link</button>
<div classname="dropdown">
  <button classname="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul classname="dropdown-menu">
    <li><a classname="dropdown-item" href="#">Action</a></li>
    <li><a classname="dropdown-item" href="#">Another action</a></li>
    <li><a classname="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div classname="spinner-border" role="status">
  <span classname="visually-hidden">Loading...</span>
</div>
    </div>
  )
}

export default App

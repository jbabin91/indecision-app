let toggle = false

const onToggle = () => {
  toggle = !toggle
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {toggle ? 'Hide Details' : 'Show Details'}
      </button>
      {toggle && <div><p>Hey. These are some details you can now see!</p></div>}
    </div>
  )
  ReactDOM.render(template, document.getElementById('app'))
}

render()

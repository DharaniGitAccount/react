import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(){
  return(
    <div>
    <h1> Sample data</h1>
      <ol>
        <li>dharani</li>
        <li>ragam</li>
        <li>sam</li>
      </ol>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

    </div>
  )
}
ReactDOM.render(<MyInfo/>,document.getElementById('root'))

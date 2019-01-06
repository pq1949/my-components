import React, { Component } from 'react'
import MyComponents  from '@pq1949/components'
const ConvertUnit = MyComponents.ConvertUnit

export default class App extends Component {
  render () {
    return (
      <div>
        <ConvertUnit text='Modern React component module' />
      </div>
    )
  }
}

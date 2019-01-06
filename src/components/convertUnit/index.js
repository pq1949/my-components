import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ConvertUnit extends Component {
  // static propTypes = {
  //   text: PropTypes.string
  // }
  constructor (props) {
    super(props)
    this.state = {
      yi: 1
    }
  }
  formatYi (v) {
    if (!v) return null
    return (
      <div className={styles.result}>
        <div className={styles.text}>
          <span>{`${v * 1} 万万`}</span>
          <span>{` ${this.toThousands(v * 1)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 10} 千万`}</span>
          <span>{` ${this.toThousands(v * 10)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 100} 百万`}</span>
          <span>{` ${this.toThousands(v * 100)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 1000} 十万`}</span>
          <span>{` ${this.toThousands(v * 1000)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 10000} 万`}</span>
          <span>{` ${this.toThousands(v * 10000)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 100000} 千`}</span>
          <span>{` ${this.toThousands(v * 100000)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 1000000} 百`}</span>
          <span>{` ${this.toThousands(v * 1000000)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 10000000} 十`}</span>
          <span>{` ${this.toThousands(v * 10000000)}`}</span>
        </div>
        <div className={styles.text}>
          <span>{`${v * 100000000} 个`}</span>
          <span>{` ${this.toThousands(v * 100000000)}`}</span>
        </div>
      </div>
    )
  }

  toThousands (num) {
    num = (num || 0).toString()
    let result = ''
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result
      num = num.slice(0, num.length - 3)
    }
    if (num) { result = num + result }
    return result
  }
  render () {
    const {
      yi
    } = this.state

    return (
      <div className={styles.unit}>
        <div className={styles.input}>
          <input type='text' value={yi} onChange={e => this.setState({ yi: e.target.value })} />
          <span>{` 亿 =  ?`}</span>
        </div>
        {this.formatYi(yi)}
      </div>
    )
  }
}

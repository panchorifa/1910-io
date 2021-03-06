import React, { Component } from 'react'
import {StyleSheet,css} from 'aphrodite'
import {upToSmall} from '../libs/media'

const styles = StyleSheet.create({
  section:  {
    border: '4px solid #0f0f0f', borderRadius: '200px',
    height: '400px', width: '400px',
    display: 'flex', flexFlow: 'column', justifyContent: 'center',
    [upToSmall]:{
      marginTop: '10vh'
    }
  },
  software: {
    color: '#fff', margin: '-1.5em 0 0 0',
    fontSize: '1.35em', letterSpacing: '8px',
    [upToSmall]: {
      marginLeft: '10.35em',
      letterSpacing: '5px',
    }
  }
})

class MainLogo extends Component {
  constructor({height, color}){
    super()
    this.height = height
    this.color = color || '#fff'
  }
  render() {
    const style = {
      height: this.height + 'em',
      color: this.color,
      margin: '0 auto',
      userSelect: 'none'
    }
    const src = this.color === 'black' ? 'black-1910.png' : 'white-1910.png'
    return (
      <div className={css(styles.section)}>
          <img src={src} alt='1910' style={style}/>
          <div className={css(styles.software)}>
            Software
          </div>
      </div>
    )
  }
}

export default MainLogo

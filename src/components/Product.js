import React, {Component} from 'react'
import { connect } from 'react-redux'
import {StyleSheet, css} from 'aphrodite'
import {atLeastSmall, upToShort, upToSmall, upToSkinny} from '../libs/media'
import {msg} from '../libs/services'
import {color1} from '../libs/colors'

const styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    margin: '.5em 0',
    borderRadius: '2px',
    boxShadow: '2px 2px 6px rgba(0,0, 0, 0.2)',
    color: '#fff',
    fontSize: '1.4vh',
    [upToSmall]: {
      width: '24em',
      margin: '0 auto 2em auto',
      textAlign: 'center'
    },
    [atLeastSmall]: {
      margin: '.5em'
    }
  },

  productLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: color1,
    padding: '1em',
    borderRadius: '.3em',
    color: '#fff',
    [upToSkinny]: {
      paddingTop: 0,
    },
    [upToSmall]: {
      flexDirection: 'column',
    },
    [upToShort]: {
      [atLeastSmall]: {
        flexFlow: 'column',
      },
    },
    [atLeastSmall]: {
      minWidth: '16em',
    },
  },

  details: {
    padding: '0 0 .5em 0',
    [upToSmall]: {
      // marginTop: '-1.5em',
      textAlign: 'center',
    }
  },

  title: {
    fontWeight: 'bold',
    fontSize: '1.7em',
    padding: '1em 0 0 0',
    textAlign: 'center',
    [upToSmall]: {
      fontSize: '2.35em',
      lineHeight: '1em',
      marginTop: '-.5em'
    }
  },

  description: {
    padding: '.75em 0 0 0',
    textAlign: 'center',
    fontSize: '1.5em',
    lineHeight: '1.25em',
    color: '#999',
    textDecoration: 'none',
  },

  imageWrapper: {
    textAlign: 'center',
    height: '10em',
    marginBottom: '-1.5em',
    padding: '.5em',
    borderRadius: '.25em',
    display: 'flex', flexFlow: 'row', justifyContent:'center',
    [upToSkinny]: {
      maxWidth: '10em',
      width: '12vh',
    },
    [upToSmall]: {
      maxWidth: '8em',
      height: '9em',
      // border: '1px solid red'
      // marginRight: '2em'
    }
  },

  image: {
    textAlign: 'right',
    padding: '0',
    [upToSmall]:{
      width: '7em',
      padding: '1em .5em',
      textAlign: 'left',
    },
    [atLeastSmall]: {
      width: '10vh',
      padding: '1em'
    }
  }
})

class Product extends Component {

  constructor({id, name, link, img}) {
    super()
    this.id = id
    this.name = name
    this.link = link
    this.img = img
  }

  render() {
    const description = msg(this.props.lang, `products.${this.id}.description`)

    return (
      <div className={css(styles.product)}>
        <a className={css(styles.productLink)} rel={this.link} href={this.link} target="_blank">
          <div className={css(styles.imageWrapper)}>
            <img className={css(styles.image)} src={this.img} alt={`${this.name}`}/>
          </div>
          <div className={css(styles.details)}>
            <div className={css(styles.title)}>{this.name}</div>
            <div style={{textDecoration: 'none'}} className={css(styles.description)}>{description}</div>
          </div>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    lang: store.lang
  }
}

export default connect(mapStateToProps)(Product)

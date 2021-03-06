import React from 'react'
import {connect} from 'react-redux'
import Scroll from 'react-scroll'
import {store} from '../store'
import {StyleSheet, css} from 'aphrodite'
import FontAwesome from 'react-fontawesome'
import {color3} from '../libs/colors'
import Logo from '../components/Logo'
import SubscriptionSmall from '../components/SubscriptionSmall'
import { msg } from '../libs/services'
import MenuItem from 'material-ui/MenuItem'

const scroll = Scroll.animateScroll
const scroller = Scroll.scroller

const styles = StyleSheet.create({
  section: {
    backgroundColor: color3,
    height: '100vh',
    width: '100%',
    position: 'absolute', top: 0, left: 0,
    color: '#fff'
  },
  header: {
    height: '3.5em',
    display: 'flex', flexFlow: 'row', justifyContent: 'space-between',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    padding: '1em'
  },
  close: {
    color: '#222',
    padding: '.75em 1em',
    textAlign: 'right'
  },
  entry: {
    backgroundColor: '#222',
    borderBottom: '1px solid #888',
    margin: '0 1em',
    fontSize: '1.25em',
    color: '#fff',
    userSelect: 'none'
  },
  footer: {
    height:'3em',
    color: '#222',
    position: 'absolute',
    bottom: '.4em',
    width: '100vw',
  }
})

class BurgerMenu extends React.Component {
  close() {
    store.dispatch({type: 'SET_BURGER', burger: false})
  }

  closeAndScroll() {
    store.dispatch({type: 'SET_BURGER', burger: false})
    scroll.scrollTo(0)
  }

  handleClick(value) {
    store.dispatch({type: 'SET_BURGER', burger: false})
    scroller.scrollTo(value, {
        duration: 1500,
        delay: 100,
        smooth: true
      }
    )
  }

  render() {
    const lang = this.props.lang
    const menuItems = msg('en', 'home.menu')
    return (
      <div className={css(styles.section)}>
        <div className={css(styles.header)}>
          <div onClick={this.closeAndScroll.bind(this)} className={css(styles.logo)}>
            <Logo color={'black'} height={2}/>
          </div>
          <div className={css(styles.close)}>
            <div onClick={this.close.bind(this)}>
              <FontAwesome name="close" size='2x'/>
            </div>
          </div>
        </div>

        <div style={{marginTop: '2em'}}>
          { menuItems.map( (item, idx) => (
            <MenuItem
                key={'item'+idx}
                className={css(styles.entry)}
                onClick={this.handleClick.bind(this, item)}
                primaryText={msg(lang, 'home.'+item+'.name')}/>
          )) }
        </div>

        <div style={{marginTop:'3em', color: '#222'}}>
          <SubscriptionSmall/>
        </div>
        <div className={css(styles.footer)}>
          <div style={{textAlign: 'center', margin: '0 auto'}}>&copy; 1910 Inc.</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    lang: store.lang,
    burger: store.burger
  }
}

export default connect(mapStateToProps)(BurgerMenu)

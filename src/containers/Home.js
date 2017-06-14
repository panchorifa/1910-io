import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Logo from '../components/Logo'
import Typer from '../components/Typer'
import Languages from '../components/Languages'
import {msg} from '../libs/services'
import MediaQuery from 'react-responsive'
import {color2} from '../libs/colors'
import {upToSmall} from '../libs/media'


const styles = StyleSheet.create({
  section :{
    flexGrow: 1,
    display: 'flex', flexFlow: 'column', justifyContent: 'center',
    textAlign: 'center'
  },
  logo: {
    margin: '0 auto',
    [upToSmall]: {
      margin: '0 auto',
    }
  },
  software1: {
    textAlign: 'center',
    margin: '.25em 0 .5em 0',
    padding: '.5em 1em',
    fontWeight: 'bold',
    fontSize: '1.4em',
    backgroundColor: color2,
    color: '#fff',
    letterSpacing: '5px',
    userSelect: 'none',
    textTransform: 'uppercase',
    [upToSmall]:{
      letterSpacing: '-1px',
    }
  },
  typer: {
    fontSize: '2em',
    [upToSmall]: {
      fontSize: '1.5em'
    }
  },
  languages: {
    marginTop: '2em',
    display: 'flex', flexFlow: 'row', justifyContent: 'center'
  }
})

class Home extends Component {
  render() {
    const lang = this.props.lang
    const typer = msg(this.props.lang, 'home.typer')
    const active = this.props.section < 0
    return active && <div className={css(styles.section)}>
        <div className={css(styles.logo)}>
          <MediaQuery query='(min-device-width: 516px)'>
            <Logo height={12}/>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 515px)'>
            <Logo height={8}/>
          </MediaQuery>
        </div>

        <div className={css(styles.software1)}>{msg(lang, 'home.title')}</div>

        <div className={css(styles.typer)}>
           <Typer text={typer}
            typeSpeed={20}
            typeBackSpeed={30}
            typeDelay={2000}></Typer>
        </div>
        <MediaQuery query='(max-device-width: 515px)'>
          <div className={css(styles.languages)}><Languages/></div>
        </MediaQuery>
      </div>
  }
}

const mapStateToProps = (store) => {
  return {
    section: store.section,
    lang: store.lang
  }
}

export default connect(mapStateToProps)(Home)

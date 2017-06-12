import React, {Component} from 'react'
import {connect} from 'react-redux'
import Content from '../layout/Content'
import Quotes from '../components/Quotes'

class Inspiration extends Component {
  render() {
    let active = this.props.section === 1
    return active && <Content
              prefix='inspiration.title.prefix'
              title='inspiration.title.value'
              description='inspiration.description'>
            <Quotes/>
        </Content>
  }
}

const mapStateToProps = (store) => {
  return {
    section: store.section
  }
}

export default connect(mapStateToProps)(Inspiration)
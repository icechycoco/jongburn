import React, { Component } from 'react'
import CONFIG from '../config'

export default class Map extends Component {
  componentDidMount() {
    this.initialMap()
  }

  initialMap = () => {
    const Maps = require('thinknetmaps')
    const mapInstance = new Maps.Map({
      container: this.props.mapID, // id ของ div ที่จะให้ map ไป render
      app_id: CONFIG.MAPS.MAP_APP_ID,
      api_key: CONFIG.MAPS.MAP_API_KEY,
      style: 'terrain',
      zoom: 6,
      center: {
        lng: 98.953427667, 
        lat: 18.795943333
      }
    })
    this.props.onLoad(mapInstance, this.props.mapID)
  }

  render() {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%'
        }}
        id={this.props.mapID} 
      />
    )
  }
}

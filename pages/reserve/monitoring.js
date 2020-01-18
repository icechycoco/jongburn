import React, { Component } from 'react'
import { Layout, Row, Col }from 'antd'
import Map from '../../src/components/Map'
import { 
  fetchStations, 
  fetchGISDailyReport 
} from '../../src/api/gis'
import '../../src/styles/map.less'
import heatmap from '../../src/libs/heatmap'
import MOCK from '../../src/mock'

export default class Monitoring extends Component {
  fetchStation = async () => {
    if(this.state.mainMap) {
      // const stations = await fetchGISDailyReport()
      const stations = MOCK.STATION
      const source = {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: stations.map(station => ({
            type: "Feature",
            properties: {
              pm25: station.value.pm25
            },
            geometry: {
              type: "Point",
              coordinates: [
                station.lon, 
                station.lat
              ]
            }
          }))
        }
      }
      heatmap(this.state.mainMap, source)
      if(this.state.forecastMap) {
        heatmap(this.state.forecastMap, source)
      }
    }
  }

  onMapLoad = async (map, id) => {
    await this.setState({
      [id]: map
    })
    if(id === 'mainMap') {
      map.on('load', async () => {
        await this.fetchStation()
      })
    }
  }

  render() {
    return (
      <Layout 
        style={{
          background: '#FFF',
        }}
      >
        <Row type="flex" gutter={6}>
          <Col span={12}>
            <h2>สภาพการณ์ปกติ</h2>
          </Col>
          <Col span={12}>
            <h2>สภาพการณ์หลังถูกจัดระเบียบ</h2>
          </Col>
        </Row>
        <Row 
          type="flex"
          style={{
            height: 530,
          }}
          gutter={6}
        >
          <Col span={12}>
            <Map 
              mapID='mainMap'
              onLoad={this.onMapLoad}
            />
          </Col>
          <Col span={12}>
            <Map 
              mapID='forecastMap'
              onLoad={this.onMapLoad}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

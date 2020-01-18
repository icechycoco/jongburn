import axios from 'axios'
import CONFIG from '../config'

export const fetchStations = async () => {
  const result = await axios.get(`${CONFIG.API.SERVICE_API}/gis/stations`)
  return result.data
}

export const fetchGISDailyReport = async () => {
  const result = await axios.get(`${CONFIG.API.SERVICE_API}/gis/daily-report`)
  return result.data
}

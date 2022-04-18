import React, { useEffect } from 'react'
import { WebMercatorViewport, FlyToInterpolator } from '@deck.gl/core'

import dataDistrict from '@data/taipei-district.js'
import dataMarkerBases from '@data/marker-bases.js'

import geoDataTaipeiDistrict from '@data/taipei-district.json'
import useStore from '@helpers/store'
import * as turf from '@turf/turf'

const iconHome = 'icon-home.svg'
const iconAngleRight = 'icon-angle-right.svg'

const SelectPanel = props => {
  const viewState = useStore(state => state.viewState)

  useEffect(() => {
    geoDataTaipeiDistrict.features.map(f => {
      const [minLng, minLat, maxLng, maxLat] = turf.bbox(turf.lineString(f.geometry.coordinates[0]))
      f.properties.minLng = minLng
      f.properties.minLat = minLat
      f.properties.maxLng = maxLng
      f.properties.maxLat = maxLat
    })
  }, [])

  const handleSelect = e => {
    const index = e.target.value
    const feature = geoDataTaipeiDistrict.features[index]

    if (feature) {
      const {minLng, minLat, maxLng, maxLat} = feature.properties
      const vp = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      const { longitude, latitude, zoom } = vp.fitBounds(
        [[minLng, minLat], [maxLng, maxLat]],
        { padding: 10 }
      )

      useStore.setState({ viewState: {
        ...viewState,
        longitude,
        latitude,
        zoom,
        transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
        transitionDuration: 'auto'
      }})
    }
  }

  return (
    <div className="fixed bottom-0 left-0 md:flex md:justify-center md:mb-8 md:right-0">
      <div className="flex items-center bg-white border border-black w-full md:w-auto">
        <div className="home p-2 border-r border-black">
          <a href="" className='block w-4 h-4 bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${iconHome})`}}></a>
        </div>
        <div className="w-20">
          <select className='w-full text-center appearance-none' onChange={handleSelect}>
            {Object.keys(dataDistrict).map((d, i) => 
              <option key={`option-${d}`} value={i}>{dataDistrict[d].name}</option>  
            )}
          </select>
        </div>        
        <div className="w-4">
          <a href="" className='block w-4 h-4 bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url(${iconAngleRight})`}}></a>
        </div>
        <div className="w-24">
          <select className='w-full text-center appearance-none'>
            {dataMarkerBases.map((d, i) => 
              <option key={`option-${i}`}>{d.name}</option>  
            )}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SelectPanel
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Marker from '@components/marker'
// import getAllMarkers from '@apis/getAllMarkers'
import { useEffect, useState, useRef, useCallback } from 'react'

import DeckGL from '@deck.gl/react'

import { registerLoaders } from "@loaders.gl/core"
import { ScenegraphLayer } from '@deck.gl/mesh-layers'
import { GLTFScenegraphLoader } from "@luma.gl/addons"
import { SolidPolygonLayer, IconLayer } from '@deck.gl/layers'
import { MapboxLayer } from '@deck.gl/mapbox'

import dataBases from '@data/marker-bases'
import dataEvents from '@data/marker-events'

import useStore from '@helpers/store'

registerLoaders([GLTFScenegraphLoader])

const zoomMarker = 16.5
const zoomMarkerScale = 14

const Map = props => {
  const [markers, setMarkers] = useState(null)
  // const [viewState, setViewState] = useState();
  const viewState = useStore(state => state.viewState)
  const defaultZoom = useStore(state => state.defaultZoom)
  const [zoom, setZoom] = useState(defaultZoom)
  console.log(zoom)
  const [glContext, setGLContext] = useState()
  const deckRef = useRef(null)
  const mapRef = useRef(null)


  const baseLayers = dataBases.map((base, i) =>
    new ScenegraphLayer({
      id: `scene-${i}`,
      scenegraph: `${base.modelUrl}?${i}`,
      data: [base],
      pickable: true,
      // getScene: d => console.log(d),
      getPosition: d => d.coordinates,
      sizeScale: zoom<zoomMarkerScale ? base.scale * zoom*.3 : base.scale,
      getColor: [...base.color, zoom<zoomMarker?255:200],
      getOrientation: [0, 50, 90],
      // getTranslation: [0, 0, 100],
      getScale: [1, 1, 1]
    }) 
  )

  // const onMapLoad = useCallback(() => {
  //   const map = mapRef.current.getMap()
  //   const deck = deckRef.current.deck

  //   // You must initialize an empty deck.gl layer to prevent flashing
  //   // map.addLayer(
  //   //   // This id has to match the id of the deck.gl layer
  //   //   new MapboxLayer({ id: "scene-1", deck })
  //   //   // new MapboxLayer({ id: "scene-2", deck }),
  //   //   // new MapboxLayer({ id: "my-scatterplot", deck }),
  //   //   // new MapboxLayer({ id: "my-scatterplot", deck }),
  //   //   // Optionally define id from Mapbox layer stack under which to add deck layer
  //   //   // 'before-layer-id'
  //   // )
  // }, [])

  const region1 = new SolidPolygonLayer({
    id: 'region-1',
    data: [dataBases[0]],
    getPolygon: d => d.region,
    getFillColor: [236, 222, 185],
  })

  const region2 = new SolidPolygonLayer({
    id: 'region-2',
    data: [dataBases[1]],
    getPolygon: d => d.region,
    getFillColor: [206, 225, 198],
  })

  // const ambientLight = new SunLight({
  //   timestamp: new Date().getTime(), 
  //   color: [255, 0, 0],
  //   intensity: 1
  // });
  
  // const directionalLight= new DirectionalLight({
  //   color: [255, 255, 255],
  //   intensity: .1,
  //   direction: [-1, -1, -1],
  //   // _shadow: true
  // })

  // const lightingEffect = new LightingEffect({directionalLight})

  const ICON_MAPPING = {
    marker: {
      x: 0,
      y: 0,
      width: 68*1,
      height: 91*1,
      // anchorY: 128,
      mask: true
    }
  }
  
  // console.log(dataEvents)
  const layerIconArt = new IconLayer({
    id: 'icon-layer',
    data: dataEvents,
    pickable: true,
    // iconAtlas and iconMapping are required
    // getIcon: return a string
    // iconAtlas: 'icon/event_type_ART.svg',
    autoHighlight: true,
    iconMapping: ICON_MAPPING,
    // alphaCutoff: 0,
    // getIcon: d => 'marker',
    getPixelOffset: [0, 0],
    getIcon: (d) => ({
      url: `/icon/event_type_${d.type}.svg`,
      width: 68*1,
      height: 91*1
    }),
    sizeScale: zoom*5,
    getPosition: d => d.coordinates,
    // getSize: d => 10,
    // getColor: d => [Math.sqrt(d.exits), 140, 0]
    loadOptions: {
      image: {
        type: 'image'
      },
      imagebitmap: {
        premultiplyAlpha: 'none'
      }
    },
    parameters: {
      // blendFunc: [1, 771] // GL.ONE, GL.ONE_MINUS_SRC_ALPHA
    },
  })

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <DeckGL
        ref={deckRef}
        initialViewState={viewState}
        controller={true}
        // controller: {touchRotate: true, doubleClickZoom: false}
        layers={[
          ...baseLayers,
          region1, region2, 
          layerIconArt
        ]}
        // effects={[lightingEffect]}
        getTooltip={({object}) => object && `${object.name}`}
        // onZoom={e=>setZoom(e.viewState.zoom)}
        onInteractionStateChange={state => {
          if(state.isZooming) {
            setZoom(mapRef.current.getZoom())
          }
          // console.log(state)
        }}
        // onWebGLInitialized={setGLContext}
        // glOptions={{
        //   /* To render vector tile polygons correctly */
        //   stencil: true
        // }}
        // doubleClickZoom={false}
        // getCursor={() => "cell"}
      >
        {/* {glContext && ( */}
          <ReactMapGL
            ref={mapRef}
            // gl={glContext}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle='mapbox://styles/baseddesign/cl20jmvc2002615o4j8f95tzd'
            // onLoad={onMapLoad}
          />
        {/* )} */}
        {/* {dataEvents && dataEvents.map((m, i) => 
          <Marker 
            key={`marker-${i}`} 
            data={m}
            zoom={zoom}
          />)} */}
      </DeckGL>
      {/* <ReactMapGL
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 121.523222,
          latitude: 25.091364,
          zoom: 14.3
        }}
        style={{
          width: '100%', height: '100%'
        }}
        doubleClickZoom={false}
        mapStyle='mapbox://styles/baseddesign/cl09pliwq001814rv91e4x06q'
        onZoom={e=>setZoom(e.viewState.zoom)}
      >
        {markers && markers.map((m, i) => 
          <Marker 
            key={`marker-${i}`} 
            name={m.name} 
            location={m.location}
            text={m.excerpt}
            color={m.category.color}
            size={m.category.size}
            zoom={zoom}
          />)}
      </ReactMapGL> */}
    </div>
  )
}

export default Map
import create from 'zustand'

const defaultZoom = 12.5

const useStore = create((set, get) => ({
  defaultZoom,
  viewState: {
    latitude: 25.032,
    longitude: 121.536,
    zoom: defaultZoom,
    bearing: 0,
    pitch: 45,
  }
}))

export default useStore
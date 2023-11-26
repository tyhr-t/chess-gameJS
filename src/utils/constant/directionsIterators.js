const directionsIterators = {
  upLeft: { x: -1, y: -1 },
  up: { x: 0, y: 1 },
  upRight: { x: 1, y: -1 },
  right: { x: 1, y: 0 },
  downRight: { x: 1, y: 1 },
  down: { x: 0, y: -1 },
  downLeft: { x: -1, y: 1 },
  left: { x: -1, y: 0 }
}

export default directionsIterators

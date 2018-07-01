const filters =
[
  {
    name: 'snippet',
    execute: (value, long) => { return value.slice(0, long) + '...' }
  }
]

export default filters

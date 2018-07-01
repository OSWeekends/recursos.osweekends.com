const filters =
[
  {
    name: 'snippet',
    execute: (value, long) => { return value.slice(0, long) + '...' }
  },
  {
    name: 'capitalize',
    execute: (value, long) => { return value.charAt(0).toUpperCase() }
  }
]

export default filters

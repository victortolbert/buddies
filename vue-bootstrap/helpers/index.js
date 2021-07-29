export const capitalize = str => {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const flattened = arr => [].concat(...arr)

export const strip = html => html.replace(/<[^>]*>/g, '')

export const truncate = str => `${strip(str).substr(0, 50)}...`

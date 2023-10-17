export const meta = {
  name: 'Weather',
  description: 'Tells you the weather.',
  id: 'weather'
}

export const run = (element: HTMLDivElement): void => {
  element.style.display = 'flex'
  element.style.alignItems = 'center'
  element.style.paddingLeft = '15px'
  element.style.paddingRight = '15px'
  element.innerHTML = '☁️ 26*C'
}

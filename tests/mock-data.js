export const mockImgSrc = {
  http: [
    'http://iosicongallery.com/img/256/bluk-2017.png',
    'http://iosicongallery.com/img/256/temple-run-2-2017.png',
    'http://iosicongallery.com/img/256/super-mario-run-2016.png',
    'http://iosicongallery.com/img/256/nonstop-knight-2016.png',
    'http://iosicongallery.com/img/256/boomerang-from-instagram-2016.png',
    'http://iosicongallery.com/img/256/cruise-ship-messenger-2016.png',
    'http://iosicongallery.com/img/256/chrome-web-browser-by-google-2016.png',
  ],
  local: [
    require('../assets/Facebook.jpg'),
    require('../assets/iMovie.jpg'),
    require('../assets/Instagram.jpg'),
    require('../assets/LINE.jpg'),
    require('../assets/LinkedIn.jpg'),
    require('../assets/Messenger.jpg'),
    require('../assets/Skype.jpg'),
    require('../assets/YouTube.jpg'),
  ],
}

const mockGroupName = [
  'Group A',
  'Group B',
  'Group C',
  'Facebook',
  'Google',
  'Autodesk',
  'Amazon',
  'LinkedIn',
]

const mockTitle = [
  'SketchBook',
  'Chrome - web browser by Google',
  'Cruise Ship Messenger',
  'Boomerang from Instagram',
  'Nonstop Knight',
  'SUPER MARIO RUN',
  'Temple Run 2',
  'BLUK',
]

function pickRandomItemFromArray(arr, isEmptyAllowed = false) {
  const length = isEmptyAllowed
    ? arr.length + 1
    : arr.length
  const index = getRandomNumber(length)
  return arr[index]
}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length)
}

export default function getMockData(dataLength: number, srcType: 'http' | 'local') {
  const imgSrc = (srcType === 'http')
    ? mockImgSrc.http
    : mockImgSrc.local
  let result = []
  for (let i = 0; i < dataLength; i++) {
    result.push({
      o: getRandomNumber(100),
      g: pickRandomItemFromArray(mockGroupName, true),
      src: pickRandomItemFromArray(imgSrc),
      title: pickRandomItemFromArray(mockTitle),
    })
  }
  return result
}

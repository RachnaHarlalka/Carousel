import Carousel from './components/Carousel';

// build a image carousel component with animation for switching images

// features should be support for both vertical and horizontal view, loop,
//  auto play, on demand play, should stop auto play when mouse is hovered over
//  any image

function App() {
  const images = [
    'https://media.istockphoto.com/id/1310488699/photo/abstract-technological-background-in-vibrant-colors-with-blur.jpg?s=612x612&w=0&k=20&c=GfLOTpzM7GeA4W3m52jtehDTPU4yq2mHo3qNPFd3CKk=',
    'https://media.istockphoto.com/id/2149530993/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology.jpg?s=612x612&w=0&k=20&c=IduORJUs1c1s0m2SXQANsK8IUhtlz8QApsLxNYOYrXQ=',
    'https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.jpg?s=612x612&w=0&k=20&c=1cW5xuLcb6HPDj6CLQQFBvGK5_fJvx9eA2egik-3hAc=',
    'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
    'https://media.istockphoto.com/id/537475374/photo/background-digital-collage-or-typography-design-wallpaper-texture.jpg?s=612x612&w=0&k=20&c=1MPNtv1BqZuiQIDWYe5yZgbZAAqT0Ow9ttmM2iOIsos=',
    'https://media.istockphoto.com/id/1136900682/photo/calm-and-angry-girl-double-color-exposure.jpg?s=612x612&w=0&k=20&c=BKofsaR0tGlvossjYlNoxz1Fl16xBVnDDvj6FINy6Oo='
  ];

  return (
    <div className="flex justify-center m-10">
      <Carousel images={images} loop />
    </div>
  );
}

export default App;

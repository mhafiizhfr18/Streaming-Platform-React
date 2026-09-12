import './App.css'
// 1. Import all images from your folder
const bannerModules = import.meta.glob ('./assets/banner/*.{png,jpg,jpeg,svg}', { eager: true });
const cardModules = import.meta.glob ('./assets/movie/*.{png,jpg,jpeg,svg}', { eager: true });

// 2. Create a clean object mapping filenames to their URLs
function formatImagesObject(modules) {
  const images = {};
  Object.entries(modules).forEach(([path, module]) => {
    // Extract just the filename (e.g., 'photo1.jpg') from the full path
    const filename = path.split('/').pop();
    images[filename] = module.default;
  });
  return images;
}

const imagesBanner = formatImagesObject(bannerModules);
const imagesCard = formatImagesObject(cardModules);

export { imagesBanner, imagesCard };
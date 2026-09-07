import './App.css'
// 1. Import all images from your folder
const imageModules = import.meta.glob ('./assets/banner/*.{png,jpg,jpeg,svg}', { eager: true });

// 2. Create a clean object mapping filenames to their URLs
const images = {};
Object.entries(imageModules).forEach(([path, module]) => {
  // Extract just the filename (e.g., 'photo1.jpg') from the full path
  const filename = path.split('/').pop(); 
  images[filename] = module.default;
});
export default images;

export const getRandomImage = collection => {
    return collection.images[Math.floor(Math.random() * collection.images.length)];
};

export const getRandomCollection = imageConfig => {
    return imageConfig[Math.floor(Math.random() * imageConfig.length)];
}

export const buildImageConfig = imageConfig => {
    return imageConfig.map(config => {
        config.url = `/images/${config.path}/`;
        config.images = config.images.map(image => {
            image.url = `/images/${config.path}/${image.path}/`
            image.large_path = `/images/${config.collection}/Big Images/${image.title} Big.png`;
            image.thumbnail_path = `/images/${config.collection}/Thumbnails/${image.title} Small.png`;
            return image;
        })
        return config;
    });
};

// prefetch collection images
export const prefetchCollection = collection => {
  collection.images.forEach(image => {
    const i = new Image();
    i.src = image.large_path;
  });
}
export const preload_imgs = (img_srcs: Array<string>, loader: any) => {
  const images = img_srcs.map((imageSrc: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  return Promise.all(images)
    .then(() => {
      console.log("Images loaded!");
      loader.disable_loader();
    })
    .catch((error) => {
      console.error("Some image(s) failed loading!");
      console.error(error.message);
      loader.disable_loader();
    });
};

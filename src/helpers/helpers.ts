export const preload = (
  img_srcs: string[] = [],
  video_srcs: string[] = [],
  loader: any = null
) => {
  let images: Promise<any>[] = [];
  let videos: Promise<any>[] = [];

  if (img_srcs.length > 0) {
    images = img_srcs.map((imageSrc: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
  }

  if (video_srcs.length > 0) {
    videos = video_srcs.map((videoSrc: string) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = videoSrc;
        video.oncanplaythrough = resolve;
        video.onerror = reject;
        video.load();
      });
    });
  }

  const promises: Promise<any>[] = [...images, ...videos];
  console.log(promises)

  return Promise.all(promises)
    .then(() => {
      if (loader) {
        loader.disable_loader();
      }
    })
    .catch(() => {
      if (loader) {
        loader.disable_loader();
      }
    });
};

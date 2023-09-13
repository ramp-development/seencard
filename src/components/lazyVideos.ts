export const lazyVideos = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target as HTMLVideoElement;
        const source = video.querySelector<HTMLSourceElement>('source');
        if (!source) return;

        const { src } = source.dataset;
        if (!src) return;

        source.src = src;
        video.load();
        observer.unobserve(video);
      }
    });
  });

  const videos = document.querySelectorAll<HTMLVideoElement>('video');
  videos.forEach((video) => observer.observe(video));
};

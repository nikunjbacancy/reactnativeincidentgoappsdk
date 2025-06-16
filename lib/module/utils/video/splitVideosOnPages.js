import forEach from 'lodash/forEach';
const splitVideosOnPages = videos => {
  const pages = [];
  const chunk = 3;
  for (let i = 0; i < videos.length; i += chunk) {
    const slice = videos.slice(i, i + chunk);
    pages.push(slice);
  }
  let skipped = 0;
  if (pages.length > 1) {
    forEach(pages, (slice, sliceIndex) => {
      skipped += slice.length;
      const isLastVideo = sliceIndex === pages.length - 1;
      slice.push({
        id: `page-${sliceIndex}-last`,
        text: isLastVideo ? 'back' : `${videos.length - skipped}+`
      });
    });
  }
  return pages;
};
export default splitVideosOnPages;
//# sourceMappingURL=splitVideosOnPages.js.map
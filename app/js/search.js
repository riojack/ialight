function doSearch(searchTerm, resultLimit) {
  const searchTermLc = searchTerm.toLowerCase();
  const results = [];
  for (let i = 0; i < photos.length; i++) {
    if (i === resultLimit) {
      break;
    }
    const photo = photos[i];
    if (photo.title.toLowerCase().indexOf(searchTermLc) >= 0) {
      results.push(photo);
    }
  }
  return results;
}

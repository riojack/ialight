function doSearch(searchTerm, resultLimit) {
    const results = []
    for (let i = 0; i < photos.length; i++) {
        if (i === resultLimit) {
            break;
        }
        const photo = photos[i]
        if (photo.title.toLowerCase().indexOf(searchTerm) >= 0) {
            results.push(photo)
        }

    }
    return results
}


/*
{
        title: "Mushroom in Leaves",
        src: "images/image-001.jpg",
        camera: "Canon EOS 80D",
        lens: "-",
        datetime: "September 10th, 2017",
        tags: ["camera:Canon EOS80D", "t:nature"],
    }
*/

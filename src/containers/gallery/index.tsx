import {mockCardList} from "@/mocks/galleryList.ts";
import Gallery from "@/templates/gallery";
const GalleryPage = () => {
    return (
        <Gallery list={mockCardList} />
    )
}

export default GalleryPage;
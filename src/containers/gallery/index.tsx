import Gallery from "@/templates/gallery";
import {mockCardList} from "@/mocks/galleryList.ts";
const GalleryPage = () => {
    return (
        <Gallery list={mockCardList} />
    )
}

export default GalleryPage;
import GalleryDetail from "@/templates/galleryDetail";
import {mockCardList} from "@/mocks/galleryList.ts";
import {useParams} from "react-router-dom";

const GalleryDetailPage = () => {
    const {galleryId} = useParams();
    const galleyDetailItem = mockCardList.find((value) => {
        return value.id === galleryId as string;
    })
    return (
        <GalleryDetail {...galleyDetailItem!} />
    )
}
export default GalleryDetailPage;
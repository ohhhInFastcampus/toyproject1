import GalleryDetail from "@/templates/galleryDetail";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getGalleryDetail} from "@/utils/gallery.ts";
import {GalleryType} from "@/components/gallery/types.ts";
const resetDetailPage:GalleryType = {
    id: '',
    img: '',
    content: '',
    title: ''
} ;
const GalleryDetailPage = () => {
    const {galleryId} = useParams();

    const [galleryDetail, setGalleryDetail] = useState<GalleryType>(resetDetailPage);
    useEffect(() => {
        getGalleryDetail(galleryId!).then((item) => {
            setGalleryDetail(item)
        })
    }, [])
    return (
        <GalleryDetail {...galleryDetail} />
    )
}
export default GalleryDetailPage;
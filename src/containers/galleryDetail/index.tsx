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
    const getData = async () => {
        const response = await getGalleryDetail(galleryId!);
        setGalleryDetail(response);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <GalleryDetail {...galleryDetail} />
    )
}
export default GalleryDetailPage;
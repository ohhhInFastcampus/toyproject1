import Gallery from "@/templates/gallery";
import {getGalleryList} from "@/utils/gallery.ts";
import {useEffect, useState} from "react";
import {GalleryType} from "@/components/gallery/types.ts";
const GalleryPage = () => {
    const [galleryList, setGalleryList] = useState<GalleryType[]>([]);
    const getData = async () => {
        const response = await getGalleryList();
        setGalleryList(response);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <Gallery list={galleryList} />
    )
}

export default GalleryPage;
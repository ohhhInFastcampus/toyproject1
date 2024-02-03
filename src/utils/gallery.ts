import {collection, getDocs} from "firebase/firestore";
import {db} from "@/Firebase.ts";
import {GalleryType} from "@/components/gallery/types.ts";

interface GalleryDBType {
    img: string,
    title: string,
    content: string
}

export const getGalleryList = async () => {
    const list: GalleryType[] = [];
    const galleryCollection = collection(db, "gallery");
    const galleryList = await getDocs(galleryCollection);
    galleryList.forEach((item) => {
        let obj: GalleryType = {
            ...item.data() as GalleryDBType, id: item.id
        }
        list.push(obj);
        return;
    })
    return list;
}

// export const getGalleryDetail = async (id : string) => {
//
// }
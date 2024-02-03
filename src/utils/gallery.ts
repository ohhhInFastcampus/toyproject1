import {collection, doc, getDoc, getDocs} from "firebase/firestore";
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

export const getGalleryDetail = async (id: string) => {
    const searchGalleryDetail = doc(db, "gallery", id);
    const getGalleryDetailDoc = await getDoc(searchGalleryDetail);
    const result = getGalleryDetailDoc.data();
    if (result !== undefined) {
        let obj: GalleryType = {
            ...result as GalleryType, id: id
        }
        return obj;
    } else {
        throw new Error("페이지를 찾을 수 없습니다.");
    }
}
import { db } from '@/Firebase.ts';
import { getDocs ,collection } from 'firebase/firestore';
import {useEffect} from "react";
const GalleryPage = () => {
    const gallery = collection(db, "gallery");
    //TODO 추후 수정 예정 
    const test = async () => {
        const docSnap = await getDocs(gallery);
        // const addDocs = await addDoc(collection(db,"gallery"),{
        //     id: "test in web",
        //     image: "Test",
        //     title: "Test"
        // });
        // console.log(addDocs);
        docSnap.forEach((doc) => {
            // console.log(doc);
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
    useEffect(() => {
        test();
    }, []);
    return (
        // <Gallery list={mockCardList} />
        <div>
            {/*{test !== undefined &&*/}
            {/*    <div>{test.name}</div>}*/}
        </div>
    )
}

export default GalleryPage;
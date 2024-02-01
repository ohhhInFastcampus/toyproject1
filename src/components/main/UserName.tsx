import { MemberMockType } from "@/components/main/types";

const UserName = ({ name }: MemberMockType) => {
  return (
    <div className="nflex nflex-row nbg-white nrounded-full np-3 njustify-center nitems-center nfont-semibold">
      이름: {name}
    </div>
  );
};

export default UserName;

// const UserName = () => {
//   const [member] = useState<MemberDetail[]>(memberDetails);

//   서버에서 데이터 불러올 때 사용 예정
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/team-members');
//         setMembers(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

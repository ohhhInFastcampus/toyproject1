import {useState} from 'react';

interface MemberDetail{
  name: string;
  department: string;
  role: string;
  starttime: string;
  endtime: string;
}

//데이터 예시
const memberDetails: MemberDetail[] = [
  { name: '정지혜', department: 'Core Team', role: 'lead', starttime: '09:00', endtime: '18:00' }
];

const UserName = () => {
  const [member] = useState<MemberDetail[]>(memberDetails);

  //서버에서 데이터 불러올 때 사용 예정
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/team-members');
  //       setMembers(response.data); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="nflex nflex-row nbg-blue-100 nrounded-xl np-3 nitems-center nfont-semibold">
      {member.map((member, index) => (
        <div key={index}>이름: {member.name}</div>
      ))}
    </div>
  );
};

export default UserName;
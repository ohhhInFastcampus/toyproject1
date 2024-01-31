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
  { name: '정지혜', department: 'Core Team', role: 'lead', starttime: '', endtime: '' }
];

const UserDetails = () => {
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
    <div>
      <div className="np-1 nm-3 nborder-solid nborder nrounded-md ntext-xs">
        이름: {member[0].name}
      </div>
      <div className="np-1 nm-3 nborder-solid nborder nrounded-md ntext-xs ngrid ngrid-cols-2 ngap-1">
        <div>부서: {member[0].department}</div>
        <div>직급: {member[0].role}</div>
      </div>
    </div>
  )
};

export default UserDetails;
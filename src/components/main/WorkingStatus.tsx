import React, { useState, useEffect } from 'react';
// import axios from 'axios'; 서버에서 데이터 불러올 때 사용 예정

interface TeamMember {
  department: string;
  name: string;
  isWorking: 'working' | 'not working'
  profile: string;
}
//데이터 예시
const teamMembers: TeamMember[] = [
  { department: 'Core Team', name: '정지혜', isWorking: 'working', profile: '/vite.svg' },
  { department: 'Core Team', name: '최홍주', isWorking: 'working', profile: '/vite.svg' },
  { department: 'Core Team', name: '함지훈', isWorking: 'not working', profile: '/vite.svg' },
  { department: 'Core Team', name: '김정은', isWorking: 'not working', profile: '/vite.svg' },
];

const WorkingStatus = () => {
  const [members, setMembers] = useState<TeamMember[]>(teamMembers);

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
    <div className="np-4 nbg-white nrounded-lg nshadow-md">
      <h1 className="ntext-lg nfont-bold nmb-4">근무중인 사람</h1>
      <h2 className='ntext-left nfont-bold'>Core Team</h2>
      <ul className="nmt-4">
        {members.map((member) => (
          <li key={member.name} className="nflex nitems-center nmb-2">
            <img
              src={member.profile}
              alt={member.name}
              className="nw-8 nh-8 nrounded-full"
            />
            <div className={`nmr-4 nw-3 nh-3 nrounded-full ${member.isWorking === 'working' ? 'nbg-green-500' : 'nbg-gray-500'}`} />
            <span>{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingStatus;

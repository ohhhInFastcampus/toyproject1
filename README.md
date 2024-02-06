# **📅 직원들을 위한 인트라넷 페이지**

직원들을 위한 인트라넷 페이지를 만들어보세요!
직원들의 근무 관리를 위한 여러 기능이 추가되어야 합니다!

### **[과제 수행 및 제출 방법]**

1. 현재 저장소를 로컬에 클론(Clone)합니다.
2. 자신의 팀명으로 브랜치를 생성합니다.(구분 가능하도록 팀명을 꼭 파스칼케이스로 표시하세요, git branch FE_7_Toy1_Team1)
3. 자신의 팀명 브랜치에서 과제를 수행합니다.
4. 과제 수행이 완료되면, 자신의 팀명 브랜치를 원격 저장소에 푸시(Push)합니다.(main 브랜치에 푸시하지 않도록 꼭 주의하세요, git push origin FE_7_Toy1_Team1)
5. 저장소에서 main 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, main <== FE_7_Toy1_Team1)
6. Pull Request 링크를 LMS로도 제출해 주셔야 합니다.
7. main 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
8. Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
9. Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
10. 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사님께 얘기하세요!

### **[필수 구현사항]**
- 마이페이지 구현
    - 사진, 직무, 이름이 표기된 프로필 구현
        - 시간 관리 페이지 개발
            - 현 시각을 표시하는 시계 (타이머) 구현
            - 토글 형태의 근무 시작 / 종료 스위치 구현
            - 모달을 활용한 근무 시작 / 종료 확인 창 구현
    - 연차/ 반차/시간 조정 등 부재 신청 창 구현
    - 부재 신청 내역 확인 창 구현
    - 부재 항목에 따른 카테고리 메뉴로 데이터 필터링 가능 구현
- 기업 공지 모음 갤러리 구현
- netlify 등을 이용한 정적 페이지 배포
- 과제에 대한 설명을 포함한 `README.md` 파일 작성
    - 팀원별로 구현한 부분 소개
 
### **[선택 구현사항]**
- React / TypeScript 사용은 선택
- 마이페이지의 사진 업로드 기능
- 로그인 기능
- 부재 신청시, 사유 기재 기능
- 기타 동작이 완료되기 전에 로딩 애니메이션 구현
- 페이지네이션
- 관련된 기타 기능도 고려
- eslint 설정, 커밋컨벤션, 문서화 등 팀프로젝트시 필요한 추가 작업들

---

# READ.ME

### 로그인 페이지

로그인 레이아웃 생성 - `김정은`

로그인 레이아웃 디자인 - `김정은`

로그인 인풋 컴포넌트 생성 - `김정은`

아이디, 비밀번호를 state에 담는 로직 추가 - `김정은`

로그인 / 비밀번호 공란 시 에러 리턴 - `정지혜`

해당 이메일의 유저가 있을 시 로그인 데이터를 로컬스토리지/리코일에 저장 - `정지혜`

로컬스토리지/리코일에 해당 데이터가 없을 시 로그인 페이지로 리턴- `정지혜`

### 메인 페이지

메인 페이지 레이아웃 생성 / 디자인 - `최홍주` / `함지훈`

유저 정보 컴포넌트 생성 - `최홍주` / `함지훈`

근무중인 사람 리스트 컴포넌트 생성 - `최홍주`

현재 시간 컴포넌트 - `최홍주`

달력 및 디데이 컴포넌트 - `최홍주`

스위치로 근무중 여부 모달창으로 표시 - `함지훈`

유저가 일을 시작할 시에/끝낼 시에 컴포넌트에 시간이 보여지도록 하기  - `최홍주`

유저 이미지 변경 버튼 추가  - `최홍주`

유저 이미지 변경 시에 헤더 이미지도 같이 변경되기 - `정지혜`

현재 유저의 일하는 상태 가져오기, 수정하는 메소드 추가 - `정지혜`

### 부재신청

부재신청 페이지 레이아웃 생성 - `김정은`

부재신청 인풋 컴포넌트 생성 및 디자인 - `김정은`

부재신청 타입시 반차라면 하단에 오전/오후 버튼이 보이도록  state 생성 - `김정은`

부재신청 사유 textarea 컴포넌트 생성 - `김정은`

부재신청 데이터를 state에 담는 로직 추가 - `김정은`

submit 버튼 클릭 시 db에 해당 데이터 저장하는 로직 추가 - `정지혜`

submit 버튼 클릭 시 확인/에러 메세지 모달창 추가 - `김정은`

연차 요청 메소드 추가 - `정지혜`

### 갤러리 - 정지혜

갤러리 페이지 레이아웃 생성/디자인- `정지혜`

갤러리 해당 페이지 클릭시 디테일 페이지 보여주기 - `정지혜`

디테일 페이지에서 목록으로 버튼을 누르면 다시 갤러리 페이지로 돌아오는 로직 추가 - `정지혜`

갤러리 리스트 요청 메소드 추가 - `정지혜`

### 부재신청 내역

부재신청 내역 페이지 레이아웃 생성  - `함지훈`

부재신청 내역 페이지 테이블 컴포넌트 생성 - `함지훈`

부재신청 내역 페이지 데이터 삽입시 리스트 매핑 로직 추가 - `함지훈`

selectbox 버튼 클릭 시 해당하는 키값으로 필터링되는 기능 추가 - `정지혜` / `함지훈`

부재신청내역 페이지네이션 추가 - `함지훈`

연차 요청 리스트 메소드 추가 - `정지혜` /  `함지훈`

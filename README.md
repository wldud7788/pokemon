### 포켓몬 도감 만들기

두 가지 방식으로 프로젝트를 완성했다.

### 사용기술

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Context API](https://img.shields.io/badge/Context_API-6CC24A?logo=react&logoColor=white)](https://reactjs.org/docs/context.html)

#### 브랜치1. Props-drilling

props drilling의 불편함을 느끼기 위하여 최대한 깊게 컴포넌트 계층화하여 프로젝트 완성

#### 브랜치2. context

props drilling의 불편함이 있는 프로젝트를 Context API로 리팩토링하여 프로젝트 완성

### 랜딩페이지

`react-router-dom`을 이용하여 홈페이지에서 도감 페이지로 이동
![image](https://github.com/user-attachments/assets/50ac6f24-dc16-4349-9541-4d5461b53a76)

### 도감페이지

- **대시보드**: 선택한 6개의 포켓몬을 표시하고, 포켓몬 선택 및 해제 가능
- **포켓몬 리스트**: 포켓몬 리스트를 보여주고, 각 포켓몬 카드를 클릭하면 대시보드에 추가 가능
- **포켓몬 카드 컴포넌트 구현**: 각 포켓몬의 이미지, 이름, 타입 표시
- 해당 카드를 추가 또는 삭제 가능 <br>
  **[알림]**
- 최대 6개의 포켓몬만 선택 가능, 추가 및 삭제 시 알럿창 표시
- 이미 추가된 포켓몬 카드일 경우 이미 등록 카드입니다. 알럿창 표시
- 6개 이상 포켓몬 추가 시 최대 6개까지 추가할 수 있습니다. 알럿창 표시

[기본화면] <br>
![image](https://github.com/user-attachments/assets/38cc55ab-fca6-4c21-8dc9-6cd2da1b2b04)

[카드 추가했을 때 화면] <br>
![image](https://github.com/user-attachments/assets/d39eb8a1-8ae3-4f6e-93a3-7fc09a8cc649)

### 포켓몬 디테일 페이지

- 개별 포켓몬 카드를 클릭하면 포켓몬의 상세 정보를 보여주는 페이지로 이동
- **QueryString으로 포켓몬 ID전달**하고, 해당 ID로 MOCK_DATA에서 데이터를 찾아 디테일 표시
  ![image](https://github.com/user-attachments/assets/e2ea8a5d-b90c-48d8-9157-9685747fe3f1)

### 해당 작업 구현사항 상세 정리

[작업 구현사항 정리 링크](https://velog.io/@rooftop7788/%EA%B0%9C%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EB%8F%84%EA%B0%90)

> > > > > > > 2077ce18cc582b69cbbb1895bff76c55c5a2f1e9

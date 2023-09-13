import './App.css';
import Customer from './components/Customer';


// 제대로 푸시되는지 확인하기 위한 주석입니다.
const customers = [
  {
    id : 1,
    image : "https://placeimg.com/64/64/1",
    name : "김성준",
    birthday : 981112,
    gender : "남자",
    job : "대학생"
  },

  {
    id : 2,
    image : "https://placeimg.com/64/64/2",
    name : "이학명",
    birthday : 980513,
    gender : "남자",
    job : "프로그래머"
    },

    {
      id : 3,
      image : "https://placeimg.com/64/64/3",
      name : "이준희",
      birthday : 981222,
      gender : "남자",
      job : "디자이너"
      }
]

function App() {
  return (
    <div>
      {
        customers.map((c) => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />

          )
        })
      }
     </div>
  );
}

export default App;

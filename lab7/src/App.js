import React, {useState} from 'react';
import './App.css';
import './index.css';

function App() {
const message = ["I think, therefor i am","I have a dream","The only thing I know is, that i dont know anything", "I am not sure"];
//set the state - example 1
const [count, setCount] = useState(0);
//set the state - example 2
const [counter, setCounter] = useState(1);
//set the state - example 3
const [isOpen, setIsOpen] = useState(true);

//set the state - example 4
// const [name, setName] = useState('');

//set the state to collect data from form
const[inputdata, setInputdata] = useState({});

//sumbit form


//function to collect the changes of each input data
const handledata = function(e){
  const name = e.target.name;
  const value = e.target.value;
setInputdata(vaule => ({...vaule, [name]: value}));
}
console.log(inputdata.name);

const sumbitform = function(e){
  e.preventDefault();
  alert(`Name: ${inputdata.fullname}, \n Age: ${inputdata.age}, \n Gender: ${inputdata.gender}, \n Email: ${inputdata.email}, \n Message: ${inputdata.message}`);
}
  return (
    <div className="App">


<h1 className='title'> Example 4: Forms</h1>

<section>
  <form className='singupform' onSubmit={sumbitform}> 
    <fieldset>
      <legend>Sign up</legend>
      <div className='formcontrol'>
      <label for="name">Enter Name: </label>
      <input type="text"
      name="fullname"
      id="name"
      placeholder="fullname"
      value={inputdata.fullname}
      onChange={handledata}
        />
      </div>
    
      <div className='formcontrol'>
        <label for='age'>Enter Age: </label>
        <input type="number"
         name="age"
        id="age"
        placeholder="age"
        min={0}
        max={100}
        value={inputdata.age}
        onChange={handledata}
            />
      </div>

      <div className='formcontrol'>
        <label for="genderselecter">Select Gender: </label>

        <select name="gender" id="genderselecter"
        value={inputdata.gender}
        onChange={handledata}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className='formcontrol'>
      <label for="email">Enter Email: </label>
      <input type="email"
      name="email"
      id="email"
      placeholder="email"
      value={inputdata.email}
      onChange={handledata}
        />
      </div>

      <div className='formcontrol'>
      <label for="message">Enter Message: </label>
      <textarea
      name="message"
      id="message"
      placeholder="Enter Message, 1000 characters max"
      value={inputdata.message}
      onChange={handledata}
      maxLength={1000}
        />
      
      </div>
          
    <button className='submitbtn' type="submit">Submit</button>
    </fieldset>

  </form>
</section>


<section className='intro'>

  
        <h1 className='title'> Example 3: open and close</h1>

      <b>The cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat;
      a small domesticated carnivorous mammal.
      <br></br>
      <button className='next_btn' onClick={function(){setIsOpen(!isOpen)}}> {isOpen ? 'close' : 'open'}
      </button>
      </section>
      {isOpen &&
        <section>
      <div className='readmore'>
         It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.
      </div>
      </section>

      }
      
      <h1 className='title'>Example 1</h1>
      <p> This count is {count}</p>
      <button className='incrementbtn' onClick={function () { setCount(count + 1) }}>increment </button>

      <h1 className='title'>Example 2: App splice</h1>
      <section className='slicecontainer'>
        <div className='slicewrapper'>
          <div className={counter === 1 ? 'active' : ''}>1</div>
          <div className={counter === 2 ? 'active' : ''}>2</div>
          <div className={counter === 3 ? 'active' : ''}>3</div>

        </div>

        <p className='displaymsg'> Message  {counter} = '{message[counter-1]}'</p>
        <div className='groupbtn'>
        <button className='prev_btn' onClick={function () { if(counter>1) setCounter(counter - 1) }}>previous</button>
        <button className='next_btn' onClick={function () {if(counter<3) setCounter(counter + 1) }}>Next</button>

        </div>
      </section>


    

    </div>
  );
}

export default App;

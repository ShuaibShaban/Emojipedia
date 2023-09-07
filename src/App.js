// import './App.css';
import './index.css'
import emojipedia from './components/emojipedia';
// import Cards from './components/Cards';
import Entry from './components/Entry';

function createEntry(emojiTerm){
  <Entry 
    key = {emojiTerm.id}
    emoji = {emojiTerm.emoji}
    name = {emojiTerm.name}
    description = {emojiTerm.description}
  />
}


function App() {
  return (
    <div className="App">
      {/* <Cards /> */}
      {/* <Entry  
        emoji="💪"
        name="Tense Biceps"
        description="“You can do that!” or “I feel strong!” Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym."
      /> */}


    {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;

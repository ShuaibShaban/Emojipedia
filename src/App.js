import "./index.css";
import Entry from "./components/Entry";
import emojipedia from "../src/components/emojipedia";

// function createEntry(emojiItem) {
//   return (
//     <Entry
//       emoji={emojiItem.emoji}
//       name={emojiItem.name}
//       description={emojiItem.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry 
          emoji=" 💪"
          name="Tense Biceps"
          description=" “You can do that!” or “I feel strong!” Arm with tense biceps. Also
          used in connection with doing sports, e.g. at the gym."
         /> */}
        {emojipedia.map((emojiItem) => (
          <Entry
            emoji={emojiItem.emoji}
            name={emojiItem.name}
            description={emojiItem.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;

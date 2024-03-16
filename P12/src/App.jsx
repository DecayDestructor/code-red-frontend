import AppCSS from './App.module.css';
import Option from './Option.jsx';
import options from './options';
import { getSelectedOption } from './selectOptionDOM.js';

function redirect() {
  const selectedOption = getSelectedOption();
  if (selectedOption != null) {
    if (selectedOption == 0) {
      //help TPA path redirect
      console.log('Selected path 1');
    } else if (selectedOption == 1) {
      //help Andwyn path redirect
      console.log('Selected path 2');
    }
  }
}
function App() {
  return (
    <div className={AppCSS.body}>
      <h1 className={AppCSS.headingPath}>Choose your path</h1>
      <section className={AppCSS.options}>
        {options.map((option, index) => {
          return <Option key={option.id} {...option} number={index} />;
        })}
      </section>
      <button
        onClick={redirect}
        className={`${AppCSS.continue} ${AppCSS.disabled}`}
      >
        Continue
      </button>
    </div>
  );
}
export default App;

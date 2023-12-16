import { useState, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  }, []);

  function setDarkMode() {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  }

  function setLightMode() {
    document.querySelector('body').setAttribute('data-theme', 'light');
  }

  function handleChangeTheme(e) {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <>
      <input type='checkbox' name='' id='' onChange={handleChangeTheme} />
      <h1>hello</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, unde
        ipsa corrupti eligendi, excepturi ut doloribus fugit quo voluptates
        magnam quisquam, rerum autem ab facere iusto nihil? Ad nisi rerum, earum
        ea perferendis accusantium, blanditiis officia quidem enim, obcaecati
        modi velit culpa incidunt beatae corrupti dolores ipsa. Aliquam repellat
        voluptatem itaque vel delectus incidunt earum facere illo ducimus nulla
        a fuga reiciendis quae debitis eligendi hic magni nam, nihil, velit
        error veniam corporis? Rem, est ducimus illum aliquam impedit doloremque
        eos dolore error dolorum vel deserunt itaque modi provident aliquid,
        voluptates, ullam molestias molestiae minima amet eaque iste
        reprehenderit labore.
      </p>
    </>
  );
}

export default App;

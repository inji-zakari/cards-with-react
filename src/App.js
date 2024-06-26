import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/bannerimg1.jpg";
import Bootstrap from "./images/bannerimg2.jpg";
import KompleWeb from "./images/bannerimg1.jpg";
import Frontend from "./images/bannerimg2.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My cources</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime
      omnis voluptatem, obcaecati assumenda esse ipsa provident sit quaerat
      autem."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime
      omnis voluptatem, obcaecati assumenda esse ipsa provident sit quaerat
      autem."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime
      omnis voluptatem, obcaecati assumenda esse ipsa provident sit quaerat
      autem."
              />
            </div>
            <div className="column">
              <Course
                image={Frontend}
                title="Frontend"
                description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime
      omnis voluptatem, obcaecati assumenda esse ipsa provident sit quaerat
      autem."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

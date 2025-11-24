import Contact from './pages/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Contact />
      </main>
    </div>
  );
}

export default App;
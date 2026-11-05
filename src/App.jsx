
import Avatar from './Avatar.jsx'
import './App.css'

const people = [
  {
    name: 'Ava Martinez',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&h=480&q=85',
    role: 'Design student',
  },
  {
    name: 'MR. SAYINNI PRANEETH',
    image: '/src/assets/image.png',
    role: 'Computer science student',
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">
          React mini lab <span> / </span> Experiment 15
        </p>
        <h1>Profile Picture</h1>
        <p className="intro">
          A simple profile gallery, built with reusable props.
        </p>
      </header>

      <section className="profiles" aria-label="Student profiles">
        {people.map((person, index) => (
          <article className="profile-card" key={person.name}>
            <span className="profile-number">0{index + 1}</span>
            <Avatar image={person.image} name={person.name} />
            <p className="profile-role">{person.role}</p>
          </article>
        ))}
      </section>

      <footer className="page-footer">
        Functional components <span>·</span> Props <span>·</span> React
      </footer>
    </main>
  )
}

export default App

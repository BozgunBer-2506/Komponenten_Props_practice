import './App.css'
import Greeting from './components/Greeting'
import ProductCard from './components/ProductCard'
import Button from './components/Button'
import Card from './components/Card'
import UserProfile from './components/UserProfile'
import ContactCard from './components/ContactCard'
import ContactList from './components/ContactList'

function App() {
  const userData = {
    name: "Y.Baris Özgün",
    email: "bozgun@example.com",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"],
    isOnline: true
  };

  const myContact = {
    name: "Anna Schmidt",
    email: "anna@example.com",
    department: "Design",
    status: "Verfügbar"
  };

  const contactArray = [
    { id: 1, name: "Max Mustermann", email: "max@example.com", department: "IT", status: "Beschäftigt" },
    { id: 2, name: "Anna Schmidt", email: "anna@example.com", department: "Design", status: "Verfügbar" },
    { id: 3, name: "Tom Weber", email: "tom@example.com", department: "Marketing", status: "Abwesend" }
  ];

  return (
    <div className="app-container">
      <h1>Props Demo</h1>

      <Greeting name="Max" message="Schön dich zu sehen!" />
      <Greeting name="Anna" message="Willkommen zurück!" />

      <hr />

      <h2>Produkte</h2>
      <ProductCard
        title="Laptop Pro"
        price={999.99}
        description="Leistungsstarker Laptop für Profis"
        category="Elektronik"
      />

      <ProductCard
        title="Wireless Kopfhörer"
        price={149.99}
        description="Kabellose Kopfhörer mit Noise Cancelling"
        category="Audio"
      />

      <ProductCard
        title="Smartwatch Ultra"
        price={399.99}
        description="Fitness-Tracker mit AMOLED Display"
        category="Wearables"
      />

      <hr />

      <h2>Buttons</h2>
      <Button text="Klick mich" />
      <Button text="Speichern" variant="success" />
      <Button text="Löschen" variant="danger" size="small" />

      <hr />

      <h2>Children Props (Card)</h2>
      <Card title="Willkommen">
        <p>Dies ist ein Inhalt, der als <strong>children</strong> übergeben wurde.</p>
        <Button text="Mehr erfahren" />
      </Card>

      <hr />

      <h2>User Profile (Objekte)</h2>
      <UserProfile user={userData} />

      <hr />

      <h2>Kontaktkarte (Komposition)</h2>
      <ContactCard contact={myContact} />

      <hr />

      <h2>Kontaktliste (List Rendering)</h2>
      <ContactList contacts={contactArray} />

    </div>
  )
}

export default App
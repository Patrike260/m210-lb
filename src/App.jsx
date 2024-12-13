import './App.css';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  'https://oyzzmgfckyxnqpoxwzxv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95enptZ2Zja3l4bnFwb3h3enh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNzgwMDgsImV4cCI6MjA0OTY1NDAwOH0.sMq01ep7vZepgGuLP-uns83K0TnDNJhInmbJ4GTt3v0'
);

export default function App() {
  const [session, setSession] = useState(null);
  const [mediaData, setMediaData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMedia, setNewMedia] = useState({
    name: '',
    kategorie: 'Game',
    datum: '',
    bewertung: '',
  });
  const [filterKategorie, setFilterKategorie] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchMediaData(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchMediaData(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchMediaData = async (userId) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('media')
      .select('id, name, kategorie, datum, bewertung')
      .eq('user_id', userId);

    if (error) {
      console.error('Fehler beim Laden der Media-Daten:', error.message);
    } else {
      setMediaData(data);
      setFilteredData(data); // Initiale Filterdaten setzen
    }
    setLoading(false);
  };

  const addMedia = async () => {
    const bewertung = parseInt(newMedia.bewertung, 10);

    if (!newMedia.name || !newMedia.kategorie || !newMedia.datum || !bewertung) {
      alert('Bitte alle Felder ausfüllen.');
      return;
    }

    if (bewertung < 1 || bewertung > 10) {
      alert('Die Bewertung muss zwischen 1 und 10 liegen.');
      return;
    }

    const { error } = await supabase.from('media').insert([
      {
        ...newMedia,
        bewertung,
        user_id: session.user.id,
      },
    ]);

    if (error) {
      console.error('Fehler beim Hinzufügen:', error.message);
    } else {
      alert('Neuer Eintrag hinzugefügt!');
      fetchMediaData(session.user.id);
      setNewMedia({ name: '', kategorie: 'Game', datum: '', bewertung: '' });
    }
  };

  // Filter- und Sortierlogik
  const filterAndSortData = () => {
    let data = [...mediaData];

    // Kategorie filtern
    if (filterKategorie) {
      data = data.filter((item) => item.kategorie === filterKategorie);
    }

    // Sortieren
    if (sortOption === 'datum_absteigend') {
      data.sort((a, b) => new Date(b.datum) - new Date(a.datum));
    } else if (sortOption === 'datum_aufsteigend') {
      data.sort((a, b) => new Date(a.datum) - new Date(b.datum));
    } else if (sortOption === 'bewertung_absteigend') {
      data.sort((a, b) => b.bewertung - a.bewertung);
    } else if (sortOption === 'bewertung_aufsteigend') {
      data.sort((a, b) => a.bewertung - b.bewertung);
    }

    setFilteredData(data);
  };

  useEffect(() => {
    filterAndSortData();
  }, [filterKategorie, sortOption, mediaData]);

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    );
  } else {
    return (
      <div>
        <h1>Media Daten</h1>
        <div>
          <h2>Neuen Eintrag hinzufügen</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addMedia();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={newMedia.name}
              onChange={(e) => setNewMedia({ ...newMedia, name: e.target.value })}
              required
            />
            <select
              value={newMedia.kategorie}
              onChange={(e) => setNewMedia({ ...newMedia, kategorie: e.target.value })}
              required
            >
              <option value="Game">Game</option>
              <option value="Serie">Serie</option>
              <option value="Film">Film</option>
              <option value="Buch">Buch</option>
            </select>
            <input
              type="date"
              placeholder="Datum"
              value={newMedia.datum}
              onChange={(e) => setNewMedia({ ...newMedia, datum: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Bewertung (1-10)"
              value={newMedia.bewertung}
              onChange={(e) => setNewMedia({ ...newMedia, bewertung: e.target.value })}
              min="1"
              max="10"
              required
            />
            <button type="submit">Hinzufügen</button>
          </form>
        </div>

        {/* Filter- und Sortieroptionen */}
        <div>
          <h2>Filter und Sortierung</h2>
          <select
            value={filterKategorie}
            onChange={(e) => setFilterKategorie(e.target.value)}
          >
            <option value="">Alle Kategorien</option>
            <option value="Game">Game</option>
            <option value="Serie">Serie</option>
            <option value="Film">Film</option>
            <option value="Buch">Buch</option>
          </select>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Keine Sortierung</option>
            <option value="datum_absteigend">Datum (Neuste zuerst)</option>
            <option value="datum_aufsteigend">Datum (Älteste zuerst)</option>
            <option value="bewertung_absteigend">Bewertung (Absteigend)</option>
            <option value="bewertung_aufsteigend">Bewertung (Aufsteigend)</option>
          </select>
        </div>

        {/* Tabelle */}
        {loading ? (
          <p>Lade Daten...</p>
        ) : filteredData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Kategorie</th>
                <th>Datum</th>
                <th>Bewertung</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.kategorie}</td>
                  <td>{new Date(item.datum).toLocaleDateString()}</td>
                  <td>{item.bewertung}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Keine Media-Daten gefunden.</p>
        )}
      </div>
    );
  }
}

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Überprüfung der Session
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

  // Funktion zum Laden der Tabelle "media"
  const fetchMediaData = async (userId) => {
    setLoading(true);
    const { data, error } = await supabase
      .from('media')
      .select('id, name, kategorie, datum, bewertung')
      .eq('user_id', userId); // Filter nach user_id

    if (error) {
      console.error('Fehler beim Laden der Media-Daten:', error.message);
    } else {
      setMediaData(data);
    }
    setLoading(false);
  };

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]} // Keine Drittanbieter-Logins anzeigen
      />
    );
  } else {
    return (
      <div>
        <h1>Media Daten</h1>
        {loading ? (
          <p>Lade Daten...</p>
        ) : mediaData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Kategorie</th>
                <th>Datum</th>
                <th>Bewertung</th>
              </tr>
            </thead>
            <tbody>
              {mediaData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
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

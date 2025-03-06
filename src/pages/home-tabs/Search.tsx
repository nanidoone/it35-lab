import React, { useState } from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonLabel,
} from '@ionic/react';

interface FeedItem {
  id: number;
  label: string;
  imageUrl: string;
}

interface SearchProps {
  feedData: FeedItem[];
}

const Search: React.FC<SearchProps> = ({ feedData }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter feed data based on search query
  const filteredFeedData = feedData.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={searchQuery}
            onIonChange={(e) => setSearchQuery(e.detail.value!)}
            placeholder="Search by label..."
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {filteredFeedData.map((item) => (
              <IonCol size="6" key={item.id}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <IonLabel style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                    {item.label}
                  </IonLabel>
                  <IonImg 
                    src={item.imageUrl} 
                    alt={item.label} 
                    style={{ borderRadius: '10px', marginTop: '10px' }}
                  />
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Search;
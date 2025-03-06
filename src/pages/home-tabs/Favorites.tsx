import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
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

interface FavoritesProps {
  feedData: FeedItem[];
  favorites: number[];
}

const Favorites: React.FC<FavoritesProps> = ({ feedData, favorites }) => {
  // Filter feedData to include only favorited items
  const favoritedItems = feedData.filter((item) => favorites.includes(item.id));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {favoritedItems.map((item) => (
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

export default Favorites;
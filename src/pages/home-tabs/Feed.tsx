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
  IonIcon,
  IonButton,
} from '@ionic/react';
import { heart, heartOutline } from 'ionicons/icons';

interface FeedItem {
  id: number;
  label: string;
  imageUrl: string;
}

interface FeedProps {
  feedData: FeedItem[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const Feed: React.FC<FeedProps> = ({ feedData, favorites, toggleFavorite }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {feedData.map((item) => (
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
                  <IonButton 
                    fill="clear" 
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <IonIcon 
                      icon={favorites.includes(item.id) ? heart : heartOutline} 
                      color={favorites.includes(item.id) ? 'danger' : 'medium'} 
                    />
                  </IonButton>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
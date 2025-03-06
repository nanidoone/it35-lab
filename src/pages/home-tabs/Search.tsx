import React from 'react';
import { 
    IonButtons,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSearchbar // Import IonSearchbar
} from '@ionic/react';

const Search: React.FC = () => {
    const handleSearch = (event: CustomEvent) => {
        console.log('Search query:', event.detail.value);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar 
                        onIonChange={handleSearch} 
                        placeholder="Search..."
                    />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    Search Results
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Search;
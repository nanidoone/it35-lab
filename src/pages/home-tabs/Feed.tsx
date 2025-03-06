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

const Feed: React.FC = () => {
    // Example data for your feed (9 pictures with labels)
    const feedData = [
        { id: 1, label: "Renzo", imageUrl: "https://i.pinimg.com/736x/08/d7/e7/08d7e76811405c5a9d39ad09dcf86003.jpg" },
        { id: 2, label: "Me with my boyfriend", imageUrl: "https://i.pinimg.com/736x/db/42/3e/db423e07e10754975da34b6d019c48af.jpg" },
        { id: 3, label: "Me 1", imageUrl: "https://i.pinimg.com/736x/e8/d3/f2/e8d3f20ca24567fed941a646a1c2d2d6.jpg" },
        { id: 4, label: "Me 2", imageUrl: "https://i.pinimg.com/736x/61/4b/35/614b359738f386a232ba8405d4c546a9.jpg" },
        { id: 5, label: "Me 3", imageUrl: "https://i.pinimg.com/736x/fe/fc/f5/fefcf55e9a916ad6858f2c890f562a11.jpg" },
        { id: 6, label: "Me and June", imageUrl: "https://i.pinimg.com/736x/a3/8d/ac/a38dacfb88edf5fdc281f666300ebeaf.jpg" },
        { id: 7, label: "SBO officers", imageUrl: "https://i.pinimg.com/736x/ae/63/57/ae6357bd7a5eb762bc58af6ec60fc277.jpg" },
        { id: 8, label: "Joeroz", imageUrl: "https://i.pinimg.com/736x/3b/29/6e/3b296e0ad6f3f393dba9df5a054f5868.jpg" },
        { id: 9, label: "June Rey", imageUrl: "https://i.pinimg.com/736x/23/69/b6/2369b6ef95a1b65f7b9a1d54b03fa38e.jpg" },
    ];

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
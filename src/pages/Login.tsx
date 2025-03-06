import React from 'react';
import { 
    IonButton,
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter,
    IonAvatar,
    IonItem,
    IonLabel,
} from '@ionic/react';

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    <IonItem>
                        <IonAvatar slot="start" style={{ width: '150px', height: '150px' }}>
                            <img 
                                src="https://i.pinimg.com/736x/d0/ed/1b/d0ed1b52872da1936c1f825a66df78b2.jpg" 
                                alt="Profile" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </IonAvatar>
                    </IonItem>
                   
                    <IonLabel style={{ marginTop: '10px', fontSize: '1.2em', fontWeight: 'bold' }}>
                        Lady Doone V. Bahaynon
                        
                    </IonLabel>
                    <IonButton 
                        onClick={doLogin} 
                        expand="full" 
                        style={{ 
                            marginTop: '40px', 
                            width: '100%', 
                            maxWidth: '400px', 
                        }}
                    >
                        Login
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
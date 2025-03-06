import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { logoGithub, mailOutline, personCircleOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>LADYGRAM</IonCardTitle>
            <IonCardTitle>About this app</IonCardTitle>
            <IonCardSubtitle>Version 1.0.0</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Welcome to <strong>LADYGRAM</strong>! This app allows you to browse my pictures, search by labels, and save your favorites by tapping the heart. It's built with ❤️ using Ionic React.
            </p>
            <IonImg
              src="https://i.pinimg.com/736x/fe/fc/f5/fefcf55e9a916ad6858f2c890f562a11.jpg"
              alt="App Logo"
              style={{ borderRadius: '10px', marginTop: '10px' }}
            />
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Meet the Developer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon icon={personCircleOutline} slot="start" />
                <IonLabel>
                  <h2>Lady Doone Vicariato Bahaynon</h2>
                  <p>Role: Ka-Developeron</p>
                </IonLabel>
              </IonItem>
              <IonItem href="mailto:youremail@example.com">
                <IonIcon icon={mailOutline} slot="start" />
                <IonLabel>Email: 20212084@nbsc.edu.ph</IonLabel>
              </IonItem>
              <IonItem href="https://github.com/nanidoone" target="_blank">
                <IonIcon icon={logoGithub} slot="start" />
                <IonLabel>GitHub: Nanidoone</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Acknowledgments</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Special thanks to the following resources:
            </p>
            <ul>
              <li>Ionic Framework</li>
              <li>React</li>
              <li>AKILISSS</li>
              <li>KAY SIR CLIFF NGA SIGEG PANG DOGSHOW</li>
              <li>CHATGPT, EEYYYY</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
import React, { useState } from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonLabel, 
  IonMenuButton, 
  IonPage, 
  IonRouterOutlet, 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, search, star } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';

import Favorites from './home-tabs/Favorites';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search';

const Home: React.FC = () => {
  // Feed data moved to Home.tsx
  const [feedData, setFeedData] = useState([
    { id: 1, label: "Renzo", imageUrl: "https://i.pinimg.com/736x/08/d7/e7/08d7e76811405c5a9d39ad09dcf86003.jpg" },
    { id: 2, label: "Me with my boyfriend", imageUrl: "https://i.pinimg.com/736x/db/42/3e/db423e07e10754975da34b6d019c48af.jpg" },
    { id: 3, label: "Me 1", imageUrl: "https://i.pinimg.com/736x/e8/d3/f2/e8d3f20ca24567fed941a646a1c2d2d6.jpg" },
    { id: 4, label: "Me 2", imageUrl: "https://i.pinimg.com/736x/61/4b/35/614b359738f386a232ba8405d4c546a9.jpg" },
    { id: 5, label: "Me 3", imageUrl: "https://i.pinimg.com/736x/fe/fc/f5/fefcf55e9a916ad6858f2c890f562a11.jpg" },
    { id: 6, label: "Me and June", imageUrl: "https://i.pinimg.com/736x/a3/8d/ac/a38dacfb88edf5fdc281f666300ebeaf.jpg" },
    { id: 7, label: "SBO officers", imageUrl: "https://i.pinimg.com/736x/ae/63/57/ae6357bd7a5eb762bc58af6ec60fc277.jpg" },
    { id: 8, label: "Joeroz", imageUrl: "https://i.pinimg.com/736x/3b/29/6e/3b296e0ad6f3f393dba9df5a054f5868.jpg" },
    { id: 9, label: "June Rey", imageUrl: "https://i.pinimg.com/736x/23/69/b6/2369b6ef95a1b65f7b9a1d54b03fa38e.jpg" },
  ]);

  const tabs = [
    { name: 'Feed', tab: 'feed', url: '/it35-lab/app/home/feed', icon: bookOutline },
    { name: 'Search', tab: 'search', url: '/it35-lab/app/home/search', icon: search },
    { name: 'Favorites', tab: 'favorites', url: '/it35-lab/app/home/favorites', icon: star },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>

        <IonRouterOutlet>
          <Route exact path="/it35-lab/app/home/feed">
            <Feed feedData={feedData} />
          </Route>
          <Route exact path="/it35-lab/app/home/search">
            <Search feedData={feedData} />
          </Route>
          <Route exact path="/it35-lab/app/home/favorites">
            <Favorites />
          </Route>
          <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/feed" />
          </Route>
        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
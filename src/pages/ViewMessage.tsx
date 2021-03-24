import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {message ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {message.fromName}
                  <span className="date">
                    <IonNote>{message.date}</IonNote>
                  </span>
                </h2>
                <h3>
                  To: <IonNote>Me</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{message.subject}</h1>
              <p>{message.poem}</p>
              
              {/* <p>
              
Y por eso debes su mal aliviar.
Como pretenden que yo,
Que lo críe de potrillo
Clave en su pecho un cuchillo
Porque el patrón lo ordeno;
Déjenlo no más pastar
No rechace mi consejo
Que yo lo voy a enterrar
Cuando se muera de viejo. (bis)
Junto al estero del bajo
Lo encontré tendido
Casi al expirar
Me acerque muy lentamente
Y se lo quise explicar
Pero al verlo resignado.
Me tembló la mano
              </p> */}
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;

import icon from '../../assets/notification_icon.svg';
import './Styles.css';

function NotificatioButton() {
    return (

        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>

    )
}

export default NotificatioButton;
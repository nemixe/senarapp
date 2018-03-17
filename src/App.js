import { Navigation,NativeEventsReceiver } from 'react-native-navigation'
import { Platform } from 'react-native';
import { registerScreen } from './screens'

registerScreen();

Navigation.isAppLaunched().then(appLaunched => {
    if(appLaunched){
        startApp();
    }
    new NativeEventsReceiver().appLaunched(startApp);
})

navigatorStyle = {
    navBarHidden: true
}

function startApp() {
    Navigation.startTabBasedApp({
        tabs:[{
            label: 'Beranda',
            screen: 'senarapp.Beranda',
            icon: require('../img/Home.png'),
            navigatorStyle
        },{
            label: 'Transaksi',
            screen: 'senarapp.Transaksi',
            icon: require('../img/Transaction.png'),
            navigatorStyle
        },{
            label: 'Linimasa',
            screen: 'senarapp.Linimasa',
            icon: require('../img/Timeline.png'),
            navigatorStyle
        },{
            label: 'Pesan',
            screen: 'senarapp.Pesan',
            icon: require('../img/Message.png'),
            navigatorStyle
        },{
            label: 'Profil',
            screen: 'senarapp.Profil',
            icon: require('../img/User.png'),
            navigatorStyle
        }],
        appStyle: {
            tabBarBackgroundColor: '#ffffff',
            tabBarButtonColor: '#c0c0c0',
            tabBarSelectedButtonColor: '#199587',
            navBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            navBarBackgroundColor: '#199587',
            statusBarColor: '#158073',
            orientation: 'portrait',
            forceTitlesDisplay: true,
            navBarTitleTextCentered: true,
        }
    })
}

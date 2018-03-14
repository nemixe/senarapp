import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native';
import { registerScreen } from './screens'

registerScreen();

Navigation.startTabBasedApp({
    tabs:[{
        label: 'Beranda',
        screen: 'senarapp.Beranda',
        icon: require('../img/swap.png')
    },{
        label: 'Transaksi',
        screen: 'senarapp.Transaksi',
        icon: require('../img/swap.png'),
        title: 'Transaksi'
    },{
        label: 'Linimasa',
        screen: 'senarapp.Linimasa',
        icon: require('../img/swap.png'),
        title: 'Linimasa'
    },{
        label: 'Pesan',
        screen: 'senarapp.Pesan',
        icon: require('../img/swap.png'),
        title: 'Pesan',
    },{
        label: 'Profil',
        screen: 'senarapp.Profil',
        icon: require('../img/swap.png'),
        title: 'Profil'
    }],
    tabsStyle: {
      tabBarBackgroundColor: '#ffffff',
      tabBarButtonColor: '#c0c0c0',
      tabBarSelectedButtonColor: '#6b6b6b',
      initialTabIndex: 1,
    },
    appStyle: {
      tabBarBackgroundColor: '#ffffff',
      navBarButtonColor: '#ffffff',
      tabBarButtonColor: '#c0c0c0',
      navBarTextColor: '#232323',
      tabBarSelectedButtonColor: '#c0c0c0',
      navigationBarColor: '#ffffff',
      navBarBackgroundColor: '#ffffff',
      statusBarColor: '#ebebeb',
      orientation: 'portrait',
      forceTitlesDisplay: true,
      navBarTitleTextCentered: true,
    }
})
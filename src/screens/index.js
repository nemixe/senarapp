import { Navigation } from 'react-native-navigation'

import Beranda from './component/Beranda'
import Transaksi from './component/Transaksi'
import Linimasa from './component/Linimasa'
import Pesan from './component/Pesan'
import Profil from './component/Profil'

export function registerScreen(){
    Navigation.registerComponent('senarapp.Beranda', () => Beranda)
    Navigation.registerComponent('senarapp.Transaksi', () => Transaksi)
    Navigation.registerComponent('senarapp.Linimasa', () => Linimasa)
    Navigation.registerComponent('senarapp.Pesan', () => Pesan)
    Navigation.registerComponent('senarapp.Profil', () => Profil)
}
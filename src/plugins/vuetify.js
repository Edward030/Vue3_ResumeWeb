// Styles
import '@fortawesome/fontawesome-free/css/all.css' //new
import '@mdi/font/css/materialdesignicons.css'
import { aliases, fa} from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    }
  }
})

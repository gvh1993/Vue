import fontawesome from '@fortawesome/fontawesome'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// only add the one that we want to use so we don't load all the icons if they don't exist in the application
fontawesome.library.add(
    require("@fortawesome/fontawesome-free-solid/faEnvelope"),
    require("@fortawesome/fontawesome-free-solid/faGraduationCap"),
    require("@fortawesome/fontawesome-free-solid/faHome"),
    require("@fortawesome/fontawesome-free-solid/faList"),
    require("@fortawesome/fontawesome-free-solid/faSpinner"),
    require("@fortawesome/fontawesome-free-solid/faBars"),

    require("@fortawesome/fontawesome-free-brands/faFontAwesome"),
    require("@fortawesome/fontawesome-free-brands/faMicrosoft"),
    require("@fortawesome/fontawesome-free-brands/faVuejs")
)

export {
    FontAwesomeIcon
}
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from "@rails/ujs"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import 'bootstrap';
// import 'bootstrap-material-design'
import '../stylesheets/application.scss'


// Rails.start()
// ActiveStorage.start()
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

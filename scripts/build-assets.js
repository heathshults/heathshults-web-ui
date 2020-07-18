const ra = require('./render-assets2.js')

var r = new ra
r.copy_assets_content()
r.copy_css()
r.copy_images()
r.copy_js()
r.copy_mail()
r.copy_vendor()

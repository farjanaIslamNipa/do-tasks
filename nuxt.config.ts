// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: `${process.env.APP_NAME}` || "DoTasks",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content:'DoTasks - Say hi to tasks'},
        {name: 'format-detection', content: 'telephone-no'},
        {hid: 'fb:app_id', name: 'fb:app_id', content: '883712276121290'},
        {hid: 'og:site_name', property: 'og:site_name', content: `${process.env.APP_NAME}`},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'keywords', name: 'keywords', content: ''
        },
        {
          name:"msapplication-TileColor",
          content:"#da532c"
        },
        {
          name:"theme-color",
          content:"#ffffff"
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: "180x180",
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: "32x32",
          type: 'image/png',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: "16x16",
          type: 'image/png',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          color: '#5bbad5',
          href: '/favicon/safari-pinned-tab.svg'
        },
        // Bootstrap css
        { 
          rel: 'stylesheet', 
          type: 'text/css', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', 
          integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous" },
        // Fontawsome icon css
        { 
          rel: 'stylesheet', 
          type: 'text/css', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css', integrity:"sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==", 
          crossorigin:"anonymous", 
          referrerpolicy:"no-referrer" },
      ],
      script: [
          // Bootstrap Js cdn
          { 
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM", crossorigin:"anonymous" 
          },
          // Google autocomplete api
          {
            src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCMwCSdUrceC9GydbcIo-AG26HZBXCTR7c&libraries=places"
          }
      ],
    },
  },
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    { src: "@/plugins/vue-datepicker", ssr: false, mode: "client" },
    { src: "@/plugins/vue-multiselect", ssr: false, mode: "client" },
    { src: "@/plugins/vue-tag-input", ssr: false, mode: "client" },
  ],
  modules: [
    '@nuxt/image',
  ],
  image: {
    quality: 80,
    format: ['webp']
  },
})

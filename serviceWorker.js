const staticLabSpot = "labspot-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/scripts.js",
  "/Images/abt-bg.png",
  "/Images/bg1.png",
  "/Images/bg2.png",
  "/Images/bg3.png",
  "/Images/bg4.png",
  "/Images/bg5.png",
  "/Images/ccycle_1.jpg",
  "/Images/civ_1.jpg",
  "/Images/cse_1.jpg",
  "/Images/ece_1.jpg",
  "/Images/eee_1.jpg",
  "/Images/first-year_11a",
  "/Images/fourth-year_11a",
  "/Images/ise_1.jpg",
  "/Images/lock.png",
  "/Images/logo1.png",
  "/Images/mech_1.png",
  "/Images/pcycle1_jpg",
  "/Images/second-year_11a.png",
  "/Images/soon.jpg",
  "/Images/sub1_1,jpg",
  "/Images/sub2_2.jpg",
  "/Images/sub3_3.jpg",
  "/Images/sub4_4.jpg",
  "/Images/team1.png",
  "/Images/team2.png",
  "/Images/team3.png",
  "/Images/third-year_11a.jpg",
  "/Images/user.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLabSpot).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

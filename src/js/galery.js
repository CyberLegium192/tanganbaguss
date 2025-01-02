// const galeryContainer = document.getElementById("galery-item");

// const Items = [
//     {
//         image : "rumah tkt 1,2.jpeg",
//         title: "rumah tingkat"
//     },
//     {
//         image : "tkt 2,1.jpeg",
//         title: "rumah tingkat"
//     },
//     {
//         image : "tkt 2,2.jpeg",
//         title: "rumah tingkat"
//     },
//     {
//         image : "masjid.jpeg",
//         title: "masjid"
//     },
//     {
//         image : "hotel (1).jpeg",
//         title: "hotel 1"
//     },
//     {
//         image : "hotel (2) (1).jpeg",
//         title: "hotel 2"
//     },
//     {
//         image : "gazebo.jpeg",
//         title: "gazebo"
//     },
//     {
//         image : "ruko.jpeg",
//         title: "ruko"
//     },
// ]


// const CardGalery = (item) => {
//   return `
//         <div>
//             <img
//                 class="w-full rounded-lg object-cover aspect-square"
//                 src="${item.image}"
//                 alt="${item.title}"
//             />
//         </div>
//     `;
// };

// galeryContainer.innerHTML = Items.map(CardGalery).join("")

// Ambil elemen container gambar utama
const mainImageContainer = document.querySelector(".grid > div > img");

// Data galeri
const galeryContainer = document.getElementById("galery-item");

const Items = [
  { image: "rumah tkt 1,2.jpeg", title: "rumah tingkat", aosDilay: "100" },
  { image: "tkt 2,1.jpeg", title: "rumah tingkat" , aosDilay: "200"},
  { image: "tkt 2,2.jpeg", title: "rumah tingkat" , aosDilay: "300"},
  { image: "masjid.jpeg", title: "masjid" , aosDilay: "400"},
  { image: "hotel (1).jpeg", title: "hotel 1" , aosDilay: "500"},
  { image: "hotel (2) (1).jpeg", title: "hotel 2" , aosDilay: "600"},
  { image: "gazebo.jpeg", title: "gazebo" , aosDilay: "700"},
  { image: "ruko.jpeg", title: "ruko" , aosDilay: "800"},
];

// Fungsi untuk membuat kartu galeri
// data-aos="fade-right" data-aos-delay=${item.aosDilay}
const CardGalery = (item, index) => {
  return `
        <div data-index="${index}" class="" >
            <img
                class="w-full rounded-lg object-cover aspect-square cursor-pointer hover:scale-105 duration-500 transition-all box-shadow-lg"
                src="${item.image}"
                alt="${item.title}"
            />
        </div>
    `;
};

// Masukkan data galeri ke dalam elemen container
galeryContainer.innerHTML = Items.map(CardGalery).join("");

// Tambahkan event listener ke setiap gambar
const thumbnails = document.querySelectorAll("#galery-item div");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    const index = thumbnail.getAttribute("data-index"); // Dapatkan indeks dari atribut data-index
    const selectedItem = Items[index]; // Ambil data gambar yang sesuai

    // Tambahkan kelas untuk animasi keluar
    mainImageContainer.classList.add("fade-out");

    // Tunggu animasi keluar selesai sebelum mengganti gambar
    setTimeout(() => {
      mainImageContainer.src = selectedItem.image; // Ubah src gambar utama
      mainImageContainer.alt = selectedItem.title; // Ubah alt gambar utama

      // Hapus kelas animasi keluar dan tambahkan kelas animasi masuk
      mainImageContainer.classList.remove("fade-out");
      mainImageContainer.classList.add("fade-in");

      // Setelah animasi masuk selesai, hapus kelas fade-in agar animasi dapat diulang
      setTimeout(() => {
        mainImageContainer.classList.remove("fade-in");
      }, 500); // Waktu animasi masuk (sesuai durasi transition CSS)
    }, 500); // Waktu animasi keluar (sesuai durasi transition CSS)
  });
});
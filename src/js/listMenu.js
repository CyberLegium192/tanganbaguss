const container = document.getElementById("service-list");

const list = [
  {
    title: "Desain Denah",
    desc: "Kamu bisa membuat desain denah sesuai dengan yang kamu mau",
    icon: "bi bi-house icon",
    aosDilay: "100",
    color: "#0dcaf0"
  },
  {
    title: "Rancangan Anggaran Biaya",
    desc: "Selain bisa mendesain denah rumah kami juga dapat membuat RAB",
    icon: "bi bi-broadcast icon",
    aosDilay: "200",
    color: "#fd7e14"
  },
  {
    title: "Desain Tampak Rumah 2",
    desc: "Kami juga dapat membuat desain tampak rumah yang menarik",
    icon: "bi bi-easel icon",
    aosDilay: "300",
    color: "#20c997"
  },
  {
    title: "Gambar Kerja",
    desc: "Kami juga dapat membuat desain ruang kerja yang modis dan menarik",
    icon: "bi bi-bounding-box-circles icon",
    aosDilay: "400",
    color: "#df1529"
  },
  {
    title: "Desain Interior atau Eksterior",
    desc: "Disini juga kami dapat melayani desain luar atau dalam rumah kalian atau bangunan lainnya",
    icon: "bi bi-calendar4-week icon",
    aosDilay: "500",
    color: "#6610f2"
  },
];







const CardService = (item) => {
  return `
      <div class="relative hover:scale-y-5 onhover w-full border-2 border-[${item.color}] p-4 rounded-lg" data-aos="fade-up" data-aos-delay=${item.aosDilay}>
        <div>
          <div class="h-14 w-14 max-sm:h-10 max-sm:w-10 bg-[${item.color}] flex items-center bg-opacity-90 text-white rounded-lg justify-center absolute -top-8 max-sm:-top-5 mx-auto">
            <i class="${item.icon} text-2xl"></i>
          </div>
          <h5 class="text-sm font-semibold mt-5 max-sm:mt-3  tracking-wider">${item.title}</h5>
          <p class="text-sm py-3 font-medium text-gray-500">${item.desc}</p>
        </div>
      </div>
  `;
};
container.innerHTML = list.map(CardService).join("");
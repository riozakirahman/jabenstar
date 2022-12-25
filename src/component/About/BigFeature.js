import React from "react";
import "../../styles/bigfeature.css";

const BigFeature = () => {
  return (
    <div class="mb-4 text-white rounded bg-dark big-feature">
      <div className="overlay pt-5 ps-2 px-2 p-md-5 ">
        <div class="col-md-6 px-0">
          <h1 class="big__title mb-3">Program Happy Weekend Hibur Warga</h1>
          <p class="lead my-3 big__text mb-3">
            Karang Taruna Perumahan Jatibening Estate menggandeng Mitsubishi
            untuk menghibur warga menjelang akhir tahun. Kegiatan bertajuk Happy
            Weekend With Xpander ini sekaligus untuk mendekatkan hubungan antar
            warga perumahan.
          </p>
          <p class="lead mb-0 big__anchor">
            <a
              href="https://radarbekasi.id/2022/12/19/program-happy-weekend-hibur-warga/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white fw-bold text-decoration-none"
            >
              Lebih lanjut...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigFeature;

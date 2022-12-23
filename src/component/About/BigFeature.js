import React from "react";
import "../../styles/bigfeature.css";

const BigFeature = () => {
  return (
    <div class="mb-4 text-white rounded bg-dark big-feature">
      <div className="overlay pt-4 ps-2 px-2 p-md-5 ">
        <div class="col-md-6 px-0">
          <h1 class="big__title mb-3">Program Happy Weekend Hibur Warga</h1>
          <p class="lead my-3 big__text mb-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p class="lead mb-0 big__anchor">
            <a href="#" class="text-white fw-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigFeature;

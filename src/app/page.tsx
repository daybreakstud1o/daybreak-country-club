"use client";

import BackdropGallery from "@/components/BackdropGallery/BackdropGallery";
import CountryClubNav from "@/components/CountryClubNav/CountryClubNav";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import ProductInfoPanel from "@/components/ProductInfoPanel/ProductInfoPanel";
import StackGallery from "@/components/StackGallery/StackGallery";
import { motion } from "framer-motion";
import { useState } from "react";

const productImages = [
  {
    src: "/country-club/dcc-embroidery-detail.jpg",
    alt: "Sweatshirt embroidery details",
  },
  {
    src: "/country-club/dcc-print-collateral.jpg",
    alt: "Sweatshirt collaterals",
  },
  {
    src: "/country-club/dcc-sweatshirt-flatlay.jpg",
    alt: "Sweatshirt flatlay",
  },
  {
    src: "/country-club/dcc-sweatshirt-modelled.jpg",
    alt: "Sweatshirt on our models",
  },
];

const btsImages = [
  {
    src: "/country-club/bts-gallery/IMG_0007.jpg",
    alt: "Behind the seen look 1",
  },
  {
    src: "/country-club/bts-gallery/IMG_0016.jpg",
    alt: "Behind the seen look 2",
  },
  {
    src: "/country-club/bts-gallery/IMG_8153.jpg",
    alt: "Behind the seen look",
  },
  {
    src: "/country-club/bts-gallery/IMG_8156.jpg",
    alt: "Behind the seen look",
  },
  {
    src: "/country-club/bts-gallery/IMG_9311.jpg",
    alt: "Behind the seen look",
  },
  {
    src: "/country-club/bts-gallery/IMG_9397.jpg",
    alt: "Behind the seen look",
  },
  {
    src: "/country-club/bts-gallery/IMG_9408.jpg",
    alt: "Behind the seen look",
  },
];

const backdropImages = [
  {
    src: "/country-club/backdrop-gallery/backdrop-1.jpg",
    alt: "Backdrop 1",
  },
  {
    src: "/country-club/backdrop-gallery/backdrop-2.jpg",
    alt: "Backdrop 2",
  },
  {
    src: "/country-club/backdrop-gallery/backdrop-3.jpg",
    alt: "Backdrop 3",
  },
  {
    src: "/country-club/backdrop-gallery/backdrop-4.jpg",
    alt: "Backdrop 4",
  },
];

export default function Home() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="bg-forest-green text-chalk-white border-chalk-white divide-chalk-white min-h-screen font-sans-sm">
      <CountryClubNav
        onNavExpand={() => setIsNavExpanded(true)}
        onNavCollapse={() => setIsNavExpanded(false)}
      />
      <motion.main
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: isNavExpanded ? 0.2 : 1,
        }}
      >
        <section className="grid md:grid-cols-2 mx-4 md:mx-12 border-l border-r md:divide-x">
          <ProductGallery images={productImages} />
          <div className="md:sticky md:top-16 flex py-12 md:items-center justify-center md:max-h-screen">
            <ProductInfoPanel />
          </div>
        </section>
        <div className="bg-chalk-white text-forest-green flex flex-col">
          <section className="flex flex-col items-center my-24">
            <small className="font-country-sans-sm mb-6">
              Behind the scenes
            </small>
            <h2 className="font-country-script-display mb-12 text-center">
              Country club photoshoot & ephemera
            </h2>
            <div className="flex flex-col md:flex-row max-w-[70ch] text-justify gap-4 mx-4">
              <p className="font-sans-sm max-w-[34ch]">
                As the project unfolded over time and expanded beyond the
                initial commemorative sweatshirt, we ended up art directing
                amx-4 photoshoot in our very own studio as well as creating and
                amassing a variety of Country Club artefacts.
              </p>
              <p className="font-sans-sm max-w-[34ch]">
                Take an inside look into the behind-the-scenes of our Country
                Club campaign—from sourcing props like our vintage tennis
                racquets and ball hopper to designing custom clothing tags,
                intricate wax seals, and rubber-stamped logos.
              </p>
            </div>
            <StackGallery images={btsImages} />
          </section>
          <section className="flex flex-col items-center my-24">
            <div className="mb-12">
              <Crown />
            </div>
            <h2 className="font-country-script-display mb-12 text-center">
              The making of our backdrop
            </h2>
            <div className="flex flex-col md:flex-row text-justify gap-4 mx-4">
              <p className="font-sans-sm max-w-[34ch]">
                Setting the scene for our photoshoot, our backdrop was the
                result of thorough historical research and AI image-making with
                Midjourney to achieve the exact country club atmosphere we had
                in mind.
              </p>
              <p className="font-sans-sm max-w-[34ch]">
                The final imagery references the West Side Tennis Club located
                in Queens, New York—the historical site of the first 60 editions
                of the U.S. Open held between 1915 and 1977.
              </p>
            </div>
            <BackdropGallery images={backdropImages} />
          </section>
        </div>
      </motion.main>
      <div className="bg-chalk-white text-forest-green">
        <footer className=" mx-4 md:mx-12 flex flex-col items-center text-center border-t py-28">
          <div className="mb-8 px-4">
            <SassyDaybreakLogo />
          </div>
          <div className="mb-8">
            <div>Daybreak Studio</div>
            <div className="opacity-50">72 Stafford St, Unit 400</div>
            <div className="opacity-50">Toronto, ON M6J 2R9</div>
          </div>
          <div className="mb-8">
            <div>Contact</div>
            <a href="mailto:hello@daybreak.studio" className="block opacity-50">
              hello@daybreak.studio
            </a>
            <a
              href="mailto:careers@daybreak.studio"
              className="block opacity-50"
            >
              careers@daybreak.studio
            </a>
          </div>
          <div className="mb-8">
            <div>Socials</div>
            <a className="block opacity-50">Instagram</a>
            <a className="block opacity-50">Twitter</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

const SassyDaybreakLogo = () => (
  <svg
    className="max-w-full"
    width="393"
    height="87"
    viewBox="0 0 393 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M65.7348 23.7826C65.7348 15.4513 61.9751 1.50122 36.8697 1.50122C16.3973 1.50122 2.11031 13.4169 2.11031 24.1217C2.11031 31.1452 8.00461 33.6398 13.5108 33.6398C15.4998 33.6398 18.92 32.8647 20.909 32.0171C21.5882 34.0757 23.2619 35.8437 23.9653 36.546C21.758 38.5562 19.5992 40.2515 17.6101 41.5593L17.0522 41.3898C15.4998 40.9054 14.3598 40.5664 11.1094 40.5664C6.71902 40.5664 1.79497 44.2961 0.194051 46.9844L0 47.2992L0.315333 47.5172C2.20733 48.8493 5.38492 49.043 7.10713 49.043C9.65405 49.043 13.9474 48.0258 17.7314 45.1922C23.7713 47.6867 31.1695 49.4789 35.3901 49.4789C50.1137 49.3821 65.7106 36.1827 65.7106 23.8069L65.7348 23.7826ZM39.926 45.6766C34.25 45.6766 28.1132 44.6594 21.661 42.6492C23.0193 41.8015 24.8628 40.4937 27.0216 38.5804C29.2532 39.8398 32.0427 40.4453 35.5841 40.4453C41.8908 40.4453 51.5934 35.3109 51.5934 28.4569C51.5934 25.478 50.332 24.1459 49.1435 24.1459C47.9549 24.1459 46.7663 24.9936 46.7663 26.253C46.7663 27.3428 47.3485 27.9241 47.8336 28.4085C48.2217 28.8202 48.4885 29.0866 48.4885 29.4741C48.4885 35.0687 40.3141 36.8851 36.3603 36.8851C33.5223 36.8851 31.8972 36.3765 30.369 35.7226C33.3283 32.9858 35.0748 31.0725 38.2038 27.246C39.9018 25.2116 44.4862 18.4545 45.1897 15.1607L45.3352 14.4584L44.656 14.6763C42.6428 15.3545 41.5027 15.4513 39.5864 15.6209C38.6162 15.7177 37.5247 15.8146 36.0208 16.0084C35.2446 16.1295 34.8322 17.1224 34.8322 17.7763C34.8322 18.8662 35.8752 18.8662 36.2633 18.8662C36.7484 18.8662 37.2336 18.8662 38.1553 18.6967C34.5411 25.6959 29.8839 30.7093 26.585 33.9304C25.2267 33.0343 24.4019 31.5811 23.9168 30.3944C27.8706 28.3358 30.1264 25.2842 30.1264 22.0389C30.1264 20.0045 29.6656 18.5998 28.7196 17.7279L28.5983 17.631H28.4285C25.5662 17.631 20.0843 21.4092 20.0843 27.3186C20.0843 28.0936 20.0843 28.8686 20.2056 29.6678C18.7987 30.4671 16.9067 30.7335 15.5484 30.7335C11.352 30.7335 7.08287 28.36 7.08287 23.0561C7.08287 14.2162 17.0037 4.81922 35.3901 4.81922C44.6803 4.81922 60.3014 7.43486 60.3014 24.9209C60.3014 35.3593 50.2108 45.6039 39.926 45.6039V45.6766ZM26.0029 21.4576C26.2939 21.8451 26.4637 22.5959 26.4637 23.5405C26.4637 25.8655 24.79 27.4155 23.2134 28.36C23.1164 27.9725 23.0193 27.5124 23.0193 26.9311C23.0193 24.0733 24.0623 22.1358 25.9786 21.4334L26.0029 21.4576ZM8.39271 46.0156C6.64625 46.0156 5.65174 45.9188 4.85128 45.7734C6.01559 44.7805 8.46548 43.5211 10.0179 43.5211C10.6 43.5211 12.4678 43.5453 13.9959 43.9812C12.9529 44.8773 10.9154 46.0399 8.39271 46.0399V46.0156Z"
      fill="#1b2420"
    />
    <path
      d="M194.893 34.2945C208.791 24.946 225.383 12.1826 225.528 4.45676C225.528 2.80987 224.679 1.84111 223.248 1.84111C215.535 1.84111 200.908 20.2233 194.965 28.1187C194.141 29.1843 193.461 30.2015 192.831 31.1945C191.982 32.4781 191.181 33.689 190.187 34.8515C188.489 36.2078 185.724 38.0726 183.492 39.55C182.91 39.9133 182.037 40.4945 180.63 41.3906C179.102 42.3594 177.501 43.4008 176.53 44.0063C176.094 44.2727 175.342 44.5391 175.124 44.5391C175.027 44.5391 174.93 44.5391 174.93 44.1758C174.93 41.9477 179.393 36.3531 181.527 33.6406C182.91 31.8968 183.031 31.7273 183.031 31.4851C183.031 30.7827 182.886 29.9593 181.673 29.9593C181.115 29.9593 179.66 30.7101 178.811 31.4367C178.422 30.4921 177.671 30.032 176.482 30.032C173.401 30.032 169.132 32.6718 165.761 34.9484L156.325 41.2938C155.33 41.8992 154.215 42.5289 153.099 43.086C150.843 44.2243 147.981 45.4352 146.816 45.4352C145.87 45.4352 145.773 45.411 145.773 44.5633C145.773 42.8196 146.889 40.8094 147.69 39.768C152.614 39.6469 159.502 35.2875 159.502 32.2117C159.502 30.1773 157.95 30.1773 157.125 30.1773C153.754 30.1773 146.962 35.5781 145.409 37.0554L142.014 39.2594C142.014 39.2594 141.844 39.3562 141.722 39.4289L141.431 39.6227L137.55 42.1656C137.55 42.1656 137.526 42.1899 137.502 42.2141C136.556 42.8196 135.537 43.4492 134.518 44.0305L134.349 44.1274C133.96 44.3211 133.16 44.7571 132.675 44.7571C132.578 44.7571 132.529 44.7571 132.529 44.7571C132.529 44.7571 132.481 44.6844 132.481 44.4907C132.481 42.868 135.173 38.6781 137.381 36.2804C137.599 36.0625 139.006 35.5539 139.636 35.5539C140.461 35.5539 142.086 34.8031 142.086 33.4468C142.086 32.3085 141.771 31.6788 140.049 31.6788C138.448 31.6788 137.405 32.357 136.58 32.8898C136.022 33.2531 135.561 33.5437 135.125 33.5437C134.227 33.5437 134.082 32.139 134.082 31.3156C134.082 30.3952 133.378 29.4507 132.044 29.4507C130.71 29.4507 129.594 30.5163 129.594 31.8968C129.594 32.4296 129.691 32.6718 129.788 32.8898C129.885 33.132 130.007 33.4226 130.007 34.3671C130.007 35.9656 128.26 37.8547 126.295 39.4289C125.956 39.6469 125.519 39.9133 124.913 40.3008C124.792 40.3734 124.67 40.4703 124.5 40.5672C123.748 41.0758 122.463 41.9477 121.371 41.9477C121.105 41.9477 120.935 41.7297 120.935 41.5117C120.935 41.3906 121.129 41.1484 121.323 40.882C121.42 40.7609 121.517 40.6398 121.638 40.4461C123.239 38.1695 124.767 36.014 124.767 33.1804C124.767 31.0007 123.312 30.2257 122.051 30.2257C120.935 30.2257 119.964 30.371 119.018 30.7101C119.043 30.6859 119.091 30.6374 119.116 30.6132C119.407 30.2984 119.673 30.032 119.916 29.7898C129.158 25.3819 146.744 11.6256 146.744 4.26301C146.744 2.76143 145.798 1.81689 144.294 1.81689C135.998 1.81689 118.873 24.3889 112.421 32.8656C111.353 34.2703 110.602 35.2632 110.335 35.5539L110.044 35.8687C109.267 36.7164 108.515 37.5398 106.648 38.9203C106.526 38.9203 106.405 38.9687 106.332 39.0656L99.9529 43.1586C100.584 42.0445 101.457 40.6156 102.354 39.1383C104.901 34.9726 106.454 32.357 106.454 31.4124C106.454 30.6616 105.847 29.8866 104.513 29.8866C103.276 29.8866 101.53 30.9523 100.899 32.7203C98.4733 39.4773 92.0211 44.6118 90.1291 44.6118C89.741 44.6118 89.5954 44.2243 89.5954 43.9094C89.5954 43.2313 90.5172 41.9235 91.4874 40.5188C93.1854 38.0969 95.2957 35.0937 95.2957 32.0906C95.2957 31.5335 95.2957 30.0562 93.9616 30.0562C92.1424 30.0562 90.6627 31.0491 90.6627 32.2601C90.6627 32.7203 90.2019 34.3429 89.0618 35.5539C87.752 36.9828 86.2723 38.2422 83.8709 39.8891C83.313 40.2523 82.5853 40.7125 81.5908 41.3664C80.0627 42.3352 78.4618 43.3766 77.4915 43.9821C77.0549 44.2485 76.3029 44.5149 76.0846 44.5149C75.9876 44.5149 75.8906 44.5149 75.8906 44.1516C75.8906 41.9235 80.3538 36.3289 82.4883 33.6164C83.8709 31.8726 83.9922 31.7031 83.9922 31.4609C83.9922 30.7585 83.8467 29.9351 82.6339 29.9351C82.076 29.9351 80.6206 30.6859 79.7716 31.4124C79.3835 30.4679 78.6315 30.0077 77.443 30.0077C74.3624 30.0077 70.0933 32.6476 66.7216 34.9242L56.2429 41.9961C56.2429 41.9961 56.1458 42.0445 56.0973 42.0688C55.8063 42.2383 55.2969 42.5289 55.2969 43.1828C55.2969 43.6672 55.7335 44.0063 56.1216 44.0063C56.3156 44.0063 56.8493 43.7883 56.9463 43.6672C57.1161 43.5461 57.4557 43.3524 57.9408 43.0375C58.8383 42.4805 60.2937 41.6086 61.8946 40.543C60.4877 42.5289 59.3477 44.6844 59.3477 46.1375C59.3477 47.2758 59.5417 48.5837 61.0456 48.5837C64.4901 48.5837 68.6379 45.9922 71.1848 43.9578C70.8938 44.8297 70.6997 45.8469 70.6997 46.7188C70.6997 47.8571 71.3061 48.4868 72.3976 48.4868C73.4164 48.4868 74.6292 47.9782 76.691 46.6461C77.4915 46.1618 80.7904 44.0789 83.1675 42.5774C83.7496 42.2141 84.2833 41.875 84.7684 41.5602C85.3021 41.2211 85.6902 40.9789 85.7387 40.9305C85.8114 40.882 85.9327 40.7852 86.054 40.6883C86.9272 40.0828 87.6064 39.5742 88.1643 39.1383C86.5149 41.1484 84.1863 44.1274 84.1863 46.186C84.1863 47.7844 85.3263 48.3899 86.054 48.3899C87.9218 48.3899 91.3662 47.0094 95.0774 43.9821C94.5195 44.8782 94.0101 45.7016 93.5007 46.5735C90.8568 48.1477 82.076 53.5001 73.5134 60.1361C61.458 69.5088 55.3454 77.1378 55.2969 82.8535C55.2969 85.0332 56.2186 86.1472 58.0136 86.1472C67.1825 86.1472 86.054 69.751 98.5461 46.2102L101.966 44.0305C102.112 44.0305 102.282 43.9821 102.379 43.8852L106.357 41.2695C105.168 43.2797 104.974 44.7813 104.974 45.5805C104.974 47.5907 106.114 48.8016 108.03 48.8016C110.868 48.8016 114.968 46.743 118.436 43.643C118.703 44.2727 119.358 44.6118 120.231 44.6118C121.226 44.6118 122.317 44.1516 123.142 43.6672C123.239 43.6188 123.336 43.5703 123.409 43.5219L123.603 43.425L127.266 41.1242C130.928 38.7992 132.19 36.9344 132.602 36.014C132.626 35.9414 132.675 35.8687 132.699 35.7961C132.82 35.5054 132.869 35.4812 132.917 35.4812C133.136 35.4812 133.184 35.5297 133.184 35.5781C133.184 35.7961 132.893 36.4742 132.675 36.6679C131.365 38.1937 127.387 43.9094 127.387 45.8711C127.387 47.0821 127.63 48.4868 129.594 48.4868C130.54 48.4868 132.505 47.5665 134.834 46.0407C135.949 45.3383 137.09 44.5875 138.181 43.861C138.424 43.7883 138.666 43.6188 138.957 43.425L139.103 43.3281C139.442 43.1102 139.855 42.868 140.291 42.6016C140.946 42.1899 141.698 41.7297 142.402 41.2938C141.359 42.9649 140.874 44.4907 140.874 45.968C140.874 48.0993 143.032 48.6805 144.172 48.6805C146.283 48.6805 149.509 47.518 152.977 45.4836C155.088 44.2485 157.319 42.8438 159.09 41.6813C159.672 41.318 160.303 40.9063 160.958 40.4703C159.551 42.4563 158.411 44.6118 158.411 46.0649C158.411 47.2032 158.605 48.511 160.109 48.511C163.553 48.511 167.701 45.9196 170.248 43.8852C169.957 44.7571 169.763 45.7743 169.763 46.6461C169.763 47.7844 170.369 48.4141 171.461 48.4141C172.48 48.4141 173.692 47.9055 175.754 46.5735C177.016 45.8227 184.487 41.0758 184.802 40.8578C184.826 40.8578 184.875 40.8094 184.923 40.7609L186.573 39.7195C186.33 40.0102 186.087 40.3492 185.821 40.6641C184.074 42.8922 181.915 45.6774 181.066 46.9126L180.824 47.2758L183.468 48.8743L183.686 48.5837C184.753 47.2032 188.513 42.9406 190.381 41.1C190.381 41.3664 190.381 41.657 190.381 41.9719C190.381 44.9993 191.036 48.2446 192.831 48.2446C194.238 48.2446 196.178 46.9852 198.24 45.6774C198.628 45.4352 198.992 45.193 199.356 44.9508C200.641 44.1758 202.121 43.1586 203.819 41.9961L205.517 40.8336L205.856 40.5672C206.366 40.1797 206.366 39.8406 206.366 39.4773C206.366 39.0414 206.051 38.7266 205.614 38.7266C205.468 38.7266 205.323 38.7266 205.056 38.8719C204.886 38.9687 204.571 39.1867 204.134 39.4531C202.121 40.7609 196.76 44.2485 195.378 44.2485C195.135 44.2243 194.141 43.3039 194.092 39.55C203.067 37.5156 207.554 33.2531 207.554 31.3882C207.554 30.7101 207.554 29.7898 205.856 29.7898C202.8 29.7898 197.124 33.1804 193.486 35.7718C193.68 35.5539 193.825 35.3601 193.995 35.1664C194.286 34.8273 194.553 34.4882 194.893 34.0765V34.2945ZM195.232 37.2976C198.531 34.8031 201.539 33.7132 202.097 33.7132C202.145 33.7132 202.194 33.7132 202.194 33.7132C202.194 33.7132 202.194 33.7617 202.194 33.8101C202.194 33.9554 202.048 34.0765 201.83 34.2703C201.757 34.3429 201.684 34.3914 201.66 34.4156C199.647 35.9172 197.27 36.9586 195.208 37.2976H195.232ZM221.187 4.7716C221.364 4.7716 221.453 4.91692 221.453 5.20755C221.453 9.15523 208.622 21.7006 197.537 29.8624C203.843 21.6038 217.936 4.74739 221.187 4.74739V4.7716ZM164.524 45.0477C163.99 45.0477 163.65 44.975 163.65 43.9336C163.65 43.0375 164.475 41.3906 165.785 39.6711C168.162 36.45 171.873 33.0351 174.056 33.0351C174.566 33.0351 174.76 33.3984 174.76 34.4156C174.76 35.8687 172.31 39.2351 170.612 40.9305C168.283 43.2555 165.615 45.0719 164.499 45.0719L164.524 45.0477ZM149.412 37.5883C151.401 35.2632 153.802 33.6164 154.821 33.6164C154.942 33.6164 155.015 33.7132 155.015 33.8828C155.015 35.0211 152.517 37.2008 149.436 37.5883H149.412ZM61.9189 82.1511C61.2882 82.1511 60.8758 81.8847 60.8758 80.5284C60.8758 73.7229 80.4023 57.3509 91.6815 50.4243C85.108 62.0252 69.0745 82.1511 61.9189 82.1511ZM142.717 4.86848C143.057 4.86848 143.081 4.94114 143.081 5.30442C143.081 9.15523 129.497 21.9428 121.662 26.5686C127.678 19.0123 140.073 4.86848 142.717 4.86848ZM110.602 45.4836C109.656 45.4836 109.656 45.0961 109.656 44.7813C109.656 42.2867 112.615 38.0726 113.803 36.8133C115.113 35.3843 117.66 33.2773 119.31 33.2773C120.159 33.2773 120.522 33.7617 120.522 34.9C120.522 39.2351 114.701 45.4594 110.626 45.4594L110.602 45.4836ZM65.5331 45.0477C64.9994 45.0477 64.6598 44.975 64.6598 43.9336C64.6598 43.0375 65.4846 41.3906 66.7944 39.6711C69.1715 36.45 72.8828 33.0351 75.0659 33.0351C75.5752 33.0351 75.7693 33.3984 75.7693 34.4156C75.7693 35.8687 73.3194 39.2351 71.6214 40.9305C69.2928 43.2555 66.6246 45.0719 65.5088 45.0719L65.5331 45.0477Z"
      fill="#1b2420"
    />
    <path
      d="M368.219 27.1021C368.219 27.9256 368.826 28.531 369.65 28.531C371.542 28.531 373.628 26.4967 373.628 24.6318C373.628 23.6873 373.143 23.2029 372.197 23.2029C370.912 23.2029 368.219 25.0435 368.219 27.1021Z"
      fill="#1b2420"
    />
    <path
      d="M392.148 38.8474C391.906 38.8474 391.59 39.017 389.868 40.1552L389.068 40.6881C388.413 41.0998 387.54 41.681 386.351 41.681C386.036 41.681 385.915 41.6084 385.866 41.4146C389.165 37.3701 389.407 35.8927 389.407 34.0036C389.407 33.3255 389.019 32.0903 388.073 31.8481C387.879 31.2427 387.224 30.3466 385.429 30.3466C382.3 30.3466 378.904 32.163 374.999 35.9169C372.622 38.1935 369.93 39.9373 366.631 41.9959C366.364 42.1654 366.194 42.3349 366.048 42.5287C365.66 42.7709 365.248 43.0131 364.836 43.2795C363.938 43.8365 362.75 44.442 362.58 44.4904C362.41 44.4904 362.337 44.4662 362.337 44.4662C362.337 44.4662 362.313 44.4178 362.313 44.224C362.313 44.1029 362.483 43.6912 362.677 43.4248C363.186 42.6256 363.744 41.8264 364.326 41.0029C366.534 37.806 368.814 34.488 368.814 31.7271C368.814 30.4677 368.183 30.2981 367.552 30.2981C366.243 30.2981 364.86 31.5091 364.059 32.6716C362.337 35.0693 360.081 36.7888 358.262 38.1693L357.656 38.6295C357.51 38.7263 357.34 38.8474 357.171 38.9927C356.977 39.0654 356.516 39.356 354.721 40.5185C353.314 41.4388 351.567 42.5771 350.112 43.449C349.045 44.1272 348.39 44.4904 348.196 44.4904C347.614 44.4904 347.589 44.3209 347.589 44.0545C347.589 42.6498 349.967 39.4529 351.398 37.5396C351.786 37.031 352.101 36.5951 352.344 36.256C365.903 27.5614 384.92 11.9402 384.92 4.38387C384.92 2.68855 384.168 1.84088 382.64 1.84088C377.303 1.84088 367.116 11.4074 351.519 31.0974C351.131 30.4192 350.379 30.0802 349.239 30.0802C345.528 30.0802 340.312 33.7614 338.251 35.3599C337.426 35.9654 337.014 36.2318 336.407 36.5951C335.752 36.9826 334.879 37.5154 333.06 38.7505C332.478 39.1623 328.087 42.0201 328.087 42.0443C327.845 42.1654 327.626 42.3349 327.505 42.5529C326.559 43.1342 325.589 43.7154 324.74 44.1998C324.352 44.4178 323.939 44.5631 323.842 44.5631C323.697 44.5631 323.624 44.5631 323.6 44.5631C323.6 44.5631 323.6 44.5147 323.6 44.4662C323.6 43.449 325.613 40.6154 326.705 39.1138C327.02 38.6779 327.263 38.3146 327.432 38.0724C327.845 37.4669 328.281 36.8615 328.694 36.256C330.222 34.1005 331.168 32.7685 331.168 31.9692C331.168 30.2739 329.761 30.2739 329.3 30.2739C328.209 30.2739 327.166 31.3396 325.831 33.0833C322.605 37.3216 314.673 43.4732 313.291 43.4732C313.17 43.4732 312.951 43.4732 312.927 43.4732C312.927 43.1342 313.703 42.2381 314.431 41.3662C315.498 40.1068 316.808 38.5568 317.827 36.6919C318.773 34.924 319.234 33.3497 319.234 31.8966C319.234 30.7583 318.724 30.2013 317.633 30.2013C316.347 30.2013 315.304 31.5333 314.188 32.938C313.776 33.4708 313.339 34.0279 312.903 34.488C311.302 36.2318 310.623 36.7646 309.846 37.4185C309.652 37.588 309.434 37.7576 309.192 37.9513C308.367 38.6779 306.548 39.8888 305.116 40.8334C303.321 41.9959 301.09 43.4006 299.465 44.1998C298.397 44.7326 297.645 44.999 297.257 44.999C296.675 44.999 296.651 44.8295 296.651 44.5631C296.651 42.6256 300.095 38.0966 302.157 35.3841C302.788 34.5607 303.297 33.8825 303.613 33.3982H311.302L314.407 30.5403H305.796C307.178 28.8692 310.792 24.5098 312.224 22.8871L312.806 22.209H308.076L307.954 22.3301C306.402 23.977 304.292 26.5926 301.235 30.5403H297.185L294.08 33.3982H298.98C297.112 35.4326 295.365 36.6435 292.236 38.7748C291.848 39.0412 289.908 40.3248 288.549 41.2209C290.32 37.6849 291.242 33.7614 291.242 29.4989C291.242 24.752 288.574 20.3926 286.245 16.566C284.256 13.3207 282.388 10.2449 282.388 7.45968C282.388 4.6745 285.081 4.38387 286.245 4.38387C287.409 4.38387 288.04 4.77138 288.646 5.13466C289.204 5.47372 289.786 5.83701 290.66 5.83701C292.091 5.83701 293.619 5.13466 293.619 3.12449C293.619 2.17995 293.158 0.000244141 288.768 0.000244141C283.819 0.000244141 278.313 4.38387 278.313 10.2691C278.313 14.3379 280.011 17.3168 281.83 20.4895C283.698 23.7832 285.639 27.1739 285.639 32.0419C285.59 40.7123 281.248 47.4209 272.686 51.9983C263.371 56.9632 252.65 57.5202 248.453 57.5202C225.75 57.5202 225.095 41.0029 225.095 39.1138C225.095 25.3575 236.083 20.4652 245.47 20.4652C254.857 20.4652 259.975 25.1153 259.975 33.2528C259.975 39.9373 254.712 42.9646 249.812 42.9646C246.537 42.9646 244.427 41.0756 244.427 38.1935C244.427 37.2248 245.276 36.5951 246.198 35.9169C247.095 35.263 248.017 34.5607 248.017 33.5193C248.017 31.5817 246.974 30.4677 245.13 30.4677C242.656 30.4677 240.109 33.0349 240.109 37.3458C240.109 42.1654 243.942 45.4108 249.642 45.4108C255.973 45.4108 264.802 40.4701 264.802 32.4052C264.802 20.8528 255.585 16.7597 247.702 16.7597C240.886 16.7597 233.997 19.1574 228.854 23.3473C223.324 27.8278 220.268 33.931 220.268 40.4943C220.268 56.8663 235.889 61.2257 245.13 61.2257C248.914 61.2257 262.183 60.7656 274.117 54.7108C279.72 51.8772 283.989 48.2686 286.876 44.0303C286.997 44.0787 287.118 44.1271 287.215 44.1271C287.337 44.1271 287.628 44.1271 287.797 43.9576C288.38 43.5459 293.255 40.5185 293.328 40.4701C293.643 40.2521 293.837 40.131 294.031 40.0341C294.08 39.9857 294.153 39.9615 294.201 39.9131C292.746 41.9717 291.169 44.5873 291.169 46.5975C291.169 47.978 291.994 48.8014 293.376 48.8014C295.535 48.8014 300.435 46.0889 302.715 44.66C303.613 44.1029 304.389 43.5943 305.262 43.0131C306.135 42.4318 307.081 41.8021 308.318 41.0271C308.512 40.9303 308.634 40.8334 308.731 40.7123C309.434 40.2521 310.04 39.8404 310.429 39.5498C311.302 38.8959 312.03 38.3388 312.733 37.6607C312.709 37.6849 312.345 38.0724 312.175 38.2662C308.828 41.8748 307.202 44.66 307.202 46.7912C307.202 47.8084 307.93 48.5592 308.9 48.5592C311.059 48.5592 317.026 43.9576 321.829 40.0341C320.083 42.6982 318.457 45.3139 318.457 46.8639C318.457 47.8326 319.209 48.5592 320.228 48.5592C321.392 48.5592 323.648 47.2998 324.885 46.549C326.996 45.217 329.227 43.7396 331.022 42.5287L331.92 41.9232C332.453 41.5842 333.011 41.2451 333.521 40.9302C332.259 42.6982 331.168 44.6842 331.168 46.2826C331.168 47.4209 331.362 48.7287 332.866 48.7287C336.019 48.7287 339.706 46.6459 342.447 44.4662C342.083 45.3139 341.986 45.8467 341.986 46.5248C341.986 47.4694 342.18 48.7287 343.927 48.7287C344.994 48.7287 346.619 48.0748 352.053 44.5873C352.441 44.3693 352.974 44.0061 353.581 43.6186C355.157 42.6498 359.038 40.2037 360.882 38.7748C361.464 38.2904 361.973 37.9513 362.313 37.7333C361.973 38.2904 361.27 39.1623 360.858 39.6709C360.591 40.0099 360.324 40.3248 360.13 40.567C357.292 44.2482 357.074 45.5318 357.074 46.5975C357.074 47.3725 357.607 48.535 359.111 48.535C360.397 48.535 366.146 44.8779 366.485 44.6357C367.528 43.9576 368.62 43.1826 369.687 42.4076C370.221 42.0443 370.706 41.681 371.167 41.342C371.167 41.342 371.167 41.342 371.191 41.342C370.293 42.7951 369.59 44.4178 369.59 46.2584C369.59 48.0991 371.215 48.9709 372.816 48.9709C374.005 48.9709 378.274 48.5834 383.731 43.5943C384.12 44.0303 384.823 44.3936 385.769 44.3936C386.594 44.3936 387.661 43.9818 388.801 43.231L392.318 40.9302C392.609 40.7123 392.997 40.349 392.997 39.7435C392.997 39.138 392.561 38.9201 392.173 38.9201L392.148 38.8474ZM337.28 45.0475C336.747 45.0475 336.407 44.9748 336.407 43.9334C336.407 41.3662 343.296 33.0349 346.813 33.0349C347.323 33.0349 347.517 33.3982 347.517 34.4154C347.517 35.8685 345.067 39.2591 343.369 40.9302C341.04 43.2553 338.372 45.0717 337.256 45.0717L337.28 45.0475ZM375.533 45.4834C374.538 45.4834 374.49 45.217 374.49 44.7084C374.49 41.7779 380.02 32.6958 384.896 32.6958C385.429 32.6958 385.551 32.8411 385.575 32.9864C385.017 33.6161 382.907 36.3529 382.858 40.906C380.724 43.7396 377.401 45.4834 375.509 45.4834H375.533ZM380.724 4.94091C380.724 4.94091 380.845 4.94091 380.869 4.94091C380.869 4.94091 380.918 5.062 380.918 5.37685C380.918 8.33156 367.965 22.4754 356.103 30.8794C364.108 20.2957 377.861 4.94091 380.724 4.94091Z"
      fill="#1b2420"
    />
  </svg>
);

const Crown = () => (
  <svg
    width="38"
    height="40"
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.69948 25.696C6.90639 26.5471 6.28567 26.7819 5.81274 27.1341C5.22158 27.6037 4.57131 27.9559 3.89148 28.2494C2.65004 28.807 1.31993 28.5428 0.847008 27.7504C0.108059 26.5471 0.285407 25.021 1.34949 24.1405C2.32491 23.3481 3.47767 22.8492 4.77821 23.1427C5.93097 23.4068 6.4039 24.4634 6.69948 25.696Z"
      fill="#1B2420"
    />
    <path
      d="M35.4891 28.3371C33.8043 28.6306 32.0604 27.1045 31.6761 25.8718C31.5874 25.637 31.5579 25.3436 31.6465 25.0794C32.0899 23.612 34.5432 22.7902 35.7551 23.7294C36.6714 24.4631 37.3217 25.4316 37.5581 26.5762C37.6172 26.9284 37.4399 27.5154 37.1739 27.6621C36.6123 28.0143 35.9324 28.2784 35.5482 28.3371H35.4891Z"
      fill="#1B2420"
    />
    <path
      d="M9.00469 4.00715C10.6895 4.38868 11.6649 6.47244 11.5467 7.76378C11.5467 8.02792 11.4284 8.29205 11.2807 8.49749C10.3052 9.67144 7.70414 9.49535 6.96519 8.14531C6.40359 7.11811 6.19669 5.97351 6.43315 4.82891C6.49227 4.47673 6.90608 4.0365 7.23122 3.9778C7.91105 3.86041 8.62044 3.88976 9.00469 3.9778V4.00715Z"
      fill="#1B2420"
    />
    <path
      d="M32.2669 4.97565C32.1782 5.73872 31.6757 6.38439 31.2619 7.00071C30.8481 7.61703 30.3161 8.204 29.7249 8.67358C29.3407 8.96707 28.6608 9.2899 28.3061 9.14316C27.7741 8.90837 27.1534 8.3214 27.0351 7.79312C26.71 6.44308 28.3357 3.8017 29.6362 3.33213C31.1141 2.7745 32.4738 3.33213 32.2373 4.97565H32.2669Z"
      fill="#1B2420"
    />
    <path
      d="M37.0261 16.539C36.5236 17.1553 35.7551 17.3901 35.1048 17.7129C34.0112 18.2412 32.3559 17.5368 32.1786 16.3629C32.0899 15.7466 32.2968 14.8368 32.7402 14.4259C33.3905 13.8096 34.3363 13.5161 35.1639 13.0758C35.9916 12.6063 36.7305 12.9585 37.3808 13.3693C37.6468 13.5454 37.9719 14.0444 37.9128 14.3085C37.7059 15.0716 37.5581 15.952 37.0261 16.539Z"
      fill="#1B2420"
    />
    <path
      d="M17.104 4.12467C16.838 3.36161 17.0154 2.59854 17.104 1.89418C17.2223 0.690882 18.6706 -0.336321 19.7938 0.103909C20.385 0.338698 21.0352 1.01372 21.183 1.57134C21.3899 2.42245 21.1239 3.39096 21.0944 4.33011C21.0648 5.26927 20.385 5.7095 19.6756 6.06168C19.38 6.20843 18.7888 6.20843 18.5819 6.00299C18.0203 5.44536 17.3701 4.85839 17.104 4.09532V4.12467Z"
      fill="#1B2420"
    />
    <path
      d="M28.6016 30.9494C30.1977 30.8907 31.853 32.8277 31.9712 34.0017C32.0599 34.7354 31.8826 35.293 31.0549 35.6158C28.4243 36.6137 26.9759 34.8528 26.6804 32.6516C26.503 31.3896 27.242 30.9788 28.6016 30.9201V30.9494Z"
      fill="#1B2420"
    />
    <path
      d="M4.80743 17.4488C3.44776 17.2434 2.41323 16.8031 1.40826 16.3629C0.610199 15.9814 -0.128749 14.8074 0.137272 13.9857C0.255504 13.6335 0.639757 13.3107 0.994453 13.1639C2.94528 12.3422 5.98975 13.8976 5.98975 16.2455C5.98975 17.1553 5.48726 17.5956 4.77787 17.4782L4.80743 17.4488Z"
      fill="#1B2420"
    />
    <path
      d="M18.1972 34.2656C17.7242 35.557 17.6356 36.6722 17.5765 37.7581C17.5173 38.6386 18.2267 39.8419 19.0839 39.9886C19.4386 40.0473 19.9411 39.8712 20.2367 39.6364C21.8919 38.3158 21.951 34.9113 19.8524 33.8254C19.0544 33.4145 18.4336 33.62 18.1972 34.295V34.2656Z"
      fill="#1B2420"
    />
    <path
      d="M11.6946 32.4754C11.5764 33.8548 11.1921 34.9114 10.8079 35.9092C10.4828 36.731 9.35955 37.5528 8.50237 37.318C8.14768 37.2299 7.79298 36.8484 7.61563 36.5256C6.64022 34.6472 7.99989 31.5363 10.3645 31.3602C11.2513 31.3015 11.7537 31.7711 11.6651 32.4754H11.6946Z"
      fill="#1B2420"
    />
  </svg>
);

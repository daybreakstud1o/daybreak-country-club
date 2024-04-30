"use client";

import React, { useEffect, useRef, useState } from "react";
import SizeSelector from "./SizeSelector";
import PurchaseButton from "./PurchaseButton";
import { AssetManager } from "../TennisGame/Game/AssetManager/AssetManager";
import { AudioAsset } from "../TennisGame/Game/AssetManager/AudioAsset";
import { SoundEffect } from "../TennisGame/Game/SoundEffect";
import { useTennisHitSound } from "@/hooks/useTennisHitSound";

type Props = {};

const sizes = [
  { name: "s", isAvailable: true },
  { name: "m", isAvailable: true },
  { name: "l", isAvailable: true },
  { name: "xl", isAvailable: true },
];

const ProductInfoPanel = (props: Props) => {
  const [size, setSize] = useState(sizes[0].name);

  const hitSoundEffect = useTennisHitSound();

  const handlePurchaseSubmit = () => {
    console.log("checkout");
  };

  const handleSelectorClicked = () => {
    hitSoundEffect.current?.trigger();
  };

  return (
    <div className="flex flex-col items-center text-center mx-8 font-sans-sm max-w-[42ch]">
      <div className="font-country-sans-sm mb-6">Limited Edition</div>
      <h1 className="font-country-script-display mb-10">
        Country Club Sweatshirt
      </h1>
      <p className="mb-4">
        Whether you’re taking a rest day away from the courts or heading to your
        next big match, our exclusive membership sweatshirt will keep you warm,
        comfortable, and stylish.
      </p>
      <p className="mb-4">
        In addition to the sweatshirt, your membership bundle will also include
        the following: a custom Penn-branded collaborative tennis ball, a
        personalized welcome letter, and your very own membership card.
      </p>
      <div className="font-country-sans-md font-bold mb-14">$160.00</div>

      <div className="w-full">
        <SizeSelector
          sizeInfos={sizes}
          onSelect={setSize}
          onClick={handleSelectorClicked}
          currentSize={size}
        />
        <PurchaseButton isSoldOut={false} onSubmit={handlePurchaseSubmit} />
      </div>
    </div>
  );
};

export default ProductInfoPanel;

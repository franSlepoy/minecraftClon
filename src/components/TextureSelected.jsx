import { useStore } from "../hooks/useStore.js";
import * as images from "../images/images.js";
import { useKeyboard } from "../hooks/useKeyboard.js";
import { useEffect, useState } from "react";

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { ojas, cielo, negro, sombra, chapa } = useKeyboard();

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 1000);

    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [texture]);

  useEffect(() => {
    const options = {
      ojas,
      cielo,
      negro,
      sombra,
      chapa,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [ojas, cielo, negro, sombra, chapa]);

  return (
    <div className="texture-selector">
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
            key={imgKey}
            src={img}
            alt={imgKey}
          />
        );
      })}
    </div>
  );
};

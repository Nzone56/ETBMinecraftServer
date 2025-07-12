"use client";

import Image from "next/image";

type Props = {
  username: string;
  size: number;
  selected?: boolean;
  handleSelectIcon?: () => void;
};

export const SkinViewerFace = ({ username, size, selected, handleSelectIcon }: Props) => {
  const avatarUrl = `https://mc-heads.net/combo/${username}?size=${size}`;

  return (
    <div
      title={username}
      className={`cursor-pointer flex items-center justify-center ${selected ? "border-2 border-primary" : ""}`}
      style={{ minWidth: size, minHeight: size }}
      onClick={handleSelectIcon}
    >
      <Image src={avatarUrl} alt={`Avatar de ${username}`} width={size} height={size} className={`rounded`} />
    </div>
  );
};

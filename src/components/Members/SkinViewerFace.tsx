"use client";

import Image from "next/image";

type Props = {
  uid: string;
  username: string;
  size: number;
  selected?: boolean;
  handleSelectIcon?: () => void;
};

export const SkinViewerFace = ({ uid, username, size, selected, handleSelectIcon }: Props) => {
  const avatarUrl = `https://mc-heads.net/combo/${uid}?size=${size}`;
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

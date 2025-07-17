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
  // const avatarUrl = `https://mc-heads.net/avatar/${username}?size=${size}`;
  const DEFAULT_UUID = "8667ba71-b85a-4004-af54-457a9734eed7";
  const avatarUuid = uid === username ? DEFAULT_UUID : uid;
  const avatarUrl = `https://crafatar.com/avatars/${avatarUuid}`;
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAvatar, subscribeToAvatar } from "@/lib/avatar";

export default function ProfileAvatar({ size = 36 }: { size?: number }) {
  const [avatar, setAvatarState] = useState<string | null>(null);

  useEffect(() => {
    setAvatarState(getAvatar());
    return subscribeToAvatar(() => setAvatarState(getAvatar()));
  }, []);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-line bg-white"
      style={{ width: size, height: size }}
    >
      <Image
        src={avatar || "/images/avatar-default.png"}
        alt="Profile"
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}
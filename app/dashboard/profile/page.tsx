"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Info, LogOut, Camera, Trash2 } from "lucide-react";
import { logout } from "@/lib/session";
import { getAvatar, setAvatar, clearAvatar, MAX_AVATAR_SIZE_BYTES } from "@/lib/avatar";
import ProfileAvatar from "@/components/dashboard/ProfileAvatar";

export default function ProfilePage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [hasAvatar, setHasAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHasAvatar(!!getAvatar());
  }, []);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file later
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setAvatarError("Please choose an image file.");
      return;
    }
    if (file.size > MAX_AVATAR_SIZE_BYTES) {
      setAvatarError("Image must be smaller than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
      setHasAvatar(true);
      setAvatarError("");
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    clearAvatar();
    setHasAvatar(false);
  };

  return (
    <div className="max-w-xl">
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Profile</h1>
        <p className="text-sm text-steel">Manage your account details.</p>
      </div>

      {/* Avatar */}
      <div className="mb-6 flex items-center gap-5 rounded-xl border border-line bg-white p-6">
        <div className="group relative">
          <ProfileAvatar size={72} />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Upload profile photo"
            className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100"
          >
            <Camera size={20} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoSelect}
            className="hidden"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Profile photo</p>
          <p className="mt-0.5 text-xs text-steel">JPG or PNG, up to 2MB.</p>
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-sm font-semibold text-blue hover:underline"
            >
              {hasAvatar ? "Change photo" : "Upload photo"}
            </button>
            {hasAvatar && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="flex items-center gap-1 text-sm font-medium text-steel hover:text-red-500"
              >
                <Trash2 size={14} /> Remove
              </button>
            )}
          </div>
          {avatarError && <p className="mt-1.5 text-xs text-red-500">{avatarError}</p>}
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-line bg-white p-6">
        <p className="mb-4 flex items-start gap-1.5 text-xs text-steel">
          <Info size={13} className="mt-0.5 shrink-0" />
          Frontend demo — changes here aren&apos;t saved to a real account yet.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
        >
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-steel">First name</label>
              <input className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink" placeholder="Alex" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-steel">Last name</label>
              <input className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink" placeholder="Morgan" />
            </div>
          </div>
          <div className="mb-6">
            <label className="mb-1 block text-xs text-steel">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-blue px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-deep"
          >
            Save Changes
          </button>
          {saved && <p className="mt-3 text-xs text-steel">Saved locally — no backend is connected yet.</p>}
        </form>
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="flex items-center gap-2 text-sm font-medium text-steel hover:text-red-500"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}
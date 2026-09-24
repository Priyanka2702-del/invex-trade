"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Info, LogOut, Trash2 } from "lucide-react";
import { logout } from "@/lib/session";
import ProfileAvatar from "@/components/dashboard/ProfileAvatar";
import {
  clearAvatar,
  getAvatar,
  MAX_AVATAR_SIZE_BYTES,
  setAvatar,
} from "@/lib/avatar";

export default function ProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [saved, setSaved] = useState(false);
  const [avatar, setAvatarState] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState("");

  useEffect(() => {
    setAvatarState(getAvatar());
  }, []);

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";

    if (!file) return;

    setAvatarError("");

    if (!file.type.startsWith("image/")) {
      setAvatarError("Please select an image file.");
      return;
    }

    if (file.size > MAX_AVATAR_SIZE_BYTES) {
      setAvatarError("Image must be smaller than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      setAvatar(dataUrl);
      setAvatarState(dataUrl);
    };
    reader.onerror = () => {
      setAvatarError("Could not read this image. Please try another file.");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    clearAvatar();
    setAvatarState(null);
    setAvatarError("");
  };

  return (
    <div className="max-w-xl">
      <div className="mb-5">
        <h1 className="font-display text-xl font-semibold text-ink">Profile</h1>
        <p className="text-sm text-steel">Manage your account details.</p>
      </div>

      <div className="mb-6 rounded-xl border border-line bg-white p-6">
        <p className="mb-5 flex items-start gap-1.5 text-xs text-steel">
          <Info size={13} className="mt-0.5 shrink-0" />
          Frontend demo — changes here aren&apos;t saved to a real account yet.
        </p>

        {/* Profile photo */}
        <div className="mb-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="group relative shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue/30"
            aria-label="Upload profile photo"
          >
            <ProfileAvatar size={72} />
            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 text-white opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
              <Camera size={20} />
            </span>
          </button>

          <div>
            <p className="text-sm font-semibold text-ink">Profile photo</p>
            <p className="mt-0.5 text-xs text-steel">
              Your INVEX logo is shown by default. Upload a photo to replace it.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg bg-blue/10 px-3 py-2 text-xs font-semibold text-blue transition hover:bg-blue/20"
              >
                {avatar ? "Change photo" : "Upload photo"}
              </button>
              {avatar && (
                <button
                  type="button"
                  onClick={handleRemoveAvatar}
                  className="flex items-center gap-1.5 text-xs font-medium text-steel hover:text-ink"
                >
                  <Trash2 size={14} /> Remove
                </button>
              )}
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        {avatarError && (
          <p className="mb-4 text-xs font-medium text-red-600">{avatarError}</p>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
        >
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-steel">First name</label>
              <input
                className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
                placeholder="Alex"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-steel">Last name</label>
              <input
                className="w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink"
                placeholder="Morgan"
              />
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
            className="rounded-lg bg-blue/10 px-6 py-2.5 text-sm font-semibold text-blue transition hover:bg-blue/20"
          >
            Save Changes
          </button>
          {saved && (
            <p className="mt-3 text-xs text-steel">
              Saved locally — no backend is connected yet.
            </p>
          )}
        </form>
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-paper"
      >
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}

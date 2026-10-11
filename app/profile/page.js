"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import { useAuth } from "@/lib/auth-context";
import { LogOut, Camera } from "lucide-react";
import toast from "react-hot-toast";

function ProfileContent() {
  const { user, updateUser, updateProfilePicture, signOut } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [name, setName] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const [picLoading, setPicLoading] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    toast.success("লগআউট সম্পন্ন হয়েছে");
    router.push("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("দয়া করে নাম লিখুন");
      return;
    }
    setLoading(true);
    try {
      await updateUser({ name: name.trim() });
      toast.success("তথ্য আপডেট হয়েছে!");
    } catch (err) {
      toast.error(err.message || "আপডেট ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  const handlePicClick = () => {
    fileInputRef.current?.click();
  };

  const handlePicChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("দয়া করে ছবির ফাইল নির্বাচন করুন");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("ছবি ২ MB-এর বেশি হতে পারবে না");
      return;
    }

    setPicLoading(true);
    try {
      await updateProfilePicture(file);
      toast.success("প্রোফাইল পিকচার আপডেট হয়েছে!");
    } catch (err) {
      toast.error(err.message || "ছবি আপডেট ব্যর্থ হয়েছে");
    } finally {
      setPicLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            আমার প্রোফাইল
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        
  );
}

export default function ProfilePage() {
  return (
    <AuthGuard>
      <ProfileContent />
    </AuthGuard>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
export default function Main() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Button
        onClick={() => {
          router.push("/generateQr");
        }}
      >
        Generar Qr
      </Button>
      <Button
        onClick={() => {
          router.push("readQr");
        }}
      >
        Ver Qr
      </Button>
      <Button
        onClick={() => {
          router.push("listQr");
        }}
      >
        Lista de Qr
      </Button>
    </div>
  );
}

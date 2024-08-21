"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col space-y-4 items-center"> {/* Contenedor para alinear botones en columna y centrar */}
        <Button
          onClick={() => {
            router.push("/generateQr");
          }}
          className="w-full max-w-xs" // Asegura que el botón no sea más ancho de lo necesario
        >
          Generar Qr
        </Button>
        <Button
          onClick={() => {
            router.push("/readQr");
          }}
          className="w-full max-w-xs"
        >
          Ver Qr
        </Button>
        <Button
          onClick={() => {
            router.push("/listQr");
          }}
          className="w-full max-w-xs"
        >
          Lista de Qr
        </Button>
        <Button
          onClick={() => {
            router.push("/cameraCapture");
          }}
          className="w-full max-w-xs"
        >
          Qr desde cámara
        </Button>
        <Button
          onClick={() => {
            router.push("/cameraList");
          }}
          className="w-full max-w-xs"
        >
          Lista de Qr desde cámara
        </Button>
      </div>
    </div>
  );
}

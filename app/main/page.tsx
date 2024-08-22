"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="https://www.nibol.com.bo/wp-content/uploads/2022/06/logo-nibol-negro-ok1.png"
          alt="Nibol"
          className="mr-4"
        />
        <div className="flex text-center">
          <p className="text-lg font-bold">Control Inventario con QR</p>
        </div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col space-y-4 items-center">
          {" "}
          {/* Contenedor para alinear botones en columna y centrar */}
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
    </div>
  );
}

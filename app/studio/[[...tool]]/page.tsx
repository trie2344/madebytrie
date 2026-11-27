
import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const metadata: Metadata = {
  title: "Sanity Studio | madebytrie",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

async function RuntimeMarker() {
  await connection();
  return null;
}

export default function StudioPage() {
  return (
    <>
      <NextStudio config={config} />
      <Suspense fallback={null}>
        <RuntimeMarker />
      </Suspense>
    </>
  );
}

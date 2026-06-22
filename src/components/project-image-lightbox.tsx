'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import {
  ChevronLeft,
  ChevronRight,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react'

function LightboxToolbar({
  ctrl,
  rotation,
  onRotate,
  onResetView,
}: {
  ctrl: ReactZoomPanPinchContentRef
  rotation: number
  onRotate: () => void
  onResetView: () => void
}) {
  return (
    <div
      className="absolute bottom-4 left-1/2 z-[220] flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-black/50 px-2 py-2 shadow-lg backdrop-blur-md sm:bottom-6 sm:gap-3 sm:px-3"
      onClick={(e) => e.stopPropagation()}
      role="toolbar"
      aria-label="Image controls"
    >
      <button
        type="button"
        className="rounded-full border border-white/15 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Zoom out"
        onClick={() => ctrl.zoomOut(0.4, 200)}
      >
        <ZoomOut className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full border border-white/15 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Zoom in"
        onClick={() => ctrl.zoomIn(0.4, 200)}
      >
        <ZoomIn className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full border border-white/15 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Rotate 90 degrees clockwise"
        onClick={onRotate}
      >
        <RotateCw className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="rounded-full border border-white/15 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Reset zoom, pan, and rotation"
        onClick={() => {
          ctrl.resetTransform(200)
          onResetView()
        }}
      >
        <Maximize2 className="h-5 w-5" />
      </button>
      {rotation % 360 !== 0 && (
        <span className="hidden text-xs text-white/60 sm:inline" aria-live="polite">
          {rotation % 360}°
        </span>
      )}
    </div>
  )
}

type LightboxImageViewerProps = {
  imageSrc: string
  imageAlt: string
  imageKey: string | number
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
  showSlideNav?: boolean
}

function LightboxImageViewer({
  imageSrc,
  imageAlt,
  imageKey,
  onClose,
  onPrev,
  onNext,
  showSlideNav = false,
}: LightboxImageViewerProps) {
  const [rotation, setRotation] = useState(0)

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-2 backdrop-blur-xl sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-3 top-3 z-[210] rounded-lg bg-black/50 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-black/70"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close fullscreen"
      >
        <X className="h-6 w-6" />
      </button>

      {showSlideNav && onPrev && (
        <button
          type="button"
          className="absolute left-2 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/55 sm:left-4"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      )}
      {showSlideNav && onNext && (
        <button
          type="button"
          className="absolute right-2 top-1/2 z-[210] -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/55 sm:right-4"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      )}

      <div
        className="relative mx-auto h-[min(92vh,calc(100vh-4rem))] w-full max-w-[min(96vw,1600px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <TransformWrapper
          key={String(imageKey)}
          initialScale={1}
          minScale={0.4}
          maxScale={6}
          centerOnInit
          wheel={{
            step: 0.12,
            activationKeys: [],
          }}
          pinch={{ step: 5 }}
          doubleClick={{ mode: 'reset', step: 0.7 }}
          panning={{ allowLeftClickPan: true, allowMiddleClickPan: true }}
        >
          {(ctrl) => (
            <>
              <TransformComponent
                wrapperClass="!h-full !w-full"
                contentClass="!flex !h-full !w-full !items-center !justify-center"
              >
                <div
                  className="flex items-center justify-center transition-transform duration-200 ease-out"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="relative h-[min(85vh,900px)] w-[min(92vw,1400px)]">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-contain select-none"
                      sizes="96vw"
                      priority
                      draggable={false}
                    />
                  </div>
                </div>
              </TransformComponent>
              <LightboxToolbar
                ctrl={ctrl}
                rotation={rotation}
                onRotate={() => setRotation((r) => (r + 90) % 360)}
                onResetView={() => setRotation(0)}
              />
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  )
}

type ProjectImageLightboxProps = {
  open: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  imageKey: string | number
  onPrev?: () => void
  onNext?: () => void
  showSlideNav?: boolean
}

export function ProjectImageLightbox({
  open,
  onClose,
  imageSrc,
  imageAlt,
  imageKey,
  onPrev,
  onNext,
  showSlideNav = false,
}: ProjectImageLightboxProps) {
  if (!open) return null

  return (
    <LightboxImageViewer
      key={imageKey}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      imageKey={imageKey}
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      showSlideNav={showSlideNav}
    />
  )
}

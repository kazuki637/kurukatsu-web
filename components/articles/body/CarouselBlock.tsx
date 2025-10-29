'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade, EffectFlip, EffectCube, EffectCoverflow, EffectCards } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ArticleBodyCarousel } from '@/types/article'

// SwiperのCSSをインポート
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-cards'

interface CarouselBlockProps {
  block: ArticleBodyCarousel
}

export default function CarouselBlock({ block }: CarouselBlockProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  if (!block.images || block.images.length === 0) {
    return null
  }

  // エフェクト名を取得（配列の場合は最初の要素）
  const effectName = Array.isArray(block.effect) ? block.effect[0] : block.effect

  // エフェクトタイプに応じたモジュールを選択
  const getEffectModules = (effect: string) => {
    const baseModules = [Navigation, Pagination, Autoplay]
    
    switch (effect) {
      case 'fade':
        return [...baseModules, EffectFade]
      case 'flip':
        return [...baseModules, EffectFlip]
      case 'cube':
        return [...baseModules, EffectCube]
      case 'coverflow':
        return [...baseModules, EffectCoverflow]
      case 'cards':
        return [...baseModules, EffectCards]
      default:
        return baseModules
    }
  }

  // エフェクトタイプに応じた設定
  const getEffectConfig = (effect: string) => {
    const baseConfig: any = {}
    
    switch (effect) {
      case 'fade':
        baseConfig.fadeEffect = {
          crossFade: true
        }
        break
      case 'flip':
        baseConfig.flipEffect = {
          slideShadows: true,
          limitRotation: true
        }
        break
      case 'cube':
        baseConfig.cubeEffect = {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
        break
      case 'coverflow':
        baseConfig.coverflowEffect = {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
        break
      case 'cards':
        baseConfig.cardsEffect = {
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true
        }
        break
    }
    
    return baseConfig
  }

  return (
    <div className="mt-10 mb-10">
      <Swiper
        modules={getEffectModules(effectName)}
        effect={effectName || 'slide'}
        {...getEffectConfig(effectName)}
        spaceBetween={0}
        slidesPerView={1}
        navigation={block.navigation}
        pagination={block.pagination ? { clickable: true } : false}
        autoplay={block.delay_speed ? {
          delay: block.delay_speed,
          disableOnInteraction: false,
        } : false}
        loop={block.loop}
        speed={block.animation_speed || 300}
        className="article-carousel"
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {block.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-video">
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


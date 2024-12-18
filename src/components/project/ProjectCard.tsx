"use client"

import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { HashIcon } from 'lucide-react'
import { useState } from 'react'
import { PROJECT_CATEGORIES } from '@/config/constants'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const [showQRCode, setShowQRCode] = useState(false)
  const isMiniProgram = project.category?.includes(PROJECT_CATEGORIES.MINIPROGRAM)
  const isWebsite = project.category?.includes(PROJECT_CATEGORIES.WEBSITE)
  
  // 只对网站类型添加 utm 参数
  const utmLink = isWebsite 
    ? `https://${project.link.href}?utm_source=${utm_source}`
    : project.link.href
  
  let Component = titleAs ?? 'h2'

  const handleClick = () => {
    if (!isMiniProgram) {
      window.open(utmLink, '_blank')
    }
  }

  return (
    <li 
      className='group relative flex flex-col items-start h-full'
      onMouseEnter={() => setShowQRCode(true)}
      onMouseLeave={() => setShowQRCode(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{ cursor: isMiniProgram ? 'default' : 'pointer' }}
    >
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src={project.logo ?? `https://www.google.com/s2/favicons?domain=${project.link.href}&sz=32`}
                alt={`${project.name} favicon`}
                width={36}
                height={36}
                sizes='36px'
                className="rounded-full"
              />
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {/* 显示项目类型 */}
          {project.category && project.category.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center mb-2">
              {project.category.map((cat, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          
          {/* 显示标签 */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 链接处理 */}
        <div className="absolute top-2 right-4 z-20">
          <ArrowUpRight size={16} className="h-4 w-4 group-hover:text-primary" />
        </div>
        
        {/* 小程序二维码 */}
        {isMiniProgram && showQRCode && (
          <div className="absolute -top-2 -right-2 p-4 bg-white rounded-lg shadow-lg dark:bg-zinc-800 z-30 transform translate-x-full">
            <Image
              src={project.link.href}
              alt={`${project.name} QR Code`}
              width={160}
              height={160}
              className="rounded-lg"
            />
            <p className="text-xs text-center mt-2 text-muted-foreground">
              扫码访问小程序
            </p>
          </div>
        )}
      </div>
    </li>
  )
}
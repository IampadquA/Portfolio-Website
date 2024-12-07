import { DesktopProjectPage } from '@/components/DesktopProjectPage'
import { MobileProjectsPage } from '@/components/MobileProjectpage'
import React from 'react'

export const ProjectsPage = ({ isMobile , isDesktop }) => {
  return (
    <>
      { isMobile ? <MobileProjectsPage /> : <DesktopProjectPage isDesktop={isDesktop} />}
    </>
  )
}
